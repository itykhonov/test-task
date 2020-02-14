import { stepsRouts } from './../../app-routing.module';
import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public paths: string[] = stepsRouts.map(({path}: Route) => path);
}
