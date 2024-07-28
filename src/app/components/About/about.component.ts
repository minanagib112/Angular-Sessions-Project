import { Component } from "@angular/core";
import ButtonComponent from "../button/button.component";
import { CartComponent } from "./cart/cart.component";


@Component
({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent,CartComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent
{
}
