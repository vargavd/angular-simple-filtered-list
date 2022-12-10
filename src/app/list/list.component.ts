import { Component, Input, OnChanges, OnInit } from '@angular/core';

// sample data
import { Titles, Types, IItem } from '../../sample-data';

// helper function
const generateTypesArray = () => {
  let clonedTypes = [...Types];

  let getARandomType = () => {
    const index = Math.floor(Math.random()*clonedTypes.length);
    const type = clonedTypes[index];

    clonedTypes.splice(index, 1);
    return type;
  };

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
  @Input() selectedSorting: string = '';

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
    if (this.selectedTypes.length === 0) {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => {
        for (let index = 0; index < this.selectedTypes.length; index++) {
          if (!item.types.includes(this.selectedTypes[index])) {
            return false;
          }
        }

        return true;
      });
    }

    if (this.selectedSorting === 'title-desc') {
      this.filteredItems.sort((item1, item2) => {
        if (item1.title < item2.title) {
          return -1;
        }

        if (item1.title === item2.title) {
          return 0;
        }

        return 1;
      })
    }

    if (this.selectedSorting === 'title-asc') {
      this.filteredItems.sort((item1, item2) => {
        if (item1.title > item2.title) {
          return -1;
        }

        if (item1.title === item2.title) {
          return 0;
        }

        return 1;
      })
    }
  }

}
