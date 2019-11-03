//Gets all the information

function LocationPull () {
  var impacted = true
  var locationData = [["11630","San Francisco County, California","06","075"],["7468","Berks County, Pennsylvania","42","011"],
  ["10014","Bucks County, Pennsylvania","42","017"],["354","Anderson County, Kentucky","21","005"],
  ["15356","New York County, New York","36","061"],["2611","Adams County, Pennsylvania","42","001"],
  ["21029","Allegheny County, Pennsylvania","42","003"],
  ["1983","Armstrong County, Pennsylvania","42","005"],
  ["3619","Beaver County, Pennsylvania","42","007"],
  ["1947","Bedford County, Pennsylvania","42","009"],
  ["7468","Berks County, Pennsylvania","42","011"],
  ["2581","Blair County, Pennsylvania","42","013"],
  ["2321","Bradford County, Pennsylvania","42","015"],
  ["10014","Bucks County, Pennsylvania","42","017"],
  ["4508","Butler County, Pennsylvania","42","019"],
  ["4365","Cambria County, Pennsylvania","42","021"],
  ["1184","Carbon County, Pennsylvania","42","025"],
  ["3299","Centre County, Pennsylvania","42","027"],
  ["8999","Chester County, Pennsylvania","42","029"],
  ["1565","Clarion County, Pennsylvania","42","031"],
  ["2322","Clearfield County, Pennsylvania","42","033"],
  ["1299","Clinton County, Pennsylvania","42","035"],
  ["2218","Columbia County, Pennsylvania","42","037"],
  ["3240","Crawford County, Pennsylvania","42","039"],
  ["4262","Cumberland County, Pennsylvania","42","041"],
  ["4669","Dauphin County, Pennsylvania","42","043"],
  ["9098","Delaware County, Pennsylvania","42","045"],
  ["698","Elk County, Pennsylvania","42","047"],
  ["5218","Erie County, Pennsylvania","42","049"],
  ["2735","Fayette County, Pennsylvania","42","051"],
  ["2304","Franklin County, Pennsylvania","42","055"],
  ["1016","Greene County, Pennsylvania","42","059"],
  ["1825","Huntingdon County, Pennsylvania","42","061"],
  ["2505","Indiana County, Pennsylvania","42","063"],
  ["1476","Jefferson County, Pennsylvania","42","065"],
  ["814","Juniata County, Pennsylvania","42","067"],
  ["4120","Lackawanna County, Pennsylvania","42","069"],
  ["8112","Lancaster County, Pennsylvania","42","071"],
  ["2115","Lawrence County, Pennsylvania","42","073"],
  ["2422","Lebanon County, Pennsylvania","42","075"],
  ["5457","Lehigh County, Pennsylvania","42","077"],
  ["6588","Luzerne County, Pennsylvania","42","079"],
  ["3455","Lycoming County, Pennsylvania","42","081"],
  ["1235","McKean County, Pennsylvania","42","083"],
  ["3254","Mercer County, Pennsylvania","42","085"],
  ["1045","Mifflin County, Pennsylvania","42","087"],
  ["1883","Monroe County, Pennsylvania","42","089"],
  ["14442","Montgomery County, Pennsylvania","42","091"],
  ["5077","Northampton County, Pennsylvania","42","095"],
  ["2289","Northumberland County, Pennsylvania","42","097"],
  ["1630","Perry County, Pennsylvania","42","099"],
  ["17974","Philadelphia County, Pennsylvania","42","101"],
  ["913","Pike County, Pennsylvania","42","103"],
  ["3822","Schuylkill County, Pennsylvania","42","107"],
  ["1215","Snyder County, Pennsylvania","42","109"],
  ["2730","Somerset County, Pennsylvania","42","111"],
  ["1552","Susquehanna County, Pennsylvania","42","115"],
  ["1453","Tioga County, Pennsylvania","42","117"],
  ["1049","Union County, Pennsylvania","42","119"],
  ["1618","Venango County, Pennsylvania","42","121"],
  ["1209","Warren County, Pennsylvania","42","123"],
  ["4613","Washington County, Pennsylvania","42","125"],
  ["1196","Wayne County, Pennsylvania","42","127"],
  ["6913","Westmoreland County, Pennsylvania","42","129"],
  ["1248","Wyoming County, Pennsylvania","42","131"],
  ["7543","York County, Pennsylvania","42","133"]]

  var countyElement = document.getElementById("county").value;
  var stateElement = document.getElementById("state").value;
  var lookUp = countyElement.toString().concat(", ", stateElement.toString());
  var found = false;
  var population = 0;
  var counterX = 0;
  var counterY = 0;

  for(x in locationData){
    
    for(y in locationData[x]){
      if(locationData[x][y] == lookUp){
        found = true
        population = locationData[x][0]
        break
      }else{
        continue
      }
      counterY++
    }
    
    if(found){
      break
    }
    counterX++
  }
  if ((population > 1000 && impacted) && found) {
    var newNode = document.createElement("div");
    newNode.className = "alert alert-danger";
    newNode.innerHTML = "Critical Area";
    document.getElementById("dd").appendChild(newNode);
  } else if ((population < 1000 && impacted) && found) {
    var newNode = document.createElement("div");
    newNode.className = "alert alert-warning";
    newNode.innerHTML = "Response Required";
    document.getElementById("dd").appendChild(newNode);
  } else if(impacted == false && found){
    var newNode = document.createElement("div");
    newNode.className = "alert alert-success";
    newNode.innerHTML = "No Response Needed";
    document.getElementById("dd").appendChild(newNode);
  } else{
    var newNode = document.createElement("div");
    newNode.className = "alert alert-success";
    newNode.innerHTML = "Search area not found";
    document.getElementById("dd").appendChild(newNode);
  }
};

