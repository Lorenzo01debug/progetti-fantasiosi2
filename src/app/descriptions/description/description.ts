import { Component, Input } from '@angular/core';
import { Description } from './description.model';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.css'
})
export class DescriptionComponent {
  @Input({required:true}) description!: Description;
}
