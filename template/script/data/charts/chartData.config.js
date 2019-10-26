export const pieChartData = {
    labels: ['Male', 'Female', 'Undefined'],
    datasets: [{
        label: '# of Votes',
        data: [2, 3, 7],
        backgroundColor: [
            '#4d89ff',
            '#48daff',
            '#f95476',
        ],
        borderWidth: 0
    }],
}
export const doughnutChartData = {
    labels: ['Shoes', 'Lingerie', 'Denim', 'Suits'],
    datasets: [{
        label: '# of Votes',
        data: [1, 3, 4, 4],
        backgroundColor: [
            '#48daff',
            '#ffb74e',
            '#b554f9',
            '#f95476',
        ],
        borderWidth: 0
    }]
}
export const lineChartData = {
    labels: [' ', '10 sec', '20 sec', '30 sec', '40 sec', '50 sec', '60 sec', ' '],
    datasets: [{
        label: 'CPU',
        data: [50, 85, 30, 70, 50, 74, 31, 50],
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#4d89ff'
    }, {
        data: [35, 80, 40, 70, 37.5, 62.5, 20, 30],
        label: 'Memory',
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#48daff'
    }, {
        data: [55, 30, 75, 55, 85, 40, 70, 40],
        label: 'Disc (C: D:)',
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#f95476'
    }]
}
export const lifeChartData = {
  labels: ['', '', '', '', '', '', '','','','','','','','','','','',],
    datasets: [{
        label: 'Processes',
        data: [0+'%',2,1,1.5,1.2,2.1,3,1.6,0.8,1,1.5,1.2,2.7,5.9,2.1,1.9,3,1.4,2.4,2.8+'%'],
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#f95476'
    }]
}
export const lineChartData2 = {
    labels: ['0', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', ''],
    datasets: [{
        label: 'Done',
        data: [2, 4, 5, 4, 3, 4, 3, 5, 7],
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#4886ff'
    }, {
        data: [1, 2, 4, 3, 5, 4, 6, 3, 5],
        label: 'In process',
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#ffb74e'
    }, {
        data: [4, 5, 6, 3, 1, 4, 3, 1, 2, 3],
        label: 'New',
        backgroundColor: [
            'transparent',
        ],
        borderWidth: 3,
        borderColor: '#7ad835'
    }]
}
export const areaChartData = {
    labels: ['0', '5 sec', '10 sec', '15 sec', '20 sec', '25 sec', '30 sec', '35 sec', '40 sec', '45 sec', '50 sec', '55 sec', '60 sec'],
    datasets: [{
        label: 'Avg CPU usage',
        data: [20, 15, 40, 30, 50, 60, 50, 37, 45, 65, 60, 70, 65, 80, 0],
        backgroundColor: '#81abff',
        borderWidth: 3
    }]
}
export const areaChartData2 = {
    labels: ['0', '1 week', '2 week', '3 week', '4 week', ' '],
    datasets: [{
        label: 'Sessions',
        data: [200, 390, 250, 340, 220, 380],
        backgroundColor: [
            'rgba(181,84,249,.7)',
        ],
        borderWidth: 3,
        borderColor: '#b554f9'
    }, {
        data: [580, 350, 420, 300, 430, 280],
        label: 'New visitors',
        backgroundColor: [
            'rgba(255,180,79,.7)',
        ],
        borderWidth: 3,
        borderColor: '#ffb44f'
    }, {
        data: [250, 500, 550, 450, 420, 580],
        label: 'Avg. session duration',
        backgroundColor: [
            'rgba(249,84,118,.7)',
        ],
        borderWidth: 3,
        borderColor: '#f95476'
    }]
}
export const areaChartData3 = {
    labels: ['0', '1 week', '2 week', '3 week', '4 week', ' '],
    datasets: [{
        label: 'Sales',
        data: [10, 20, 39, 15, 34, 22, 38],
        backgroundColor: [
            'rgba(72,134,255,.4)',
        ],
        borderWidth: 3,
        borderColor: '#4886ff'
    }, {
        data: [25, 18, 25, 42, 20, 13, 8],
        label: 'Orders',
        backgroundColor: [
            'rgba(249,84,118,.4)',
        ],
        borderWidth: 3,
        borderColor: '#f95476'
    }, {
        data: [15, 40, 25, 35, 22, 35, 18],
        label: 'New visitors',
        backgroundColor: [
            'rgba(255,183,78,.4)',
        ],
        borderWidth: 3,
        borderColor: '#ffb74e'
    }]
}
export const sharpChartData = {
    labels: ['0', '16', '20', '30', '35', '40', '45', '50+'],
    datasets: [{
        lineTension: 0,
        label: 'years',
        data: [20, 40, 30, 40, 35, 46, 39, 50, 80, 0],
        backgroundColor: [
            '#ffaf51',
        ],
        borderWidth: 3,
        borderColor: '#fb7867'
    }]
}
export const barChartData = {
    labels: ['Physical', 'RAM', 'Virtual'],
    datasets: [{
        lineTension: 0,
        label: 'Total',
        data: [512, 90, 120],
        backgroundColor: [
            '#fa646f',
            '#fa646f',
            '#fa646f'
        ]
    }, {
        lineTension: 0,
        label: 'Used',
        data: [315, 50, 70],
        backgroundColor: [
            '#ffaf51',
            '#ffaf51',
            '#ffaf51'
        ]
    }, {
        lineTension: 0,
        label: 'Free',
        data: [197, 48, 48],
        backgroundColor: [
            '#b554f9',
            '#b554f9',
            '#b554f9'
        ]
    }]
}
export const barChartData2 = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ],
    datasets: [{
        lineTension: 0,
        label: 'Latency',
        data: [80, 79, 78, 77, 74, 75, 71, 84, 86, 90, 70, 75, 56, 61, 59, 82, 91, 81, 70, 63, 59, 62, 49, 46],
        backgroundColor: [
            '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51',
            '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51', '#ffaf51',
        ]
    }]
}
export const top1 = {
    datasets: [{
            data: [7, 3, 2],
            backgroundColor: [
                '#b554f9',
                '#9e9e9e30',
                '#9e9e9e30',
            ],
            borderWidth: 0,
        }]
}
export const top2 = {
    datasets: [{
            data: [9, 3, 1],
            backgroundColor: [
                '#ffb74e',
                '#9e9e9e30',
                '#9e9e9e30',
            ],
            borderWidth: 0,
        }]
}
export const top3 = {
    datasets: [{
            data: [2, 3, 4],
            backgroundColor: [
                '#f95476',
                '#9e9e9e30',
                '#9e9e9e30',
            ],
            borderWidth: 0,
        }]
}
export const top4 = {
    datasets: [{
            data: [9, 1, 2],
            backgroundColor: [
                '#48daff',
                '#9e9e9e30',
                '#9e9e9e30',
            ],
            borderWidth: 0,
        }]
}