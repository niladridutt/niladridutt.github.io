// 2AFC study runner: builds a balanced, seeded trial list per participant, plays A/B in sync, records answers in
// localStorage and exports them (download, optional POST). Data: window.STUDY (data.js), settings: config.js.
(function () {
  const S = window.STUDY, C = window.STUDY_CONFIG || {};
  // Study groups (2026-11-10): each group page (1/, 2/) sets STUDY_GROUP = {id, baselines, base}; the group gets its own
  // study id (answers, saved progress and the Sheet rows are kept apart) and compares ours with its baselines only.
  const G = window.STUDY_GROUP || null, BASE = (G && G.base) || "";
  if (G) { S.study = S.study + "-g" + G.id; S.baselines = G.baselines.slice(); }
  const url = new URLSearchParams(location.search);
  const $ = (id) => document.getElementById(id);
  const DUR = 81 / 16;
  let state = null, cur = null, t0 = 0, watched = {A: 0, B: 0}, slow = false;

  // ---------------------------------------------------------------- seeded random
  function hash(s) { let h = 1779033703 ^ s.length; for (let i = 0; i < s.length; i++) { h = Math.imul(h ^ s.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); } return h >>> 0; }
  function rng(seed) { return function () { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(a, r) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  const PER = Math.max(1, Math.min(+(url.get("per") || C.perItem || S.baselines.length), S.baselines.length));
  function makeTrials(pid) {
    // Each item PER times, each time against a different baseline. The baseline of item i in round k is
    // baselines[(i + offset + k * step) % B] over a shuffled item order, so every baseline gets an equal share
    // (up to one) and the offset rotates across participants.
    const r = rng(hash(S.study + "/" + pid));
    const B = S.baselines.length, step = Math.max(1, Math.floor(B / PER)), offset = Math.floor(r() * B);
    const items = shuffle(S.items.map((it) => it.id), r);
    let trials = [];
    for (let k = 0; k < PER; k++)
      items.forEach((id, i) => trials.push({item: id, baseline: S.baselines[(i + offset + k * step) % B]}));
    trials = shuffle(trials, r);
    for (let i = 1; i < trials.length; i++) if (trials[i].item === trials[i - 1].item) {   // no item twice in a row
      const j = trials.findIndex((t, k) => k > i && t.item !== trials[i - 1].item && (k + 1 >= trials.length || trials[k + 1].item !== trials[i - 1].item));
      if (j > 0) [trials[i], trials[j]] = [trials[j], trials[i]];
    }
    trials.forEach((t) => (t.oursLeft = r() < 0.5));
    const reps = Math.min(+(url.get("repeats") ?? C.repeats ?? 2), Math.floor(trials.length / 2));
    const half = Math.floor(trials.length / 2);
    shuffle([...Array(half).keys()], r).slice(0, reps).forEach((k) => {
      const pos = half + 1 + Math.floor(r() * (trials.length - half));
      trials.splice(pos, 0, {...trials[k], oursLeft: !trials[k].oursLeft, repeatOf: k});
    });
    return trials.map((t, i) => ({...t, index: i}));
  }

  // ---------------------------------------------------------------- storage
  const KEY = (pid) => "p2v-study:" + S.study + ":" + pid;
  function save() { localStorage.setItem(KEY(state.pid), JSON.stringify(state)); }
  function load(pid) { try { return JSON.parse(localStorage.getItem(KEY(pid))); } catch (e) { return null; } }

  // ---------------------------------------------------------------- checklist
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
  // The full prompt with its sections marked: Style / Elements / Background / Actions / Camera, each in its own colour;
  // "name:" inside Elements and Actions in bold.
  const SECTIONS = [["Style", "style"], ["Elements", "elements"], ["Background and effects", "background"],
                    ["Actions", "actions"], ["Camera", "camsec"]];
  function describe(prompt) {
    const re = new RegExp(`\\s*(${SECTIONS.map((x) => x[0]).join("|")}):\\s*`, "g");
    const parts = prompt.split(re);
    let h = `<p class="lead">${esc(parts[0])}</p>`;
    for (let i = 1; i < parts.length; i += 2) {
      const cls = SECTIONS.find((x) => x[0] === parts[i])[1];
      let body = esc(parts[i + 1] || "");
      if (cls === "elements" || cls === "actions")
        body = body.split("; ").map((x) => x.replace(/^([^:]{1,40}):/, "<b>$1:</b>")).join("; ");
      h += `<p class="sec ${cls}"><span class="tag">${esc(parts[i] === "Background and effects" ? "Background" : parts[i])}</span> ${body}</p>`;
    }
    return h;
  }

  function renderCheck(it) {
    const c = it.check;
    let h = `<h2>${esc(c.title)}</h2>`;
    if (c.tests.length) h += `<div class="chips">${c.tests.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`;
    h += `<div class="shot">${esc(c.shot)}.</div>`;
    h += `<h3>Objects and what each does</h3><div class="objs">${c.objects.map((o) => {
      const still = /^(stays (still|fixed)|stands still)\b/.test(o.action || "");
      return `<div class="obj"><div class="name">${esc(o.name)}</div><div class="look">${esc(o.look)}</div>
        ${o.action ? `<div class="act ${still ? "still" : ""}">${still ? "●" : "➜"} ${esc(o.action)}</div>` : ""}</div>`;
    }).join("")}</div>`;
    if (c.camera) h += c.camera_moves
      ? `<div class="cam moving"><span class="icon">🎥</span><div><div class="label">The camera moves</div><p>${esc(c.camera)}.</p></div></div>`
      : `<div class="cam still"><span class="icon">📷</span><div><div class="label">Camera</div><p>${esc(c.camera)}</p></div></div>`;
    if (c.layers) h += `<h3>In front / behind</h3><p>${esc(c.layers)}</p>`;
    $("check").innerHTML = h;
    $("desc").innerHTML = `<div class="desclabel">Full description</div>` + describe(c.prompt);
    $("check").scrollTop = 0;
    $("key").textContent = c.key;
  }

  // ---------------------------------------------------------------- playback
  const va = $("va"), vb = $("vb");
  function both(f) { [va, vb].forEach(f); }
  function sync() {   // B follows A: same time, same play state
    if (Math.abs(vb.currentTime - va.currentTime) > 0.08) vb.currentTime = va.currentTime;
    if (!va.paused && vb.paused && !vb.ended) vb.play().catch(() => {});
    if (va.paused && !vb.paused) vb.pause();
  }
  function tick() {
    if (!cur) return;
    $("scrub").value = va.currentTime;
    watched.A = Math.max(watched.A, va.currentTime); watched.B = Math.max(watched.B, vb.currentTime);
    if (va.ended || va.currentTime >= DUR - 0.15) watched.A = DUR;
    if (vb.ended || vb.currentTime >= DUR - 0.15) watched.B = DUR;
    sync(); gate();
  }
  va.addEventListener("ended", () => { watched.A = DUR; both((v) => { v.currentTime = 0; v.play(); }); });
  vb.addEventListener("ended", () => { watched.B = DUR; });
  $("play").onclick = () => { if (va.paused) { both((v) => v.play()); $("play").textContent = "Pause"; } else { both((v) => v.pause()); $("play").textContent = "Play"; } };
  $("restart").onclick = () => { both((v) => { v.currentTime = 0; v.play(); }); $("play").textContent = "Pause"; };
  $("slow").onclick = () => { slow = !slow; both((v) => (v.playbackRate = slow ? 0.5 : 1)); $("slow").classList.toggle("on", slow); };
  $("scrub").oninput = (e) => { both((v) => { v.pause(); v.currentTime = +e.target.value; }); $("play").textContent = "Play"; };

  function gate() {
    const seen = !C.requireFullView || (watched.A >= DUR - 0.2 && watched.B >= DUR - 0.2);
    document.querySelectorAll(".ans").forEach((b) => (b.disabled = !seen));
    $("watchnote").classList.toggle("hidden", seen);
    const a = state.answers[cur.index] || {};
    $("next").disabled = !(seen && a.q1 && a.q2 && a.q3);
  }

  // ---------------------------------------------------------------- trials
  function show(i) {
    if (i >= state.trials.length) return finish();
    cur = state.trials[i];
    const it = S.items.find((x) => x.id === cur.item);
    const ours = it.videos[it.codes[S.ours]], base = it.videos[it.codes[cur.baseline]];
    const [A, B] = (cur.oursLeft ? [ours, base] : [base, ours]).map((v) => BASE + v);
    va.src = A; vb.src = B;
    both((v) => { v.loop = false; v.playbackRate = slow ? 0.5 : 1; v.load(); v.play().catch(() => {}); });
    $("play").textContent = "Pause";
    watched = {A: 0, B: 0}; t0 = performance.now();
    renderCheck(it);
    document.querySelectorAll(".ans").forEach((b) => b.classList.toggle("sel", (state.answers[i] || {})[b.dataset.q] === b.dataset.v));
    $("progress").textContent = `Comparison ${i + 1} of ${state.trials.length}`;
    $("progfill").style.width = `${(100 * i) / state.trials.length}%`;
    gate();
  }
  document.querySelectorAll(".ans").forEach((b) => (b.onclick = () => {
    const a = (state.answers[cur.index] = state.answers[cur.index] || {});
    a[b.dataset.q] = b.dataset.v;
    document.querySelectorAll(`.ans[data-q="${b.dataset.q}"]`).forEach((x) => x.classList.toggle("sel", x === b));
    save(); gate();
  }));
  // Automatic recording (config.js endpoint, e.g. the Google Apps Script web app in user_study/apps_script.gs).
  // text/plain + no-cors: a "simple" request that Apps Script accepts from any static host without CORS setup; the
  // response is opaque, so a failed send is retried at the end and the download stays available.
  function post(msg) {
    if (!C.endpoint) return Promise.resolve(false);
    return fetch(C.endpoint, {method: "POST", mode: "no-cors", headers: {"Content-Type": "text/plain;charset=utf-8"},
      body: JSON.stringify({study: S.study, participant: state.pid, user_agent: navigator.userAgent, ...msg})})
      .then(() => true).catch(() => false);
  }
  $("next").onclick = () => {
    const a = state.answers[cur.index];
    const oursSide = cur.oursLeft ? "A" : "B";
    Object.assign(a, {item: cur.item, baseline: cur.baseline, ours_side: oursSide, q1_ours: a.q1 === oursSide,
      q2_ours: a.q2 === oursSide, q3_ours: a.q3 === oursSide, seconds: Math.round((performance.now() - t0) / 100) / 10,
      repeat_of: cur.repeatOf ?? null, at: new Date().toISOString()});
    state.pos = cur.index + 1; save();
    post({type: "trial", trial: cur.index, ...a}).then((ok) => { if (!ok) { state.unsent = (state.unsent || []).concat([cur.index]); save(); } });
    show(state.pos);
  };

  // ---------------------------------------------------------------- export
  function rows() {
    return state.trials.map((t) => ({participant: state.pid, trial: t.index, item: t.item, baseline: t.baseline,
      ours_side: t.oursLeft ? "A" : "B", repeat_of: t.repeatOf ?? "", ...(state.answers[t.index] || {})}));
  }
  function download(name, text, type) {
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], {type})); a.download = name; a.click();
  }
  function payload() { return {study: S.study, participant: state.pid, started: state.started, finished: new Date().toISOString(), userAgent: navigator.userAgent, answers: rows()}; }
  $("dljson").onclick = () => download(`p2v-study-${state.pid}.json`, JSON.stringify(payload(), null, 1), "application/json");
  $("dlcsv").onclick = () => {
    const cols = ["participant", "trial", "item", "baseline", "ours_side", "q1", "q2", "q3", "q1_ours", "q2_ours", "q3_ours", "seconds", "repeat_of", "at"];
    download(`p2v-study-${state.pid}.csv`, [cols.join(",")].concat(rows().map((r) => cols.map((c) => JSON.stringify(r[c] ?? "")).join(","))).join("\n"), "text/csv");
  };
  function finish() {
    cur = null; both((v) => v.pause());
    $("trial").classList.add("hidden"); $("done").classList.remove("hidden");
    if (C.endpoint && !state.sent) {
      const retry = (state.unsent || []).map((i) => post({type: "trial", trial: i, ...state.answers[i]}));
      Promise.all(retry.concat([post({type: "session", ...payload()})])).then((oks) => {
        if (oks.every(Boolean)) {
          state.sent = true; state.unsent = []; save();
          $("sent").textContent = "Your answers have been recorded. Thank you!";
        } else {
          $("sent").textContent = "We could not send your answers automatically; please download them below.";
        }
      });
    }
  }

  // ---------------------------------------------------------------- start
  const n0 = S.items.length * PER + Math.min(+(url.get("repeats") ?? C.repeats ?? 2), Math.floor(S.items.length * PER / 2));
  $("count").textContent = n0;
  $("est").textContent = Math.max(5, Math.round((n0 * 40) / 60 / 5) * 5);
  if (url.get("pid")) $("pid").value = url.get("pid");
  if (S.example) {
    $("exprompt").textContent = S.example.prompt; $("exkey").textContent = S.example.key;
    $("exanswer").textContent = S.example.answer; $("exa").src = BASE + S.example.a; $("exb").src = BASE + S.example.b;
  }
  $("start").onclick = () => {
    const pid = $("pid").value.trim().replace(/[^\w.-]/g, "_");
    if (!pid) { $("pid").focus(); return; }
    state = load(pid) || {pid, started: new Date().toISOString(), trials: makeTrials(pid), answers: {}, pos: 0};
    save();
    $("exa").pause(); $("exb").pause();
    $("intro").classList.add("hidden"); $("trial").classList.remove("hidden");
    setInterval(tick, 100); show(state.pos || 0);
  };
})();
