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
	private map: am4maps.MapChart;

	constructor(private zone : NgZone) { }

	ngAfterViewInit() {
		this.zone.runOutsideAngular(() => {
			let map = am4core.create("chartdiv", am4maps.MapChart);

			map.geodata = am4geodata_worldLow;
			map.projection = new am4maps.projections.Miller();
			
			//map.seriesContainer.draggable = false;
			//map.seriesContainer.resizable = false;
			map.maxZoomLevel = 6;

			var polygonSeries = new am4maps.MapPolygonSeries();
			polygonSeries.useGeodata = true;
			polygonSeries.exclude = ["AQ"];
			map.series.push(polygonSeries);
			let polygonTemplate = polygonSeries.mapPolygons.template;
		
			polygonTemplate.fill = am4core.color("#3a4750");
			polygonTemplate.strokeOpacity = 0.5;
			polygonTemplate.nonScalingStroke = true;
			polygonTemplate.propertyFields.fill = "fill";

			// TO SEE COUNTRY NAMES AND COLOR HOVERS
			//polygonTemplate.tooltipText = "{name}";
			let hs = polygonTemplate.states.create("hover");
			hs.properties.fill = am4core.color("#303841");
			
			/* MANIPULATE ONLY CERTAIN COUNTRIES IN THE WORLD
			polygonSeries.data = [{
				"id": "US",
				"name": "United States",
				"value": 100,
				"fill": am4core.color("#F05C5C")
			}, {
				"id": "FR",
				"name": "France",
				"value": 50,
				"fill": am4core.color("#5C5CFF")
			}];
			*/

			// MARKERS
			let imageSeries = map.series.push(new am4maps.MapImageSeries());
			let imageSeriesTemplate = imageSeries.mapImages.template;

			let circle = imageSeriesTemplate.createChild(am4core.Circle);
			circle.radius = 5;
			circle.fill = am4core.color("#f76b00");
			circle.opacity = 1;
			circle.stroke = am4core.color("white");

			//QHAT PARAMETERS USE AS POSITION ON THE MAP
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
				"title": "Super 8",
				"yearFrom": 1965,
				"yearTo": 1975,
				"latitude": 43.1862853,
				"longitude": -77.6864389
			},{
				"title": "Betamax",
				"yearFrom": 1975,
				"yearTo": 2002,
				"latitude": 36,
				"longitude": 140
			}, {
				"title": "VHS",
				"yearFrom": 1976,
				"yearTo": 2008,
				"latitude": 35,
				"longitude": 137
			}, {
				"title": "Laserdisc",
				"yearFrom": 1978,
				"yearTo": 1995,
				"latitude": 52.0896405,
				"longitude": 5.3348803
			}];

			var zoomControl = new am4maps.ZoomControl();
			map.zoomControl = zoomControl;
			zoomControl.slider.height = 300;
			zoomControl.fill = am4core.color("#f76b00");

			let home = map.chartContainer.createChild(am4core.Button);
			home.label.text = "Center";
			home.align = "right";
			home.events.on("hit", function(ev) {
				map.goHome();
			});

			this.map = map;
		})
	}

	/*
	provaGrafico() { //rename ngAfterViewInit() to see chart
		this.zone.runOutsideAngular(() => {
			let chart = am4core.create("chartdiv", am4charts.XYChart);

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
			
			this.chart = chart;
		})
	}
	*/

	ngOnDestroy() {
		this.zone.runOutsideAngular(() => {
			if(this.chart) {
				this.chart.dispose();
			}
		})
	}

}