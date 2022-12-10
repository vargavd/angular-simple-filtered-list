import { Component, Input, OnChanges, OnInit } from '@angular/core';

// sample data
import { Titles, Types, IItem } from '../../sample-data';

// helper function
const generateTypesArray = () => {
  let getARandomType = () => Types[Math.floor(Math.random()*Types.length)];

  let types = [ getARandomType() ];

  if (Math.random() < .2) {
    types.push(getARandomType());
  }

  if (Math.random() < .2) {
    types.push(getARandomType());
  }

  if (Math.random() < .2) {
    types.push(getARandomType());
  }

  return types;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {
  // input properties
  @Input() selectedTypes: string[] = [];

  // private properties
  items: IItem[] = [];
  filteredItems: IItem[] = [];

  constructor() {
    this.items = Titles.map(title => (
      { 
        title, 
        types: generateTypesArray()
      }
    ));
  }

  ngOnChanges() {
    console.log(this.selectedTypes);
    if (this.selectedTypes.length === 0) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => {
        for (let index = 0; index < item.types.length; index++) {
          if (this.selectedTypes.includes(item.types[index])) {
            return true;
          }
        }

        return false;
      });
    }
  }

}
