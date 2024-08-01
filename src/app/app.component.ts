import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './components/home/home.component';
import AboutComponent from './components/About/about.component';
import { FormsModule } from '@angular/forms';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userRole = false;
  userName: string = 'Mina';
  userAge: number = 25;

  changeData() {
    this.userName = 'Menna';
    this.userAge = 23;
  }
  changeInput(e:any){
    this.userName = e.target.value
  }

  productList: Product[] = [
    {name: 'Apple', model: 1, id: 1, count: 1},
    {name: 'Banana', model: 2, id: 2, count: 2},
    {name: 'Orange', model: 3, id: 3, count: 3},
    {name: 'Grape', model: 4, id: 4, count: 4}
  ]
}
