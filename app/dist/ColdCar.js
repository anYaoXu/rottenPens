var coldCar = [];
var temp;
var flag = 0;

function getLatLn() {
    coldCar = [];
    flag = 0;
    for (var i = 1; i <= 25; i++) {
        var jsonData = {};
        var lo = [];
        var aaa = GetRandomNum(104, 108) + Math.random();
        var bbb = GetRandomNum(25, 28) + Math.random();
        if (temp == aaa) {
            aaa = GetRandomNum(104, 108) + Math.random();
            i--;
            flag = 1;
        }
        temp = aaa;
        lo[0] = aaa;
        lo[1] = bbb;
        lo[2] = 2;
        jsonData.name = "车辆" + i;
        jsonData.value = lo;
        jsonData.symbolSize = 10;
        jsonData.itemStyle = {
            "normal": {
                "color": "#00CED1"
            }
        };
        if (flag == 0) {
            coldCar.push(jsonData);

        }
    }
}


function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
} 

getLatLn();

