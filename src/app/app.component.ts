import { Component } from '@angular/core';
import {Cat} from "./interface/Cat";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cats: Cat[] = [];
  title = 'fake-cat';

  onCatArrive($event: Cat[]) {
    this.cats = $event;
  }
}
