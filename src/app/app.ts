import { Component } from '@angular/core';
import { ProjectComponent } from './project/project';
import { projectList } from '../project-list';
import { Project } from './project/project.model';
import { DescriptionsComponent } from './descriptions/descriptions';

@Component({
  selector: 'app-root',
  imports: [ProjectComponent, DescriptionsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  projects: Project[] = projectList;
  selectedProjectId?: string;

  get selectedProject() {
    return this.projects.find((project) => {
      return project.id === this.selectedProjectId;
    });
  }

  onSelectProject(id: string) {
    this.selectedProjectId = id;
  }
}
