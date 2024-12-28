import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule para usar directivas como *ngSwitchCase
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentSection: string = ''; // Inicializa con ninguna sección seleccionada

  setSection(section: string) {
    this.currentSection = section; // Cambia la sección actual
  }
}
