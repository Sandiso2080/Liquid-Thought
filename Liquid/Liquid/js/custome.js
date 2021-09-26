$(document).ready(function () {
    $('#chartDiv').JSC({
        mapping: {
            referenceLayers: 'World',
            projection: false
        },
        type: 'map',
        height: 500,
        legendVisible: false,
        chartArea: {
            fill: '#FFFFFF'
        },
        defaultPointOutlineWidth: 0,
        series: [{
            defaultPoint: {
                color: '#b1b8bb'
            },
            map: 'Continent:North America'
        },
        {
            defaultPoint: {
                color: '#b1b8bb'
            },
            map: 'Continent:Europe'
        },
        {
            defaultPoint: {
                color: '#b1b8bb'
            },
            map: 'Continent:Africa'
        }],
        toolbarVisible: false

    });
});

