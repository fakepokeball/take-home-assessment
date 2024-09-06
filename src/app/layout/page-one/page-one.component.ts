import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeMenuItem } from '../../store/menu-item.actions';
import { FormComponent } from '../../assets/components/form/form.component';

@Component({
  standalone: true,
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
  imports: [CommonModule, RouterModule, FormComponent]
})
export class PageOneComponent {
  constructor(private store: Store) {}

  changeColor(color: string) {
    this.store.dispatch(changeMenuItem({ color }));
  }
}
