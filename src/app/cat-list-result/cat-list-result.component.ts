import {Component, Input, OnInit} from '@angular/core';
import {CatService} from "../cat.service";
import {Cat} from "../interface/Cat";

@Component({
  selector: 'app-cat-list-result',
  templateUrl: './cat-list-result.component.html',
  styleUrls: ['./cat-list-result.component.css']
})
export class CatListResultComponent implements OnInit {

  @Input() cats!: Cat[];
  constructor(
    private catService: CatService
  ) { }

  ngOnInit(): void {

  }

}
