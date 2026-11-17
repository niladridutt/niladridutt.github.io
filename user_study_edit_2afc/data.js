window.STUDY = {
"study": "p2v-edit-2afc-v2",
"example": {
"instruction": "The camera pans right 15 degrees.",
"answer": "For question 1, B is the better choice: the camera turns to the right, so the far shore on the right comes into view and the swans drift out to the left. A stays framed exactly like the original, so it has not followed the instruction, however clean it looks. For question 2, judge whether the swans and the lake keep their look (things leaving the frame because of the pan are expected), and for question 3 only how natural each video looks, whichever one followed the instruction.",
"source": "videos/real4-blackswans__pan-right/3f5378b64d.mp4",
"a": "videos/real4-blackswans__pan-right/19549f1bcd.mp4",
"b": "videos/real4-blackswans__pan-right/3d9bc542a1.mp4"
},
"ours": "ours",
"baselines": [
"lcv",
"vace"
],
"items": [
{
"id": "stage-b__spot-off",
"instruction": "The spotlight switches off at 2 s.",
"category": "light",
"videos": {
"c0974c3c12": "videos/stage-b__spot-off/c0974c3c12.mp4",
"08b519ba56": "videos/stage-b__spot-off/08b519ba56.mp4",
"be6a25b3ad": "videos/stage-b__spot-off/be6a25b3ad.mp4",
"479e884106": "videos/stage-b__spot-off/479e884106.mp4"
},
"codes": {
"source": "c0974c3c12",
"ours": "08b519ba56",
"lcv": "be6a25b3ad",
"vace": "479e884106"
}
},
{
"id": "stage-b__spot-slides-right",
"instruction": "The spotlight and its pool slide right, leaving the dancer in darkness.",
"category": "light",
"videos": {
"f59682421f": "videos/stage-b__spot-slides-right/f59682421f.mp4",
"35470b9e2a": "videos/stage-b__spot-slides-right/35470b9e2a.mp4",
"b03c3d5743": "videos/stage-b__spot-slides-right/b03c3d5743.mp4",
"2a2bfab8e2": "videos/stage-b__spot-slides-right/2a2bfab8e2.mp4"
},
"codes": {
"source": "f59682421f",
"ours": "35470b9e2a",
"lcv": "b03c3d5743",
"vace": "2a2bfab8e2"
}
},
{
"id": "src-tokyo__freeze-truck",
"instruction": "Time freezes on the street; the camera trucks right.",
"category": "time freeze",
"videos": {
"7dc15710fb": "videos/src-tokyo__freeze-truck/7dc15710fb.mp4",
"a968f20b3e": "videos/src-tokyo__freeze-truck/a968f20b3e.mp4",
"25a6102257": "videos/src-tokyo__freeze-truck/25a6102257.mp4",
"90a68a9cfb": "videos/src-tokyo__freeze-truck/90a68a9cfb.mp4"
},
"codes": {
"source": "7dc15710fb",
"ours": "a968f20b3e",
"lcv": "25a6102257",
"vace": "90a68a9cfb"
}
},
{
"id": "src-piranha__second-piranha",
"instruction": "A second piranha swims in from the right.",
"category": "count",
"videos": {
"8b3831349c": "videos/src-piranha__second-piranha/8b3831349c.mp4",
"63437fd587": "videos/src-piranha__second-piranha/63437fd587.mp4",
"b568a60524": "videos/src-piranha__second-piranha/b568a60524.mp4",
"abfd414f32": "videos/src-piranha__second-piranha/abfd414f32.mp4"
},
"codes": {
"source": "8b3831349c",
"ours": "63437fd587",
"lcv": "b568a60524",
"vace": "abfd414f32"
}
},
{
"id": "src-paperlamps__rack-focus-front-to-back-seed2",
"instruction": "Rack focus: the lanterns in front blur and the street behind comes into focus.",
"category": "focus",
"videos": {
"da219cf6f5": "videos/src-paperlamps__rack-focus-front-to-back-seed2/da219cf6f5.mp4",
"925a8ec890": "videos/src-paperlamps__rack-focus-front-to-back-seed2/925a8ec890.mp4",
"38f917f451": "videos/src-paperlamps__rack-focus-front-to-back-seed2/38f917f451.mp4",
"3aab2c557e": "videos/src-paperlamps__rack-focus-front-to-back-seed2/3aab2c557e.mp4"
},
"codes": {
"source": "da219cf6f5",
"ours": "925a8ec890",
"lcv": "38f917f451",
"vace": "3aab2c557e"
}
},
{
"id": "src-goldfish__fantail-turns-back",
"instruction": "The orange fantail turns around and swims back to the right.",
"category": "move and turn",
"videos": {
"c856b1e1f1": "videos/src-goldfish__fantail-turns-back/c856b1e1f1.mp4",
"bf4f1844c4": "videos/src-goldfish__fantail-turns-back/bf4f1844c4.mp4",
"3249f257ff": "videos/src-goldfish__fantail-turns-back/3249f257ff.mp4",
"1d46525645": "videos/src-goldfish__fantail-turns-back/1d46525645.mp4"
},
"codes": {
"source": "c856b1e1f1",
"ours": "bf4f1844c4",
"lcv": "3249f257ff",
"vace": "1d46525645"
}
},
{
"id": "real5-cattle__clone-walks-behind",
"instruction": "A second black cow walks in from the right, behind the cattle.",
"category": "count",
"videos": {
"338d276395": "videos/real5-cattle__clone-walks-behind/338d276395.mp4",
"55513377d0": "videos/real5-cattle__clone-walks-behind/55513377d0.mp4",
"fd910eaa7a": "videos/real5-cattle__clone-walks-behind/fd910eaa7a.mp4",
"6f23c3ee14": "videos/real5-cattle__clone-walks-behind/6f23c3ee14.mp4"
},
"codes": {
"source": "338d276395",
"ours": "55513377d0",
"lcv": "fd910eaa7a",
"vace": "6f23c3ee14"
}
},
{
"id": "real5-cattle__add-sheep",
"instruction": "A white sheep walks in from the left across the field.",
"category": "add or remove",
"videos": {
"021703d5c4": "videos/real5-cattle__add-sheep/021703d5c4.mp4",
"7b37b1134a": "videos/real5-cattle__add-sheep/7b37b1134a.mp4",
"e0aed66341": "videos/real5-cattle__add-sheep/e0aed66341.mp4",
"2d096b7d0f": "videos/real5-cattle__add-sheep/2d096b7d0f.mp4"
},
"codes": {
"source": "021703d5c4",
"ours": "7b37b1134a",
"lcv": "e0aed66341",
"vace": "2d096b7d0f"
}
},
{
"id": "real5-busker__push-in",
"instruction": "The camera pushes in on the musician.",
"category": "camera",
"videos": {
"838a07f28b": "videos/real5-busker__push-in/838a07f28b.mp4",
"0cf3645c2a": "videos/real5-busker__push-in/0cf3645c2a.mp4",
"9808fd753f": "videos/real5-busker__push-in/9808fd753f.mp4",
"4f1d5a32e4": "videos/real5-busker__push-in/4f1d5a32e4.mp4"
},
"codes": {
"source": "838a07f28b",
"ours": "0cf3645c2a",
"lcv": "9808fd753f",
"vace": "4f1d5a32e4"
}
},
{
"id": "real3-meerkats__zoom-in",
"instruction": "Camera zooms in 1.8x on the group.",
"category": "camera",
"videos": {
"a80e6e2a71": "videos/real3-meerkats__zoom-in/a80e6e2a71.mp4",
"f57b82ebad": "videos/real3-meerkats__zoom-in/f57b82ebad.mp4",
"21c6e35ca3": "videos/real3-meerkats__zoom-in/21c6e35ca3.mp4",
"8562e22299": "videos/real3-meerkats__zoom-in/8562e22299.mp4"
},
"codes": {
"source": "a80e6e2a71",
"ours": "f57b82ebad",
"lcv": "21c6e35ca3",
"vace": "8562e22299"
}
},
{
"id": "real3-meerkats__spread-out",
"instruction": "The meerkats spread out across the field.",
"category": "move",
"videos": {
"8ec3dbd395": "videos/real3-meerkats__spread-out/8ec3dbd395.mp4",
"0ee0694285": "videos/real3-meerkats__spread-out/0ee0694285.mp4",
"af05ec3b6e": "videos/real3-meerkats__spread-out/af05ec3b6e.mp4",
"ceae87d782": "videos/real3-meerkats__spread-out/ceae87d782.mp4"
},
"codes": {
"source": "8ec3dbd395",
"ours": "0ee0694285",
"lcv": "af05ec3b6e",
"vace": "ceae87d782"
}
},
{
"id": "real3-chickens__black-hen-behind-ginger",
"instruction": "The black hen walks across behind the ginger hen.",
"category": "in front / behind",
"videos": {
"8999efb167": "videos/real3-chickens__black-hen-behind-ginger/8999efb167.mp4",
"898060182a": "videos/real3-chickens__black-hen-behind-ginger/898060182a.mp4",
"87cf890fc1": "videos/real3-chickens__black-hen-behind-ginger/87cf890fc1.mp4",
"f27ebcd348": "videos/real3-chickens__black-hen-behind-ginger/f27ebcd348.mp4"
},
"codes": {
"source": "8999efb167",
"ours": "898060182a",
"lcv": "87cf890fc1",
"vace": "f27ebcd348"
}
},
{
"id": "real4-giraffe__giraffe-teleports",
"instruction": "The giraffe vanishes and reappears on the right side (teleport).",
"category": "visual effect",
"videos": {
"fd5cb0e208": "videos/real4-giraffe__giraffe-teleports/fd5cb0e208.mp4",
"eec5d35152": "videos/real4-giraffe__giraffe-teleports/eec5d35152.mp4",
"8008b302fe": "videos/real4-giraffe__giraffe-teleports/8008b302fe.mp4",
"3d68fade60": "videos/real4-giraffe__giraffe-teleports/3d68fade60.mp4"
},
"codes": {
"source": "fd5cb0e208",
"ours": "eec5d35152",
"lcv": "8008b302fe",
"vace": "3d68fade60"
}
},
{
"id": "real4-elephants__remove-calf",
"instruction": "The baby elephant is removed.",
"category": "add or remove",
"videos": {
"59aea207e0": "videos/real4-elephants__remove-calf/59aea207e0.mp4",
"0e8aeecb6e": "videos/real4-elephants__remove-calf/0e8aeecb6e.mp4",
"9ed875fc2e": "videos/real4-elephants__remove-calf/9ed875fc2e.mp4",
"4479d3ad66": "videos/real4-elephants__remove-calf/4479d3ad66.mp4"
},
"codes": {
"source": "59aea207e0",
"ours": "0e8aeecb6e",
"lcv": "9ed875fc2e",
"vace": "4479d3ad66"
}
},
{
"id": "davis-bear__large-path",
"instruction": "From 1 s, the bear walks a long arcing path to the far right side of the frame.",
"category": "move",
"videos": {
"38b528d109": "videos/davis-bear__large-path/38b528d109.mp4",
"0987252e2d": "videos/davis-bear__large-path/0987252e2d.mp4",
"b814a7610e": "videos/davis-bear__large-path/b814a7610e.mp4",
"25c59b0c04": "videos/davis-bear__large-path/25c59b0c04.mp4"
},
"codes": {
"source": "38b528d109",
"ours": "0987252e2d",
"lcv": "b814a7610e",
"vace": "25c59b0c04"
}
}
]
};
