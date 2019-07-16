import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public constructor(private oauthService: OAuthService) {

    this.oauthService.redirectUri = window.location.origin;

    this.oauthService.clientId = '73a11f91-517d-4bf1-8e1b-885218d0d7f1';
    this.oauthService.loginUrl = 'https://login.microsoftonline.com/2918b24e-c23f-4746-bf73-673fec71f96b/adfs/oauth2/authorize';
    this.oauthService.issuer = 'https://login.microsoftonline.com/2918b24e-c23f-4746-bf73-673fec71f96b/adfs';

    this.oauthService.scope = "openid profile";
    this.oauthService.responseType = 'id_token token';

    this.oauthService.setStorage(localStorage);

    this.oauthService.tryLogin();

  }
}
