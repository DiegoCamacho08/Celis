import { Component } from '@angular/core';

interface Value {
  title: string;
  description: string;
  icon: string;

}
@Component({
  selector: 'app-card-core',
  templateUrl: './card-core.component.html',
  styleUrls: ['./card-core.component.scss']
})
export class CardCoreComponent {
  values: Value[] = [
    {
      title: 'Innovación',
      description: 'Convertimos visiones en realidad con tecnología Web3 de vanguardia.',
      icon: 'innovation.svg'
    },
    {
      title: 'Transparencia',
      description: 'Soluciones claras y confiables que generan confianza.',
      icon: 'transparency.svg'
    },
    {
      title: 'Seguridad',
      description: 'Seguridad de primer nivel para proteger tus datos y transacciones.',
      icon: 'security.svg'
    },
    {
      title: 'Eficiencia',
      description: 'Optimizando recursos para obtener resultados rápidos y excepcionales.',
      icon: 'efficiency.svg'
    },    
  ];

  getIconPath(iconName: string): string {
    return `../../assets/images/icons/${iconName}`;
  }
}
