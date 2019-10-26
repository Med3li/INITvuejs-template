/*************Map using mapbox-gl****************/
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZmVpdGFuIiwiYSI6ImNqdXBxaGQwOTFxOTQ0ZHB3dTU5czZsMjMifQ.EjLC2hSAc-NlyQPa_rb9Mw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            attributionControl: false, //attributionText was here!:not(:work)
            center: [45.913900, 4.687873], // starting position lat,lng
            zoom: 1 // starting zoom
        });
        var marker = new mapboxgl.Marker({
            "color": "#489AFB"
        }).setLngLat([45.913900, 4.687873]).addTo(map);
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
        console.log('worked');