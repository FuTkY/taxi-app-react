import './App.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import axios from 'axios';

const App = () => {
  const [start, setStart] = useState(null);
  const [startAddress, setStartAddress] = useState('');


  const handleStartAddressChange = (event) => {
    setStartAddress(event.target.value);
  }

  const handleStartSearch = async () => {
    const response = await axios.get('https://api.openrouteservice.org/geocode/search', {
      params: {
        api_key: '5b3ce3597851110001cf62488aae2995cd4942388c56ba27d53c10f8',
        text: startAddress
      }
    });
    const location = response.data.features[0].geometry.coordinates;
    // openrouteservice and react-leaflet have opposite lattitude longitude
    // thats why we cant just set location, and use [location[1], location[0]] instead
    setStart([location[1], location[0]]);
  }

  function ChangeView({ center }) {
    const map = useMap();
    // we can also use setView
    map.flyTo(center);
    return null;
  }

  return (
    <div className="map-page-container">
      <div className="input-container">
        <input
          type="text"
          value={startAddress}
          onChange={handleStartAddressChange}
        />
        <button onClick={handleStartSearch}>Search</button>
      </div>
      <div className="map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
        >
          <ChangeView center={start || [51.505, -0.09]} zoom={13} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {start && (
            <Marker position={start}>
              <Popup>Start</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  )
}

export default App;