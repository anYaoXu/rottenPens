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
];
var myChart = echarts.init(document.getElementById('echartMap'));
var option = {
    title: {
        text: '全国地图',
        subtext: '',
        sublink: '',
        left: 'center'
    },
    series: [{
        type: 'custom',//配置显示方式为用户自定义
        coordinateSystem: 'geo',
        renderItem: function (params, api) {//具体实现自定义图标的方法
            return {
                type: 'image',
                style: {
                    image:  data[params.dataIndex].img,
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
        },
        data: data
    }
    ],
    geo: {
        map: '全国',
        roam: true,
        zoom: 1,
        itemStyle: {
            normal: {
                label:{show:true},
                // borderColor: '#387ba7',
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
                // shadowBlur: 10,
                // shadowOffsetX: 10
            },
            emphasis: {
                // areaColor: '#b3f3f3'
            }
        }
    }
};
myChart.setOption(option);
