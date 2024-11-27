import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Store {
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
