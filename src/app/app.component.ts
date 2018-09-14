import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { AppState } from './state/reducers';
import { Actions } from './state/actions/analysis';

import { AnalysisService } from './services/analysis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (ngRedux: NgRedux<AppState>, analysisService: AnalysisService) {
    analysisService.getAnalyses()
      .subscribe(analyses => ngRedux.dispatch(Actions.loadAnalyses(analyses)));
  }
}
