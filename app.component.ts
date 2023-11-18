import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: string[];
  labels: any[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public options: Partial<ChartOptions> | any;
  public options3: Partial<ChartOptions> | any;
  public plastics: Partial<ChartOptions> | any;

  constructor(private alertController: AlertController) {
    this.initializeChart();
    this.spackLine();
    this.line3();
    this.spackLine2();
  }

  async presentDataEntryBox() {
    const alert = await this.alertController.create({
      header: 'How many bags?',
      cssClass: 'custom-alert',
      inputs: [
        {
          name: 'dataInput',
          type: 'number',
          placeholder: 'Please Enter a number',
        },
        {
          name: 'dateInput',
          type: 'date',
          placeholder: 'Select date',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Data entered:', data.dataInput);
            console.log('Date selected:', data.dateInput);
          },
        },
      ],
    });

    await alert.present();
  }

  initializeChart() {
    // Your chart initialization code goes here
  }

  spackLine() {
    this.options = {
      chart: {
        type: 'line',
        height: 100,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
        },
      ],
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 10,
          left: 110,
          bottom: 10,
        },
      },
      colors: ['#fff'],
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter() {
              return ''; // remove title in tooltip
            },
          },
        },
      },
    };
  }

  line3() {
    this.options3 = {
      chart: {
        type: 'line',
        height: 100,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [10, 6, 7, 11, 14, 18, 21, 17, 5],
        },
      ],
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 10,
          left: 110,
          bottom: 10,
        },
      },
      colors: ['#fff'],
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter() {
              return ''; // remove title in tooltip
            },
          },
        },
      },
    };
  }

  spackLine2() {
    this.plastics = {
      chart: {
        type: 'line',
        height: 100,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [5, 4, 9, 3, 6, 10, 2, 5, 7, 9],
        },
      ],
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 10,
          left: 110,
          bottom: 10,
        },
      },
      colors: ['#fff'],
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter() {
              return ''; // remove title in tooltip
            },
          },
        },
      },
    };
  }
}
