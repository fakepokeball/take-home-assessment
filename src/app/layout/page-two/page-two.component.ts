import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../assets/components/form/form.component';


@Component({
  standalone: true,
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css'],
  imports: [CommonModule, FormComponent]
})
export class PageTwoComponent {}
