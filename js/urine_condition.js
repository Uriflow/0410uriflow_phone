var btn = document.getElementById('btn');

// 在页面加载时绘制默认的日图表
window.onload = function() {
    drawDayChart();
};

// 设置默认按钮位置为日图表
btn.style.left = '0';

// 左侧按钮点击事件处理函数
function leftClick() {
    btn.style.left = '0'; // 移动按钮位置
    drawDayChart(); // 绘制日图表
}

// 右侧按钮点击事件处理函数
function rightClick() {
    btn.style.left = '157px'; // 移动按钮位置
    drawWeekChart(); // 绘制周图表
}

// 绘制日图表
function drawDayChart() {
    // 创建数据表格
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['0', 0],
        ['1', 100],
        ['2', 100],
        ['3', 200],
        ['4', 200],
        ['5', 300],
        ['6', 400],
        ['7', 500],
        ['8', 500],
        ['9', 600],
        ['10', 0],
        ['11', 100],
        ['12', 100],
        ['13', 250],
        ['14', 450],
        ['15', 0],
        ['16', 100],
        ['17', 150],
        ['18', 200],
        ['19', 400],
        ['20', 600],
        ['21', 0],
        ['22', 100],
        ['23', 300],
    ]);

    // 设置图表选项
    var options = {
        'title': '2024年5月16日',
        'width': 390,
        'height': 220,
        'legend': 'none', // 删除右上方的小格子
        'backgroundColor': 'transparent', // 将背景设为透明
    };

    // 实例化并绘制图表
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

// 绘制周图表
function drawWeekChart() {
    // 创建数据表格
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mon', 200],
        ['Tue', 300],
        ['Wed', 400],
        ['Thu', 500],
        ['Fri', 600],
        ['Sat', 700],
        ['Sun', 800],
    ]);

    // 设置图表选项
    var options = {
        'title': 'Weekly Chart',
        'width': 390,
        'height': 220,
        'legend': 'none', // 删除右上方的小格子
        'backgroundColor': 'transparent', // 将背景设为透明
    };

    // 实例化并绘制图表
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
