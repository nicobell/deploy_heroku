import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

	private chart: am4charts.XYChart;

	constructor(private zone : NgZone) { }

	ngAfterViewInit() {
		this.zone.runOutsideAngular(() => {
			let chart = am4core.create("chartdiv", am4charts.XYChart);

			/**
			 * chart code goes from here ...
			 */

			chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

			console.log(data);

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

			/**
			 * ... to here
			 */

			this.chart = chart;
		})
	}

	ngOnDestroy() {
		this.zone.runOutsideAngular(() => {
			if(this.chart) {
				this.chart.dispose();
			}
		})
	}
/*
	ngOnInit() {

    am4core.useTheme(am4themes_animated);

    let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.strokeOpacity = 0.5;
    polygonTemplate.nonScalingStroke = true;

    // create capital markers
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());

    // define template
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Sprite);
    circle.scale = 0.4;
    circle.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    circle.path = targetSVG;
    // what about scale...

    // set propertyfields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeriesTemplate.horizontalCenter = "middle";
    imageSeriesTemplate.verticalCenter = "middle";
    imageSeriesTemplate.align = "center";
    imageSeriesTemplate.valign = "middle";
    imageSeriesTemplate.width = 8;
    imageSeriesTemplate.height = 8;
    imageSeriesTemplate.nonScaling = true;
    imageSeriesTemplate.tooltipText = "{title}";
    imageSeriesTemplate.fill = am4core.color("#000");
    imageSeriesTemplate.background.fillOpacity = 0;
    imageSeriesTemplate.background.fill = am4core.color("#ffffff");
    imageSeriesTemplate.setStateOnChildren = true;
    imageSeriesTemplate.states.create("hover");

    imageSeries.data = [{
        "title": "Vienna",
        "latitude": 48.2092,
        "longitude": 16.3728
    }, {
        "title": "Minsk",
        "latitude": 53.9678,
        "longitude": 27.5766
    }, {
        "title": "Brussels",
        "latitude": 50.8371,
        "longitude": 4.3676
    }, {
        "title": "Sarajevo",
        "latitude": 43.8608,
        "longitude": 18.4214
    }, {
        "title": "Sofia",
        "latitude": 42.7105,
        "longitude": 23.3238
    }, {
        "title": "Zagreb",
        "latitude": 45.815,
        "longitude": 15.9785
    }, {
        "title": "Pristina",
        "latitude": 42.666667,
        "longitude": 21.166667
    }, {
        "title": "Prague",
        "latitude": 50.0878,
        "longitude": 14.4205
    }, {
        "title": "Copenhagen",
        "latitude": 55.6763,
        "longitude": 12.5681
    }, {
        "title": "Tallinn",
        "latitude": 59.4389,
        "longitude": 24.7545
    }];

    }*/
}