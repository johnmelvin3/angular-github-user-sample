import { Component, OnInit, Input } from '@angular/core';
import { SearchResults } from '../models/search-results';

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html',
  styleUrls: ['./user-search-results.component.scss']
})
export class UserSearchResultsComponent implements OnInit {
  @Input() public results: SearchResults;
  public cards = { cols: 2, rows: 5 }

  constructor() { }

  ngOnInit() {
  }

}
