import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent {
  //project = input.required<Project>();
  @Input({required:true}) project!: Project;
  @Output()select = new EventEmitter();

  get imagePath(){
    return '../assets/' + this.project.idea;
  }
  onSelectProject() {
    this.select.emit(this.project.id);
  }
}
