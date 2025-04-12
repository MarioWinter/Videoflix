  import { Component } from '@angular/core';
  import { HeaderComponent } from '../header/header.component';
  import { FooterComponent } from '../footer/footer.component';

  @Component({
    selector: 'app-landingpage',
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './landingpage.component.html',
    styleUrl: './landingpage.component.scss'
  })
  export class LandingpageComponent {

    handleLogin() {
      console.log('Logging in...');
    }

  }
