export class Computador {
  constructor(
    private _numeroSerie: string,
    private _marca: string,
    private _modelo: string,
    private _processador: string,
    private _ram: number
  ) {}

  get numeroSerie(): string {
    return this._numeroSerie;
  }

  set numeroSerie(novoNumeroSerie: string) {
    this._numeroSerie = novoNumeroSerie;
  }

  get marca(): string {
    return this._marca;
  }

  set marca(novaMarca: string) {
    this._marca = novaMarca;
  }

  get modelo(): string {
    return this._modelo;
  }

  set modelo(novoModelo: string) {
    this._modelo = novoModelo;
  }

  get processador(): string {
    return this._processador;
  }

  set processador(novoProcessador: string) {
    this._processador = novoProcessador;
  }

  get ram(): number {
    return this._ram;
  }

  set ram(novaRam: number) {
    this._ram = novaRam;
  }
}
