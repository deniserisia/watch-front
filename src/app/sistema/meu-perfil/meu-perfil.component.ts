import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  usuario = {
    username: 'Denise.Carvalho',
    nome: 'Denise Carvalho',
    email: 'denise.carvalho@watch.com.br',
    setor: 'Tecnologia da Informação',
    cargo: 'Analista de Sistemas',
    estado: 'SP',
    fotoUrl: 'assets/imgs/perfil-watch.png' 
  };
  
  editMode: boolean = false;
  selectedFile!: File;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  editarPerfil() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      console.log('Perfil atualizado com sucesso:', this.usuario);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.usuario.fotoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  voltarPerfil(): void {
    this.router.navigate(['/usuario/dashboard']);
  }
}
