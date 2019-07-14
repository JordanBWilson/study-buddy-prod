
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// import { PhilosophyComponent } from './philosophy/philosophy.component';
// import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ArithmeticComponent } from '../arithmetic/arithmetic.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ArithmeticComponent
    // PhilosophyComponent,
    // WelcomePageComponent
  ],
  imports: [
    DashboardRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class DashboardModule { }
