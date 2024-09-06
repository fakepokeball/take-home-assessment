import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { changeMenuItem } from './store/menu-item.actions';
import { RouterModule } from '@angular/router';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // RouterModule import edildi.
  templateUrl: './app.component.html',
})
export class AppComponent {
  menuColor: string= '#fff';

  constructor(private store: Store<AppState>) {
    this.store.select('menuItem').subscribe(menuState => {
      this.menuColor = menuState.color;
      document.documentElement.style.setProperty('--menu-color', this.menuColor);
    });
  }

  changeColor(color: string) {
    this.store.dispatch(changeMenuItem({ color }));
  }
}
