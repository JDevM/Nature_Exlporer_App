// To Enter a new park, 
// Create the object w/ createObject() 
// Pass it 4 args
// Then add the object name to the locations array
// And thats it


function createObject(minsFromAsheville, minsFromCharlotte, locationName, googleSearch) {
    var objectName = {
        drive_from_Ashville: minsFromAsheville,
        drive_from_Charlotte: minsFromCharlotte,
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


var Linville_Caverns = createObject(61, 125,"Linville Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Linville+Caverns&oq=Linville+Caverns&gs_l=psy-ab.3..35i39k1j0l8j0i20i263k1.669633.676350.0.676686.3.2.1.0.0.0.239.239.2-1.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.3.508.6...262.t4f9EZB-Z58");

var Boones_Cave = createObject(141, 71, "Boone's Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Boone%27s+Cave&oq=Boone%27s+Cave&gs_l=psy-ab.3..0i71k1l4.6993.6993.0.7042.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.R0DRiqaBBCY");

var Torys_Den = createObject(166, 116, "Tory's Den", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Tory%27s+Den&oq=Tory%27s+Den&gs_l=psy-ab.3..0i71k1l4.8231.8231.0.8333.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.RlZfobpbEEU");

var Rumbling_Bald_Cave = createObject(54, 113, "Rumbling Bald Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Rumbling+Bald+Cave&oq=Rumbling+Bald+Cave&gs_l=psy-ab.3..0i71k1l4.9910.9910.0.9993.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.hgMG8zmQFJw");

var Asheville_Salt_Cave = createObject(3, 125, "Asheville Salt Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Asheville+Salt+Cave&oq=Asheville+Salt+Cave&gs_l=psy-ab.3..0l7j0i67k1j0l2.14519.14519.0.38532.1.1.0.0.0.0.177.177.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.176....0.-tSMfA8SsuM");

var  Bat_Cave = createObject(36, 115, "Bat Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Bat+Cave+NC&oq=Bat+Cave+NC&gs_l=psy-ab.3..0l10.3870.4707.0.5051.3.3.0.0.0.0.236.451.2-2.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.2.449...0i20i263k1j0i67k1.0.KlYsxrIzE0A");

var Luray_Caverns = createObject(342, 300, "Luray Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Luray+Caverns&oq=Luray+Caverns&gs_l=psy-ab.3..0i71k1l4.10246.10246.0.10405.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.qqrYLtAY8Yk");

var Mammoth_Cave = createObject(323, 440, "Mammoth Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Mammoth+Cave&oq=Mammoth+Cave&gs_l=psy-ab.3..0i71k1l4.9019.9019.0.9184.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.LgBZz3MYNi0");

var Grand_Caverns  = createObject(306, 263, "Grand Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Grand+Caverns&oq=Grand+Caverns&gs_l=psy-ab.3..0i71k1l4.9352.9352.0.9470.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.xmKZceIyr-s");

var Shenandoah_Caverns = createObject(329, 286, "Shenandoah Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Shenandoah+Caverns&oq=Shenandoah+Caverns&gs_l=psy-ab.4..0i71k1l4.7584.7584.0.7609.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.HKOv9xLnKJ8");

var Skyline_Caverns = createObject(367, 326, "Skyline Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Skyline+Caverns&oq=Skyline+Caverns&gs_l=psy-ab.3..0i71k1l4.10535.10535.0.10582.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.ah-03wfgokE");

var Endless_Caverns = createObject(327, 287, "Endless Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Endless+Caverns&oq=Endless+Caverns&gs_l=psy-ab.3..0i71k1l4.9534.9534.0.9556.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.p9wAHzn6-Eg");

var Dixie_Caverns = createObject(208, 165, "Dixie Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Dixie+Caverns&oq=Dixie+Caverns&gs_l=psy-ab.3..0i71k1l4.8595.8595.0.8654.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.DZS-bLdFhVk");

var Grottoes_and_Grand_Caverns = createObject(309, 266, "Grottoes and Grand Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Grottoes+and+Grand+Caverns&oq=Grottoes+and+Grand+Caverns&gs_l=psy-ab.3..0i71k1l4.8675.8675.0.8721.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.cffLnMydoVc");

var Natural_Bridge_Caverns_VA = createObject(250, 209, "Natural Bridge Caverns VA", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Natural+Bridge+Caverns+VA&oq=Natural+Bridge+Caverns+VA&gs_l=psy-ab.3..0i71k1l4.14393.14393.0.14546.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.WP7NE1Y45bs");

var Tuckaleechee_Caverns = createObject(144, 258, "Tuckaleechee Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Tuckaleechee+Caverns&oq=Tuckaleechee+Caverns&gs_l=psy-ab.3..0i20i263k1l2j0l8.11346.11346.0.11657.1.1.0.0.0.0.297.297.2-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.296....0.xoqsZrxgbu8");

var Raccoon_Mountain_Caverns = createObject(218, 324, "Raccoon Mountain Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Raccoon+Mountain+Caverns&oq=Raccoon+Mountain+Caverns&gs_l=psy-ab.3..0i71k1l4.9003.9003.0.9040.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.SyVBO74iA5w");

var Forbidden_Caverns = createObject(87, 202, "Forbidden Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Forbidden+Caverns&oq=Forbidden+Caverns&gs_l=psy-ab.3..0i71k1l4.9321.9321.0.9333.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.ySYmCz-CdMg");

var Ruby_Falls = createObject(216, 322, "Ruby Falls", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Ruby+Falls&oq=Ruby+Falls&gs_l=psy-ab.3..0i71k1l4.8210.8210.0.8228.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.PsjtX0g0ieE");

var Cumberland_Caverns = createObject(248, 388, "Cumberland Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Cumberland+Caverns&oq=Cumberland+Caverns&gs_l=psy-ab.3..0i20i263k1j0l9.8650.8650.0.9154.1.1.0.0.0.0.190.190.0j1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.190....0.IPP7rPYtgtw");

var Bristol_Caverns = createObject(94, 198, "Bristol Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Bristol+Caverns&oq=Bristol+Caverns&gs_l=psy-ab.3..0i71k1l4.7848.7848.0.7868.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.iREKHzJ6kzk");

var Dunbar_Cave = createObject(311, 426, "Dunbar Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Dunbar+Cave&oq=Dunbar+Cave&gs_l=psy-ab.3..0i71k1l4.7463.7463.0.7509.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.YLWAY0LcgHk");

var Worleys_Cave = createObject(86, 183, "Worley's Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Worley%27s+Cave&oq=Worley%27s+Cave&gs_l=psy-ab.3..0i71k1l4.37289.37289.0.37343.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.35ogt2n0sSg");

var Bell_Witch_Cave = createObject(311, 427, "Bell Witch Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Bell+Witch+Cave&oq=Bell+Witch+Cave&gs_l=psy-ab.3..0i71k1l4.13952.13952.0.14048.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.R3gO0ZbUeEo");

var Cedars_of_Lebanon = createObject(257, 373, "Cedars of Lebanon", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Cedars+of+Lebanon&oq=Cedars+of+Lebanon&gs_l=psy-ab.3..0i71k1l4.9233.9233.0.9473.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.YIlCc1v9RXo");

var Grundy_State_Forest  = createObject(262, 265, "Grundy State Forest", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Grundy+State+Forest&oq=Grundy+State+Forest&gs_l=psy-ab.3..0i71k1l4.8642.8642.0.8857.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.6KJB4CVxy70");

var Nickajack_Cave = createObject(231, 335, "Nickajack Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Nickajack+Cave&oq=Nickajack+Cave&gs_l=psy-ab.3..0i71k1l4.15687.15687.0.15809.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.cYqNm-2EGLQ");

var The_Lost_Sea = createObject(164, 257, "The Lost Sea Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=the+lost+sea+caverns&oq=The+Lost+Sea+Caver&gs_l=psy-ab.3.0.0i20i263k1l2j0i22i30k1.2176.3046.0.4589.5.5.0.0.0.0.401.720.3-1j1.2.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..3.2.720...0j0i67k1.0.BQAsmucoUVE");

var Louisville_Mega_Cavern = createObject(329, 443, "Louisville Mega Cavern", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Louisville+Mega+Cavern&oq=Louisville+Mega+Cavern&gs_l=psy-ab.3..0i71k1l4.21829.21829.0.21859.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.uDhAjakhazc");

var Lost_River_Cave = createObject(320, 435, "Lost River Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Lost+River+Cave&oq=Lost+River+Cave&gs_l=psy-ab.3..0i71k1l4.8278.8278.0.8323.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.3aP91V9SEeM");

var Diamond_Caverns = createObject(327, 427, "Diamond Caverns", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Diamond+Caverns&oq=Diamond+Caverns&gs_l=psy-ab.3..0i71k1l4.13938.13938.0.14010.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.9jxYAEGuIlg");

var Cub_Run_Cave = createObject(346, 460, "Cub Run Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Cub+Run+Cave&oq=Cub+Run+Cave&gs_l=psy-ab.3..0i71k1l4.8802.8802.0.8826.1.1.0.0.0.0.0.0..0.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.0.0....0.TDWhIacTZKE");

var Ellisons_Cave_and_Pettijohns_Cave = createObject(244, 320, "Ellison's Cave and Pettijohn's Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Ellison%27s+Cave+and+Pettijohn%27s+Cave&oq=Ellison%27s+Cave+and+Pettijohn%27s+Cave&gs_l=psy-ab.3..33i160k1l2.17830.19470.0.19748.2.2.0.0.0.0.371.371.3-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..1.1.370....0.FDzQNljJZks");

var Sittons_Cave = createObject(246, 340, "Sitton's Cave", "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&q=Sitton%27s+Cave&oq=Sitton%27s+Cave&gs_l=psy-ab.3..0j0i67k1j0l2j0i22i30k1.11212.11212.0.11725.1.1.0.0.0.0.359.359.3-1.1.0.dummy_maps_web_fallback...0...1.1.64.psy-ab..0.1.359....0.qa4MCD_lQzc");


/*

var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");
var obName = createObject(ashMins, charMins, "name", "googleSearch");

*/


var locations = [Linville_Caverns, 
                 Boones_Cave, 
                 Torys_Den,
                 Rumbling_Bald_Cave,
                 Asheville_Salt_Cave,
                 Bat_Cave,
                 Luray_Caverns,
                 Mammoth_Cave,
                 Grand_Caverns,
                 Shenandoah_Caverns,
                 Skyline_Caverns, 
                 Endless_Caverns,
                 Dixie_Caverns,
                 Grottoes_and_Grand_Caverns,
                 Natural_Bridge_Caverns_VA,
                 Tuckaleechee_Caverns,
                 Raccoon_Mountain_Caverns,
                 Forbidden_Caverns,
                 Ruby_Falls,
                 Cumberland_Caverns,
                 Bristol_Caverns,
                 Dunbar_Cave,
                 Worleys_Cave,
                 Bell_Witch_Cave,
                 Cedars_of_Lebanon,
                 Grundy_State_Forest,
                 Nickajack_Cave,
                 The_Lost_Sea,
                 Louisville_Mega_Cavern,
                 Lost_River_Cave,
                 Diamond_Caverns,
                 Cub_Run_Cave,
                 Ellisons_Cave_and_Pettijohns_Cave,
                 Sittons_Cave];


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

var reduced_Minutes_From_Ashville = reduceArray(minutes_From_Ashville);
var reduced_Minutes_From_Charlotte = reduceArray(minutes_From_Charlotte);

var sorted_Ashville_Distances = reduced_Minutes_From_Ashville.sort(function(reduced_Minutes_From_Ashville , b) { return reduced_Minutes_From_Ashville - b; });

var sorted_Charlotte_Distances = reduced_Minutes_From_Charlotte.sort(function(reduced_Minutes_From_Charlotte , b) { return reduced_Minutes_From_Charlotte - b; });

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

//print_Ordered_Cave_Lengths();
print_Ordered_Distance_From_Ashville();
print_Ordered_Distance_From_Charlotte();

$("div.caveWriteOutArea").hide();
$("h3#head1").hide();
$("h3#head2").hide();
$("h3#head3").hide();
$("p#writeOut1").hide();
$("p#writeOut2").hide();
$("p#writeOut3").hide();


/*

$("input#caveLengths").on("click", function() {
    $("div.caveWriteOutArea").show();
    $("h3#head1").toggle();
    $("p#writeOut1").toggle();
    
    $("h3#head2").hide();
    $("h3#head3").hide();
    $("p#writeOut2").hide();
    $("p#writeOut3").hide();
});

*/

$("input#showFromAshville").on("click", function() {
    $("div.caveWriteOutArea").show();
    $("h3#head2").toggle();
    $("p#writeOut2").toggle();
    
    $("h3#head1").hide();
    $("h3#head3").hide();
    $("p#writeOut1").hide();
    $("p#writeOut3").hide();
    
});

$("input#showFromCharlotte").on("click", function() {
    $("div.caveWriteOutArea").show();
    $("h3#head3").toggle();
    $("p#writeOut3").toggle();
    
    $("h3#head1").hide();
    $("h3#head2").hide();
    $("p#writeOut1").hide();
    $("p#writeOut2").hide();
        
});