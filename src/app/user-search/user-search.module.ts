import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchListComponent } from './user-search-list/user-search-list.component';
import { UserSearchResultsComponent } from './user-search-results/user-search-results.component';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from '../my-material.module';
import { UserSearchService } from './services/user-search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyMaterialModule,
    UserSearchRoutingModule
  ],
  providers: [UserSearchService],
  declarations: [UserSearchListComponent, UserSearchResultsComponent]
})
export class UserSearchModule { }
