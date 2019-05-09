import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as d3 from 'd3';

import { DATA } from 'src/app/mock-data';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  ngAfterViewInit() {
    var data = DATA;
    data.sort( (a,b) => {
      return b.yearTo - a.yearTo;
    });

    var margin = {top: 20, right: 20, bottom: 60, left: 20},
    width = 1000 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

    var y = d3.scaleBand()
      .range([height, 0])
      .padding(0.1);

    var x = d3.scaleLinear()
      .range([0, width]);

    var svg = d3.select("#chartdiv").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Scale the range of the data in the domains
    x.domain([d3.min(data, d => d.yearFrom), d3.max(data, d => d.yearTo)] )
    y.domain(data.map(d => d.name));
    //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.yearFrom) )
        .attr("width", d => x(d.yearTo)-x(d.yearFrom) )
        .attr("y", d => y(d.name) )
        .attr("height", (height/data.length) - 10 )
        .style("fill", d => d.fill);

    // add the x Axis
    svg.append("g")
      .attr('class','xaxis')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll('text')
        .attr('text-anchor', 'end')
        .attr('transform','rotate(-65)')
        .attr('font-size', '2em')
        

    // add the y Axis
    svg.append("g")
      .attr('class','yaxis')
      .call(d3.axisRight(y))
      .selectAll("text")	
        .attr('font-size', '1.5em')

  }

  private chart: am4charts.XYChart;

constructor(private zone: NgZone) {}

}
