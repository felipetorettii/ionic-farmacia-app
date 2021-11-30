import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../funcionarios.model';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-register',
  templateUrl: './funcionarios-register.page.html',
  styleUrls: ['./funcionarios-register.page.scss'],
})
export class FuncionariosRegisterPage implements OnInit {
  form: FormGroup;

  cpf = '';

  constructor(
    private formBuilder: FormBuilder,
    private funcionariosService: FuncionariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      email: ['', Validators.required],
      cargo: [Cargo.ESTAGIARIO, Validators.required],
      dataNascimento: ['', Validators.required],
      dataContratacao: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const funcionario = this.funcionariosService.findById(id);
    if (funcionario) {
      this.cpf = funcionario.cpf;
      this.form.patchValue({
        ...funcionario,
        dataNascimento: funcionario.dataNascimento.toString(),
        dataContratacao: funcionario.dataContratacao.toString()
      });
    }
  }

  salvar() {
    this.funcionariosService.save(this.form.value);
    this.form.reset();
    this.router.navigate(['funcionarios-list']);
  }

  formataCPF(cpfInput){
    cpfInput = cpfInput.replace(/[^\d]/g, "");
    this.cpf = cpfInput.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
