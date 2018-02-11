// To Enter a new park, 
// Create the object w/ createObject() 
// Pass it 4 args
// Then add the object name to the locations array
// And thats it


function createObject(minsFromAsheville, minsFromCharlotte, locationName, highestElevation, googleSearch) {
    var objectName = {
        drive_from_Ashville: minsFromAsheville,
        drive_from_Charlotte: minsFromCharlotte,
        name: locationName,
        elevation: highestElevation,
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


var Elk_Knob_State_Park = createObject(126, 130, "Elk Knob State Park", 5520, "https://www.google.com/search?source=hp&ei=fGBEWrr5GcScjwTL9LTICg&q=Elk+Knob+State+Park&oq=Elk+Knob+State+Park&gs_l=psy-ab.3..0l2j0i67k1j0j0i67k1j0l5.22585.22585.0.24422.4.1.0.0.0.0.97.97.1.1.0....0...1c.2.64.psy-ab..3.1.96.0...0.8gwTMdqfDIE");

var Mount_Jefferson_State_Park = createObject(144, 127, "Mount Jefferson State Park", 4665 , "https://www.google.com/search?q=Mount+Jefferson+State+Park&rlz=1C5CHFA_enUS728US728&oq=Mount+Jefferson+State+Park&aqs=chrome..69i57j0l5.988j0j7&sourceid=chrome&ie=UTF-8");

var New_River_State_Park = createObject(156, 128, "New River State Park", 2716, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=vmREWqzeEYLPjwSomLnQBA&q=New+River+State+Park&oq=New+River+State+Park&gs_l=psy-ab.3..35i39k1l2j0l8.37348.38722.0.41299.9.9.0.0.0.0.109.713.6j2.8.0....0...1c.1.64.psy-ab..1.7.614...0i22i30k1j0i20i263k1j0i20i263i46k1j46i20i263k1.0.wKcCh7_sbWo");

var Grandfather_Mountain_State_Park = createObject(97, 139, "Grandfather Mountain State Park", 5946, "https://www.google.com/search?q=Grandfather+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Grandfather+Mountain+State+Park&aqs=chrome..69i57.164j0j4&sourceid=chrome&ie=UTF-8");

var Gorges_State_Park = createObject(69, 166, "Gorges State Park", 1900, "https://www.google.com/search?q=Gorges+State+Park&rlz=1C5CHFA_enUS728US728&oq=Gorges+State+Park&aqs=chrome..69i57j0l2j35i39j0l2.1588j0j4&sourceid=chrome&ie=UTF-8");

var Roan_Mountain_State_Park = createObject(86, 147, "Roan Mountain State Park", 6285, "https://www.google.com/search?q=Roan+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Roan+Mountain+State+Park&aqs=chrome..69i57j0l5.861j0j4&sourceid=chrome&ie=UTF-8");

var Mount_Rogers_State_Park = createObject(170, 152, "Mount Rogers State Park", 5729, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=jWhEWpnvAaHejwTLvqzYAg&q=Mount+Rogers+State+Park&oq=Mount+Rogers+State+Park&gs_l=psy-ab.3..0l3j0i22i30k1.26227.26227.0.26980.1.1.0.0.0.0.92.92.1.1.0....0...1c.2.64.psy-ab..0.1.91....0.zrt_XEotRUU");

var Lake_James_State_Park = createObject(56, 93, "Lake James State Park", 1200, "https://www.google.com/search?q=Lake+James+State+Park&rlz=1C5CHFA_enUS728US728&oq=Lake+James+State+Park&aqs=chrome..69i57j0l2j35i39j0l2.884j0j4&sourceid=chrome&ie=UTF-8");

var South_Mountain_State_Park = createObject(80, 82, "South Mountain State Park", 2291, "https://www.google.com/search?q=South+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=South+Mountain+State+Park&aqs=chrome..69i57j0l5.963j0j4&sourceid=chrome&ie=UTF-8");

var Hanging_Rock_State_Park = createObject(177, 115, "Hanging Rock State Park", 2579, "https://www.google.com/search?q=Hanging+Rock+State+Park&rlz=1C5CHFA_enUS728US728&oq=Hanging+Rock+State+Park&aqs=chrome..69i57j69i60j0l4.628j0j4&sourceid=chrome&ie=UTF-8");

var Mount_Mitchell_State_Park = createObject(88, 150, "Mount Mitchell State Park", 6684, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=JHBEWsCBI6KijwTa6r-4CQ&q=Mount+Mitchell+State+Park&oq=Mount+Mitchell+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.183513.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.dx-gV7HBx0Q");

var Morrow_Mountain_State_Park = createObject(178, 65, "Morrow Mountain State Park", 1100, "https://www.google.com/search?q=Morrow+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Morrow+Mountain+State+Park&aqs=chrome..69i57j0l5.820j0j4&sourceid=chrome&ie=UTF-8");

var Crowders_Mountain_State_Park = createObject(100, 34, "Crowders Mountain State Park", 1624, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=znJEWvbjLIbBjwS1spTYAw&q=crowders+mountain+state+park&oq=crowders+mountain+state+park&gs_l=psy-ab.3..0i71k1l4.0.0.0.2836.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.3NltkUNzD_U");

var Lake_Norman_State_Park = createObject(101, 43, "Lake Norman State Park", 800, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=GHREWs3_JeaijwSjxqDYDw&q=Lake+Norman+State+Park&oq=Lake+Norman+State+Park&gs_l=psy-ab.3..35i39k1l2j0l8.6361.10681.0.14349.4.4.0.0.0.0.94.349.4.4.0....0...1c.1.64.psy-ab..0.4.347...0i13k1.0.GW1lQv_-n7s");

var Pilot_Mountain_State_Park = createObject(158, 98, "Pilot Mountain State Park", 2421, "https://www.google.com/search?q=Pilot+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Pilot+Mountain+State+Park&aqs=chrome..69i57j0l5.3404j0j4&sourceid=chrome&ie=UTF-8");

var Stone_Mountain_State_Park = createObject(146, 90, "Stone Mountain State Park", 2305, "https://www.google.com/search?q=Stone+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Stone+Mountain+State+Park&aqs=chrome..69i57j0l4j35i39.646j0j4&sourceid=chrome&ie=UTF-8");

var Chimney_Rock_State_Park = createObject(55, 124, "Chimney Rock State Park", 2280, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=l3VEWpiiPILbjwTBmqfQAQ&q=Chimney+Rock+State+Park&oq=Chimney+Rock+State+Park&gs_l=psy-ab.3..35i39k1j0l9.42839.42839.0.43656.1.1.0.0.0.0.84.84.1.1.0....0...1c.2.64.psy-ab..0.1.83....0.H9YZ1KF4iac");

var Mayo_River_State_Park = createObject(178, 115, "Mayo River State Park", 800, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=WnZEWtikNcOR_QahyoK4DA&q=Mayo+River+State+Park&oq=Mayo+River+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.4958.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.ErG55ldFsIU");

var Haw_River_State_Park_Iron_Ore_Belt = createObject(176, 107, "Haw River State Park Iron Ore Belt", 600, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=CHlEWoHgKciijwSeh7qYCA&q=Haw+River+State+Park+Iron+Ore+Belt&oq=Haw+River+State+Park+Iron+Ore+Belt&gs_l=psy-ab.3..0.83076.83076.0.83833.1.1.0.0.0.0.92.92.1.1.0....0...1c.2.64.psy-ab..0.1.92....0.eLf8ro5R-Tw");

var Occoneechee_Mountain_State_Park = createObject(199, 122, "Occoneechee Mountain State Park", 867, "https://www.google.com/search?q=Occoneechee+Mountain+State+Park&rlz=1C5CHFA_enUS728US728&oq=Occoneechee+Mountain+State+Park&aqs=chrome..69i57j0l2.1363j0j4&sourceid=chrome&ie=UTF-8");

var Eno_River_State_Park = createObject(207, 130, "Eno River State Park", 600, "https://www.google.com/search?q=Eno+River+State+Park&rlz=1C5CHFA_enUS728US728&oq=Eno+River+State+Park&aqs=chrome..69i57j0l5.300j0j4&sourceid=chrome&ie=UTF-8");

var Jordan_Lake_State_Recreation_Area = createObject(214, 135, "Jordan Lake State Recreation Area", 216, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=_HtEWtKzL4aPjwTO2b7oCw&q=Jordan+Lake+State+Recreation+Area&oq=Jordan+Lake+State+Recreation+Area&gs_l=psy-ab.3..0i67k1j0j0i30k1l8.32023.32023.0.32349.1.1.0.0.0.0.91.91.1.1.0....0...1c.1.64.psy-ab..0.1.91....0.0LEAtk4AfcA");

var Raven_Rock_State_Park = createObject(231, 151, "Raven Rock State Park", 700, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=wHxEWoy_EcKMjwSp_oHQDg&q=Raven+Rock+State+Park&oq=Raven+Rock+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.29427.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.D-Neb3_cf20");

var Weymouth_Woods_Sandhills_Nature_Preserve = createObject(228, 127, "Weymouth Woods-Sandhills Nature Preserve", 400, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=lH1EWv3VKOHSjwTQ9amgDA&q=Weymouth+Woods-Sandhills+Nature+Preserve&oq=Weymouth+Woods-Sandhills+Nature+Preserve&gs_l=psy-ab.3..0i71k1l4.0.0.0.1696.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.9CnQkLxbrp8");

var Kerr_Lake_Recreation_Area = createObject(250, 174, "Kerr Lake Recreation Area", 100, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=PH5EWuCVAuvGjwSRl6nQDw&q=Kerr+Lake+Recreation+Area&oq=Kerr+Lake+Recreation+Area&gs_l=psy-ab.3..0i71k1l4.0.0.0.106441.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.gT4yicWEAVo");

var Medoc_Mountain_State_Park = createObject(284, 209, "Medoc Mountain State Park", 325, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=P39EWoT3KozCjwTH47awCw&q=Medoc+Mountain+State+Park&oq=Medoc+Mountain+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.1292.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.uqzdrq__QmA");

var Merchants_Millpond_State_Park = createObject(369, 292, "Merchants Millpond State Park", 100, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=BoBEWr_qK4u7jwTAgo2QDw&q=Merchants+Millpond+State+Park&oq=Merchants+Millpond+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.2100.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vHtyk0wkgzM");

var Dismal_Swamp_State_Park = createObject(394, 318, "Dismal Swamp State Park", 100, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=kIBEWo37B5TljwSN3L3oAg&q=Dismal+Swamp+State+Park&oq=Dismal+Swamp+State+Park&gs_l=psy-ab.3..0l3j0i22i30k1l7.63430.72276.0.72788.2.2.0.0.0.0.89.89.1.1.0....0...1c.2.64.psy-ab..1.1.89....0.aUHbZ3qX7fQ");

var Jockeys_Ridge_State_Park = createObject(416, 341, "Jockeys Ridge State Park", 10, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=N4FEWsixBMu-jwSX54b4Dw&q=Jockey%27s+Ridge+State+Park&oq=Jockey%27s+Ridge+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.66173.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.C7SFw8VYN2E");

var Pettigrew_State_Park = createObject(370, 295, "Pettigrew State Park", 40, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=zYFEWs3kPMemjwT0tpbQDA&q=Pettigrew+State+Park&oq=Pettigrew+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.30677.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.6TkNlLg_h-s");

var Goose_Creek_State_Park = createObject(346, 268, "Goose Creek State Park", 20, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=TYJEWoLLK4y3jwTkjqi4CA&q=Goose+Creek+State+Park&oq=Goose+Creek+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.40654.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.Ev6o58mrWOE");

var Cliffs_of_the_Neuse_State_Park = createObject(297, 222, "Cliffs of the Neuse State Park", 90, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=1YJEWsz3FOPjjwSvyrzIBA&q=Cliffs+of+the+Neuse+State+Park&oq=Cliffs+of+the+Neuse+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.67414.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.bU3rQ7edsMA");

var Fort_Macon_State_Park = createObject(391, 313, "Fort Macon State Park", 10, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=uINEWuTiHsrbjwSiw7PYAw&q=Fort+Macon+State+Park&oq=Fort+Macon+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.30038.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.tGwp4Y0Plio");

var Hammocks_Beach_State_Park = createObject(367, 286, "Hammocks Beach State Park", 10, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=HYREWpbENcnXjwS_voHACw&q=Hammocks+Beach+State+Park&oq=Hammocks+Beach+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.104190.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.m2aJB6Lbt5A");

var Carvers_Creek_State_Park = createObject(244, 157, "Carvers Creek State Park", 200, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=wIREWt30GYbXjwTnrpyIAw&q=Carvers+Creek+State+Park&oq=Carvers+Creek+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.36981.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.HAWRVzYViQk");

var Jones_Lake_State_Park = createObject(295, 180, "Jones Lake State Park", 300, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=goVEWpDWDoq9jwT7grTwBw&q=Jones+Lake+State+Park&oq=Jones+Lake+State+Park&gs_l=psy-ab.3..0l7j0i30k1l3.3417.8513.0.9328.6.6.0.0.0.0.143.600.5j1.6.0....0...1c.1.64.psy-ab..1.5.501...0i13k1j0i7i30k1.0.iu-DSD4cQPs");

var Singletary_Lake_State_Park = createObject(304, 189, "Singletary Lake State Park", 200, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=-IVEWvqTLMOkjwTe2L-IBg&q=Singletary+Lake+State+Park&oq=Singletary+Lake+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.30325.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.3C2zgF57-Yw");

var Lumber_River_State_Park = createObject(274, 156, "Lumber River State Park", 100, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=VIZEWuulOurTjwS-u6boBg&q=Lumber+River+State+Park&oq=Lumber+River+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.34195.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.RsRLitmzf6E");

var Lake_Waccamaw_State_Park = createObject(310, 194, "Lake Waccamaw State Park", 200, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=yYZEWom4JqfWjwTLtLaoCQ&q=Lake+Waccamaw+State+Park&oq=Lake+Waccamaw+State+Park&gs_l=psy-ab.3..0i71k1l4.0.0.0.34628.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.CjrYcSI1pnk");

var Carolina_Beach_State_Park = createObject(345, 227, "Carolina Beach State Park", 10, "https://www.google.com/search?q=Carolina+Beach+State+Park&rlz=1C5CHFA_enUS728US728&oq=Carolina+Beach+State+Park&aqs=chrome..69i57j0l5.180j0j4&sourceid=chrome&ie=UTF-8");

var Fort_Fisher_State_Recreation_Area = createObject(357, 239, "Fort Fisher State Recreation Area", 10, "https://www.google.com/search?q=Fort+Fisher+State+Recreation+Area&rlz=1C5CHFA_enUS728US728&oq=Fort+Fisher+State+Recreation+Area&aqs=chrome..69i57j0l5.122j0j4&sourceid=chrome&ie=UTF-8");

var William_B_Umstead_State_Park = createObject(220, 146, "William B Umstead State Park", 200, "https://www.google.com/search?q=William+B+Umstead+State+Park&rlz=1C5CHFA_enUS728US728&oq=William+B+Umstead+State+Park&aqs=chrome..69i57j0l5.140j0j4&sourceid=chrome&ie=UTF-8");

var Table_Rock_State_Park_SC = createObject(63, 130, "Table Rock State Park SC", 3124, "https://www.google.com/search?q=Table+Rock+State+Park+SC&rlz=1C5CHFA_enUS728US728&oq=table+Rock+State+Park+SC&aqs=chrome.0.69i59j69i65l2j69i60l3.1454j0j4&sourceid=chrome&ie=UTF-8");

var Great_Smokey_Mountains_National_Park = createObject(49, 244, "Great Smokey Mountains National Park", 6643, "https://www.google.com/search?rlz=1C5CHFA_enUS728US728&ei=VZBEWtu1LsKSjwTCubPYDA&q=Great+Smoky+Mountains+National+Park&oq=Great+Smoky+Mountains+National+Park&gs_l=psy-ab.3..35i39k1j0i20i263k1j0l8.5479.17007.0.17899.5.5.0.0.0.0.227.587.4j0j1.5.0....0...1c.1.64.psy-ab..0.5.584....0.y4Hms6O-6wo");

/*


var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");
var location = createObject(minAsh, minChar, "nam", elevation, "googleSearch");



*/


// Try to find a way in the constructor function to auto push to locations array


var locations = [Elk_Knob_State_Park, 
                 Mount_Jefferson_State_Park, 
                 New_River_State_Park, 
                 Grandfather_Mountain_State_Park, 
                 Gorges_State_Park, 
                 Roan_Mountain_State_Park, 
                 Mount_Rogers_State_Park, 
                 Lake_James_State_Park, 
                 South_Mountain_State_Park, 
                 Hanging_Rock_State_Park, 
                 Mount_Mitchell_State_Park, 
                 Morrow_Mountain_State_Park, 
                 Crowders_Mountain_State_Park, 
                 Lake_Norman_State_Park, 
                 Pilot_Mountain_State_Park, 
                 Stone_Mountain_State_Park, 
                 Chimney_Rock_State_Park, 
                 Mayo_River_State_Park, 
                 Haw_River_State_Park_Iron_Ore_Belt, 
                 Occoneechee_Mountain_State_Park, 
                 Eno_River_State_Park, 
                 Jordan_Lake_State_Recreation_Area, 
                 Raven_Rock_State_Park, 
                 Weymouth_Woods_Sandhills_Nature_Preserve, 
                 Kerr_Lake_Recreation_Area, 
                 Medoc_Mountain_State_Park, 
                 Merchants_Millpond_State_Park, 
                 Dismal_Swamp_State_Park, 
                 Jockeys_Ridge_State_Park, 
                 Pettigrew_State_Park, 
                 Goose_Creek_State_Park, 
                 Cliffs_of_the_Neuse_State_Park, 
                 Fort_Macon_State_Park, 
                 Hammocks_Beach_State_Park, 
                 Carvers_Creek_State_Park, 
                 Jones_Lake_State_Park, 
                 Singletary_Lake_State_Park, 
                 Lumber_River_State_Park, 
                 Lake_Waccamaw_State_Park, 
                 Carolina_Beach_State_Park, 
                 Fort_Fisher_State_Recreation_Area, 
                 William_B_Umstead_State_Park, 
                 Table_Rock_State_Park_SC, 
                 Great_Smokey_Mountains_National_Park
                ];

var highestElevations = [];
for (var i = 0; i < locations.length; i++) {
    highestElevations.push(locations[i].elevation);
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

var reduced_Highest_Elevations = reduceArray(highestElevations);
var reduced_Minutes_From_Ashville = reduceArray(minutes_From_Ashville);
var reduced_Minutes_From_Charlotte = reduceArray(minutes_From_Charlotte);

var sorted_Highest_Elevations = reduced_Highest_Elevations.sort(function(reduced_Highest_Elevations , b) { return reduced_Highest_Elevations - b; });
//var sorted_lakeSizes_Reverse = sorted_lakeSizes.reverse();
var sorted_Highest_Elevations_Reversed = sorted_Highest_Elevations.reverse();

var sorted_Ashville_Distances = reduced_Minutes_From_Ashville.sort(function(reduced_Minutes_From_Ashville , b) { return reduced_Minutes_From_Ashville - b; });
var sorted_Charlotte_Distances = reduced_Minutes_From_Charlotte.sort(function(reduced_Minutes_From_Charlotte , b) { return reduced_Minutes_From_Charlotte - b; });



function print_Ordered_Highest_Elevations() {
    var writeOut = document.getElementById("writeOut1");
    var head = document.getElementById("head1");
    head.innerHTML = "Elevation";
    var i = 0;
    while (i < locations.length) {
        for (var j = 0; j < locations.length; j++) {
            if (sorted_Highest_Elevations_Reversed[i] === locations[j].elevation) {
                
                 writeOut.innerHTML += locations[j].elevation + "' " + "<a href=" + "\"" + locations[j].linkPage + "\"" + "target='_blank'" + ">" + locations[j].name + "</a>" + "<br>";
                
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

var park_Count = document.getElementById("countWriteout");
park_Count.innerHTML = "Total: " + locations.length + " State Parks";   


print_Ordered_Highest_Elevations();
print_Ordered_Distance_From_Ashville();
print_Ordered_Distance_From_Charlotte();

$("div.stateParkWriteOutArea").hide();
$("h3#head1").hide();
$("h3#head2").hide();
$("h3#head3").hide();
$("p#writeOut1").hide();
$("p#writeOut2").hide();
$("p#writeOut3").hide();


$("input#showElevations").on("click", function() {
    $("div.stateParkWriteOutArea").show();
    $("h3#head1").toggle();
    $("p#writeOut1").toggle();
    
    $("h3#head2").hide();
    $("h3#head3").hide();
    $("p#writeOut2").hide();
    $("p#writeOut3").hide();
});

$("input#showFromAshville").on("click", function() {
    $("div.stateParkWriteOutArea").show();
    $("h3#head2").toggle();
    $("p#writeOut2").toggle();
    
    $("h3#head1").hide();
    $("h3#head3").hide();
    $("p#writeOut1").hide();
    $("p#writeOut3").hide();
    
});

$("input#showFromCharlotte").on("click", function() {
    $("div.stateParkWriteOutArea").show();
    $("h3#head3").toggle();
    $("p#writeOut3").toggle();
    
    $("h3#head1").hide();
    $("h3#head2").hide();
    $("p#writeOut1").hide();
    $("p#writeOut2").hide();
        
});

// 1007 Woodhurst dr