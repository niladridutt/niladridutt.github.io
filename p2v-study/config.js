// Deployment settings (kept when build.py is rerun).
window.STUDY_CONFIG = {
  // How many times each item is shown, each time against a different baseline of the page's group. 2 = every item
  // against both baselines of the group (15 items x 2 = 30 comparisons). URL ?per= overrides.
  perItem: 2,
  // Repeated comparisons with the sides swapped, to measure consistency (0: none, so every participant sees exactly
  // items x 4 comparisons). URL ?repeats= overrides.
  repeats: 0,
  // Each video must play to its end once before answering.
  requireFullView: true,
  // Automatic recording: the Google Apps Script web-app URL (user_study/apps_script.gs, README "Recording").
  // Each answer is sent when the participant presses Next; the full session at the end. Empty = download only.
  endpoint: "https://script.google.com/macros/s/AKfycbyrsZq1XAwKPfDtM5VRE8uMUeKO37ufC-L6QXobDQfczQYi7I1kWktZhxtVPPtytGvw/exec",
};
