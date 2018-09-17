import { select, NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Analysis } from '../state/models/analysis';
import { AppState } from '../state/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalysisActions, NetworkActions } from '../state/actions';
import { AnalysisService } from '../services/analysis.service';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.css']
})
export class AnalysisDetailsComponent implements OnInit {
  currentId$: Observable<string>;
  @select(['analysis', 'selected']) analysis$: Observable<Analysis>;

  constructor(private ngRedux: NgRedux<AppState>,
              private route: ActivatedRoute,
              private router: Router,
              private analysisService: AnalysisService) {
  }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      const id: number = parseInt(p.id, 10);
      this.ngRedux.dispatch(NetworkActions.startFetch());
      this.analysisService.getAnalysis(id).subscribe((a: Analysis) => {
        this.ngRedux.dispatch(AnalysisActions.setCurrentAnalysis(a));
        this.ngRedux.dispatch(NetworkActions.completeFetch());
      });
    });
  }
}
