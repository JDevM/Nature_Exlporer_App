// To Enter a new park, 
// Create the object w/ createObject() 
// Pass it 4 args
// Then add the object name to the locations array
// And thats it


function createObject(minsFromAsheville, minsFromCharlotte, lakeSize, locationName, googleSearch) {
    var objectName = {
        drive_from_Ashville: minsFromAsheville,
        drive_from_Charlotte: minsFromCharlotte,
        lakeSize: lakeSize,
        name: locationName,
        linkPage: googleSearch
    };
    return objectName;
}

// Use var obName = createObject(a, b, c, d);
//                  to create a new Site object

// a = minsFromAsheville (int)
// b = minsFromCharlotte (int)
// c = lakeSize          (int)
// d = locationName      (string)


var Lake_Pontchartrain = createObject(610, 638, 630, "Lake Pontchartrain", "https://www.google.com/search?q=Lake+Pontchartrain&rlz=1C5CHFA_enUS728US728&oq=Lake+Pontchartrain&aqs=chrome..69i57.477j0j8&sourceid=chrome&ie=UTF-8");

var Lake_Martin = createObject(344, 372, 68.75, "Lake Martin", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Martin&oq=Lake+Martin&gs_l=psy-ab.3..0l2j0i20i264k1j0j0i20i264k1j0l5.9237.9237.0.9575.1.1.0.0.0.0.240.240.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.239....0.sTGsoyL75Cg");

var Lake_Guntersville = createObject(301, 377, 107.8, "Lake Guntersville", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Guntersville&oq=Lake+Guntersville&gs_l=psy-ab.3..35i39k1j0l9.12626.12626.0.13457.1.1.0.0.0.0.232.232.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.232....0.Nk0JsR73kgU");

var Lake_Oconee = createObject(232, 219, 29.77, "Lake Oconee", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Oconee&oq=Lake+Oconee&gs_l=psy-ab.3..35i39k1j0l5j0i20i264k1j0l3.7658.7658.0.7995.1.1.0.0.0.0.328.328.3-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.327....0.zjU4xw8u-Y8");

var Lake_Santeetlah = createObject(112, 229, 0.625, "Lake Santeetlah", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Santeetlah&oq=Lake+Santeetlah&gs_l=psy-ab.3..35i39k1j0j0i20i264k1j0l7.8386.8386.0.8841.1.1.0.0.0.0.237.237.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.236....0.ayN5ONp33mc");

var Lake_Norman = createObject(120, 30, 49.81, "Lake Norman", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Norman&oq=Lake+Norman&gs_l=psy-ab.3..35i39k1j0j0i20i264k1l2j0l6.7345.7345.0.7792.1.1.0.0.0.0.242.242.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.241....0.z1Op-augdbE");

var Lake_James = createObject(56, 93, 10.2, "Lake James", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+James&oq=Lake+James&gs_l=psy-ab.3...9894.11880.0.12452.2.2.0.0.0.0.352.352.3-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.1.351...0i22i30k1.0.2ZzslBQNP_w");

var Jordan_Lake = createObject(211, 135, 21.78, "Jordan Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Jordan+Lake&oq=Jordan+Lake&gs_l=psy-ab.3..35i39k1j0i67k1j0i20i264k1j0l7.11757.11757.0.12077.1.1.0.0.0.0.191.191.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.191....0.tFaIXGK7Pik");

var Lake_Glenville = createObject(103, 200, 2.297, "Lake Glenville", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Glenville&oq=Lake+Glenville&gs_l=psy-ab.3..35i39k1j0l9.9788.9788.0.10342.1.1.0.0.0.0.267.267.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.267....0.fMqjGLGRH30");

var Fontana_Lake = createObject(96, 211, 15.98, "Fontana Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Fontana+lake&oq=Fontana+lake&gs_l=psy-ab.3..35i39k1j0i67k1j0l8.9744.11014.0.11996.6.6.0.0.0.0.321.596.2-1j1.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..4.2.596...0i20i263i264k1j0i20i264k1.0.9yQJOm2Uyw8");

var Nantahala_Lake = createObject(115, 229, 2.5078, "Nantahala Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Nantahala+Lake&oq=Nantahala+Lake&gs_l=psy-ab.3..0i71k1l4.13521.13521.0.13880.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.iVanyynTBM0");

var High_Rock_Lake = createObject(155, 65, 23.72, "High Rock Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=High+Rock+Lake&oq=High+Rock+Lake&gs_l=psy-ab.3..0i71k1l4.9924.9924.0.10389.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.J3gErsNzyEY");

var Lake_Wylie = createObject(130, 30, 21, "Lake Wylie", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Wylie&oq=Lake+Wylie&gs_l=psy-ab.3..35i39k1j0l9.6977.6977.0.7290.1.1.0.0.0.0.246.246.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.246....0.QInZZ2PhTmg");

var Badin_Lake = createObject(176, 75, 8.359, "Badin Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Badin+Lake&oq=Badin+Lake&gs_l=psy-ab.3..0i71k1l4.10185.10185.0.10441.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.Ig12eAWA4AY");

var Lake_Mattamuskeet = createObject(408, 336, 61.39, "Lake Mattamuskeet", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Mattamuskeet&oq=Lake+Mattamuskeet&gs_l=psy-ab.3..0i71k1l4.9704.9704.0.9993.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.uwhGqugUagQ");

var Hyco_Lake = createObject(227, 174, 5.859, "Hyco Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Hyco+Lake&oq=Hyco+Lake&gs_l=psy-ab.3..35i39k1j0i67k1j0j0i67k1j0j0i20i264k1j0l4.10051.10051.0.10287.1.1.0.0.0.0.229.229.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.228....0.acx9hXYOkuI");

var Lake_Tillery = createObject(190, 74, 7.812, "Lake Tillery", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Tillery&oq=Lake+Tillery&gs_l=psy-ab.3..0i71k1l4.9833.9833.0.9993.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.b1rslNtUCTk");

var Lake_Jocassee = createObject(112, 178, 11.72, "Lake Jocassee", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Jocassee&oq=Lake+Jocassee&gs_l=psy-ab.3..35i39k1j0j0i20i264k1l2j0l6.11031.11031.0.11306.1.1.0.0.0.0.236.236.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.235....0.q2EkZMQKqBk");

var Lake_Gaston = createObject(277, 203, 31.72, "Lake Gaston", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Gaston&oq=Lake+Gaston&gs_l=psy-ab.3..35i39k1j0i20i264k1l2j0l7.8113.8113.0.8627.1.1.0.0.0.0.295.295.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.294....0.eDOOx1DVJVU");

var Falls_Lake = createObject(222, 149, 19.39, "Falls Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Falls+Lake&oq=Falls+Lake&gs_l=psy-ab.3..35i39k1j0i67k1l4j0i20i264k1j0l2j0i67k1j0.7838.7838.0.8422.1.1.0.0.0.0.292.292.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.292....0.qAa6B7cHgiQ");

var Randleman_Lake = createObject(169, 87, 4.698, "Randleman Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Randleman+Lake&oq=Randleman+Lake&gs_l=psy-ab.3..35i39k1j0i67k1j0i20i264k1j0l7.6823.6823.0.7623.1.1.0.0.0.0.190.190.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.190....0.GyHiGth9MaE");

var Belews_Lake = createObject(165, 104, 6.037, "Belews Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Belews+Lake&oq=Belews+Lake&gs_l=psy-ab.3..35i39k1j0i67k1j0i20i264k1j0l7.12527.12527.0.13102.1.1.0.0.0.0.549.549.5-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.549....0.2rCHNRP2gJM");

var Mountain_Island_Lake = createObject(123, 23, 5.127, "Mountain Island Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Mountain+Island+Lake&oq=Mountain+Island+Lake&gs_l=psy-ab.3..35i39k1j0l8j0i20i264k1.8806.8806.0.9063.1.1.0.0.0.0.220.220.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.219....0.rTkNGVJOWP0");

var Blewett_Falls_Lake = createObject(215, 96, 4, "Blewett Falls Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Blewett+Falls+Lake&oq=Blewett+Falls+Lake&gs_l=psy-ab.3..0i71k1l4.8409.8409.0.8594.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.M2eU62M3kQs");

var Lake_Phelps = createObject(365, 290, 25.94, "Lake Phelps", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Phelps&oq=Lake+Phelps&gs_l=psy-ab.3..0i71k1l4.10109.10109.0.10291.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.A27UX7ycYPE");

var Tuckertown_Reservoir = createObject(170, 64, 3.906, "Tuckertown Reservoir", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Tuckertown+Reservoir&oq=Tuckertown+Reservoir&gs_l=psy-ab.3..0i71k1l4.8315.8315.0.8549.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.OyWL4fPNu-4");

var Chatuge_Lake = createObject(126, 233, 10.9, "Chatuge Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Chatuge+Lake&oq=Chatuge+Lake&gs_l=psy-ab.3..0i71k1l4.9859.9859.0.10068.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.74h7OSmosyg");

var Wildcat_Lake = createObject(98, 141, 0.457, "Wildcat Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Wildcat+Lake&oq=Wildcat+Lake&gs_l=psy-ab.3..0i71k1l4.10762.10762.0.11012.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.5fCwxc7qxwY");

var Mayo_Lake = createObject(244, 189, 4.375, "Mayo Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Mayo+Lake&oq=Mayo+Lake&gs_l=psy-ab.3..35i39k1j0i20i263i46k1j46i20i263k1l2j0l8.9071.9071.0.9632.1.1.0.0.0.0.251.251.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.250....0.8azUraDF478");

var Harris_Lake = createObject(225, 149, 6.406, "Harris Lake", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Harris+Lake&oq=Harris+Lake&gs_l=psy-ab.3..0i71k1l4.11619.11619.0.11747.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.zeL27EQpEGQ");

var Lake_Adger = createObject(57, 98, 0.684, "Lake Adger", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Adger&oq=Lake+Adger&gs_l=psy-ab.3..35i39k1j0l4j0i20i264k1j0l4.16939.16939.0.17188.1.1.0.0.0.0.242.242.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.241....0.WkOkZhIILD8");

var W_Kerr_Scott_Dam_and_Reservoir = createObject(112, 88, 2.3046, "W. Kerr Scott Dam and Reservoir", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=W.+Kerr+Scott+Dam+and+Reservoir&oq=W.+Kerr+Scott+Dam+and+Reservoir&gs_l=psy-ab.3..0i71k1l4.10075.10075.0.10305.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.nxRx5ER_zdU");

var Lake_Michie = createObject(200, 147, 0.75, "Lake Michie", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Michie&oq=Lake+Michie&gs_l=psy-ab.3..35i39k1j0j0i20i264k1j0l2j0i20i263k1j0l4.11776.11776.0.12184.1.1.0.0.0.0.195.195.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.194....0.TVEqlPwtL4Q");

var Lake_Toxaway = createObject(67, 165, 1, "Lake Toxaway", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Toxaway&oq=Lake+Toxaway&gs_l=psy-ab.3..0i71k1l4.8563.8563.0.8709.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.Zvpj_h1B2dE");

var Lake_Crabtree = createObject(215, 141, 0.8125, "Lake Crabtree", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lake+Crabtree&oq=Lake+Crabtree&gs_l=psy-ab.3..0i71k1l4.7901.7901.0.8062.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.muqA_edKI7U");


/*

var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");
var location = createObject(minAsh, minChar, lakeSize, "nam", "googleSearch");

*/


var locations = [Lake_Pontchartrain, 
                 Lake_Martin, 
                 Lake_Guntersville, 
                 Lake_Oconee, 
                 Lake_Santeetlah, 
                 Lake_Norman, 
                 Lake_James, 
                 Jordan_Lake, 
                 Lake_Glenville, 
                 Fontana_Lake, 
                 Nantahala_Lake, 
                 High_Rock_Lake, 
                 Lake_Wylie, 
                 Badin_Lake, 
                 Lake_Mattamuskeet, 
                 Hyco_Lake, 
                 Lake_Tillery, 
                 Lake_Jocassee, 
                 Lake_Gaston, 
                 Falls_Lake, 
                 Belews_Lake, 
                 Mountain_Island_Lake, 
                 Blewett_Falls_Lake, 
                 Lake_Phelps, 
                 Tuckertown_Reservoir, 
                 Chatuge_Lake, 
                 Wildcat_Lake, 
                 Harris_Lake, 
                 Lake_Adger, 
                 W_Kerr_Scott_Dam_and_Reservoir, 
                 Lake_Michie, 
                 Lake_Toxaway,  
                 Lake_Crabtree];


var lakeSizes = [];
for (var i = 0; i < locations.length; i++) {
    lakeSizes.push(locations[i].lakeSize);
}

var minutes_From_Ashville = [];
for (var i = 0; i < locations.length; i++) {
    minutes_From_Ashville.push(locations[i].drive_from_Ashville);
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

var reduced_Lake_Sizes = reduceArray(lakeSizes);
var reduced_Minutes_From_Ashville = reduceArray(minutes_From_Ashville);
var reduced_Minutes_From_Charlotte = reduceArray(minutes_From_Charlotte);

var sorted_lakeSizes = reduced_Lake_Sizes.sort(function(reduced_Lake_Sizes , b) { return reduced_Lake_Sizes - b; });
var sorted_lakeSizes_Reverse = sorted_lakeSizes.reverse();
var sorted_Ashville_Distances = reduced_Minutes_From_Ashville.sort(function(reduced_Minutes_From_Ashville , b) { return reduced_Minutes_From_Ashville - b; });
var sorted_Charlotte_Distances = reduced_Minutes_From_Charlotte.sort(function(reduced_Minutes_From_Charlotte , b) { return reduced_Minutes_From_Charlotte - b; });


function print_Ordered_Mountain_lakeSizes() {
    var writeOut = document.getElementById("writeOut1");
    var head = document.getElementById("head1");
    head.innerHTML = "Lake Sizes";
    var i = 0;
    while (i < locations.length) {
        for (var j = 0; j < locations.length; j++) {
            if (sorted_lakeSizes_Reverse[i] === locations[j].lakeSize) {
                
                 writeOut.innerHTML += locations[j].lakeSize + "-Sq. Mi. " + "<a href=" + "\"" + locations[j].linkPage + "\"" + "target='_blank'" + ">" + locations[j].name + "</a>" + "<br>";
                
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
   
            }   
        }
        i++;
    }
}

print_Ordered_Mountain_lakeSizes();
print_Ordered_Distance_From_Ashville();
print_Ordered_Distance_From_Charlotte();

$("div.lakesWriteOutArea").hide();
$("h3#head1").hide();
$("h3#head2").hide();
$("h3#head3").hide();
$("p#writeOut1").hide();
$("p#writeOut2").hide();
$("p#writeOut3").hide();


$("input#showLakeSizes").on("click", function() {
    $("div.lakesWriteOutArea").show();
    $("h3#head1").toggle();
    $("p#writeOut1").toggle();
    
    $("h3#head2").hide();
    $("h3#head3").hide();
    $("p#writeOut2").hide();
    $("p#writeOut3").hide();
});

$("input#showFromAshville").on("click", function() {
    $("div.lakesWriteOutArea").show();
    $("h3#head2").toggle();
    $("p#writeOut2").toggle();
    
    $("h3#head1").hide();
    $("h3#head3").hide();
    $("p#writeOut1").hide();
    $("p#writeOut3").hide();
    
});

$("input#showFromCharlotte").on("click", function() {
    $("div.lakesWriteOutArea").show();
    $("h3#head3").toggle();
    $("p#writeOut3").toggle();
    
    $("h3#head1").hide();
    $("h3#head2").hide();
    $("p#writeOut1").hide();
    $("p#writeOut2").hide();
        
});

// 1007 Woodhurst dr