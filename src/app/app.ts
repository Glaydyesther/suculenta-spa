import { Component} from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { ServicesType } from './components/services-type/services-type';
import { Services } from './components/services/services';
import { Booking } from './components/booking/booking';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    ServicesType,
    Services,
    Booking,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
