import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Analysis } from '../state/models/analysis';
import { AppState } from '../state/reducers';
import { AnalysisService } from '../services/analysis.service';
import { NetworkActions, AnalysisActions } from '../state/actions';

@Component({
  selector: 'app-analysis-list',
  templateUrl: './analysis-list.component.html',
  styleUrls: ['./analysis-list.component.css']
})
export class AnalysisListComponent implements OnInit {
  @select(['analysis', 'list']) analyses$: Observable<Analysis[]>;
  @select(['analysis', 'selected']) selected$: Observable<Analysis>;

  constructor(private ngRedux: NgRedux<AppState>,
              private router: Router,
              private analysisService: AnalysisService) { }

  ngOnInit() {
    this.ngRedux.dispatch(NetworkActions.startFetch());
    this.analysisService.getAnalyses().subscribe((analyses) => {
        this.ngRedux.dispatch(AnalysisActions.loadAnalyses(analyses));
        this.ngRedux.dispatch(NetworkActions.completeFetch());
      });
  }

  handleClick (analysis: Analysis) {
    this.router.navigate(['analyses', analysis.id]);
  }

}
