
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    PageNotFoundRoutingModule,
    CommonModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PageNotFoundModule { }
