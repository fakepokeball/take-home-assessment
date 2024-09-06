import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { changeMenuItem } from '../../store/menu-item.actions';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  constructor(private store: Store) {}

  changeColor(color: string) {
    this.store.dispatch(changeMenuItem({ color }));
  }
}