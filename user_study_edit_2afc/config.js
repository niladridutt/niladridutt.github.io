// Deployment settings (kept when build_edit.py is rerun).
window.STUDY_CONFIG = {
  // Each item against both baselines (15 items x 2 = 30 comparisons). URL ?per= overrides.
  perItem: 2,
  // Repeated comparisons with the sides swapped (0: none). URL ?repeats= overrides.
  repeats: 0,
  // Each video must play to its end once before answering.
  requireFullView: true,
  // Automatic recording: the same Google Apps Script web app as the generation study (user_study/apps_script.gs);
  // rows carry their own study id (p2v-edit-2afc-v2). Empty = download only.
  endpoint: "https://script.google.com/macros/s/AKfycbyrsZq1XAwKPfDtM5VRE8uMUeKO37ufC-L6QXobDQfczQYi7I1kWktZhxtVPPtytGvw/exec",
};
