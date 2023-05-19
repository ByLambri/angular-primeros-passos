import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { mainPageComponent } from './pages/main-page.component';
import { ListComponent } from './componentes/list/list.component';
import { AddComponent } from './componentes/add-character/add-character.component';




@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    AddComponent
  ],
  exports: [
    mainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
