import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule,         
    RouterOutlet,        
    HomeComponent,        
   
  ],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']   
})
export class AppComponent {
  texto = 'Universidad';  
}
