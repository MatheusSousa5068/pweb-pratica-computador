import { Component } from '@angular/core';
import { Computador } from './shared/models/computador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pweb-computador';
  computadores: Computador[] = [];
  computadorTratamento: Computador;
  computadoresPesquisa: Computador[] = [];

  mensagemErro = '';

  constructor() {
    this.computadorTratamento = new Computador('', '', '', '', 0);
  }

  cadastrar(): void {
    if (!this.ehNumeroSerieCadastrado(this.computadorTratamento.numeroSerie)) {
      this.computadores.push(this.computadorTratamento);
      this.computadorTratamento = new Computador('', '', '', '', 0);
      this.mensagemErro = '';
    } else {
      this.mensagemErro = `Número de série ${this.computadorTratamento.numeroSerie} já cadastrado!`;
    }
  }

  private ehNumeroSerieCadastrado(numeroSerie: string): boolean {
    return this.computadores.some(
      (computador) => computador.numeroSerie === numeroSerie
    );
  }

  remover(computadorARemover: Computador): void {
    const indxARemover = this.computadores.findIndex(
      (computador) => computador.numeroSerie === computadorARemover.numeroSerie
    );

    if (indxARemover >= 0) {
      this.computadores.splice(indxARemover, 1);
    }
  }

  pesquisar(pedacoNumeroSerie: string): void {
    if (pedacoNumeroSerie.length === 0) {
      this.computadoresPesquisa = [];
    }

    this.computadoresPesquisa = this.computadores.filter((computador) =>
      computador.numeroSerie.includes(pedacoNumeroSerie)
    );
  }
}
