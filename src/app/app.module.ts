import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
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
import { AppRoutingModule } from './app-routing.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisListComponent,
    AnalysisDetailsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<AppState>, ngReduxRouter: NgReduxRouter) {
    ngRedux.configureStore(rootReducer, INITIAL_APP_STATE, [createLogger()]);
    ngReduxRouter.initialize();
  }
 }
