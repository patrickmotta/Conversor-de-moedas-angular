import { ConversorService } from './conversor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConversorMoedas';
  moedas = [
    { "sigla": "AUD", "descricao": "Dólar australiano" },
    { "sigla": "BGN", "descricao": "Lev búlgaro" },
    { "sigla": "BRL", "descricao": "Real brasileiro" },
    { "sigla": "CAD", "descricao": "Dólar canadense" },
    { "sigla": "CHF", "descricao": "Franco suíço" },
    { "sigla": "CNY", "descricao": "Yuan Chinês" },
    { "sigla": "CZK", "descricao": "Coroa República Tcheca" },
    { "sigla": "DKK", "descricao": "Coroa dinamarquesa" },
    { "sigla": "EUR", "descricao": "Euro" },
    { "sigla": "GBP", "descricao": "Libra Esterlina" },
    { "sigla": "HKD", "descricao": "Dólar de Hong Kong" },
    { "sigla": "HRK", "descricao": "Coroa Croácia" },
    { "sigla": "HUF", "descricao": "Florim húngaro" },
    { "sigla": "IDR", "descricao": "Rupia indonésia" },
    { "sigla": "ILS", "descricao": "Novo shekel israelense" },
    { "sigla": "INR", "descricao": "Rupia indiana" },
    { "sigla": "JPY", "descricao": "Iene japonês" },
    { "sigla": "KRW", "descricao": "Won sul-coreano" },
    { "sigla": "MXN", "descricao": "Peso mexicano" },
    { "sigla": "MYR", "descricao": "Malásia Ringgit" },
    { "sigla": "NOK", "descricao": "Coroa Noruega" },
    { "sigla": "NZD", "descricao": "Dólar da Nova Zelândia" },
    { "sigla": "PHP", "descricao": "Peso filipino" },
    { "sigla": "PLN", "descricao": "Złoty Polónia" },
    { "sigla": "RON", "descricao": "Leu romeno" },
    { "sigla": "RUB", "descricao": "Belarus Ruble" },
    { "sigla": "SEK", "descricao": "Coroa Suécia" },
    { "sigla": "SGD", "descricao": "Dólar de Singapura" },
    { "sigla": "THB", "descricao": "Baht Tailândia" },
    { "sigla": "TRY", "descricao": "Lira turca" },
    { "sigla": "USD", "descricao": "Dólar dos Estados Unidos" },
    { "sigla": "ZAR", "descricao": "Rand África do Sul" }
  ];


  formulario: any;
  valorConvertido : number;
  visibilidadeValorConvertido : boolean;
  // moedaDe: string;
  // moedaPara: string;

  constructor(private conversorService : ConversorService) { }

  ngOnInit(): void {
    this.visibilidadeValorConvertido = false;
    this.formulario = new FormGroup({
      valor: new FormControl(null),
      moedaDe: new FormControl(null),
      moedaPara: new FormControl(null)
    });
  }

  Converter(): void {
    const valor = this.formulario.value.valor;
    const moedaDe = this.formulario.value.moedaDe;
    const moedaPara = this.formulario.value.moedaPara;

    console.log(valor);
    // let moeda: string = "BRL";
    this.visibilidadeValorConvertido = true;

    this.conversorService.RealizarConversao(valor, moedaDe, moedaPara).subscribe(resultado => {

      console.log(resultado.result)
      this.valorConvertido = Number(resultado.result.toFixed(2));
    })

  }
}
