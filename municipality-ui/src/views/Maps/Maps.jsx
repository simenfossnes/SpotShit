import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";


let db = require("fetchRequest");

let posTest;

Promise.resolve(db.dbStatement("where=id&equal=16")).then((res) => {
  posTest = JSON.parse(res[0].loc);
  console.log(posTest);
});

const CustomSkinMap = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={13}

        defaultCenter={{  lat: 58.163726,
                          lng: 7.999950 }}
        defaultOptions={{
            scrollwheel: false,
            zoomControl: true,
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}] }}
    >
        <Marker
            position={{ lat: 58.163726,
                        lng: 7.999950,
                        }}
        />
    </GoogleMap>
));

class Maps extends React.Component{
    render(){
        return (
            <CustomSkinMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDO9nxm1rw9VYKZQSwNuga2o1tXc9kwG8s"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default Maps;
