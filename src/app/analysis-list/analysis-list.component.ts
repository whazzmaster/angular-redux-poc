import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { Analysis } from '../state/models/analysis';
import { AppState } from '../state/reducers';
import { Actions } from '../state/actions/analysis';

@Component({
  selector: 'app-analysis-list',
  templateUrl: './analysis-list.component.html',
  styleUrls: ['./analysis-list.component.css']
})
export class AnalysisListComponent implements OnInit {
  @select(['analysis', 'list']) analyses: Observable<Analysis[]>;
  @select(['analysis', 'selected']) selected: Observable<Analysis>;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {}

  handleClick (analysis: Analysis) {
    this.ngRedux.dispatch(Actions.setCurrentAnalysis(analysis));
  }

}
