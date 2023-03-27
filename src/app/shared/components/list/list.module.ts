import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemContentDirective } from './directives/list-item-content.directive';
import { ListItemTitleDirective } from './directives/list-item-title.directive';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ListItemContentDirective,
    ListItemTitleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    ListItemContentDirective,
    ListItemTitleDirective
  ]
})
export class ListModule { }
