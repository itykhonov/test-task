import { State } from './../../reducers';
import { isSubmitActive } from './../../selectors/pagesValidation.selector';
import { ClearAllData } from './../../actions/pages.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss']
})
export class ActionsBarComponent implements OnInit {
  public isPagesValid: Observable<boolean>;

  public constructor(
    private store: Store<State>,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.isPagesValid = this.store.select(isSubmitActive);
  }

  public clearAllFields() {
    this.store.dispatch(new ClearAllData());
    this.router.navigate(['/name']);
  }
}
