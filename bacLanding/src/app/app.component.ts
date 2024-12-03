import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bacLanding';

  protected navBgTransparent = true;

  @HostListener('window:scroll', ['$event'])
  onWindowsScroll(event: Event) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.navBgTransparent = scrollTop <= 50;
  }
}
