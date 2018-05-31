import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MyMaterialModule } from './my-material.module';

import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserSearchModule } from './user-search/user-search.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { ErrorService } from './services/error.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    MyMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    UserSearchModule
  ],
  providers: [ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
