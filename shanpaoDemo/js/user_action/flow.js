/*
  User flow
 */

d3.flow = function() {

    var flow = {},
        nodeWidth = 0,  // node宽度
        nodePadding = 0,  // node下边距
        maxStep = 0,  // 最大步数
        maxValue = 0,  // node最大值
        firstStepCount = 0,
        heighScale = 0,  // 高度比例
        nodes = [],
        links = [],
        endScale = d3.scale.linear().range([3, 10]),size;

    /*
     *  private methods
     */

    function computeNodeLinks() {

        nodes.forEach(function(node) {
            node.sourceLinks = [];
            node.targetLinks = [];
        });

        links.forEach(function(link) {
            var s = link.source,
                t = link.target;

            if (typeof s === "number") s = link.source = nodes[link.source];
            if (typeof t === "number") t = link.target = nodes[link.target];

            s.sourceLinks.push(link);
            t.targetLinks.push(link);
        });

    }

    function computeNodeValue() {
        maxValue = 0;
        firstStepCount = 0;

        nodes.forEach(function(node) {
            var sourceSum = d3.sum(node.sourceLinks, value),
                targetSum = d3.sum(node.targetLinks, value);

            // 计算节点大小
            // node.value = Math.max(sourceSum, targetSum);

            // 计算流失
            // node.end = targetSum - sourceSum; // 流失值
            // node.end = node.total - node.value;

            maxStep = Math.max(maxStep, node.step);

            if (node.step === 0) {
                maxValue += node.value;
                firstStepCount += node.value ? 1 : 0;
            }
        });

        endScale.domain([0, d3.max(nodes, function(d) { return d.end; })]);
    }

    // 计算每个node的 (x, y)
    function computeNodeVisual() {

        nodes = nodes.filter(function(d) { return d.value > 0; });

        // 计算 width padding (width - nodeWidth * n) / (n - 1)
        var widthPadding = (size[0] - nodeWidth * maxStep) / (maxStep - 1);

        // 计算 height scale 比例
        heighScale = (size[1] - (firstStepCount - 1) * nodePadding) / maxValue;

        var nodesByStep = d3.nest()
            .key(function(d) { return d.step; })
            .sortKeys(d3.ascending)
            .sortValues(sortValue)
            .entries(nodes)
            .map(function(d) { return d.values; });

        nodesByStep.forEach(function(nodes) {
            var prevHeight = 0;

            nodes.forEach(function(node, i) {

                node.x = node.step * (nodeWidth + widthPadding);
                node.y = prevHeight + nodePadding * i;
                node.dy = node.value * heighScale; // node size

                node.ly = 0; // node target link offset
                node.endOffset = 0; // 流失y偏移

                prevHeight += node.dy;

            });
        });
    }

    function computeLinkVisual() {

        var nodesByStep = d3.nest()
            .key(function(d) { return d.step; })
            .sortKeys(d3.ascending)
            .sortValues(sortValue)
            .entries(nodes)
            .map(function(d) { return d.values; });

        nodesByStep.forEach(function(nodes) {

            nodes.forEach(function(node, i) {

                var yOffset = 0;

                node.sourceLinks.sort(sortValue).forEach(function(link, i) {
                    link.sy = node.y + yOffset + link.value * heighScale / 2;
                    link.ty = link.target.y + link.target.ly + link.value * heighScale / 2;
                    link.width = link.value * heighScale;

                    // link pos.y offset
                    link.target.ly += link.value * heighScale;
                    yOffset += link.value * heighScale;

                    if (node.end > 0) {
                        node.endOffset = yOffset;
                    }
                });

            });

        });

    }

    /*
     *  accessor
     */

    function value(link) {
        return link.value;
    }

    /*
     *  sort
     */

    function sortValue(a, b) {
        return b.value - a.value;
    }

    function sortName(a, b) {
        var nameA = a.target.name.split('.').pop(),
            nameB = b.target.name.split('.').pop();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
    }

    /*
     *  public methods
     */

    flow.layout = function() {
        computeNodeLinks();
        computeNodeValue();
        computeNodeVisual();
        computeLinkVisual();

        return flow;
    };

    flow.heighScale = function () {
        return heighScale;
    }

    flow.link = function() {
        var curvature = 0.3;

        function link(d) {
            var x0 = d.source.x + nodeWidth,
                y0 = d.sy,
                x1 = (d.source.x + nodeWidth + d.target.x) / 2,
                y1 = d.sy,
                x2 = (d.source.x + nodeWidth + d.target.x) / 2,
                y2 = d.ty,
                x3 = d.target.x,
                y3 = d.ty;

            return "M" + x0 + "," + y0
                + "C" + x1 + "," + y1
                + " " + x2 + "," + y2
                + " " + x3 + "," + y3;
        }

        return link;
    };

    flow.end = function() {
        function end(d) {
            var x0 = d.x == 0 ? nodeWidth : d.x,
                y0 = d.endOffset,
                x1 = x0 + endScale(d.end),
                y1 = y0 + endScale(d.end),
                x2 = x1,
                y2 = y1  + d.end * heighScale,
                x3 = x0,
                y3 = y2;

            return "M" + x0 + "," + y0
                + "A" + endScale(d.end) + "," + endScale(d.end) + " 0 0 1 " + x1 + "," + y1 + " "
                + "L" + x2 + "," + y2
                + "L" + x3 + "," + y3;
        }

        return end;
    };

    flow.squareEnd = function() {
        function end(d) {
            var x0 = d.x == 0 ? nodeWidth : d.x,
                y0 = d.endOffset,
                x1 = x0 + 10,
                y1 = y0,
                x2 = x1,
                y2 = y1 + d.end * heighScale,
                x3 = x0,
                y3 = y2;

            return "M" + x0 + "," + y0
                + "L" + x1 + "," + y1
                + "L" + x2 + "," + y2
                + "L" + x3 + "," + y3 + "Z";
        }

        return end;
    };

    flow.nodeWidth = function(_) {
        if (!arguments.length) return nodeWidth;
        nodeWidth = +_;
        return flow;
    };

    flow.nodePadding = function(_) {
        if (!arguments.length) return nodePadding;
        nodePadding = +_;
        return flow;
    };

    flow.maxStep = function(_) {
        if (!arguments.length) return maxStep;
        maxStep = _;
        return flow;
    };

    flow.size = function(_) {
        if (!arguments.length) return size;
        size = _;
        return flow;
    };

    flow.nodes = function(_) {
        if (!arguments.length) return nodes;
        nodes = _;
        return flow;
    };

    flow.links = function(_) {
        if (!arguments.length) return links;
        links = _;
        return flow;
    };

    return flow;

};
