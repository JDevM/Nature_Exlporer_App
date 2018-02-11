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



var Catawba_Falls = createObject(31, 108, 100, "Catawba Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Catawba+Falls&oq=Catawba+Falls&gs_l=psy-ab.3..35i39k1j0l9.190415.190415.0.190832.1.1.0.0.0.0.234.234.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.233....0.6co5qTjtyvY");

var High_Falls = createObject(68, 156, 125, "High Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=High+Falls&oq=High+Falls&gs_l=psy-ab.3..0i71k1l4.7040.7040.0.7214.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.HkeyHAbIYKM");

var Sliding_Rock_Falls = createObject(52, 182, 25, "Sliding Rock Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Sliding+Rock+Falls&oq=Sliding+Rock+Falls&gs_l=psy-ab.3..35i39k1j0i20i263k1l2j0l7.13381.13381.0.14940.1.1.0.0.0.0.260.260.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.259....0.VNOLUMRxl7c");

var Looking_Glass_Falls = createObject(47, 150, 60, "Looking Glass Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Looking+Glass+Falls&oq=Looking+Glass+Falls&gs_l=psy-ab.3..35i39k1j0i67k1j0i20i264k1j0j0i67k1j0l5.10036.10036.0.10915.1.1.0.0.0.0.195.195.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.195....0.65wqX0pi_fo");

var Hooker_Falls = createObject(51, 140, 14.11, "Hooker Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Hooker+Falls&oq=Hooker+Falls&gs_l=psy-ab.3..0i71k1l4.6777.6777.0.6929.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.JzextkUxNcM");

var Dry_Falls = createObject(97, 216, 75, "Dry Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Dry+Falls&oq=Dry+Falls&gs_l=psy-ab.3..0i71k1l4.10302.10302.0.10397.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.fohCKUdQXSE");

var Roaring_Fork_Falls = createObject(72, 137, 50, "Roaring Fork Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Roaring+Fork+Falls&oq=Roaring+Fork+Falls&gs_l=psy-ab.3..0i71k1l4.7962.7962.0.8075.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.oYwmUEwV5hA");

var Triple_Falls = createObject(51, 139, 125, "Triple Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Triple+Falls&oq=Triple+Falls&gs_l=psy-ab.3..0i71k1l4.9550.9550.0.9669.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.BxMPnfW9b2Y");

var High_Shoals_Falls = createObject(80, 84, 80, "High Shoals Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=High+Shoals+Falls&oq=High+Shoals+Falls&gs_l=psy-ab.3..0i71k1l4.8391.8391.0.8512.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.ke5E-vr4pU8");

var Silver_Run_Falls = createObject(93, 201, 25, "Silver Run Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Silver+Run+Falls&oq=Silver+Run+Falls&gs_l=psy-ab.3..0i71k1l4.9890.9890.0.9992.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.b4VecPjua8U");

var Bridal_Veil_Falls = createObject(96, 210, 45, "Bridal Veil Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Bridal+Veil+Falls&oq=Bridal+Veil+Falls&gs_l=psy-ab.3..0i71k1l4.7459.7459.0.7524.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.XBZ9bMdxEP4");

var Soco_Falls = createObject(49, 169, 30, "Soco Falls (Double Falls)", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Soco+Falls&oq=Soco+Falls&gs_l=psy-ab.3..0i71k1l4.13195.13195.0.13418.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.Y1q2apAi9g8");

var Eastatoe_Falls = createObject(59, 163, 60, "Eastatoe Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Eastatoe+Falls&oq=Eastatoe+Falls&gs_l=psy-ab.3..0i71k1l4.9866.9866.0.10049.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.BGfQ_81bSzQ");

var Upper_Whitewater_Falls = createObject(85, 173, 411, "Upper Whitewater Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Upper+Whitewater+Falls&oq=Upper+Whitewater+Falls&gs_l=psy-ab.3..0i71k1l4.8961.8961.0.9072.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.z3oVVnb4EUs");

var Second_Falls_at_Graveyard_Fields = createObject(60, 171, 30, "Second Falls at Graveyard Fields", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Second+Falls+at+Graveyard+Fields&oq=Second+Falls+at+Graveyard+Fields&gs_l=psy-ab.3..0.14092.14092.0.15229.1.1.0.0.0.0.234.234.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.233....0.8fkUhZ7K2i8");

var Toms_Creek_Falls = createObject(52, 109, 80, "Toms Creek Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Toms+Creek+Falls&oq=Toms+Creek+Falls&gs_l=psy-ab.3..0i71k1l4.10250.10250.0.10345.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.3KyBCLWnUWk");

var Stone_Mountain_Falls = createObject(147, 91, 200, "Stone Mountain Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Stone+Mountain+Falls&oq=Stone+Mountain+Falls&gs_l=psy-ab.3..0i71k1l4.9949.9949.0.10045.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.-dJgnkxqT0Q");

var Sandstone_Falls = createObject(267, 227, 25, "Sandstone Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Sandstone+Falls&oq=Sandstone+Falls&gs_l=psy-ab.3..0i71k1l4.9837.9837.0.9957.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.pCuh_tQp6y0");

var Crabtree_Falls = createObject(60, 131, 1000, "Crabtree Falls (400 ft Drop)", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Crabtree+Falls&oq=Crabtree+Falls&gs_l=psy-ab.3..0i71k1l4.27446.27446.0.27585.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.YW8NcoMQghw");

var Glassmine_Falls = createObject(47, 153, 800, "Glassmine Falls (200 ft Drop)", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Glassmine+Falls&oq=Glassmine+Falls&gs_l=psy-ab.3..0i71k1l4.11661.11661.0.11758.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.SldwMIexnq4");

var Corbin_Creek_Falls = createObject(74, 169, 600, "Corbin Creek Falls (Cascading)", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Corbin+Creek+Falls&oq=Corbin+Creek+Falls&gs_l=psy-ab.3..0i71k1l4.13228.13228.0.13318.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.fLOWAFAG_6o");

var Cullasaja_Falls = createObject(85, 198, 200, "Cullasaja Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Cullasaja+Falls&oq=Cullasaja+Falls&gs_l=psy-ab.3..0i67k1j0l4j0i67k1j0i22i30k1l4.9892.9892.0.10485.1.1.0.0.0.0.224.224.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.223....0.uKs-HP_tdYg");

var Hickory_Nut_Falls = createObject(41, 114, 407, "Hickory Nut Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Hickory+Nut+Falls&oq=Hickory+Nut+Falls&gs_l=psy-ab.3..0i71k1l4.10090.10090.0.10201.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.YiBwY_sITsg");

var Batson_Creek_and_Connestee_Falls = createObject(62, 150, 85, "Batson Creek & Connestee Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Batson+Creek+and+Connestee+Falls&oq=Batson+Creek+and+Connestee+Falls&gs_l=psy-ab.3...2104.2573.0.3221.4.4.0.0.0.0.243.475.2-2.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..2.0.0....0.hdhgo5--9Ks");

var Linville_Falls = createObject(68, 124, 151, "Linville Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Linville+Falls&oq=Linville+Falls&gs_l=psy-ab.3..0i71k1l4.14150.14150.0.14252.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.2eidqir9PRU");

var Mingo_Falls = createObject(69, 182, 120, "Mingo Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Mingo+Falls&oq=Mingo+Falls&gs_l=psy-ab.3..0i71k1l4.8777.8777.0.8826.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.Cw8Tk_G89LY");

var Torys_Falls = createObject(169, 108, 100, "Tory's Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Tory%27s+Falls&oq=Tory%27s+Falls&gs_l=psy-ab.3..0i71k1l4.7763.7763.0.7791.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.OB7zGypB9tc");

var Burgess_Falls = createObject(220, 337, 135, "Burgess Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Burgess+Falls&oq=Burgess+Falls&gs_l=psy-ab.4..0i20i264k1j0l9.10248.10248.0.10679.1.1.0.0.0.0.334.334.3-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.333....0.XQ3UzV8p_Qc");

var Fall_Creek_Falls = createObject(235, 350, 256, "Fall Creek Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Fall+Creek+Falls&oq=Fall+Creek+Falls&gs_l=psy-ab.3..0i71k1l4.14264.14264.0.14320.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.ljuqL8I2tfw");

var Ozone_Falls = createObject(171, 286, 112, "Ozone Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Ozone+Falls&oq=Ozone+Falls&gs_l=psy-ab.3..0i71k1l4.7298.7298.0.7354.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.qWVop-7Vl2c");

var Ruby_Falls = createObject(220, 323, 144, "Ruby Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Ruby+Falls&oq=Ruby+Falls&gs_l=psy-ab.3..0i71k1l4.11313.11313.0.11377.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.gDd1Dv2iqh8");

var Raven_Cliff_Falls = createObject(155, 214, 400, "Raven Cliff Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Raven+Cliff+Falls&oq=Raven+Cliff+Falls&gs_l=psy-ab.3..0i71k1l4.8468.8468.0.8635.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.oqU0dbnodWw");

var Rainbow_Falls = createObject(76, 168, 150, "Rainbow Falls", "https://www.google.com/search?q=Rainbow+Falls&rlz=1C5CHFA_enUS728US728&oq=Rainbow+Falls&aqs=chrome..69i57j0l4j69i60.1701j0j8&sourceid=chrome&ie=UTF-8");

var Turtleback_Falls = createObject(75, 171, 20, "Turtleback Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Turtleback+Falls+nc&oq=Turtleback+Falls+nc&gs_l=psy-ab.3..0i67k1j0i20i263k1j0l6j0i30k1l2.14496.19837.0.192111.5.5.0.0.0.0.169.582.0j4.4.0....0...1.1.64.psy-ab..1.4.580...0i13k1j0i13i30k1.0.7TYDlELfDM4");

/*

var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");
var location = createObject(ashMin, charMin, elevation, "name", "googleSearch");

*/

var locations = [Catawba_Falls, 
                 High_Falls, 
                 Sliding_Rock_Falls, 
                 Looking_Glass_Falls, 
                 Hooker_Falls, Dry_Falls, 
                 Roaring_Fork_Falls, 
                 Triple_Falls, 
                 High_Shoals_Falls, 
                 Silver_Run_Falls, 
                 Bridal_Veil_Falls, 
                 Soco_Falls, 
                 Eastatoe_Falls, 
                 Upper_Whitewater_Falls, 
                 Second_Falls_at_Graveyard_Fields, 
                 Stone_Mountain_Falls, 
                 Sandstone_Falls, 
                 Crabtree_Falls, 
                 Glassmine_Falls, 
                 Corbin_Creek_Falls,
                 Cullasaja_Falls,
                 Batson_Creek_and_Connestee_Falls,
                 Linville_Falls,
                 Mingo_Falls,
                 Torys_Falls,
                 Burgess_Falls,
                 Fall_Creek_Falls,
                 Ozone_Falls,
                 Raven_Cliff_Falls,
                 Rainbow_Falls,
                 Turtleback_Falls];


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

/*

Reducing array, so that multiple numbers dont exist
The new reduced arrays get sorted lines 129 - 139

The Reduaced / Sorted Array is then passed to the function that prints
which loops though and checks if an objects properties
matches the first number
When it finds one, it prints it

The Odered array is used over and over, incrementing though
each number, finding a match and moving to the next number

*/
function reduceArray(myArray) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        if (newArray.indexOf(myArray[i]) === -1)  {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

var reduced_Elevations = reduceArray(elevations);
var reduced_Minutes_From_Ashville = reduceArray(minutes_From_Ashville);
var reduced_Minutes_From_Charlotte = reduceArray(minutes_From_Charlotte);

var sorted_Elevations = reduced_Elevations.sort(function(reduced_Elevations , b) { return reduced_Elevations - b; });

var sorted_Elevations_Reverse = sorted_Elevations.reverse();

var sorted_Ashville_Distances = reduced_Minutes_From_Ashville.sort(function(reduced_Minutes_From_Ashville , b) { return reduced_Minutes_From_Ashville - b; });

var sorted_Charlotte_Distances = reduced_Minutes_From_Charlotte.sort(function(reduced_Minutes_From_Charlotte , b) { return reduced_Minutes_From_Charlotte - b; });
    
function print_Ordered_Mountain_elevations() {
    var writeOut = document.getElementById("writeOut1");
    var head = document.getElementById("head1");
    head.innerHTML = "Waterfall Heights";
    var i = 0;
    while (i < locations.length) {
        for (var j = 0; j < locations.length; j++) {
            if (sorted_Elevations_Reverse[i] === locations[j].elevation) {
                
               writeOut.innerHTML += locations[j].elevation + "-Ft " + "<a href=" + "\"" + locations[j].linkPage + "\"" + "target='_blank'" + ">" + locations[j].name + "</a>" + "<br>";  
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

print_Ordered_Mountain_elevations();
print_Ordered_Distance_From_Ashville();
print_Ordered_Distance_From_Charlotte();

$("div.fallsWriteOutArea").hide();
$("h3#head1").hide();
$("h3#head2").hide();
$("h3#head3").hide();
$("p#writeOut1").hide();
$("p#writeOut2").hide();
$("p#writeOut3").hide();


$("input#showWaterfallHeights").on("click", function() {
    $("div.fallsWriteOutArea").show();
    $("h3#head1").toggle();
    $("p#writeOut1").toggle();
    
    $("h3#head2").hide();
    $("h3#head3").hide();
    $("p#writeOut2").hide();
    $("p#writeOut3").hide();
});

$("input#showFromAshville").on("click", function() {
    $("div.fallsWriteOutArea").show();
    $("h3#head2").toggle();
    $("p#writeOut2").toggle();
    
    $("h3#head1").hide();
    $("h3#head3").hide();
    $("p#writeOut1").hide();
    $("p#writeOut3").hide();
    
});

$("input#showFromCharlotte").on("click", function() {
    $("div.fallsWriteOutArea").show();
    $("h3#head3").toggle();
    $("p#writeOut3").toggle();
    
    $("h3#head1").hide();
    $("h3#head2").hide();
    $("p#writeOut1").hide();
    $("p#writeOut2").hide();
        
});