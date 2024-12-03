import { Component } from '@angular/core';

interface Storie {
  project: string;
  problem: string;
  solution: string;
  image: string;

}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
 stories: Storie[] = [
  {
    project: 'Bitspot',
    problem: 'Lorem ipsum dolor sit amet consectetur. Sed egestas enim sollicitudin amet ut et ultrices. Vulputate nunc sed ',
    solution: 'Un cajero automático (ATM) para la compra y venta de criptomonedas para transformar radicalmente la interacción de los usuarios con los activos digitales. Estos ATMs ofrecen una experiencia de usuario completamente segura y autónoma',
    image:"Cajero.png"
  },
  {
    project: 'AirDrop',
    problem: 'Lorem ipsum dolor sit amet consectetur. Sed egestas enim sollicitudin amet ut et ultrices. Vulputate nunc sed ',
    solution: 'Token de fidelidad. Más allá de ser un simple medio de intercambio, este token permite a los usuarios participar activamente en actividades como stacking, redención de productos, adquisición de merchandising, servicios y consultorías.',
    image:"airdrop.png"
  },
  
 ];

 getImagePath(imageName: string): string {
  return `../../assets/images/${imageName}`;
}
}
