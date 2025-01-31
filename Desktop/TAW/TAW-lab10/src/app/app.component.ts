import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import {NavbarComponent} from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [DataService]
})
export class AppComponent {

  public counter: number = 0;

  constructor(private dataService: DataService) {}



  add() {
    this.counter++;
  }

  remove() {
    this.counter--;
  }

  title = 'blog_FK';

}
