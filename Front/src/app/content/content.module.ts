import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CardsComponent } from './cards/cards.component';
import { CardsModule } from './cards/cards.module';

@NgModule({
  imports: [
    CommonModule,CardsModule
  ],
  declarations: [ContentComponent],
  exports : [ContentModule]
})
export class ContentModule { }
