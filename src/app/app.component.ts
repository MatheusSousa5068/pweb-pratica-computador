import { Component } from '@angular/core';
import { Computador } from './shared/models/computador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pweb-computador';
  computadores: Computador[] = [];
  computadorTratamento: Computador;

  constructor() {
    this.computadorTratamento = new Computador('', '', '', 0);
  }

  cadastrar(): void {
    if (!this.ehMatriculaCadastrada(this.alunoTratamento.matricula)) {
      this.alunos.push(this.alunoTratamento);
      this.alunoTratamento = new Aluno('', '', 0);
      this.mensagemErro = '';
    } else {
      this.mensagemErro = `Matrícula ${this.alunoTratamento.matricula} já cadastrada!`;
    }
  }
}
