import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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

  //Optional second argument @viewChild()
  @ViewChild('searchInput') searchInputEl: ElementRef

  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText)
  }

  updateSearchText(){
    // this.searchText = event.target.value;
    // console.log(inputEL.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText)
  }

}
