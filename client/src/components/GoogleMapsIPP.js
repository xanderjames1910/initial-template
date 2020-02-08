import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: -0.26697, lng: -75.890312 }} />;
};

// const API_KEY = 'AIzaSyA4tuC_vNiKjqz0S4rWoh11RO9Ruvag2Dk';
const API_KEY = 'AIzaSyAlpNxaCT5VtcxverjooDV1HILDtWFTvBc';

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMapsIPP = () => {
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default GoogleMapsIPP;
