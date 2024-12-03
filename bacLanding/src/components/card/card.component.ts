import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;

}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  services: Service[] = [
    {
      title: 'Creación de DApps',
      description: 'Aplicaciones descentralizadas personalizadas diseñadas para satisfacer tus necesidades únicas.',
      icon: 'DaapsIcon.svg' 
    },
    {
      title: 'Contratos inteligentes',
      description: 'Automatiza procesos y aumenta la confianza con contratos inteligentes seguros.',
      icon: 'smartContractIcon.svg'
    },
    {
      title: 'Tokenización de activos',
      description: 'Convierte activos del mundo real en tokens digitales para aumentar la liquidez y accesibilidad.',
      icon: 'tokenizationIcon.svg'
    },
    {
      title: 'Galerías de arte digital',
      description: 'Exhibe y vende arte digital usando tecnología blockchain.',
      icon: 'digitalIcon.svg'
    },
    {
      title: 'Soluciones de blockchain en capas',
      description: 'Integra soluciones multicapa para mejorar la escalabilidad y el rendimiento.',
      icon: 'layeredIcon.svg'
    },
    {
      title: 'Cadena de lealtad',
      description: 'Crea y gestiona programas de lealtad utilizando tecnología blockchain',
      icon: 'loyaltyIcon.svg'
    },
    {
      title: 'Auditoría, validación, certificación',
      description: 'De contratos inteligentes.',
      icon: 'protocolIcon.svg'
    }
  ];

  getIconPath(iconName: string): string {
    return `../../assets/images/icons/${iconName}`;
  }
}
