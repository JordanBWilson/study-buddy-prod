
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ArithmeticComponent } from '../math-generator/arithmetic/arithmetic.component';
import { ProbValidModalComponent } from '../shared/prob-valid-modal/prob-valid-modal.component';
import { AdventureModalComponent } from '../shared/adventure-modal/adventure-modal.component';
import { LevelSelectModalComponent } from '../shared/level-select-modal/level-select-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ArithmeticComponent,
    ProbValidModalComponent,
    AdventureModalComponent,
    LevelSelectModalComponent
  ],
  imports: [
    DashboardRoutingModule,
    // HttpClientModule,
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
