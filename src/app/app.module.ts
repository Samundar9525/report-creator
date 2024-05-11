import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './shared/slider/slider.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReportControlComponent } from './report-control/report-control.component';
import { ControlDateComponent } from './control-date/control-date.component';
import { DatePipe } from '@angular/common';
import { ControlTimeComponent } from './control-time/control-time.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragResizeComponent } from './drag-resize/drag-resize.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ControlTextComponent } from './control-text/control-text.component';
import { ControlLineComponent } from './control-line/control-line.component';
import { ControlImageComponent } from './control-image/control-image.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SliderComponent,
    DropDownComponent,
    ReportControlComponent,
    ControlDateComponent,
    ControlTimeComponent,
    DragResizeComponent,
    ControlTextComponent,
    ControlLineComponent,
    ControlImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    DragDropModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
