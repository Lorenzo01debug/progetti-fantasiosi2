import { Component, Input } from '@angular/core';
import { DescriptionComponent } from './description/description';
import { Description } from './description/description.model';

@Component({
  selector: 'app-descriptions',
  imports: [DescriptionComponent],
  templateUrl: './descriptions.html',
  styleUrl: './descriptions.css',
})
export class DescriptionsComponent {
  @Input({ required: true }) projectId!: string;

  descriptions: Description[] = [
    {
      id: 't1',
      projectId: 'p1',
      text: 'Telosa è una proposta di città americana pianificata utopica concepita dal miliardario americano Marc Lore e annunciata nel settembre 2021. Il progetto ha una popolazione target di 5 milioni di persone entro il 2050, con la prima fase di costruzione che dovrebbe ospitarne 50.000. ',
    },
    {
      id: 't2',
      projectId: 'p2',
      text: 'vruowbdbjdslaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
      id: 't3',
      projectId: 'p3',
      text: 'michele gabriele cipriani',
    },
  ];

  get selectedProjectDescription() {
    return this.descriptions.filter(
      (description) => description.projectId === this.projectId
    );
  }
}
