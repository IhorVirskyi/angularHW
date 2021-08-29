import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent implements OnInit {
  @Output() onSearchEvent = new EventEmitter<string>();

  public searchForm = new FormGroup({
    text: new FormControl('') // Validator?
  }) 

  onSearch() {
    const str = this.searchForm.get('text')?.value as string ;
    console.log(str);
    this.onSearchEvent.emit(str);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
