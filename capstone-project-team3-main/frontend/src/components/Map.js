import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { supported } from "@mapbox/mapbox-gl-supported";

import "mapbox-gl/dist/mapbox-gl.css";
import "../css/Resources.css";

const coordsForMiddleOfUS = { latitude: 39.8283, longitude: -98.5795 };
const colorMap = {
    "GENPOPSHEL": "#6495ed", // General Shelters blue
    "EMEREVAC": "#ff4d4d", // Emergency Shelters red
};

function Map(props) {
    
    const mapContainerRef = useRef(null);
    const markersRef = useRef([]);

    const [map, setMap] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    const { mapData, loading, setAlert, selectedShelter } = props;

    useEffect(() => {

        // Do not load the map if the data is still loading or if the map is already loaded
        if(loading || mapLoaded){
            return;
        }
        
        // Check if the browser supports WebGL
        if (!supported()) {
            setAlert("Your browser does not support WebGL, which is required to display the map.");
            return;
        }

        // Check if the mapData data is empty
        if(!mapData){
            setAlert("Unable to load shelter data. Please try again later.");
            return;
        }

        // Set the access token
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

        // Initialize the map
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [coordsForMiddleOfUS.longitude, coordsForMiddleOfUS.latitude],
            zoom: 3,
        });

        // Add zoom and rotation controls to the map
        map.addControl(new mapboxgl.NavigationControl());

        // Add fullscreen control to the map
        map.addControl(new mapboxgl.FullscreenControl());

        // Add scale control to the map
        map.addControl(new mapboxgl.ScaleControl());

        // Add attribution control to the map
        map.addControl(
            new mapboxgl.AttributionControl({
                compact: true,
            })
        );

        // Define geolocate control
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: false,
            showAccuracyCircle: true,
            showUserLocation: true
        });

        // Zoom to the user's location once it's found
        geolocate.on("geolocate", event => {
            map.flyTo({
                center: [event.coords.longitude, event.coords.latitude],
                zoom: 10,
            });
        });

        // Add geolocate control to the map
        map.addControl(geolocate);
        
        // Disable map rotation using right click + drag
        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();

        // Set the map state and loaded state
        setMap(map);
        setMapLoaded(true);

    }, [mapData, loading, setAlert, mapLoaded]);

    useEffect(() => {
        if (map && mapData && mapLoaded) {
          // Remove existing markers from the map before adding new ones
          markersRef.current.forEach(marker => marker.remove());
          markersRef.current = []; // Reset markers
    
          // Add new markers for each shelter
          mapData.forEach(shelter => {
            try {
              let shelterDetails = shelter.properties;
              let coordinates = shelter.geometry.coordinates; // [longitude, latitude]
    
              // Create google map link from the address
              let googleMapLink = `https://www.google.com/maps/search/?api=1&query=${shelterDetails.address}+${shelterDetails.city}+${shelterDetails.state}`;
    
              const shelterAddress = `${shelterDetails.address}, ${shelterDetails.city}, ${shelterDetails.state}`;
    
              shelterDetails.total_population = shelterDetails.total_population === undefined ? "N/A" : shelterDetails.total_population;
              shelterDetails.evacuation_capacity = shelterDetails.evacuation_capacity === undefined ? "N/A" : shelterDetails.evacuation_capacity;
              shelterDetails.post_impact_capacity = shelterDetails.post_impact_capacity === undefined ? "N/A" : shelterDetails.post_impact_capacity;
    
              if (!shelterDetails.pet_accommodations_code || shelterDetails.pet_accommodations_code.trim() === "") {
                shelterDetails.pet_accommodations_code = undefined;
              }
    
              if (!shelterDetails.wheelchair_accessible || shelterDetails.wheelchair_accessible.trim() === "") {
                shelterDetails.wheelchair_accessible = undefined;
              }

              let color = colorMap[shelterDetails.subfacility_code] || "#000000"; // Default color if not found in the map
    
              // Create the marker
              const marker = new mapboxgl.Marker({ color: color })
                .setLngLat([coordinates[0], coordinates[1]])
                .setPopup(new mapboxgl.Popup().setHTML(
                  `<div class="popup-content">
                    <h3>${shelterDetails.shelter_name}</h3>
                    <p><strong>Address: </strong><a href="${googleMapLink}" target="_blank">${shelterAddress}</a><p>
                    <p><strong>Current Status:</strong> ${shelterDetails.shelter_status || "N/A"}</p>
                    <p><strong>Related Organization:</strong> ${shelterDetails.org_name || "N/A"}</p>
                    <p><strong>Number of Occupants:</strong> ${shelterDetails.total_population || "N/A"}</p>
                    <p><strong>Maximum Occupants:</strong> ${shelterDetails.evacuation_capacity || shelterDetails.post_impact_capacity || "N/A"}</p>
                    <p><strong>Wheelchair Accessible:</strong> ${shelterDetails.wheelchair_accessible || "N/A"}</p>
                    <p><strong>Pets Allowed:</strong> ${shelterDetails.pet_accommodations_code || "N/A"}</p>
                  </div>`
                ))
                .addTo(map);
    
              // Add the marker to the markers array
              markersRef.current.push(marker);
            } catch (err) {
              console.error("Error adding shelter marker:", err);
              setAlert("Failed to load shelter data. Please try again later.");
            }
          });
    }
    }, [map, mapData, mapLoaded, setAlert]);

    useEffect(() => {
        if (map && selectedShelter) {
            // Highlight the selected shelter by opening its popup
            const { geometry, properties } = selectedShelter;
            const shelterAddress = `${properties.address}, ${properties.city}, ${properties.state}`;
            const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${properties.address}+${properties.city}+${properties.state}`;
            const popup = new mapboxgl.Popup()
                .setLngLat(geometry.coordinates)
                .setHTML(
                    `<div class="popup-content">
                        <h3>${properties.shelter_name}</h3>
                        <p><strong>Address: </strong><a href="${googleMapLink}" target="_blank">${shelterAddress}</a></p>
                        <p><strong>Current Status:</strong> ${properties.shelter_status || "N/A"}</p>
                        <p><strong>Related Organization:</strong> ${properties.org_name || "N/A"}</p>
                        <p><strong>Number of Occupants:</strong> ${properties.total_population || "N/A"}</p>
                        <p><strong>Maximum Occupants:</strong> ${properties.evacuation_capacity || properties.post_impact_capacity || "N/A"}</p>
                        <p><strong>Wheelchair Accessible:</strong> ${properties.wheelchair_accessible || "N/A"}</p>
                        <p><strong>Pets Allowed:</strong> ${properties.pet_accommodations_code || "N/A"}</p>
                    </div>`
                )
                .addTo(map);

            // Remove the popup when the selection changes
            return () => popup.remove();
        }
    }, [map, selectedShelter]);

    return (
        <div className="map-placeholder">
            <div id="map" ref={mapContainerRef} />
        </div>
    );    
}

export default Map;
