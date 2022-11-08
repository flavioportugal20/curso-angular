import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  pessoa: any = {
    nome:'Pedro',
    idade: 1
  }

  updateNome(element: HTMLInputElement): string{
    return this.nome = element.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
