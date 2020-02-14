import { State as PagesState } from './../../reducers/pages.reducer';
import { State } from './../../reducers';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public pagesData: Observable<PagesState>;

  constructor(
    private store: Store<State>,
  ) {
  }

  public ngOnInit(): void {
    this.pagesData = this.store.select('pages');
  }
}
