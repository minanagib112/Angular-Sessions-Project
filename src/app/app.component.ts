import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './components/home/home.component';
import AboutComponent from './components/About/about.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string = 'Mina';
  userAge: number = 25;

  changeData() {
    this.userName = 'Menna';
    this.userAge = 23;
  }
  changeInput(e:any){
    this.userName = e.target.value
  }
}
