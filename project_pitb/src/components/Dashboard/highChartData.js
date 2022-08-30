import { dark } from "highcharts";

let pieChartData = {
    chart: {
        backgroundColor: 'ghostwhite',
        height:300,
        width:600,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in May, 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
    },
    accessibility: {
        point: {
            valueSuffix: ''
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} '
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 70.67,
            // sliced: true,
            // selected: true
        }, {
            name: 'Edge',
            y: 14.77,
            
        },  {
            name: 'Firefox',
            y: 4.86,
            
        }, {
            name: 'Safari',
            y: 2.63
        }, {
            name: 'Internet Explorer',
            y: 1.53
        },  {
            name: 'Opera',
            y: 1.40
        }, {
            name: 'Sogou Explorer',
            y: 0.84
        }, {
            name: 'QQ',
            y: 0.51
        }, {
            name: 'Other',
            y: 2.6
        }]
    }]
}



let barChartData ={
    chart: {
        type: 'column',
        backgroundColor: 'ghostwhite',
        height: 400,
        width:500,
    },

    title: {
        text: 'Status-wise Project Stats'
    },

    subtitle: {
        text: 'Resize the frame or click buttons to change appearance'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: ['NDP', 'PC-1'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Amount'
        }
    },

    series: [{
        name: 'In Development',
        data: [178, 23]
    }, {
        name: 'Live & Continuous Development',
        data: [31, 26]
    }, {
        name: 'Live without Development',
        data: [38, 42]
    }, {
        name: 'Closed',
        data: [38, 42]
    }, {
        name: 'Live & Infrequent Development',
        data: [38, 42]
    }, {
        name: 'On Hold',
        data: [38, 42]
    },{
        name: 'Transferred',
        data: [38, 42]
    },{
        name: 'Merged into other Project',
        data: [1, 0]
    },{
        name: 'Developed but not used',
        data: [1, 0]
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
}



let spiderChartData = {
    
}


export  {pieChartData , barChartData};