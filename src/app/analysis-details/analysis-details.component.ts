import { select, NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Analysis } from '../state/models/analysis';
import { AppState } from '../state/reducers';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.css']
})
export class AnalysisDetailsComponent implements OnInit {
  @select(['analysis', 'selected']) analysis: Observable<Analysis>;

  constructor(private ngRedux: NgRedux<AppState>) {}

  ngOnInit() {}
}
