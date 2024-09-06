import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectMenuColor, resetColors } from './state/menu.actions';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;
  menuColor: string;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.formGroup = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: ['', Validators.required]
    });

    // Subscribe to color changes from the store
    this.store.select('menu').subscribe(menuState => {
      this.menuColor = menuState.selectedColor;
      document.documentElement.style.setProperty('--menu-color', this.menuColor);
    });
  }

  // Select the color based on the menu item
  selectMenuColor(color: string) {
    this.store.dispatch(selectMenuColor({ color }));
  }

  // Reset the form and colors
  onReset() {
    this.formGroup.reset();
    this.store.dispatch(resetColors());
  }

  // Simulate submit navigation toggle
  onSubmit() {
    // Handle the endless loop navigation between components
    console.log('Navigating...');
  }
}
