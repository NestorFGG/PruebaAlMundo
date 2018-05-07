import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule,
  MatGridListModule, MatIconModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatListModule, MatToolbarModule
} from '@angular/material';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FoundHotelsComponent } from './found-hotels/found-hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    FoundHotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
