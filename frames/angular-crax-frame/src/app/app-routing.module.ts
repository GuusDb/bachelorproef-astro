import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'title', component: TitlePageComponent },
  { path: 'button', component: ButtonPageComponent },
  { path: 'table', component: TablePageComponent },
  { path: 'shared', component: SharedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
