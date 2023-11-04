import Highcharts, { Options } from "highcharts";

export const graphOptions = (name: string, color: string): Options => ({
  chart: {
    renderTo: "chart",
    type: "line",
    backgroundColor: "transparent",
    plotBorderColor: "transparent",
    animation: false,
  },
  title: {
    text: "",
  },
  xAxis: {
    type: "datetime",
    tickPixelInterval: 500,
    labels: {
      style: {
        color: "#858585",
      },
    },
    gridLineColor: "#858585",
    lineColor: "#858585",
    minorGridLineColor: "#858585",
    tickColor: "#858585",
    title: {
      style: {
        color: "#858585",
      },
    },
  },
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      style: {
        color: "#858585",
      },
    },
    gridLineColor: "#858585",
    lineColor: "#858585",
    minorGridLineColor: "#858585",
    tickColor: "#858585",
  },
  credits: {
    enabled: true,
    text: "YAB ?! Counts",
    href: "/",
  },
  tooltip: {
    shared: true,
    formatter: function () {
      // @ts-ignore
      var index = this.points[0].series.xData.indexOf(this.x);
      // @ts-ignore
      var lastY = this.points[0].series.yData[index - 1];
      // @ts-ignore
      var dif = this.y - lastY;
      var r =
        // @ts-ignore
        Highcharts.dateFormat("%A %b %e, %H:%M:%S", new Date(this.x)) +
        '<br><span style="color:black">\u25CF </span>' +
        // @ts-ignore
        this.points[0].series.name +
        ": <b>" +
        // @ts-ignore
        Highcharts.numberFormat(this.y, 0);
      if (dif < 0) {
        r +=
          '<span style="color:#ff0000;font-weight:bold;"> (' +
          Highcharts.numberFormat(dif, 0) +
          ")</span>";
      }
      if (dif > 0) {
        r +=
          '<span style="color:#00bb00;font-weight:bold;"> (+' +
          Highcharts.numberFormat(dif, 0) +
          ")</span>";
      }
      return r;
    },
  },
  series: [
    {
      showInLegend: false,
      name,
      marker: { enabled: false },
      color,
      lineWidth: 3,
      type: "line",
    },
  ],
});
