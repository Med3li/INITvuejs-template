export const chartOptions = {
    responsive: false, // I set responsive to false to scale chart js to canvas size (400px*400px) 
}
export const lineOptions = {
    responsive: true,  // I set responsive to true to scale chart js to container size 
}
export const barChartOptions = {
    responsive: true,
    scales: {
        xAxes: [{
            categoryPercentage: .8,
            barPercentage: 1,
            maxBarThickness: 40,
        }]
    }
}
export const barChartOptions2 = {
    responsive: true,
    scales: {
        xAxes: [{
            categoryPercentage: .9,
            barPercentage: 1,
            maxBarThickness: 40,

        }]
    }
}
export const circleProgressOptions = {
    responsive: false,
    cutoutPercentage: 80,
     legend: {
         display: false
     },
     tooltips: {
         enabled: false
     },
}