import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1.Create an event
  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText)
  }

  updateSearchText(inputEL: HTMLInputElement){
    // this.searchText = event.target.value;
    // console.log(inputEL.value);
    this.searchText = inputEL.value;
    this.searchTextChanged.emit(this.searchText)
  }

}
