import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeMenuItem } from '../../../store/menu-item.actions';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  form: FormGroup;
  menuColor: string= '#fff';

  constructor(private fb: FormBuilder, private router: Router, private store: Store) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    // Subscribe to store to get menu color
    this.store.select(state => state.menuItem).subscribe((menuItem: string) => {  
      this.menuColor = menuItem;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Toggle between page one and page two
      const currentRoute = this.router.url;
      const nextRoute = currentRoute === '/one' ? '/two' : '/one';
      this.router.navigate([nextRoute]);
    }
  }

  onReset() {
    this.form.reset();
    this.store.dispatch(changeMenuItem({ color: '#ccc' })); // Reset color to default
  }
}
