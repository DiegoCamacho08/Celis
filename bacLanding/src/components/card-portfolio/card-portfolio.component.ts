import { Component, ElementRef, ViewChild } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;
  url: string;

}

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
  styleUrls: ['./card-portfolio.component.scss']
})
export class CardPortfolioComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  services: Service[] = [
    {
      title: 'Bitspot',
      description: 'ATM de criptomonedas',
      icon: 'logoNegative2.png' ,
      url:"https://preview.bitspot.mx/"
    },
    {
      title: 'Airdrop',
      description: 'Token de fidelidad',
      icon: 'airdropBAC3.png',
      url:"https://airdrop.blockchainadvance.center/" 
    },  
  ];

  getIconPath(iconName: string): string {
    return `../../assets/images/Portfolio/${iconName}`;
  }

  scrollLeft(): void {
    this.carousel.nativeElement.scrollBy({
      left: -270,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollBy({
      left: 270,  
      behavior: 'smooth'
    });
  }


  navigateToPage(url: string) {
    window.location.href = url;
  }
}
