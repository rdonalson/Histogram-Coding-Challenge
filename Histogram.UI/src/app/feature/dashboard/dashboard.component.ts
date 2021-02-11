import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WordBox } from 'src/app/core/models/word-box';
import { BigramService } from 'src/app/core/services/bigram.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: any;
  options: any;
  bigramList: WordBox[] = [];
  inputTextValue!: string;
  phrase: string = 'The quick brown fox and the quick blue hare';
  constructor(
    private bigramService: BigramService
  ) { }

  ngOnInit(): void {
    this.getBigramCounts(this.phrase);
  }

  private getBigramCounts(phrase: string): void {
    this.bigramService.getBigramCounts(this.phrase).subscribe({
      next: bigrams => {
        this.bigramList = bigrams;
        this.initChart();
      },
      error: err => { throw err; }
    });
  }

  getNewData(): void {
    this.phrase = this.inputTextValue;
    this.inputTextValue = '';
    this.getBigramCounts(this.phrase);
  }

  private initChart(): void {
    this.chartData = {
      labels: [],
      datasets: [
        {
          label: 'Bigram Histogram',
          backgroundColor: 'blue',
          borderColor: '#7CB342',
          data: []
        }
      ]
    };
    this.options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
    this.bigramList.forEach((bigram: WordBox) => {
      this.chartData.labels.push(bigram.bigram);
      this.chartData.datasets[0].data.push(bigram.count);
    });
  }
}
