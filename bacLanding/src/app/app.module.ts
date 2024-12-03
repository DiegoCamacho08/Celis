import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from 'src/components/card/card.component';
import { CardTeamComponent } from 'src/components/card-team/card-team.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardCoreComponent } from 'src/components/card-core/card-core.component';
import { CardGetInTouchComponent } from 'src/components/card-get-in-touch/card-get-in-touch.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { CardPortfolioComponent } from 'src/components/card-portfolio/card-portfolio.component';
import { StoriesComponent } from 'src/components/stories/stories.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTeamComponent,
    CardCoreComponent,
    FooterComponent,
    CardPortfolioComponent,
    StoriesComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CardGetInTouchComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
