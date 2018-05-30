var myChart = echarts.init(document.getElementById('echartMap'));
myChart.showLoading();

var data=[
    {name: '丽水市', value: [119.49105224609375, 28.24937385955666, 2],img:'s-success.png'},
    {name: '杭州市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '温州市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '宁波市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '舟山市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '台州市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '金华市', value: [119.63150024414061, 29.07957590059833, 2],img:'s-success.png'},
    {name: '衢州市', value: [118.84597778320312, 28.96369333786114, 2],img:'s-success.png'},
    {name: '绍兴市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '嘉兴市', value: [107.615944, 27.479744, 2],img:'s-success.png'},
    {name: '湖州市', value: [107.615944, 27.479744, 2],img:'s-success.png'}
]

$.get('../dist/33.json', function (usaJson) {
    myChart.hideLoading();
    echarts.registerMap('浙江', usaJson);

    option = {
        title: {
            text: '浙江省地图',
            subtext: '',
            sublink: '',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 1,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                // return params.seriesName + '<br/>' + params.name + ': ' + value;
                return params.name + ': ' + value + '<br/>'+'<img src="../images/4.jpg" width="50" alt="">'
            }
        },
        series: [
            {
                name: '浙江省',
                type: 'map',
                map: '浙江',
                data: data,
                itemStyle:{
                    normal:{
                        label:{show:false}
                    }
                },
                renderItem: function (params, api) {//具体实现自定义图标的方法
                    return {
                        type: 'image',
                        style: {
                            image: "s-success.png",
                            x: api.coord([
                                data[params.dataIndex].value[0], data[params.dataIndex]
                                    .value[1]
                            ])[0],
                            y: api.coord([
                                data[params.dataIndex].value[0], data[params.dataIndex]
                                    .value[1]
                            ])[1]
                        }
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
});
