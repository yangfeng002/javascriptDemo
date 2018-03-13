/*
  功能使用/页面访问路径
  wangfang@umeng.com
  2014.12.08
 */
var margin,width,height,nodeWidth,formatNumber,format,color,linkGroup, node, total, formatedData,svg,flow,
path,endPath,endParttern;
$(function () {
    margin    = {top: 1, right: 40, bottom: 20, left: 1};
    width     = 1500 - margin.left - margin.right;
    height    = 600 - margin.top - margin.bottom;
    nodeWidth = 130;

    formatNumber = d3.format(",.0f");
    format       = function(d) { return formatNumber(d) + " TWh"; };
    color        = d3.scale.ordinal().range(['#179196', '#2EA99C', '#34AFA2', '#2FAB86', '#44B880', '#3EB27A', '#52AE59', '#5FBD44', '#82CB28', '#CEC937', '#D9C53D', '#D5AD20', '#CC9C1A', '#CC8D28', '#B86F20']);

   svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("display", "none")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  flow = d3.flow()
    .nodeWidth(nodeWidth)
    .nodePadding(10)
    .maxStep(5)
    .size([width, height]);

  path    = flow.link();
  endPath = flow.squareEnd();

 endParttern = svg.append( 'defs' ).append('pattern')
    .attr('id', 'innerPattern')
    .attr('x', "0")
    .attr('y', "0")
    .attr('width', "1")
    .attr('height', "10")
    .attr('patternUnits', "objectBoundingBox");

endParttern.append('rect')
    .attr('x', '0')
    .attr('y', '0')
    .attr('width', '2')
    .attr('height', '500')
    .attr('fill', 'RGBA(255, 121, 68, 1)');

endParttern.append('rect')
    .attr('x', '3')
    .attr('y', '0')
    .attr('width', '1')
    .attr('height', '500')
    .attr('fill', 'RGBA(255, 121, 68, 1)');

endParttern.append('rect')
    .attr('x', '5')
    .attr('y', '0')
    .attr('width', '1')
    .attr('height', '500')
    .attr('fill', 'RGBA(255, 121, 68, 0.7)');

endParttern.append('rect')
    .attr('x', '7')
    .attr('y', '0')
    .attr('width', '1')
    .attr('height', '500')
    .attr('fill', 'RGBA(255, 121, 68, 0.5)');

endParttern.append('rect')
    .attr('x', '9')
    .attr('y', '0')
    .attr('width', '1')
    .attr('height', '500')
    .attr('fill', 'RGBA(255, 121, 68, 0.2)');
});
$(function() {
    $(document).click(function(event) {
        clearChildLink();
        $.publish('hideDetailTable');
        $('.high').removeClassSVG('high');
    });

});


/*
  Helper
 */

function renderSteps(count) {
    var stepsDom = '',
        totalPercent = count.map(function(d, i) { return (count[0] === 0) ? 0 : d / count[0]; }),
        conRate = count.map(function(d, i) { return (i === 0) ? 0 : (count[i - 1] === 0 ? 0 : d / count[i - 1]); }).splice(1);

    total = count.reduce(function(a, b) { return a + b; }, 0);

    var stepTmpl = '<div class="step"><h4>第{$page}页</h4><h2>{$count}<span>{$percent}</span></h2></div>';
    var arrowTmpl = '<div class="step-arrow"><h2 class="arrow">></h2><h2 class="numbers">{$rate}%</h2></div>'

    count.forEach(function(d, i) {
        stepsDom += stepTmpl.replace('{$page}', i + 1).replace('{$count}', d).replace('{$percent}', (i === 0) ? '' : '(' + (totalPercent[i] * 100).toFixed(0) + '%)');
        if (i < count.length - 1) stepsDom += arrowTmpl.replace('{$rate}', (conRate[i] * 100).toFixed(2));
    });

    $('.steps-indicator').append(stepsDom);
}

// 数据结构转化
function reformDataStruct(raw) {
    // 展平树状结构
    var data = { nodes: [], links: [] };
    var nest = d3.nest()
        .key(function(d) { return d.step; })
        .key(function(d) { return d.name; })
        .entries( flattenTree(raw) );

    // assign activity ID
    var id = 0;

    nest.map(function(d) {
        var activitys = d.values;

        activitys.map(function(activity) {
            activity.values.map(function(d) {
                d.id = id;
            });
            ++id;
        });

    });

    // Step loop
    for (var i = 0; i < nest.length ; i++) {

        var currentStep = nest[i].values;

        // Activitys loop (Source)
        for (var j = 0; j < currentStep.length; j++) {

            var activityGroup = currentStep[j].values;

            data.nodes.push({
                id: activityGroup[0].id,
                name: activityGroup[0].name,
                step: activityGroup[0].step,
                nick: activityGroup[0].nick,
                value: d3.sum(activityGroup, function(d) { return d.value; }),
                end: d3.sum(activityGroup, function(d) { return d.end; }),
                children: flatten(activityGroup.map(function(d) { return d.children; }))
            });

            var targetStack = [];

            // Targets loop (Targets)
            for (var k = 0; k < activityGroup.length; k++) {

                var activityPart = activityGroup[k];

                if (activityPart.children) {

                    // 遍历子activity，构建展示数据
                    // activityPart.children.map(function(target, i) {});

                    for (var z = 0; z < activityPart.children.length; z++) {

                        var target = activityPart.children[z];

                        // target activity 是否已经存在
                        if (targetStack.indexOf(target.id) != -1) {

                            data.links.filter(function(d) {

                                if (d.source === activityPart.id && d.target === target.id) {
                                    d.value += target.value;
                                }

                                return d.source === activityPart.id && d.target === target.id;
                            });

                        } else {
                            targetStack.push(target.id);

                            data.links.push({
                                source: activityPart.id,
                                target: target.id,
                                value: target.value
                            });
                        }

                    }
                }
            }
        }
    }

    return data;
}

// 展平树
function flattenTree(data) {
    var result = [],
        currentNode,
        uid = 0;

    treeRecursion(data, -1);

    return result.splice(1);

    function treeRecursion(node, step) {

        var sum = d3.sum(node.children, function(d) { return d.value; });

        node.step   = step;
        node.end    = node.value - sum;
        node.parent = currentNode;
        node.uid    = uid++;

        result.push(node);

        currentNode = node;

        node.children.map(function(d) {
            treeRecursion(d, step+1);
        });
    }
}

// 计算结束节点
function computeEndNode(node) {
    if (node.children.length === 0) return;
    var sum = d3.sum(node.children, function(d) { return d.value; });

    if (node.value - sum > 0) {
        node.children.push({
            name: "End",
            value: node.value - sum,
            children: []
        });
    } else {
        // console.log('无流失用户');
    }

    node.children.map(computeEndNode);
}

// 绘图方法
function renderFlow(data) {

    formatedData = data;

    $('svg', '#chart').show();

    // 配置布局
    flow
        .nodes(data.nodes)
        .links(data.links)
        .layout();

    // 绘制 Link
    linkGroup = svg.append("g").attr('class', 'links-group').selectAll(".link").data(data.links)
        .enter()
        .append("path")
        .attr("class", function(d) { return "link s" + d.source.id + " t" + d.target.id; })
        .attr("d", path)
        .style("stroke-width", function(d) { return d.width; })
        .sort(function(a, b) { return b.dy - a.dy; })
        .on('mouseenter', function(d) {
            $('#from', '#tip').text("从" + d.source.name);
            $('#to', '#tip').text("到" + d.target.name);
            $('#value', '#tip').html("会话数：" + d.value + "<br>占该页面会话数比例：" + ((d.value / d.source.value) * 100).toFixed(2) + '%');
        })
        .on('mousemove', function(d) {
            // 仅在非 highlight 其他Link时显示Tips
            if ($('.link.highlight').length === 0 || d3.select(this).classed('highlight')) {
                var mouse = d3.mouse(this);
                $('#tip').show().css({'left': mouse[0] + 40, 'top': mouse[1] + 80});
            }
        })
        .on("mouseout", function(d) {
            $('#tip').hide();
        });

    // 绘制 Node Group
    node = svg.append("g").attr('class', 'nodes-group').selectAll(".node").data(data.nodes)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        .on("click", function(d) {
            d3.event.stopPropagation();
            clearChildLink();
            if (!d3.select(this).classed('high')) {
                $.publish('renderPathTable', d);

                // reset node
                d3.selectAll('.node').classed('high', false);
                d3.select(this).classed('node high', true);
                d3.selectAll('.link').style("stroke-opacity", "0.05");

                // hightlight links
                d.children.map(function(c) {
                    $('.s' + d.id + '.t' + c.id).addClassSVG('highlight');
                });

                for (var i = 0; i < d.children.length; i++) {
                    highlight(d.children[i]);
                }
            } else {
                $.publish('hideDetailTable');
                d3.select(this).classed('high', false);
            }

            d3.selectAll('.link.highlight').style("stroke-opacity", "0.7");
        });

    // 绘制 Node
    node.append("rect")
        .attr("height", function(d) { return d.dy; })
        .attr("width", flow.nodeWidth())
        .attr("rx", 2)
        .attr("ry", 2)
        .style("fill", function(d) { return d.color = color(d.name.split('.').pop()); })
        .on('mouseenter', function(d) {
            $('#from', '#tip').text(d.name);
            $('#to', '#tip').text("");
            $('#value', '#tip').html("会话数：" + d.value + "<br>占总会话比例：" + ((d.value / total) * 100).toFixed(2) + '%' + "<br>从该页面离开次数：" + d.end + "<br>流失率：" + ((d.end / d.value) * 100).toFixed(2) + '%');
        })
        .on("mousemove", function(d) {
            var mouse = d3.mouse(this.parentNode.parentNode);
            $('#tip').show().css({'left': mouse[0] + 40, 'top': mouse[1] + 80});
        })
        .on("mouseout", function(d) {
            $('#tip').hide();
        });

    // 绘制流失
    node.filter(function(d, i) { return d.end > 0 && d.step !== 4; }).append("path")
        .attr("d", endPath)
        .attr("fill", "url(#innerPattern)")
        .attr("fill-opacity", "0.7")
        .attr("stroke", "none")
        .attr("transform", function(d) {
            var x = (d.x - nodeWidth) < 0 ? 0 : (d.x - nodeWidth);
            return "translate(-" + x + ",0)";
        });

    // 绘制文字
    node.append("text")
        .attr("x", 10)
        .attr("y", function(d) { return (d.dy < 18) ? d.dy / 2 : 10; })
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .attr("transform", null)
        .filter(function(d) { return d.value > 0; })
        .text(function(d) { return (d.nick) ? d.nick : d.name.split('.').pop() + ' (' + d.value + ')'; })
        .filter(function(d) { return d.x < width / 2; })
        .attr("x", 6)
        .attr("text-anchor", "start");
}

// 高亮link
function highlight(node) {
    for (var j = 0; j < node.children.length; j++) {
        var childChild = node.children[j];
        appendChildLink($('.s' + node.id + '.t' + childChild.id).get(0), childChild.value, node, childChild);
        highlight(childChild);
    }
}

// 清除高亮
function clearChildLink() {
    $('.link.highlight').removeClassSVG('highlight');
    $('.childlink').remove();

    d3.selectAll('.link').style('stroke-opacity', 0.1);
}

// Append支流path
function appendChildLink(el, value, node, childNode) {

    var link = el.__data__,
        heighScale = flow.heighScale(),
        path = computeChildLink(link, value);

    svg
        .append("path")
        .attr("class", "link highlight childlink")
        .attr("d", path)
        .style("stroke-width", value * heighScale)
        .on("mouseover", function(d) {
            var nodeSum = formatedData.nodes.filter(function(d) { return d.id === node.id; })[0].value;
            $('#from', '#tip').text("从" + node.name);
            $('#to', '#tip').text("到" + childNode.name);
            $('#value', '#tip').html("会话数：" + value + "<br>占该页面会话数比例：" + ((value / nodeSum) * 100).toFixed(2) + '%');
        })
        .on("mousemove", function(d) {
            var mouse = d3.mouse(this.parentNode.parentNode);
            $('#tip').show().css({'left': mouse[0] + 40, 'top': mouse[1] + 80});
        })
        .on("mouseout", function(d) {
            $('#tip').hide();
        });

}

// 计算支流link
function computeChildLink(link, newValue) {

    var heighScale = flow.heighScale();

    var l = {
        sx: link.source.x + nodeWidth,
        sy: link.sy + (link.value - newValue) * heighScale / 2,
        tx: link.target.x,
        ty: link.ty + (link.value - newValue) * heighScale / 2
    };

    var x0 = l.sx,
        y0 = l.sy,
        x1 = (l.sx + l.tx) / 2,
        y1 = l.sy,
        x2 = (l.sx + l.tx) / 2,
        y2 = l.ty,
        x3 = l.tx,
        y3 = l.ty;

    return "M" + x0 + "," + y0
        + "C" + x1 + "," + y1
        + " " + x2 + "," + y2
        + " " + x3 + "," + y3;

}

var flatten = function(array) {
    var result = [], self = arguments.callee;
    array.forEach(function(item) {
        Array.prototype.push.apply(
            result,
            Array.isArray(item) ? self(item) : [item]
        );
    });
    return result;
};

$.fn.addClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        return existingClassNames + ' ' + className;
    });
    return this;
};

$.fn.removeClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        var re = new RegExp(className, 'g');
        return existingClassNames.replace(re, '');
    });
    return this;
};

