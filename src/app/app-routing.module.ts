import { StepComponent } from './pages/step/step.component';
import { ResultsComponent } from './pages/results/results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const stepsRouts: Routes = [
  {
    path: 'name',
    component: StepComponent,
    data: {
      type: 'name',
      stepIndex: 1,
    }
  },
  {
    path: 'email',
    component: StepComponent,
    data: {
      type: 'email',
      stepIndex: 2,
    }
  },
  {
    path: 'phone',
    component: StepComponent,
    data: {
      type: 'phone',
      stepIndex: 3,
    }
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'name',
    pathMatch: 'full'
  },
  ...stepsRouts,
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '**',
    redirectTo: '/name',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
