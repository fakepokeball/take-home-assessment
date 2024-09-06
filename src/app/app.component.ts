import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { changeMenuItem } from './store/menu-item.actions';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuColor: string = '#ccc'; // Başlangıç değeri

  constructor(private store: Store<AppState>) {
    // Subscribe to color changes from the store
    this.store.select('menuItem').subscribe(menuState => {
      this.menuColor = menuState;
      document.documentElement.style.setProperty('--menu-color', this.menuColor);
    });
  }

  // Select the color based on the menu item
  changeColor(color: string) {
    this.store.dispatch(changeMenuItem({ color }));
  }
}
