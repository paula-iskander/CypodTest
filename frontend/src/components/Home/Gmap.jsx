"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom"; 


export default function Gmap({sensors}) {
  const [selectedSensor, setSelectedSensor] = useState(null);
  const center = sensors.length
    ? { lat: sensors[0].lat, lng: sensors[0].lng }
    : { lat: 25.276987, lng: 55.296249 };
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const height = location.pathname === "/home" ? "60vh" : "100%";
  const topmargin = location.pathname === "/home" ? 12 : 0;
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Box alignSelf={"start"} mx={"auto"} mt={topmargin} style={{ height: height, width: "95%",borderRadius: "10px", overflow: "hidden" }}>
        <Map
          
          defaultZoom={7}
          defaultCenter={center}
          mapId={import.meta.env.VITE_MAP_ID}
          options={{
            gestureHandling: "greedy", // allow mouse drag + scroll zoom
            zoomControl: true,
            streetViewControl: false,
            fullscreenControl: true,
            mapTypeControl: true,
            
          }}
        >
           {sensors.map((sensor) => (
            <AdvancedMarker
              key={sensor.id}
              position={{ lat: sensor.lat, lng: sensor.lng }}
              onClick={() => setSelectedSensor(sensor)}
            >
              <Pin
                background={sensor.status === "on" ? "green" : "red"}
                borderColor="white"
                glyphColor="white"
              />
            </AdvancedMarker>
          ))}

          {selectedSensor && (
            <InfoWindow
              position={{ lat: selectedSensor.lat, lng: selectedSensor.lng }}
              onCloseClick={() => setSelectedSensor(null)}
            >
              <div>
                <strong>{selectedSensor.name}</strong>
                <br />
                Temp: {selectedSensor.temperature}
                <br />
                Humidity: {selectedSensor.humidity}
                <br />
                Power: {selectedSensor.totalPowerConsumption}
              </div>
            </InfoWindow>
          )}
        </Map>
      </Box>
    </APIProvider>
  );
}
