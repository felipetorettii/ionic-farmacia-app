import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarja } from '../remedios.model';
import { RemediosService } from '../remedios.service';

@Component({
  selector: 'app-remedios-register',
  templateUrl: './remedios-register.page.html',
  styleUrls: ['./remedios-register.page.scss'],
})
export class RemediosRegisterPage implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private remediosService: RemediosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', Validators.required],
      precisaReceita: ['', Validators.required],
      generico: ['', Validators.required],
      dataValidade: [''],
      tarja: [Tarja.PRETA, Validators.required],
    });
  }

  salvar() {
    this.remediosService.save(this.form.value);
    this.router.navigate(['remedios-list']);
  }
}
