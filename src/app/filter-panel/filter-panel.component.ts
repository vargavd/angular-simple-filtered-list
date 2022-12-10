import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {
  types: { title: string, checked: boolean }[] = [
    { title: 'Type 1', checked: false },
    { title: 'Type 2', checked: false },
    { title: 'Type 3', checked: false },
    { title: 'Type 4', checked: false },
  ];
  openedSortingDropdown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
