window.STUDY = {
"study": "p2v-2afc-v1",
"example": {
"prompt": "Steam rising from a cup of hot coffee curls into the shape of a heart that hangs for a moment and fades. Style: cinematic live action, photoreal, natural light, shallow depth of field; cinematic VFX, high detail. Elements: coffee cup: white cup of black coffee; steam: steam curling into a heart shape. Background and effects: a caf\u00e9 table by a window. Actions: coffee cup: stays still; steam: forms a heart and fades. Camera: static macro.",
"key": "The steam rising from the cup gathers into a clear heart shape.",
"answer": "For question 3, B is the better choice: its steam clearly forms a heart, while in A the steam stays mostly plain and the heart is faint. For question 1 you would also weigh the rest of the description (the cup on the table, the window behind), and for question 2 only how natural each video looks, whichever one followed the instruction.",
"a": "example/a.mp4",
"b": "example/b.mp4"
},
"ours": "ours",
"baselines": [
"agent_lcv",
"vace21_flow",
"vace21_layout",
"box_only"
],
"items": [
{
"id": "jumping-jacks",
"videos": {
"12834adbe4": "videos/jumping-jacks/12834adbe4.mp4",
"5b2db7afd9": "videos/jumping-jacks/5b2db7afd9.mp4",
"37d227ae1d": "videos/jumping-jacks/37d227ae1d.mp4",
"2831442b3c": "videos/jumping-jacks/2831442b3c.mp4",
"26f24dbdc6": "videos/jumping-jacks/26f24dbdc6.mp4"
},
"codes": {
"ours": "12834adbe4",
"agent_lcv": "5b2db7afd9",
"vace21_flow": "37d227ae1d",
"vace21_layout": "2831442b3c",
"box_only": "26f24dbdc6"
},
"pending": [],
"check": {
"title": "Limbs as parts",
"shot": "A man in a gym does three jumping jacks facing the camera: his arms swing up over his head and his legs spread, then both come back together",
"camera": "locked, eye level, full body",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; gym, bright light",
"setting": "a gym with mirrors",
"objects": [
{
"name": "man",
"look": "man in a grey t-shirt and black shorts",
"action": "does three jumping jacks"
},
{
"name": "kettlebell",
"look": "black kettlebell on the floor",
"action": "stays still"
},
{
"name": "water bottle",
"look": "blue water bottle",
"action": "stays still"
}
],
"key": "He does exactly three jumping jacks facing the camera: each time his arms swing up over his head while his legs spread apart, then both come back together.",
"tests": [
"moving parts"
],
"layers": "",
"prompt": "A man in a gym does three jumping jacks facing the camera: his arms swing up over his head and his legs spread, then both come back together. Style: cinematic live action, photoreal, natural light, shallow depth of field; gym, bright light. Elements: man: man in a grey t-shirt and black shorts; kettlebell: black kettlebell on the floor; water bottle: blue water bottle. Background and effects: a gym with mirrors. Actions: man: does three jumping jacks; kettlebell: stays still; water bottle: stays still. Camera: locked, eye level, full body."
}
},
{
"id": "shell-game",
"videos": {
"ba2ee0d598": "videos/shell-game/ba2ee0d598.mp4",
"587ed992eb": "videos/shell-game/587ed992eb.mp4",
"ad0e14a4d9": "videos/shell-game/ad0e14a4d9.mp4",
"776ce655e3": "videos/shell-game/776ce655e3.mp4",
"61fb150c45": "videos/shell-game/61fb150c45.mp4"
},
"codes": {
"ours": "ba2ee0d598",
"agent_lcv": "587ed992eb",
"vace21_flow": "ad0e14a4d9",
"vace21_layout": "776ce655e3",
"box_only": "61fb150c45"
},
"pending": [],
"check": {
"title": "The ball moves while hidden",
"shot": "A street performer's shell game: a white ball is placed under the middle of three cups, the cups are swapped twice, and the right-hand cup is lifted to show the ball",
"camera": "locked, slightly above the table",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; street table, afternoon sun, close up",
"setting": "a green felt folding table on a street",
"objects": [
{
"name": "white ball",
"look": "small white foam ball",
"action": "hidden under a cup and carried with it"
},
{
"name": "red cup",
"look": "red plastic cup upside down",
"action": "lowered over the ball, swapped twice, lifted at the end"
},
{
"name": "green cup",
"look": "green plastic cup upside down",
"action": "swaps places with the red cup"
},
{
"name": "blue cup",
"look": "blue plastic cup upside down",
"action": "swaps places with the red cup"
}
],
"key": "The white ball goes under the red cup and stays hidden under it while the cups are swapped. At the end the red cup is on the right, and the ball is under it when it is lifted. The green and blue cups never hold the ball.",
"tests": [
"occlusion",
"hidden object",
"direction"
],
"layers": "Front to back: the red cup, the green cup, the blue cup, the white ball.",
"prompt": "A street performer's shell game: a white ball is placed under the middle of three cups, the cups are swapped twice, and the right-hand cup is lifted to show the ball. Style: cinematic live action, photoreal, natural light, shallow depth of field; street table, afternoon sun, close up. Elements: white ball: small white foam ball; red cup: red plastic cup upside down; green cup: green plastic cup upside down; blue cup: blue plastic cup upside down. Background and effects: a green felt folding table on a street. Actions: white ball: hidden under a cup and carried with it; red cup: lowered over the ball, swapped twice, lifted at the end; green cup: swaps places with the red cup; blue cup: swaps places with the red cup. Camera: locked, slightly above the table."
}
},
{
"id": "drone-show--star",
"videos": {
"7053fb6bc2": "videos/drone-show--star/7053fb6bc2.mp4",
"c648ee716c": "videos/drone-show--star/c648ee716c.mp4",
"686c419642": "videos/drone-show--star/686c419642.mp4",
"4ae7ed8fa1": "videos/drone-show--star/4ae7ed8fa1.mp4",
"a52ec626ac": "videos/drone-show--star/a52ec626ac.mp4"
},
"codes": {
"ours": "7053fb6bc2",
"agent_lcv": "c648ee716c",
"vace21_flow": "686c419642",
"vace21_layout": "4ae7ed8fa1",
"box_only": "a52ec626ac"
},
"pending": [],
"check": {
"title": "Drone light show forms a shape",
"shot": "A drone light show over a lake at night: glowing drones rise from the water's edge and form a shape in the sky",
"camera": "static, wide shot from the shore",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; black night sky, glowing points, reflections on the lake",
"setting": "a dark lake with a city shoreline",
"objects": [
{
"name": "swarm of light drones",
"look": "dozens of small glowing white drones",
"action": "rise, gather, then form a shape and hold it"
}
],
"key": "The drones rise from the lake and form a five-pointed star in the sky, then hold it.",
"tests": [
"shape",
"count"
],
"layers": "",
"prompt": "A drone light show over a lake at night: glowing drones rise from the water's edge and form a shape in the sky. Style: cinematic live action, photoreal, natural light, shallow depth of field; black night sky, glowing points, reflections on the lake. Elements: swarm of light drones: dozens of small glowing white drones. Background and effects: a dark lake with a city shoreline. Actions: swarm of light drones: rise, gather, then form a shape and hold it. Camera: static, wide shot from the shore"
}
},
{
"id": "lamp-nudge",
"videos": {
"c70b5407aa": "videos/lamp-nudge/c70b5407aa.mp4",
"0338856cde": "videos/lamp-nudge/0338856cde.mp4",
"f559affdc3": "videos/lamp-nudge/f559affdc3.mp4",
"47da8ca02a": "videos/lamp-nudge/47da8ca02a.mp4",
"0308d39230": "videos/lamp-nudge/0308d39230.mp4"
},
"codes": {
"ours": "c70b5407aa",
"agent_lcv": "0338856cde",
"vace21_flow": "f559affdc3",
"vace21_layout": "47da8ca02a",
"box_only": "0308d39230"
},
"pending": [],
"check": {
"title": "Two-joint lamp nudges a ball",
"shot": "On a wooden desk, an anglepoise desk lamp leans down, nudges a small red ball with its head, and the ball rolls away to the right while the lamp straightens up and watches it go",
"camera": "locked-off side view",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; warm interior light, product-film look",
"setting": "a wooden desk against a pale wall",
"objects": [
{
"name": "desk lamp",
"look": "a black metal anglepoise desk lamp with a round base, two arms and a cone shade",
"action": "bends its arms to lean down, nudges the ball with its shade, then straightens up"
},
{
"name": "red ball",
"look": "a small glossy red rubber ball",
"action": "rolls away to the right after the nudge"
}
],
"key": "The desk lamp bends down, its shade touches the red ball, the ball rolls away to the right, and the lamp straightens back up.",
"tests": [
"moving parts",
"contact"
],
"layers": "",
"prompt": "On a wooden desk, an anglepoise desk lamp leans down, nudges a small red ball with its head, and the ball rolls away to the right while the lamp straightens up and watches it go. Style: cinematic live action, photoreal, natural light, shallow depth of field; warm interior light, product-film look. Elements: desk lamp: a black metal anglepoise desk lamp with a round base, two arms and a cone shade; red ball: a small glossy red rubber ball. Background and effects: a wooden desk against a pale wall. Actions: desk lamp: bends its arms to lean down, nudges the ball with its shade, then straightens up; red ball: rolls away to the right after the nudge. Camera: locked-off side view."
}
},
{
"id": "meerkats",
"videos": {
"dfdc0294ba": "videos/meerkats/dfdc0294ba.mp4",
"47dad555cd": "videos/meerkats/47dad555cd.mp4",
"eb68b24e15": "videos/meerkats/eb68b24e15.mp4",
"36ce6733d1": "videos/meerkats/36ce6733d1.mp4",
"32df59a9ff": "videos/meerkats/32df59a9ff.mp4"
},
"codes": {
"ours": "dfdc0294ba",
"agent_lcv": "47dad555cd",
"vace21_flow": "eb68b24e15",
"vace21_layout": "36ce6733d1",
"box_only": "32df59a9ff"
},
"pending": [],
"check": {
"title": "Staggered head turns",
"shot": "Three meerkats stand upright on a sandy mound; one after another they turn to look left, then right, then all three face the camera. A meerkat pup sits at the foot of the mound watching the hawk, a scorpion scuttles left to right across the sand in front, and an acacia tree and a termite mound stand behind",
"camera": "locked, telephoto",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; Kalahari desert, golden light",
"setting": "a sandy desert mound",
"objects": [
{
"name": "left meerkat",
"look": "meerkat standing upright",
"action": "turns left, right, then to the camera"
},
{
"name": "middle meerkat",
"look": "meerkat standing upright",
"action": "turns left, right, then to the camera"
},
{
"name": "right meerkat",
"look": "meerkat standing upright",
"action": "turns left, right, then to the camera"
},
{
"name": "hawk",
"look": "brown hawk",
"action": "flies left to right high above"
},
{
"name": "meerkat pup",
"look": "small meerkat pup",
"action": "watches the hawk"
},
{
"name": "scorpion",
"look": "sand-coloured scorpion",
"action": "scuttles left to right in front"
},
{
"name": "acacia tree",
"look": "flat-topped acacia tree",
"action": "stays still"
},
{
"name": "termite mound",
"look": "tall red-brown termite mound",
"action": "stays still"
}
],
"key": "The three meerkats turn one after another, the left one first: each looks to the left, then to the right, then at the camera. The pup's head follows the hawk, and the scorpion scuttles left to right in front of everything.",
"tests": [
"facing",
"order of events"
],
"layers": "Front to back: the meerkat pup, the scorpion.",
"prompt": "Three meerkats stand upright on a sandy mound; one after another they turn to look left, then right, then all three face the camera. A meerkat pup sits at the foot of the mound watching the hawk, a scorpion scuttles left to right across the sand in front, and an acacia tree and a termite mound stand behind. Style: cinematic live action, photoreal, natural light, shallow depth of field; Kalahari desert, golden light. Elements: left meerkat: meerkat standing upright; middle meerkat: meerkat standing upright; right meerkat: meerkat standing upright; hawk: brown hawk; meerkat pup: small meerkat pup; scorpion: sand-coloured scorpion; acacia tree: flat-topped acacia tree; termite mound: tall red-brown termite mound. Background and effects: a sandy desert mound. Actions: left meerkat: turns left, right, then to the camera; middle meerkat: turns left, right, then to the camera; right meerkat: turns left, right, then to the camera; hawk: flies left to right high above; meerkat pup: watches the hawk; scorpion: scuttles left to right in front; acacia tree: stays still; termite mound: stays still. Camera: locked, telephoto."
}
},
{
"id": "skater-spin--arrow",
"videos": {
"c88040cdf5": "videos/skater-spin--arrow/c88040cdf5.mp4",
"e1bc3dc5ce": "videos/skater-spin--arrow/e1bc3dc5ce.mp4",
"74fe2d264e": "videos/skater-spin--arrow/74fe2d264e.mp4",
"6ad16b14df": "videos/skater-spin--arrow/6ad16b14df.mp4",
"173524351f": "videos/skater-spin--arrow/173524351f.mp4"
},
"codes": {
"ours": "c88040cdf5",
"agent_lcv": "e1bc3dc5ce",
"vace21_flow": "74fe2d264e",
"vace21_layout": "6ad16b14df",
"box_only": "173524351f"
},
"pending": [],
"check": {
"title": "Skater spins and stops facing us",
"shot": "A figure skater glides onto the centre of an ice rink and performs a fast upright spin, finishing facing the camera",
"camera": "static, eye level, full-body wide shot",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; cool arena light, white ice, deep blue boards, sparkling costume",
"setting": "an empty ice arena with soft spotlights and faint ice spray",
"objects": [
{
"name": "figure skater",
"look": "photoreal female skater in a dark blue sequined dress, hair in a bun, white skates",
"action": "glides in from screen left, then spins upright in place, accelerating then slowing, and stops facing the camera"
}
],
"key": "She glides in from the left, spins on the spot for three full turns, and stops facing the camera.",
"tests": [
"facing",
"spin"
],
"layers": "",
"prompt": "A figure skater glides onto the centre of an ice rink and performs a fast upright spin, finishing facing the camera. Style: cinematic live action, photoreal, natural light, shallow depth of field; cool arena light, white ice, deep blue boards, sparkling costume. Elements: figure skater: photoreal female skater in a dark blue sequined dress, hair in a bun, white skates. Background and effects: an empty ice arena with soft spotlights and faint ice spray. Actions: figure skater: glides in from screen left, then spins upright in place, accelerating then slowing, and stops facing the camera. Camera: static, eye level, full-body wide shot"
}
},
{
"id": "vase-freeze-rewind--rewind",
"videos": {
"f953bea7ee": "videos/vase-freeze-rewind--rewind/f953bea7ee.mp4",
"8227ff476e": "videos/vase-freeze-rewind--rewind/8227ff476e.mp4",
"22d1cf349f": "videos/vase-freeze-rewind--rewind/22d1cf349f.mp4",
"ffc524d1d9": "videos/vase-freeze-rewind--rewind/ffc524d1d9.mp4",
"c9b652ad68": "videos/vase-freeze-rewind--rewind/c9b652ad68.mp4"
},
"codes": {
"ours": "f953bea7ee",
"agent_lcv": "8227ff476e",
"vace21_flow": "22d1cf349f",
"vace21_layout": "ffc524d1d9",
"box_only": "c9b652ad68"
},
"pending": [],
"check": {
"title": "Shatter, freeze, orbit, rewind",
"shot": "A porcelain vase falls from a pedestal and shatters; the moment freezes, the camera swings round the hanging shards, and then time runs backward until the vase stands whole again",
"camera": "The camera circles around the shards while time is frozen",
"camera_moves": true,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; gallery, white walls, spotlight, high-speed photography",
"setting": "a white art gallery",
"objects": [
{
"name": "vase",
"look": "blue and white porcelain vase",
"action": "falls and shatters"
},
{
"name": "pedestal",
"look": "white marble pedestal",
"action": "stays still"
}
],
"key": "The vase falls and shatters; time freezes with the shards in the air while the camera circles around them; then time runs backwards: the shards fly back up and join into the whole vase on the pedestal.",
"tests": [
"time",
"freeze",
"physics",
"camera"
],
"layers": "",
"prompt": "A porcelain vase falls from a pedestal and shatters; the moment freezes, the camera swings round the hanging shards, and then time runs backward until the vase stands whole again. Style: cinematic live action, photoreal, natural light, shallow depth of field; gallery, white walls, spotlight, high-speed photography. Elements: vase: blue and white porcelain vase; pedestal: white marble pedestal. Background and effects: a white art gallery. Actions: vase: falls and shatters; pedestal: stays still. Camera: the camera circles during the frozen moment."
}
},
{
"id": "corkscrew--down-ccw",
"videos": {
"9d50ca3db1": "videos/corkscrew--down-ccw/9d50ca3db1.mp4",
"6d362f3fec": "videos/corkscrew--down-ccw/6d362f3fec.mp4",
"4b9f7a906f": "videos/corkscrew--down-ccw/4b9f7a906f.mp4",
"189bb39d63": "videos/corkscrew--down-ccw/189bb39d63.mp4",
"b7f304b218": "videos/corkscrew--down-ccw/b7f304b218.mp4"
},
"codes": {
"ours": "9d50ca3db1",
"agent_lcv": "6d362f3fec",
"vace21_flow": "4b9f7a906f",
"vace21_layout": "189bb39d63",
"box_only": "b7f304b218"
},
"pending": [],
"check": {
"title": "Corkscrew around a lighthouse",
"shot": "A tall lighthouse stands on a rocky point above the sea",
"camera": "The camera spirals around the lighthouse, coming down from high to low",
"camera_moves": true,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; dramatic late light, white and red tower, dark rocks, blue sea",
"setting": "a rocky point by the sea",
"objects": [
{
"name": "lighthouse",
"look": "tall white lighthouse with a red band",
"action": "stands still, its lamp turning"
},
{
"name": "keeper's cottage",
"look": "small white keeper's cottage",
"action": "stays fixed in place"
},
{
"name": "dark rocks",
"look": "dark wet rocks",
"action": "stays fixed in place"
},
{
"name": "fishing boat",
"look": "small red fishing boat",
"action": "stays fixed in place"
}
],
"key": "The camera starts high, looking down at the top of the lighthouse, circles halfway around the tower while coming down, and ends low near the rocks, looking up at the tower.",
"tests": [
"camera",
"spin"
],
"layers": "",
"prompt": "A tall lighthouse stands on a rocky point above the sea. Style: cinematic live action, photoreal, natural light, shallow depth of field; dramatic late light, white and red tower, dark rocks, blue sea. Elements: lighthouse: tall white lighthouse with a red band; keeper's cottage: small white keeper's cottage; dark rocks: dark wet rocks; fishing boat: small red fishing boat. Background and effects: a rocky point by the sea. Actions: lighthouse: stands still, its lamp turning; keeper's cottage: stays fixed in place; dark rocks: stays fixed in place; fishing boat: stays fixed in place. Camera: the camera spirals around the lighthouse while changing height"
}
},
{
"id": "ice-or-stones--ice",
"videos": {
"502a0701be": "videos/ice-or-stones--ice/502a0701be.mp4",
"3f204a4085": "videos/ice-or-stones--ice/3f204a4085.mp4",
"6ea5f90269": "videos/ice-or-stones--ice/6ea5f90269.mp4",
"68637822db": "videos/ice-or-stones--ice/68637822db.mp4",
"c05e182f18": "videos/ice-or-stones--ice/c05e182f18.mp4"
},
"codes": {
"ours": "502a0701be",
"agent_lcv": "3f204a4085",
"vace21_flow": "6ea5f90269",
"vace21_layout": "68637822db",
"box_only": "c05e182f18"
},
"pending": [],
"check": {
"title": "Ice floats",
"shot": "Three ice cubes are dropped one after another into a tall glass of water",
"camera": "static macro shot",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; macro drink photography, backlit, bubbles, black background",
"setting": "a black studio",
"objects": [
{
"name": "ice cubes",
"look": "clear ice cubes",
"action": "plunge and bob back up"
},
{
"name": "glass of water",
"look": "tall clear drinking glass full of water",
"action": "stays still"
}
],
"key": "Three ice cubes drop one after another into the glass, plunge down, bob back up and float at the top.",
"tests": [
"physics",
"moving parts",
"material"
],
"layers": "",
"prompt": "Three ice cubes are dropped one after another into a tall glass of water. Style: cinematic live action, photoreal, natural light, shallow depth of field; macro drink photography, backlit, bubbles, black background. Elements: ice cubes: clear ice cubes; glass of water: tall clear drinking glass full of water. Background and effects: a black studio. Actions: ice cubes: plunge and bob back up; glass of water: stays still. Camera: static macro shot."
}
},
{
"id": "pool-rack",
"videos": {
"7976b039bf": "videos/pool-rack/7976b039bf.mp4",
"2add70a8cc": "videos/pool-rack/2add70a8cc.mp4",
"3ebd6fc7fa": "videos/pool-rack/3ebd6fc7fa.mp4",
"9281841f19": "videos/pool-rack/9281841f19.mp4",
"dd8cfacc33": "videos/pool-rack/dd8cfacc33.mp4"
},
"codes": {
"ours": "7976b039bf",
"agent_lcv": "2add70a8cc",
"vace21_flow": "3ebd6fc7fa",
"vace21_layout": "9281841f19",
"box_only": "dd8cfacc33"
},
"pending": [],
"check": {
"title": "Diagonal break",
"shot": "Seen from directly above, a cue ball is struck diagonally into a full triangle of striped and solid pool balls, which burst apart and rebound off the cushions",
"camera": "static top-down",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; top-down billiards, pendant light, blue felt",
"setting": "a pool table with blue felt",
"objects": [
{
"name": "cue ball",
"look": "white cue ball",
"action": "is shot diagonally into the rack"
},
{
"name": "solid balls",
"look": "solid red, blue and purple pool balls",
"action": "scatter"
},
{
"name": "striped balls",
"look": "yellow and orange striped pool balls",
"action": "scatter"
},
{
"name": "table",
"look": "pool table with blue felt and wooden rails",
"action": "stays still"
}
],
"key": "The cue ball shoots diagonally, up and to the right, into the triangle of balls; the balls burst apart mostly up and to the right, bounce off the cushions, and all stay on the table.",
"tests": [
"physics",
"collision",
"count",
"direction"
],
"layers": "",
"prompt": "Seen from directly above, a cue ball is struck diagonally into a full triangle of striped and solid pool balls, which burst apart and rebound off the cushions. Style: cinematic live action, photoreal, natural light, shallow depth of field; top-down billiards, pendant light, blue felt. Elements: cue ball: white cue ball; solid balls: solid red, blue and purple pool balls; striped balls: yellow and orange striped pool balls; table: pool table with blue felt and wooden rails. Background and effects: a pool table with blue felt. Actions: cue ball: is shot diagonally into the rack; solid balls: scatter; solid ball 3: scatters; solid ball 4: scatters; solid ball 5: scatters; solid ball 6: scatters; striped balls: scatter; striped ball 8: scatters; striped ball 9: scatters; striped ball 10: scatters; striped ball 11: scatters; table: stays still. Camera: static top-down."
}
},
{
"id": "waterfall-up--up",
"videos": {
"bc69ac0778": "videos/waterfall-up--up/bc69ac0778.mp4",
"dd867b77db": "videos/waterfall-up--up/dd867b77db.mp4",
"4f89fc8b04": "videos/waterfall-up--up/4f89fc8b04.mp4",
"933e7e2470": "videos/waterfall-up--up/933e7e2470.mp4",
"fa7db00056": "videos/waterfall-up--up/fa7db00056.mp4"
},
"codes": {
"ours": "bc69ac0778",
"agent_lcv": "dd867b77db",
"vace21_flow": "4f89fc8b04",
"vace21_layout": "933e7e2470",
"box_only": "fa7db00056"
},
"pending": [],
"check": {
"title": "A waterfall that flows upward",
"shot": "A hiker crosses a rope bridge in front of a tall waterfall in a misty jungle gorge",
"camera": "static wide shot",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; lush green jungle, mist, soft light, magical realism",
"setting": "a jungle gorge with mossy cliffs",
"objects": [
{
"name": "waterfall",
"look": "streams of white falling water",
"action": "pours"
},
{
"name": "hiker",
"look": "hiker with a red backpack",
"action": "walks across the bridge"
},
{
"name": "rope bridge",
"look": "swaying rope bridge",
"action": "stays still"
},
{
"name": "pool",
"look": "churning pool at the foot of the falls",
"action": "stays still"
}
],
"key": "The waterfall runs backwards: the water climbs UP the cliff, while the hiker walks across the bridge normally.",
"tests": [
"time",
"time reversed"
],
"layers": "",
"prompt": "A hiker crosses a rope bridge in front of a tall waterfall in a misty jungle gorge. Style: cinematic live action, photoreal, natural light, shallow depth of field; lush green jungle, mist, soft light, magical realism. Elements: waterfall: streams of white falling water; hiker: hiker with a red backpack; rope bridge: swaying rope bridge; pool: churning pool at the foot of the falls. Background and effects: a jungle gorge with mossy cliffs. Actions: waterfall: pours; hiker: walks across the bridge; rope bridge: stays still; pool: stays still. Camera: static wide shot."
}
},
{
"id": "airport-apron",
"videos": {
"56b43e6a60": "videos/airport-apron/56b43e6a60.mp4",
"1e1775c338": "videos/airport-apron/1e1775c338.mp4",
"c7e9d0532e": "videos/airport-apron/c7e9d0532e.mp4",
"94843775fb": "videos/airport-apron/94843775fb.mp4",
"3ea65c01f8": "videos/airport-apron/3ea65c01f8.mp4"
},
"codes": {
"ours": "56b43e6a60",
"agent_lcv": "1e1775c338",
"vace21_flow": "c7e9d0532e",
"vace21_layout": "94843775fb",
"box_only": "3ea65c01f8"
},
"pending": [],
"check": {
"title": "Eight apron roles under a truck",
"shot": "On an airport apron, a jet taxis right, a fuel truck drives left, a baggage cart follows it, a marshaller waves the jet in, a follow-me car leads the jet, and a ground worker walks to the stairs while the camera trucks slowly left",
"camera": "The camera slides slowly to the left",
"camera_moves": true,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; airport apron, overcast, wet tarmac",
"setting": "an airport apron with a terminal",
"objects": [
{
"name": "jet",
"look": "white passenger jet",
"action": "taxis right"
},
{
"name": "fuel truck",
"look": "yellow fuel truck",
"action": "drives left"
},
{
"name": "baggage cart",
"look": "blue baggage cart train",
"action": "follows the fuel truck"
},
{
"name": "marshaller",
"look": "marshaller in an orange vest with wands",
"action": "waves the jet in"
},
{
"name": "follow-me car",
"look": "small checkered follow-me car",
"action": "leads the jet right"
},
{
"name": "ground worker",
"look": "ground worker in hi-vis",
"action": "walks right to the stairs"
},
{
"name": "boarding stairs",
"look": "white mobile boarding stairs",
"action": "stays still"
},
{
"name": "control tower",
"look": "airport control tower",
"action": "stays still"
}
],
"key": "The jet and the follow-me car move to the right; the fuel truck and the baggage cart move to the left; the marshaller turns to face the jet. The camera slides slowly sideways, so near things pass faster than far ones.",
"tests": [
"many objects",
"camera",
"direction",
"facing"
],
"layers": "",
"prompt": "On an airport apron, a jet taxis right, a fuel truck drives left, a baggage cart follows it, a marshaller waves the jet in, a follow-me car leads the jet, and a ground worker walks to the stairs while the camera trucks slowly left. Style: cinematic live action, photoreal, natural light, shallow depth of field; airport apron, overcast, wet tarmac. Elements: jet: white passenger jet; fuel truck: yellow fuel truck; baggage cart: blue baggage cart train; marshaller: marshaller in an orange vest with wands; follow-me car: small checkered follow-me car; ground worker: ground worker in hi-vis; boarding stairs: white mobile boarding stairs; control tower: airport control tower. Background and effects: an airport apron with a terminal. Actions: jet: taxis right; fuel truck: drives left; baggage cart: follows the fuel truck; marshaller: waves the jet in; follow-me car: leads the jet right; ground worker: walks right to the stairs; boarding stairs: stays still; control tower: stays still. Camera: slow truck left."
}
},
{
"id": "fx-paint-reveal--scribble",
"videos": {
"7ee521cffc": "videos/fx-paint-reveal--scribble/7ee521cffc.mp4",
"0d8cf7695f": "videos/fx-paint-reveal--scribble/0d8cf7695f.mp4",
"ddd16e787d": "videos/fx-paint-reveal--scribble/ddd16e787d.mp4",
"0b6675e1d7": "videos/fx-paint-reveal--scribble/0b6675e1d7.mp4",
"46cd7309bd": "videos/fx-paint-reveal--scribble/46cd7309bd.mp4"
},
"codes": {
"ours": "7ee521cffc",
"agent_lcv": "0d8cf7695f",
"vace21_flow": "ddd16e787d",
"vace21_layout": "0b6675e1d7",
"box_only": "46cd7309bd"
},
"pending": [],
"check": {
"title": "Brush path of a write-on reveal",
"shot": "A street artist's mural of a whale appears on a brick wall as if painted by an invisible brush, while passers-by stop to watch",
"camera": "static wide",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; cinematic colour grade; daylight, urban, colourful street art",
"setting": "a red brick wall",
"objects": [
{
"name": "whale mural",
"look": "colourful mural of a blue whale",
"action": "is painted onto the wall"
},
{
"name": "brush stroke",
"look": "wet paint brush stroke tip",
"action": "sweeps across"
},
{
"name": "passer-by",
"look": "woman with a yellow bag",
"action": "stops to watch"
}
],
"key": "The mural is filled in by quick back-and-forth scribbling strokes of an invisible brush, not by one single sweeping line, while the passer-by stops to watch.",
"tests": [
"visual effect",
"path"
],
"layers": "",
"prompt": "A street artist's mural of a whale appears on a brick wall as if painted by an invisible brush, while passers-by stop to watch. Style: cinematic live action, photoreal, natural light, shallow depth of field; cinematic colour grade; daylight, urban, colourful street art. Elements: whale mural: colourful mural of a blue whale; brush stroke: wet paint brush stroke tip; passer-by: woman with a yellow bag. Background and effects: a red brick wall. Actions: whale mural: is painted onto the wall; brush stroke: sweeps across; passer-by: stops to watch. Camera: static wide."
}
},
{
"id": "matryoshka",
"videos": {
"e435d602bd": "videos/matryoshka/e435d602bd.mp4",
"589955c612": "videos/matryoshka/589955c612.mp4",
"6e6ff2c7b5": "videos/matryoshka/6e6ff2c7b5.mp4",
"1cb46539ca": "videos/matryoshka/1cb46539ca.mp4",
"e6e97eaa76": "videos/matryoshka/e6e97eaa76.mp4"
},
"codes": {
"ours": "e435d602bd",
"agent_lcv": "589955c612",
"vace21_flow": "6e6ff2c7b5",
"vace21_layout": "1cb46539ca",
"box_only": "e6e97eaa76"
},
"pending": [],
"check": {
"title": "Hidden inside hidden",
"shot": "On a wooden table, a large Russian nesting doll is lifted aside to reveal a smaller one hidden inside, which is set beside it to reveal a smaller one, and so on, until five dolls stand in a row from largest to smallest",
"camera": "locked, eye level",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; tabletop, soft window light, folk art",
"setting": "a wooden table",
"objects": [
{
"name": "largest doll",
"look": "large red painted nesting doll",
"action": "is moved to the far left first"
},
{
"name": "second doll",
"look": "blue painted nesting doll",
"action": "is revealed, then moved second"
},
{
"name": "third doll",
"look": "green painted nesting doll",
"action": "is revealed, then moved third"
},
{
"name": "fourth doll",
"look": "yellow painted nesting doll",
"action": "is revealed, then moved fourth"
},
{
"name": "smallest doll",
"look": "tiny pink nesting doll",
"action": "is revealed last and stays in the row"
}
],
"key": "Each smaller doll is hidden inside the previous one and appears only when that one is lifted away; the dolls end standing in a row of five, largest on the left, each smaller to the right.",
"tests": [
"occlusion",
"order of events",
"size",
"count"
],
"layers": "Front to back: the largest doll, the second doll, the third doll, the fourth doll, the smallest doll.",
"prompt": "On a wooden table, a large Russian nesting doll is lifted aside to reveal a smaller one hidden inside, which is set beside it to reveal a smaller one, and so on, until five dolls stand in a row from largest to smallest. Style: cinematic live action, photoreal, natural light, shallow depth of field; tabletop, soft window light, folk art. Elements: largest doll: large red painted nesting doll; second doll: blue painted nesting doll; third doll: green painted nesting doll; fourth doll: yellow painted nesting doll; smallest doll: tiny pink nesting doll. Background and effects: a wooden table. Actions: largest doll: is moved to the far left first; second doll: is revealed, then moved second; third doll: is revealed, then moved third; fourth doll: is revealed, then moved fourth; smallest doll: is revealed last and stays in the row. Camera: locked, eye level."
}
},
{
"id": "cat-glass",
"videos": {
"f7eeb666b8": "videos/cat-glass/f7eeb666b8.mp4",
"8ae5b3d94a": "videos/cat-glass/8ae5b3d94a.mp4",
"56fe35172f": "videos/cat-glass/56fe35172f.mp4",
"5ee5603ddb": "videos/cat-glass/5ee5603ddb.mp4",
"42dcc9b1d8": "videos/cat-glass/42dcc9b1d8.mp4"
},
"codes": {
"ours": "f7eeb666b8",
"agent_lcv": "8ae5b3d94a",
"vace21_flow": "56fe35172f",
"vace21_layout": "5ee5603ddb",
"box_only": "42dcc9b1d8"
},
"pending": [],
"check": {
"title": "Pushed off, shatters",
"shot": "Side view of a kitchen counter: a grey cat walks along it, pushes a glass of water off the edge with its paw, and the glass falls and shatters on the tiled floor",
"camera": "locked, side view",
"camera_moves": false,
"style": "cinematic live action, photoreal, natural light, shallow depth of field; kitchen, evening lamp light; shot on 35mm film, realistic textures, high detail, natural motion",
"setting": "a kitchen counter above a tiled floor",
"objects": [
{
"name": "cat",
"look": "grey tabby cat",
"action": "walks right and pushes the glass off"
},
{
"name": "glass",
"look": "glass of water",
"action": "falls and shatters on the floor"
},
{
"name": "counter",
"look": "white kitchen counter",
"action": "stays still"
}
],
"key": "The cat walks along the counter to the glass, pushes it off the edge with its paw, and the glass falls and shatters into pieces on the floor.",
"tests": [
"interaction",
"contact",
"physics"
],
"layers": "",
"prompt": "Side view of a kitchen counter: a grey cat walks along it, pushes a glass of water off the edge with its paw, and the glass falls and shatters on the tiled floor. Style: cinematic live action, photoreal, natural light, shallow depth of field; kitchen, evening lamp light; shot on 35mm film, realistic textures, high detail, natural motion. Elements: cat: grey tabby cat; glass: glass of water; counter: white kitchen counter. Background and effects: a kitchen counter above a tiled floor. Actions: cat: walks right and pushes the glass off; glass: falls and shatters on the floor; counter: stays still. Camera: locked, side view."
}
}
]
};
