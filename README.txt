Manas web — upload EVERY file in this folder as-is to the repository root (GitHub Pages serves them). The Android app reads libraries.json and lib-*.json from here, so the site must carry all of them.
index.html        the app; first launch asks "What would you like to study?" (libraries.json)
library.html      opens straight into Srila Prabhupada's Library (lib-prabhupada.json)
medicine.html     opens straight into Medicine — Kenyan MBChB (lib-mbchb.json)
gita-week.html    the Gita Week map (preload.json)
cpa.html          opens straight into the CPA CA31 library (lib-cpa31.json)
maharaj.html      opens straight into HH Bhakti Dhira Damodara Swami's library (lib-bdds.json)
rs-transcript-NN.html  class transcripts for the Rupa Siksa series (linked from the maps)
Manas.apk         the Android app; version.json tells installed apps a newer one exists
manas.html        the plain app, no libraries
stickers.js       cartoon picture library (OpenMoji)
To add a new library: add its lib-<id>.json here and an entry in libraries.json.
sw.js, manifest.webmanifest, icon-*.png   let phones "install" the web app (works offline)
version.json                              tells installed apps a newer version exists (bump it on every release)
Manas.apk                                 latest Android app, linked from the in-app "Download" update banner

UPLOAD (publication): drag EVERY file in this folder onto github.com/md1secretary108/manas/upload/main and commit. On GitHub, delete the stale library-preload.json (it is not in this folder). Then check https://md1secretary108.github.io/manas/version.json shows the new version.
