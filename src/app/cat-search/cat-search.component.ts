import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CatService} from "../cat.service";
import {Cat} from "../interface/Cat";
import {query} from "@angular/animations";

@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.css']
})
export class CatSearchComponent implements OnInit {

  query: string = '';
  constructor(private catService: CatService) { }

  @Output() catEmitter = new EventEmitter<Cat[]>();
  ngOnInit(): void {
  }

  search() {
    console.log("search for " + this.query);
    this.catService.findByName(this.query).subscribe(t => this.catEmitter.emit(t));
  }

}
