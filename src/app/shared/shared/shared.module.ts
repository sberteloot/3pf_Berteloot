import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesDirective } from '../directives/titles.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsFormsControlsPipe } from '../pipes/errors-forms-controls.pipe';
import { NamesurnamePipe } from '../pipes/namesurname.pipe';
import { AutocompleteOffDirective } from '../directives/autocomplete-off.directive';

@NgModule({
  declarations: [
    TitlesDirective,
    AutocompleteOffDirective,
    NamesurnamePipe,
    ErrorsFormsControlsPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TitlesDirective,
    AutocompleteOffDirective,
    NamesurnamePipe,
    ErrorsFormsControlsPipe
  ]  
})
export class SharedModule { }
