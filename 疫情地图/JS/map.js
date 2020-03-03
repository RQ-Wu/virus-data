Highcharts.setOptions({
    lang: {
        drillUpText: '< 返回 “{series.name}”'
    }
});
var map = null,
    geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';
$.ajax({
    type: "get",//请求方式
    url: "data/data.json",//地址，就是json文件的请求路径
    dataType: "json",//数据类型可以为 text xml json  script  jsonp
    async: false,
    success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
        $.ajax({
            type: "get",//请求方式
            url: geochina + 'china.json&callback=?',//地址，就是json文件的请求路径
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            async: false,
            success: function(mapdata){//返回的参数就是 action里面所有的有get和set方法的参数
                map = new Highcharts.Map('container1', {
                    credits:{

                        enabled:false

                    },
                    title: {
                        text: '中国疫情分布地图'
                    },
                    mapNavigation: {
                        enabled: true,
                    },
                    tooltip: {
                        valueSuffix: '人'
                    },
                    colorAxis: {
                        dataClasses: [{
                            to: 0
                        }, {
                            from: 1,
                            to: 10
                        }, {
                            from: 10,
                            to: 100
                        }, {
                            from: 100,
                            to: 500
                        }, {
                            from: 500,
                            to: 1000
                        }, {
                            from: 1000,
                            to: 10000
                        }, {
                            from: 10000
                        }],
                        minColor: '#fff',
                        maxColor: '#e84118',
                    },
                    legend: {
                        text: '患病人数',
                        align: 'left',
                        verticalAlign: 'bottom',
                        floating: true,
                        layout: 'vertical',
                        valueDecimals: 0,
                        symbolRadius: 0,
                        symbolHeight: 14
                    },

                    series: [{
                        data: data,
                        mapData: mapdata,
                        joinBy: 'name',
                        name: '中国地图',
                        states: {
                            hover: {
                                color: '#718093'
                            }
                        }
                    }]
                });
            }
        });
    }
});
$.ajax({
    type: "get",//请求方式
    url: "data/heal_data.json",//地址，就是json文件的请求路径
    dataType: "json",//数据类型可以为 text xml json  script  jsonp
    async: false,
    success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
        $.ajax({
            type: "get",//请求方式
            url: geochina + 'china.json&callback=?',//地址，就是json文件的请求路径
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            async: false,
            success: function(mapdata){//返回的参数就是 action里面所有的有get和set方法的参数
                map = new Highcharts.Map('container2', {
                    credits:{
                        enabled:false
                    },
                    title: {
                        text: '中国疫情治愈率地图'
                    },
                    mapNavigation: {
                        enabled: true,
                    },
                    tooltip: {
                        valueSuffix: '%'
                    },
                    colorAxis: {
                        dataClasses: [{
                            to: 0
                        }, {
                            from: 0,
                            to: 70
                        }, {
                            from: 70,
                            to: 80
                        }, {
                            from: 80,
                            to: 90
                        }, {
                            from: 90
                        }],
                        minColor: '#fff',
                        maxColor: '#00b894',
                    },
                    legend: {
                        align: 'left',
                        verticalAlign: 'bottom',
                        floating: true,
                        layout: 'vertical',
                        valueDecimals: 0,
                        symbolRadius: 0,
                        symbolHeight: 14
                    },

                    series: [{
                        data: data,
                        mapData: mapdata,
                        joinBy: 'name',
                        name: '中国地图',
                        states: {
                            hover: {
                                color: '#718093'
                            }
                        }
                    }]
                });
            }
        });
    }
});
$.ajax({
    type: "get",//请求方式
    url: "data/dead_data.json",//地址，就是json文件的请求路径
    dataType: "json",//数据类型可以为 text xml json  script  jsonp
    async: false,
    success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
        $.ajax({
            type: "get",//请求方式
            url: geochina + 'china.json&callback=?',//地址，就是json文件的请求路径
            dataType: "json",//数据类型可以为 text xml json  script  jsonp
            async: false,
            success: function(mapdata){//返回的参数就是 action里面所有的有get和set方法的参数
                map = new Highcharts.Map('container3', {
                    credits:{
                        enabled:false
                    },
                    title: {
                        text: '中国疫情死亡人数地图'
                    },
                    mapNavigation: {
                        enabled: true,
                    },
                    tooltip: {
                        valueSuffix: '人'
                    },
                    colorAxis: {
                        dataClasses: [{
                            to: 0
                        }, {
                            from: 1,
                            to: 5
                        }, {
                            from: 6,
                            to: 10
                        }, {
                            from: 11,
                            to: 25
                        }, {
                            from: 26,
                            to:1000
                        },{
                            from:1000
                        }],
                        minColor: '#fff',
                        maxColor: '#2d3436',
                    },
                    legend: {
                        align: 'left',
                        verticalAlign: 'bottom',
                        floating: true,
                        layout: 'vertical',
                        valueDecimals: 0,
                        symbolRadius: 0,
                        symbolHeight: 14
                    },

                    series: [{
                        data: data,
                        mapData: mapdata,
                        joinBy: 'name',
                        name: '中国地图',
                        states: {
                            hover: {
                                color: '#718093'
                            }
                        }
                    }]
                });
            }
        });
    }
});
