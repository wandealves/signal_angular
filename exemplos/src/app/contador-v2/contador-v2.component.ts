import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-contador-v2',
  standalone: true,
  imports: [],
  templateUrl: './contador-v2.component.html',
  styleUrl: './contador-v2.component.css'
})
export class ContadorV2Component {
  contador = signal(0);
  contadorVezesDois: Signal<number> = computed(() => this.contador() * 2);

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
