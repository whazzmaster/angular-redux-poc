import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { createLogger } from 'redux-logger';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import rootReducer, { AppState, INITIAL_APP_STATE } from './state/reducers';
import { AnalysisListComponent } from './analysis-list/analysis-list.component';
import { AnalysisDetailsComponent } from './analysis-details/analysis-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisListComponent,
    AnalysisDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_APP_STATE, [createLogger()]);
  }
 }
