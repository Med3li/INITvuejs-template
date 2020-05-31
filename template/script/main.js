/*!****************************************************************************!*\
  !*** Intro ***!
  \****************************************************************************/
var developer = {
    name: '4Med6li',
    status: '<3',
    extra: "```I'm very interested in facebook```"
};
console.log('Made with', developer.status, 'by', developer.name, 'and in an open moment', developer.name, 'he said', developer.extra);
/*!****************************************************************************!*\
  !*** Charts ***!
  \****************************************************************************/
/*var ctx = document.getElementById('myChart');
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [7, 3, 2],
            backgroundColor: [
                '#4d89ff',
                'transparent',
                'transparent',
            ],
            borderWidth: 0,
        }],
    },
    options:{responsive:false,cutoutPercentage: 80,legend: {
        display: false
    },
    tooltips: {
         enabled: false
    }}
});*/

/*!****************************************************************************!*\
  !*** Map using mapbox-gl ***!
  \****************************************************************************/
/*mapboxgl.accessToken = 'pk.eyJ1IjoiZmVpdGFuIiwiYSI6ImNqdXBxaGQwOTFxOTQ0ZHB3dTU5czZsMjMifQ.EjLC2hSAc-NlyQPa_rb9Mw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            attributionControl: false, //attributionText was here!:not(:work)
            center: [45.913900, 4.687873], // starting position lat,lng
            zoom: 1 // starting zoom
        });
        //markers

        //var marker = new mapboxgl.Marker({"color": "#489AFB"}).setLngLat([45.913900, 4.687873]).addTo(map);
        
        //others

        new mapboxgl.Marker({}).setLngLat([1.913900, 5.682073]).addTo(map);
                //Ukraine
        //new mapboxgl.Marker({'color': "#ffb74e"}).setLngLat([31.776827, 49.471694).addTo(map);
        new mapboxgl.Marker({}).setLngLat([24.913900, 6.697873]).addTo(map);
                //USA
        //new mapboxgl.Marker({color: "#4886ff"}).setLngLat([-52.561284, -9.660323]).addTo(map);
                //Canada
        //new mapboxgl.Marker({color: "#f95476"}).setLngLat([-108.786690, 57.210685]).addTo(map);
                //Russia
        //new mapboxgl.Marker({color: "#b554f9"}).setLngLat([90.110686, 58.335451]).addTo(map);
                //Australia
        //new mapboxgl.Marker({color: "#009688"}).setLngLat([135.770158, -25.676187]).addTo(map);
        new mapboxgl.Marker({}).setLngLat([10.670012, 33.545973]).addTo(map);
        new mapboxgl.Marker({}).setLngLat([-3.034931, 42.134895]).addTo(map);
        new mapboxgl.Marker({}).setLngLat([57.407381, 35.857892]).addTo(map);
        new mapboxgl.Marker({}).setLngLat([-71.559646, 53.829839]).addTo(map);
        new mapboxgl.Marker({}).setLngLat([63.732739, 37.548933]).addTo(map);
        new mapboxgl.Marker({}).setLngLat([9.615785, 30.566991]).addTo(map);


        //control
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
                console.log('Map worked');
                */