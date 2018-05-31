import { Component, OnInit } from '@angular/core';
import { SearchResults } from '../models/search-results';
import { UserSearchService } from '../services/user-search.service';
import { ErrorService } from '../../services/error.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-search-list',
  templateUrl: './user-search-list.component.html',
  styleUrls: ['./user-search-list.component.scss']
})
export class UserSearchListComponent implements OnInit {
  public searchTerm = '';
  public searchResults: SearchResults;
  public isLoading = false;

  private debounceTimeout;

  constructor(
    private userSearchService: UserSearchService,
    private errorService: ErrorService) { }

  ngOnInit() {}

  onKeyUp() {
    // Create an easy debounce
    clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      this.isLoading = true;
      this.userSearchService.getUsers(this.searchTerm)
        .subscribe(
          (results: any) => {
            this.searchResults = new SearchResults(results.total_count, this.mapUsers(results.items));
            this.isLoading = false;
        },
          error => {
            this.errorService.logError(error);
            this.isLoading = false;
          });
    }, 1500);
  }

  mapUsers(users): User[] {
    return users.map((user) => ({
      name: user.login,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      score: user.score
    }));
  }
}
