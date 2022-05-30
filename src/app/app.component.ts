import { Component } from '@angular/core';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public estaLogeado: boolean = false;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.estaLogeado = this.tokenService.estaLogeado();
  }

}
