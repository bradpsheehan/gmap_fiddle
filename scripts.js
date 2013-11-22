var districts = {
  'a': {
    "type": "Polygon",
    "shapeCoords":
      [
        [42.36697874190961, -71.21809959411621],
        [42.364505489686884, -71.2119197845459],
        [42.36545675206481, -71.20505332946777],
        [42.367295818486056, -71.19767189025879],
        [42.3643786536149, -71.18505477905273],
        [42.3746515457839, -71.180419921875],
        [42.37858270194822, -71.19827270507812],
        [42.38124560340257, -71.21183395385742],
        [42.3669787419096, -71.21809959411621]
      ]
  },
  'b': {
    "type": "Polygon",
    "shapeCoords":
      [
        [42.36676, -71.10596],
        [42.36747, -71.10504],
        [42.37364, -71.10073],
        [42.36834, -71.09425],
        [42.36576, -71.09107],
        [42.36538, -71.09103],
        [42.36479, -71.0894],
        [42.36479, -71.0891],
        [42.36275, -71.08425],
        [42.36233, -71.08365],
        [42.36208, -71.08223],
        [42.36103, -71.08171],
        [42.35924, -71.08704],
        [42.35735, -71.09268],
        [42.35915, -71.09362],
        [42.35997, -71.09468],
        [42.35509, -71.10459],
        [42.3555, -71.10476],
        [42.36032, -71.09519],
        [42.36048, -71.09538],
        [42.3667, -71.10596]
      ],
  },
};

function drawDistrict (points) {
  // takes an array of points and returns a polygon object
  var coords = [],
      districtObject,
      districtColor;

  for(point in points) {
    coords.push(new google.maps.LatLng(points[point][0],points[point][1]));
  }

  districtObject = new google.maps.Polygon({
    paths: coords,
    strokeColor: "#FF7800",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#46461F",
    fillOpacity: 0.50
  });

  google.maps.event.addListener(districtObject,"mouseover",function(){
    this.setOptions({fillColor: "#4d4d4d"});
  });

  google.maps.event.addListener(districtObject,"mouseout",function(){
   this.setOptions({fillColor: "#46461F"});
  });

  console.log(districtObject);

  return districtObject;

}

function initialize() {
  var map,
      boston = new google.maps.LatLng(42.3581, -71.0636),
      mapOptions = {
        center: boston,
        zoom: 13
      };


  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  for(district in districts){
    // console.log(districts[district].shapeCoords);
    drawDistrict(districts[district].shapeCoords).setMap(map);
  }


}

google.maps.event.addDomListener(window, 'load', initialize);
