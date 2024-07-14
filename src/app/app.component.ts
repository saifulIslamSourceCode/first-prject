import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { HelloWorld2Component } from "./hello-world-2/hello-world-2.component";
import { HelloWorld3Component } from "./hello-world-3/hello-world-3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, HelloWorld2Component, HelloWorld3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-prject';
}
