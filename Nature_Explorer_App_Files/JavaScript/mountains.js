// To Enter a new park, 
// Create the object w/ createObject() 
// Pass it 4 args
// Then add the object name to the locations array
// And thats it


function createObject(minsFromAsheville, minsFromCharlotte, elevation, locationName, googleSearch) {
    var objectName = {
        drive_from_Ashville: minsFromAsheville,
        drive_from_Charlotte: minsFromCharlotte,
        elevation: elevation,
        name: locationName,
        linkPage: googleSearch
    };
    return objectName;
}

// Use var obName = createObject(a, b, c, d);
//                  to create a new Site object

// a = minsFromAsheville (int)
// b = minsFromCharlotte (int)
// c = elevation         (int)
// d = locationName      (string)

var Mount_Mitchell = createObject(66, 153, 6683, "Mount Mitchell", "https://www.google.com/search?source=hp&q=mount+mitchell&oq=mount+mi&gs_l=psy-ab.3.0.0i46k1j46l2j0j0i20i264k1j0l7.2628.6926.0.7830.13.11.0.0.0.0.288.1615.0j1j6.7.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..7.6.1422.0..35i39k1j0i131k1j0i3k1j0i10k1j0i10i46k1j46i10k1j0i20i264i46k1j46i20i264k1.0.u5E2wjInOKc");

var Black_Balsom_Knob = createObject(57, 168, 6214, "Black Balsom Knob", "https://www.google.com/search?q=black+balsam+knob&oq=Black+&gs_l=psy-ab.3.1.35i39k1j0i20i264k1l2j0i67k1l2j0i131k1l2j0j0i131k1j0.825949.827332.0.831163.6.6.0.0.0.0.208.399.0j1j1.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..4.2.398....0.VoRfyGhVdvA");

var Roan_Mountain = createObject(85, 150, 6285, "Roan Mountain", "https://www.google.com/search?q=roan+mountain+nc&oq=roan+moun&gs_l=psy-ab.3.1.0i67k1j0i20i264k1j0j0i20i264k1j0l6.13452.19361.0.20825.17.13.4.0.0.0.226.1556.0j5j3.8.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..6.11.1389...46j35i39k1j0i131k1j0i46k1.0.HOKEYSRsiyE");

var Craggy_Pinnacle = createObject(44, 153, 5892, "Craggy Pinnacle", "https://www.google.com/search?q=Craggy+Pinnacle&oq=Craggy+Pinnacle&gs_l=psy-ab.3..0l10.29250.29250.0.29708.1.1.0.0.0.0.236.236.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.235....0.yMnAU-WSKGg");

var Looking_Glass_Rock = createObject(49, 151, 3970, "Looking Glass Rock", "https://www.google.com/search?q=Looking+Glass+Rock&oq=Looking+Glass+Rock&gs_l=psy-ab.3..0l10.25310.27045.0.27479.2.2.0.0.0.0.331.542.2-1j1.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.2.541...33i160k1.0.2-toe_xUyLc");

var Devils_Courthouse = createObject(58, 170, 5719, "Devils Courthouse", "https://www.google.com/search?q=Devil%27s+Courthouse&spell=1&sa=X&ved=0ahUKEwixsK7JntLWAhVKy2MKHbmFCaMQBQglKAA&biw=797&bih=892");

var Hawksbill_Mountain_NC = createObject(93, 125, 4049, "Hawksbill Mountain NC", "https://www.google.com/search?biw=1594&bih=892&ei=yEhEWpPJIoyZjwS-n6XoAg&q=Hawksbill+Mountain+NC&oq=Hawksbill+Mountain+NC&gs_l=psy-ab.3..0i71k1l4.0.0.0.91117.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.tiI-IzeLkJw");

var Rough_Ridge = createObject(94, 129, 4773, "Rough Ridge", "https://www.google.com/search?biw=797&bih=892&q=Rough+Ridge&oq=Rough+Ridge&gs_l=psy-ab.3..0j0i20i264k1j0l8.15786.15786.0.16475.1.1.0.0.0.0.187.187.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.187....0.3GJqFaIcgJg");

var Max_Patch_Hot_Springs = createObject(67, 190, 4616, "Max Patch Hot at Springs", "https://www.google.com/search?biw=797&bih=892&q=Max+Patch+Hot+at+Springs&oq=Max+Patch+Hot+at+Springs&gs_l=psy-ab.3..0i22i30k1l7.21150.21150.0.21695.1.1.0.0.0.0.251.251.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.250....0.6Cls79l6qho");

var Whiteside_Mountain = createObject(98, 197, 4930, "Whiteside Mountain", "https://www.google.com/search?biw=797&bih=892&q=Whiteside+Mountain&oq=Whiteside+Mountain&gs_l=psy-ab.3..0l10.14030.14030.0.14735.1.1.0.0.0.0.235.235.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.234....0.OX3JQdzwRd0");

var Cedar_Rock_Mountain = createObject(52, 124, 1184, "Cedar Rock Mountain at Dupont Forest", "https://www.google.com/search?biw=797&bih=892&q=Cedar+Rock+Mountain+at+Dupont+Forest&oq=Cedar+Rock+Mountain+at+Dupont+Forest&gs_l=psy-ab.3..33i160k1.13468.13468.0.23555.1.1.0.0.0.0.212.212.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.211....0.9yVtI-tpUbo");

var John_Rock = createObject(44, 146, 3320, "John Rock", "https://www.google.com/search?biw=797&bih=892&q=John+Rock&oq=John+Rock&gs_l=psy-ab.3..0i20i263i264k1j0i131k1j0j0i46k1j46l2j0l6.13481.13481.0.14018.1.1.0.0.0.0.244.244.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.244....0.BHvw4Ph_jJ0");

var Chimney_Rock = createObject(46, 112, 1096, "Chimney Rock", "https://www.google.com/search?biw=797&bih=892&q=Chimney+Rock&oq=Chimney+Rock&gs_l=psy-ab.3..0i71k1l4.0.0.0.32072.0.0.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1..64.psy-ab..0.0.0....0.cifu4mc3OmQ");

var Shortoff_Mountain = createObject(77, 108, 1321, "Shortoff Mountain near Lake James", "https://www.google.com/search?biw=797&bih=892&q=Shortoff+Mountain&oq=Shortoff+Mountain&gs_l=psy-ab.3..35i39k1j0l8j0i20i263k1.4499.4499.0.5052.1.1.0.0.0.0.170.170.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.169....0.OoZhwRh9NVY");

var Andrews_Bald = createObject(101, 224, 5920, "Andrews Bald near Clingmans Dome", "https://www.google.com/search?biw=797&bih=892&q=Andrews+Bald+near+Clingmans+Dome&oq=Andrews+Bald+near+Clingmans+Dome&gs_l=psy-ab.3..0i22i30k1.42227.42227.0.42612.1.1.0.0.0.0.218.218.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.217....0.WPNvf46jaMA");

var The_Pinnacle = createObject(48, 170, 3415, "The Pinnacle near Sylva", "https://www.google.com/search?biw=797&bih=892&q=The+Pinnacle+near+Sylva&oq=The+Pinnacle+near+Sylva&gs_l=psy-ab.3..33i22i29i30k1.20824.20824.0.21232.1.1.0.0.0.0.242.242.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.241....0.nmVTR1W3K8g");

var Huckleberry_Knob = createObject(125, 246, 5560, "Huckleberry Knob south of Knoxville", "https://www.google.com/search?biw=797&bih=892&q=Huckleberry+Knob+south+of+Knoxville&oq=Huckleberry+Knob+south+of+Knoxville&gs_l=psy-ab.3..0i71k1l4.0.0.0.104941.0.0.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1..64.psy-ab..0.0.0....0.xMCYwpysPBE");

var Table_Rock_Mountain_NC = createObject(106, 142, 4101, "Table Rock Mountain NC", "https://www.google.com/search?q=Table+Rock+Mountain+NC&rlz=1C5CHFA_enUS728US728&oq=Table+Rock+Mountain+NC&aqs=chrome..69i57j0l5.1139j0j8&sourceid=chrome&ie=UTF-8");

var Table_Rock_State_Park_SC = createObject(63, 129, 3124, "Table Rock State Park SC", "https://www.google.com/search?q=Table+Rock+State+Park+SC&rlz=1C5CHFA_enUS728US728&oq=Table+Rock+State+Park+SC&aqs=chrome..69i57j69i60j0l4.8913j0j8&sourceid=chrome&ie=UTF-8");

var Mount_LeConte_and_Alum_Cave = createObject(98, 221, 6593, "Mount LeConte & Alum Cave", "https://www.google.com/search?biw=797&bih=892&q=Mount+LeConte+and+Alum+Cave&oq=Mount+LeConte+and+Alum+Cave&gs_l=psy-ab.3...14851.16362.0.16754.6.6.0.0.0.0.221.603.0j1j2.3.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..3.2.381...0i7i30k1.0.WAs74bzrIRg");

var Bearwallow_Mountain = createObject(40, 138, 4232, "Bearwallow Mountain", "https://www.google.com/search?biw=797&bih=892&q=Bearwallow+Mountain&oq=Bearwallow+Mountain&gs_l=psy-ab.3..0l10.20685.20685.0.21230.1.1.0.0.0.0.196.196.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.195....0.kP1e30PxSuI");

var Beech_Mountain = createObject(117, 158, 5506, "Beech Mountain", "https://www.google.com/search?biw=797&bih=892&q=Beech+Mountain+NC&oq=Beech+Mountain+NC&gs_l=psy-ab.3..0l5j0i20i263k1j0l4.1529.2610.0.2881.3.3.0.0.0.0.642.1034.0j1j1j5-1.3.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.3.1033...0i67k1j0i20i264k1.0.GuMDd9TH9n8");

var Grandfather_Mountain = createObject(92, 131, 5945, "Grandfather Mountain", "https://www.google.com/search?biw=797&bih=892&q=Grandfather+Mountain&oq=Grandfather+Mountain&gs_l=psy-ab.3..0i131k1j0i67k1j0l4j0i67k1j0l3.13584.13584.0.14233.1.1.0.0.0.0.250.250.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.249....0.rdJBDFxoVGM");

var Mount_Mitchell = createObject(66, 153, 6683, "Mount Mitchell", "https://www.google.com/search?biw=797&bih=892&q=Mount+Mitchell&oq=Mount+Mitchell&gs_l=psy-ab.3..35i39k1j0l9.13741.13741.0.14125.1.1.0.0.0.0.185.185.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.185....0.xJ16-AAwa1E");

var Morrow_Mountain_State_Park = createObject(182, 67, 1100, "Morrow Mountain", "https://www.google.com/search?biw=797&bih=892&q=Morrow+Mountain+State+Park&oq=Morrow+Mountain+State+Park&gs_l=psy-ab.3..0l10.11801.11801.0.12227.1.1.0.0.0.0.179.179.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.179....0.1MiFOCigEnA");

var South_Mountain_State_Park = createObject(80, 84, 2291, "South Mountain", "https://www.google.com/search?biw=797&bih=892&q=South+Mountain+State+Park&oq=South+Mountain+State+Park&gs_l=psy-ab.3..35i39k1j0i20i263k1j0l8.8945.8945.0.9794.1.1.0.0.0.0.237.237.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.236....0.srgfAlyxxLA");

var Crowders_Mountain = createObject(101, 36, 1624, "Crowder's Mountain", "https://www.google.com/search?biw=797&bih=892&q=Crowders+Mountain&oq=Crowders+Mountain&gs_l=psy-ab.3..0i71k1l4.0.0.0.4961.0.0.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1..64.psy-ab..0.0.0....0.9LNyziyFbhM");

var Stone_Mountain_State_Park = createObject(145, 92, 2305, "Stone Mountain", "https://www.google.com/search?q=Stone+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Stone+Mountain+State+Park&aqs=chrome.0.69i59j0l2j35i39j0l2.1966j0j8&sourceid=chrome&ie=UTF-8");

var Blood_Mountain = createObject(147, 222, 4459, "Blood Mountain", "https://www.google.com/search?q=blood+mountain+ga&rlz=1C5CHFA_enUS728US728&oq=blood+mountain+ga&aqs=chrome..69i57j0l5.892j0j7&sourceid=chrome&ie=UTF-8");

var Yonah_Mountain = createObject(152, 211, 3166, "Yonah Mountain", "https://www.google.com/search?biw=797&bih=892&q=Yonah+Mountain&oq=Yonah+Mountain&gs_l=psy-ab.3..35i39k1j0i20i263k1j0i67k1j0l7.8634.10000.0.10842.2.2.0.0.0.0.228.449.2-2.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.227....0.rOEFgwzj3QU");

var Clingmans_Dome = createObject(106, 227, 6643, "Clingmans Dome", "https://www.google.com/search?biw=797&bih=892&q=Clingmans+Dome&oq=Clingmans+Dome&gs_l=psy-ab.3..0i71k1l4.13603.13603.0.13940.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.xVNojzxARQ0");

var Hanging_Rock = createObject(176, 116, 2579, "Hanging Rock", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=qAIPWs7CGoWjjwT16LuYDQ&q=Hanging+Rock+NC&oq=Hanging+Rock+NC&gs_l=psy-ab.3..0j0i67k1j0i20i264k1l2j0l6.50160.62542.0.63180.6.6.0.0.0.0.98.525.6.6.0....0...1.1.64.psy-ab..0.6.523...0i13k1j0i8i13i30k1j35i39k1j0i8i30k1.0.xXfV7A7Y3Vw");

var Pilot_Mountain = createObject(153, 100, 1158, "Pilot Mountain", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=lgMPWtz9Lai0jwTdq6qQDw&q=Pilot+Mountain+nc&oq=Pilot+Mountain+nc&gs_l=psy-ab.3..35i39k1j0i46k1j46l3j0l8.4875.11812.0.12777.4.4.0.0.0.0.98.363.4.4.0....0...1.1.64.psy-ab..0.4.363...0i67k1.0.CDLwiICId7Q");

var Richland_Balsam = createObject(59, 176, 6411, "Richland Balsam", "https://www.google.com/search?q=Richland+Balsam+NC&rlz=1C5CHFA_enUS728US728&oq=Richland+Balsam+NC&aqs=chrome..69i57.249j0j7&sourceid=chrome&ie=UTF-8");

var Waterrock_Knob = createObject(52, 170, 6293, "Waterrock Knob", "https://www.google.com/search?q=Waterrock+Knob+NC&rlz=1C5CHFA_enUS728US728&oq=Waterrock+Knob+NC&aqs=chrome..69i57j0l2.2268j0j8&sourceid=chrome&ie=UTF-8");

var Craggy_Dome = createObject(40, 153, 6079, "Craggy Dome", "https://www.google.com/search?q=Craggy+Dome+NC&rlz=1C5CHFA_enUS728US728&oq=Craggy+Dome+NC&aqs=chrome..69i57.3067j0j8&sourceid=chrome&ie=UTF-8");

var Mount_Pisgah = createObject(53, 170, 5722, "Mount Pisgah", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=owcPWo_9OJLijwSC9YOYCA&q=Mount+Pisgah+NC&oq=Mount+Pisgah+NC&gs_l=psy-ab.3..0l3j0i20i263k1j0i22i30k1l6.1624.2446.0.3388.3.3.0.0.0.0.122.300.2j1.3.0....0...1.1.64.psy-ab..0.3.299...0i67k1.0.6FEeJ0MHB1c");

var Snake_Mountain = createObject(131, 154, 5564, "Snake Mountain", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=NggPWorvHoyLjwTO4ovQBw&q=Snake+Mountain+NC&oq=Snake+Mountain+NC&gs_l=psy-ab.3..0l3j0i22i30k1l6.1159.1901.0.2835.3.3.0.0.0.0.126.316.2j1.3.0....0...1.1.64.psy-ab..0.3.316...0i67k1j0i20i263i264k1j0i20i263k1.0.hPYh9Vq161E");

var Mount_Jefferson_State_Park = createObject(144, 127, 4665, "Mount Jefferson State Park", "https://www.google.com/search?q=Mount+Jefferson+State+Park&rlz=1C5CHFA_enUS728US728&oq=Mount+Jefferson+State+Park&aqs=chrome..69i57j0l5.988j0j7&sourceid=chrome&ie=UTF-8");

var Elk_Knob_State_Park = createObject(126, 130, 5520, "Elk Knob State Park", "https://www.google.com/search?source=hp&ei=fGBEWrr5GcScjwTL9LTICg&q=Elk+Knob+State+Park&oq=Elk+Knob+State+Park&gs_l=psy-ab.3..0l2j0i67k1j0j0i67k1j0l5.22585.22585.0.24422.4.1.0.0.0.0.97.97.1.1.0....0...1c.2.64.psy-ab..3.1.96.0...0.8gwTMdqfDIE");

var Mount_Rogers_State_Park = createObject(170, 152, 5729, "Mount Rogers State Park", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=jWhEWpnvAaHejwTLvqzYAg&q=Mount+Rogers+State+Park&oq=Mount+Rogers+State+Park&gs_l=psy-ab.3..0l3j0i22i30k1.26227.26227.0.26980.1.1.0.0.0.0.92.92.1.1.0....0...1c.2.64.psy-ab..0.1.91....0.zrt_XEotRUU");

/*

var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
var location = createObject(minAsh, minChar, elev, "nam", "googleSearch");
*/
                

var locations = [Black_Balsom_Knob, 
                 Roan_Mountain, 
                 Craggy_Pinnacle, 
                 Looking_Glass_Rock, 
                 Devils_Courthouse, 
                 Hawksbill_Mountain_NC, 
                 Rough_Ridge, 
                 Max_Patch_Hot_Springs, 
                 Whiteside_Mountain, 
                 Cedar_Rock_Mountain, 
                 Chimney_Rock, 
                 Shortoff_Mountain, 
                 Andrews_Bald, 
                 The_Pinnacle, 
                 Huckleberry_Knob, 
                 Table_Rock_Mountain_NC, 
                 Table_Rock_State_Park_SC, 
                 Mount_LeConte_and_Alum_Cave, 
                 Bearwallow_Mountain, 
                 Beech_Mountain, 
                 Grandfather_Mountain, 
                 Mount_Mitchell, 
                 Morrow_Mountain_State_Park, 
                 South_Mountain_State_Park, 
                 Crowders_Mountain, 
                 Stone_Mountain_State_Park,
                 Blood_Mountain,
                 Yonah_Mountain,
                 Clingmans_Dome,
                 Hanging_Rock,
                 Pilot_Mountain,
                 Richland_Balsam,
                 Waterrock_Knob,
                 Craggy_Dome,
                 Mount_Pisgah,
                 Snake_Mountain, 
                 Mount_Jefferson_State_Park, 
                 Elk_Knob_State_Park, 
                 Mount_Rogers_State_Park
                ];


var elevations = [];
for (var i = 0; i < locations.length; i++) {
    elevations.push(locations[i].elevation);
}

var minutes_From_Ashville = [];
for (var i = 0; i < locations.length; i++) {
    minutes_From_Ashville.push(locations[i].drive_from_Ashville);
}

var minutes_From_Charlotte = [];
for (var i = 0; i < locations.length; i++) {
    minutes_From_Charlotte.push(locations[i].drive_from_Charlotte);
}

var minutes_From_Charlotte = [];
for (var i = 0; i < locations.length; i++) {
    minutes_From_Charlotte.push(locations[i].drive_from_Charlotte);
}


function reduceArray(myArray) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        if (newArray.indexOf(myArray[i]) === -1)  {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

// Check for duplicates and remove them using the reduce array

var reduced_Elevaions = reduceArray(elevations);
var reduced_Minutes_From_Ashville = reduceArray(minutes_From_Ashville);
var reduced_Minutes_From_Charlotte = reduceArray(minutes_From_Charlotte);


var sorted_Elevations = reduced_Elevaions.sort(function(reduced_Elevaions , b) { return reduced_Elevaions - b; });
var sorted_Elevations_Reverse = sorted_Elevations.reverse();
var sorted_Ashville_Distances = reduced_Minutes_From_Ashville.sort(function(reduced_Minutes_From_Ashville , b) { return reduced_Minutes_From_Ashville - b; });
var sorted_Charlotte_Distances = reduced_Minutes_From_Charlotte.sort(function(reduced_Minutes_From_Charlotte , b) { return reduced_Minutes_From_Charlotte - b; });


function print_Ordered_Mountain_Elevations() {
    var writeOut = document.getElementById("writeOut1");
    var head = document.getElementById("head1");
    head.innerHTML = "Mountain Elevations";
    var i = 0;
    while (i < locations.length) {
        for (var j = 0; j < locations.length; j++) {
            if (sorted_Elevations_Reverse[i] === locations[j].elevation) {
                 
                writeOut.innerHTML += locations[j].elevation + "-Ft " + "<a href=" + "\"" + locations[j].linkPage + "\"" + "target='_blank'" + ">" + locations[j].name + "</a>" + "<br>";
                //break;
            }
        }
        i++;
    }
}

function print_Ordered_Distance_From_Ashville() {
    var writeOut = document.getElementById("writeOut2");
    var head = document.getElementById("head2");
    head.innerHTML = "From Asheville";
    var i = 0;
    while (i < locations.length) {
        for (var j = 0; j < locations.length; j++){
            if (sorted_Ashville_Distances[i] === locations[j].drive_from_Ashville) {
                var secondTimeNumber = locations[j].drive_from_Ashville % 60;
                secondTimeNumber = String(secondTimeNumber);
                if (secondTimeNumber.length < 2) { secondTimeNumber = "0" + secondTimeNumber;}
                
                writeOut.innerHTML += (Math.floor(locations[j].drive_from_Ashville / 60) + ":" + secondTimeNumber) + " Hours to ---> " + "<a href=" + "\"" + locations[j].linkPage + "\"" + "target='_blank'" + ">" + locations[j].name + "</a>" + "<br>";
                //break;
            }   
        }
        i++;
    }
}

function print_Ordered_Distance_From_Charlotte() {
    var writeOut = document.getElementById("writeOut3");
    var head = document.getElementById("head3");
    head.innerHTML = "From Charlotte";
    var i = 0;
    while (i < locations.length) {
        for (var j = 0; j < locations.length; j++){
            if (sorted_Charlotte_Distances[i] === locations[j].drive_from_Charlotte) {
                var secondTimeNumber = locations[j].drive_from_Charlotte % 60;
                secondTimeNumber = String(secondTimeNumber);
                if (secondTimeNumber.length < 2) { secondTimeNumber = "0" + secondTimeNumber;}
                
                writeOut.innerHTML += (Math.floor(locations[j].drive_from_Charlotte / 60) + ":" + secondTimeNumber) + " Hours to ---> " + "<a href=" + "\"" + locations[j].linkPage + "\"" + "target='_blank'" + ">" + locations[j].name + "</a>" + "<br>";
                //break;
            }   
        }
        i++;
    }
}

print_Ordered_Mountain_Elevations();
print_Ordered_Distance_From_Ashville();
print_Ordered_Distance_From_Charlotte();

$("div.mountainWriteOutArea").hide();
$("h3#head1").hide();
$("h3#head2").hide();
$("h3#head3").hide();
$("p#writeOut1").hide();
$("p#writeOut2").hide();
$("p#writeOut3").hide();


$("input#showElevations").on("click", function() {
    $("div.mountainWriteOutArea").show();
    $("h3#head1").toggle();
    $("p#writeOut1").toggle();
    
    $("h3#head2").hide();
    $("h3#head3").hide();
    $("p#writeOut2").hide();
    $("p#writeOut3").hide();
});

$("input#showFromAshville").on("click", function() {
    $("div.mountainWriteOutArea").show();
    $("h3#head2").toggle();
    $("p#writeOut2").toggle();
    
    $("h3#head1").hide();
    $("h3#head3").hide();
    $("p#writeOut1").hide();
    $("p#writeOut3").hide();
    
});

$("input#showFromCharlotte").on("click", function() {
    $("div.mountainWriteOutArea").show();
    $("h3#head3").toggle();
    $("p#writeOut3").toggle();
    
    $("h3#head1").hide();
    $("h3#head2").hide();
    $("p#writeOut1").hide();
    $("p#writeOut2").hide();
        
});

// 1007 Woodhurst dr
