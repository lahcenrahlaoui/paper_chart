
var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
var option;

fff();
async function fff(){
    var myChart = echarts.init(chartDom);

    var data = await xxx();
var colors = ['#A4D080', '#FC100D', '#00cccc', '#77C0C0', '#A4D080'];
var bgColor = '#1a1b1c';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var data = [{
    name: 'Master',
    itemStyle: {
        color: colors[4]
    },
    children: [{
        name: 'first year',
        children: [{
            name: 'Good',
            children: [{
                name: data.goodMaster1
            }]
        }, {
            name: 'Bad',
            children: [{
                name: data.badMaster1
            }]
        }]
    },{
        name: 'Second year',
        children: [{
            name: 'Good',
            children: [{
                name: data.goodMaster2
            }]
        }, {
            name: 'Bad',
            children: [{
                name: data.badMaster2
            }]
        }]
    }]
},{
    name: 'Licence',
    itemStyle: {
        color: colors[2]
    },
    children: [{
        name: 'first year',
        children: [{
            name: 'Good',
            children: [{
                name: data.goodLicence1
            }]
        }, {
            name: 'Bad',
            children: [{
                name: data.badLicence1
            }]
        }]
    },{
        name: 'Second year',
        children: [{
            name: 'Good',
            children: [{
                name: data.goodLicence2
            },]
        }, {
            name: 'Bad',
            children: [{
                name: data.badLicence2
            }]
        }]
    },{
        name: 'Third year',
        children: [{
            name: 'Good',
            children: [{
                name: data.goodLicence3
            }]
        }, {
            name: 'Bad',
            children: [{
                name: data.badLicence3
            }]
        }]
    }]
}];

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                case 'Good':
                    bookScoreId = 0;
                    return itemStyle.star5;
                case 'Bad':
                    bookScoreId = 1;
                    return itemStyle.star4;
              
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}

option = {
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['61%', '50%'],
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 0,
            r: 70,
            label: {
                rotate: 0
            }
        }, {
            r0: 70,
            r: 155
        }, {
            r0: 160,
            r: 205,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                // rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 205,
            r: 215,
            itemStyle: {
                shadowBlur: 10,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333'
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};

option && myChart.setOption(option);

}



async function xxx(){
    var badLicence1 ;
    var badLicence2 ;
    var badLicence3 ;
    var goodLicence1 ;
    var goodLicence2 ;
    var goodLicence3 ;
    var badMaster1 ;
    var badMaster2 ;
    var goodMaster1 ;
    var goodMaster2 ;

  const response = await fetch("first_visitors.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const columns = row.split(",");
    const cycle = columns[0];
    const degree = columns[1];
    const bad = columns[2];
    const good = columns[3];
    if(cycle == 'master'){
        if(degree == 'first'){
            badMaster1 = bad+"";
            goodMaster1 = good+"";

        }else{
            badMaster2 = bad+"";
            goodMaster2 = good+"";

        }
    }else{
        if(degree == 'first'){
            badLicence1 = bad+"";
            goodLicence1 = good+"";
        }else if(degree =='second'){
            badLicence2 = bad+"";
            goodLicence2 = good+""+"";
        }else{
            badLicence3 = bad+"";
            goodLicence3 = good+"";
            console.log(">>> "+good);

        }
    }

    
    });

    return {
        badLicence1 ,
        badLicence2 ,     
        badLicence3 ,     
        goodLicence1,
        goodLicence2,
        goodLicence3,
        badMaster1 ,    
        badMaster2 ,    
        goodMaster1 ,     
        goodMaster2 
    };
}
