import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  testeDeReforco: string = "Teste de Reforço";

  userData = {
    email: 'edmilson@gmail.com',
    role: 'Admin'
  };

  userName: string = "Edmilson";

  title = 'Curso-angular';

}