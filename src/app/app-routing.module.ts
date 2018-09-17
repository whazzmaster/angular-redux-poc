import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisDetailsComponent } from './analysis-details/analysis-details.component';

const routes: Routes = [
  { path: '', component: AnalysisDetailsComponent },
  { path: 'analyses/:id', component: AnalysisDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}