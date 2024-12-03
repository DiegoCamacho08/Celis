import { Component, ElementRef, ViewChild } from '@angular/core';

interface teamMembers{
  image: string;
  name: string;
  position: string;
  description: string;
  socialLinks: [];

}

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

scrollLeft(): void {
  this.carousel.nativeElement.scrollBy({
    left: -370,
    behavior: 'smooth'
  });
}

scrollRight(): void {
  this.carousel.nativeElement.scrollBy({
    left: 370,  
    behavior: 'smooth'
  });
}
}
