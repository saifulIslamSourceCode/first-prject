import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateComponent } from "./date/date.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-prject';
}
