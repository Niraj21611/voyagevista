import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents } from "react-leaflet";
import styles from "./Map.module.css";
import { useCities } from "../contexts/CitiesContext";
import {useGeolocation } from "../hooks/useGeolocation"
import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "./Button";
import User from "./User";

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  const {getPosition, isLoading: isLoadingPosition, position: useGeolocationPosition} = useGeolocation();
  const [lat, lng] = useUrlPosition();

  useEffect(
    function () {
      if(lat && lng) setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if(useGeolocationPosition) setMapPosition([useGeolocationPosition.lat, useGeolocationPosition.lng]);
    },
    [useGeolocationPosition]
  );

  return (
    <div className={styles.mapContainer} id="map">
      {!useGeolocationPosition && <Button type="position" onClick={getPosition}>{isLoadingPosition ? "Loading..." : "use your position"}</Button>}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCentre position={mapPosition} />
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

function ChangeCentre({ position }) {
  const map = useMap();   
  map.setView(position);
  return null;
}

function DetectClick(){
    const navigate = useNavigate();
    useMapEvents({
        click: (e)=>{
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    })
}

export default Map;
