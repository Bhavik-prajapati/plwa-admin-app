import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {
    ApexFill,
    ApexGrid,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexStroke,
    ApexLegend,
    ApexDataLabels,
    ChartComponent,
    ApexTitleSubtitle,
    NgApexchartsModule,
    ApexAxisChartSeries
} from "ng-apexcharts";

export type ChartOptions = {
    fill: ApexFill;
    grid: ApexGrid;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string[];
    labels: string[];
    stroke: ApexStroke;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
    series: ApexAxisChartSeries;
    subtitle: ApexTitleSubtitle;
};

@Component({
    selector: 'app-tickets-new-open:not(1)',
    standalone: true,
    imports: [RouterLink, MatCardModule, NgApexchartsModule],
    templateUrl: './tickets-new-open.component.html',
    styleUrl: './tickets-new-open.component.scss'
})
export class TicketsNewOpenComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Tickets New Open",
                    data: [40, 55, 35, 85, 50, 85, 95]
                }
            ],
            chart: {
                type: "area",
                height: 130,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight",
                width: 2
            },
            colors: [
                "#37D80A"
            ],
            fill: {
                type: 'gradient',
                gradient: {
                    stops: [0, 90, 100],
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.9
                }
            },
            xaxis: {
                categories: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: false,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tickAmount: 5,
                show: false,
                max: 100,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: true,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: false,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    width: 9,
                    height: 9,
                    offsetX: -2,
                    offsetY: -.5,
                    radius: 2
                }
            }
        };
    }

}