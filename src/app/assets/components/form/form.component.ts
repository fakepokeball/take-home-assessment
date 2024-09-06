import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { changeMenuItem } from '../../../store/menu-item.actions';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/two']);
    }
  }

  onReset() {
    this.form.reset();
    this.store.dispatch(changeMenuItem({ color: '#ccc' }));
  }
}