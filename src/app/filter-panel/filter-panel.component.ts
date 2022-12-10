import { Component, DoCheck, EventEmitter, Output } from '@angular/core';

// sample data
import { Types } from '../../sample-data';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements DoCheck {
  // private properties
  types: { title: string, checked: boolean }[] = Types.map(type => ({ title: type, checked: false }));
  openedSortingDropdown: boolean = false;
  selectedSortingMethod = '';

  // output properties
  @Output() selectedTypesChanged = new EventEmitter<string[]>();
  @Output() selectedSortingChanged = new EventEmitter<string>();

  // events
  setSorting(sorting: string) {
    this.selectedSortingMethod = sorting;
    this.openedSortingDropdown = false;

    this.selectedSortingChanged.emit(sorting);
  };

  ngDoCheck(): void {
    this.selectedTypesChanged.emit(this.types.filter(t => t.checked).map(t => t.title));
  }

}
