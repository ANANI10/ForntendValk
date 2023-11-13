/*import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions, ChartData, ChartConfiguration, Chart } from 'chart.js';
import { ChartService } from 'src/app/Services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit , AfterViewInit {
  public chartData !: any[];
  public chartLabels !: string[];

  @ViewChild('revenuChartCanvas') revenuChartCanvas : ElementRef|any;

  constructor(private chartService: ChartService) { }
  
  ngOnInit(): void {
    this.chartService;
    this.ngAfterViewInit
    
  }

  ngAfterViewInit() {
    // Vérifiez si l'élément HTML existe avant de créer le graphique
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    // Appelez le service pour obtenir les données de revenu pour la semaine actuelle
    this.chartService.getDailyRevenueForWeek(currentDate).subscribe(data => {
      this.chartData = data;
      this.chartLabels = ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5', 'Jour 6', 'Jour 7']; // Remplacez ceci par vos dates
      this.createChart();
    });
  }
  

  createChart() {
    // Configuration du graphique
    const ctx: CanvasRenderingContext2D = this.revenuChartCanvas.nativeElement.getContext('2d');
    const revenuChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Revenu quotidien',
          data: this.chartData,
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Revenu'
            }
          }
        }
      }
    });
  }
}
*/

  
 

  // Pie
 /* public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };*/
  

  /*import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  import { ChartService } from 'src/app/Services/chart.service';
  import { Chart } from 'chart.js/auto';
  
  @Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
  })
  export class ChartComponent implements OnInit {
    public chartData: any[] = [];
    public chartLabels: string[] = [];
  
    @ViewChild('revenuChartCanvas') revenuChartCanvas: ElementRef | any;
  
    constructor(private chartService: ChartService) {}
  
    ngOnInit() {
      this.getDailyRevenueDataForWeek();
    }
    
  
    getDailyRevenueDataForWeek() {
      const today = new Date();
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 6); // Une semaine en arrière
  
      const labels: string[] = [];
      const data: number[] = [];
  
      for (let i = 0; i < 7; i++) {
        const date = new Date(weekAgo);
        date.setDate(date.getDate() + i);
        const dateString = this.formatDate(date);
        labels.push(dateString);
  
        // Appelez le service pour obtenir les données de revenu pour la journée spécifique
        this.chartService.getDailyRevenueForWeek(dateString).subscribe(dailyData => {
          const dailyRevenue = dailyData[0]; // Supposons que le service renvoie un tableau d'un seul élément
          data.push(dailyRevenue);
  
          // Une fois que les données sont collectées pour les 7 jours, affichez-les sur le graphique
          if (data.length === 7) {
            this.chartData = data;
            this.chartLabels = labels;
            this.createChart();
          }
        });
      }
    }
  
    createChart() {
      const ctx: CanvasRenderingContext2D = this.revenuChartCanvas.nativeElement.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: 'Revenu quotidien',
            data: this.chartData,
            borderColor: 'blue',
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category',
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Revenu'
              }
            }
          }
        }
      });
    }
  
    formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }
  
*/


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartService } from 'src/app/Services/chart.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chartData: any[] = [];
  public chartLabels: string[] = [];

  @ViewChild('revenuChartCanvas') revenuChartCanvas: ElementRef | any;

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.getDailyRevenueDataForWeek();
  }

  getDailyRevenueDataForWeek() {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 6); // Une semaine en arrière

    const labels: string[] = [];
    const data: number[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(weekAgo);
      date.setDate(date.getDate() + i);
      const dateString = this.formatDate(date);
      labels.push(dateString);

      // Journalisation de débogage pour la date et les données récupérées
      console.log('Date de requête au service :', dateString);

      this.chartService.getDailyRevenueForWeek(dateString).subscribe(dailyData => {
        console.log('Date récupérée :', dateString);
        console.log('Données reçues :', dailyData);

        const dailyRevenue = dailyData[0]; // Supposons que le service renvoie un tableau d'un seul élément
        data.push(dailyRevenue);

        if (data.length === 7) {
          this.chartData = data;
          this.chartLabels = labels;
          this.createChart();
        }
      });
    }
  }

  createChart() {
    const ctx: CanvasRenderingContext2D = this.revenuChartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Revenu quotidien',
          data: this.chartData,
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Revenu'
            }
          }
        }
      }
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}


