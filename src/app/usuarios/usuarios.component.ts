import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  lista: any = [];
  limit = 10;
  start = 0;
  nome = '';
  usuario = '';
  senha = '';
  id = '';
  title = 'Inserir usuário';
  textBuscar = '';

  constructor(private provider: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.lista = [];
    this.start = 0;
    this.carregar(this.textBuscar);
  }
  carregar(texto: string){
    this.lista = [];
    this.start = 0;
    return new Promise(resolve => {
      const dados = {
        requisicao: 'listar',
        limit: this.limit,
        start: this.start,
        textoBuscar: texto
      };

      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        for (const dado of data['result']){
          this.lista.push(dado);
        }
        resolve(true);
      });
    })

      
    

  }
}
