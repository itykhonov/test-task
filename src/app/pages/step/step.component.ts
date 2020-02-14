import { State } from './../../reducers';
import { State as PagesState } from './../../reducers/pages.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Data } from '@angular/router';
import { UpdateStepData } from '../../actions/pages.actions';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnDestroy {
  public stepValue: string;
  public placeHolder: string;
  public stepType: string;
  public stepIndex: number;

  private subscription$: Subscription = new Subscription();

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.subscription$ = combineLatest(
      this.route.data,
      this.store.select('pages')
    ).subscribe(([{type, stepIndex}, pagesState]: [Data, PagesState]) => {
      this.stepType = type;
      this.stepValue = pagesState[type];
      this.placeHolder = `Enter your ${type}...`;
      this.stepIndex = stepIndex;
    });
  }

  public inputHandler(value: string): void {
    this.store.dispatch(new UpdateStepData({
      stepType: this.stepType,
      value
    }));
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
