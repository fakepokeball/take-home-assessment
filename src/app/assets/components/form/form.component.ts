import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeMenuItem } from '../../../store/menu-item.actions';
import { AppState } from '../../../store/app.state';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;
  menuColor: string= '#ccc';

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.store.select('menuItem').subscribe(menuState => {
      this.menuColor = menuState;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const currentRoute = this.router.url;
      if (currentRoute === '/one') {
        this.router.navigate(['/two']);
      } else {
        this.router.navigate(['/one']);
      }
    }
  }

  onReset() {
    this.form.reset();
    this.store.dispatch(changeMenuItem({ color: '#ccc' })); 
  }
}
