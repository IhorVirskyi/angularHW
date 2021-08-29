import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryDetailComponent } from './library-detail/library-detail.component';



@NgModule({
  declarations: [
    LibraryListComponent,
    LibraryDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LibraryListComponent
  ]
})
export class LibraryModule { }
