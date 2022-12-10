import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTypes: string[] = [];
  selectedSorting: string = '';

  onSelectedTypesChanged(selectedTypes: string[]) {
    this.selectedTypes = selectedTypes;
  }

  onSelectedSortingChanged(selectedSorting: string) {
    this.selectedSorting = selectedSorting;
  }
}
