import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
contador = signal(0);

  incrementar(){
    this.contador.update(valor => valor + 1);
  }

  decrementar(){
    this.contador.update(valor => valor - 1);
  }

  limpar(){
    this.contador.set(0);
  }
}
