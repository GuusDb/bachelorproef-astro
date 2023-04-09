import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/services/product-service';
import { TableComponent } from './table/table.component';
import { TablePageComponent } from './table-page/table-page.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TitlePageComponent,
    NavbarComponent,
    ButtonComponent,
    ButtonPageComponent,
    TableComponent,
    TablePageComponent,
    SharedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
