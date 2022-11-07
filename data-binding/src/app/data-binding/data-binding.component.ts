import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https:google.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
