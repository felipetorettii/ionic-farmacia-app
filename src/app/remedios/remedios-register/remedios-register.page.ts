import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', Validators.required],
      precisaReceita: [false, Validators.required],
      generico: [false, Validators.required],
      dataValidade: [''],
      tarja: [Tarja.PRETA, Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const remedio = this.remediosService.findById(id);
    if (remedio) {
      this.form.patchValue({
        ...remedio
      });
    }
  }

  salvar() {
    this.remediosService.save(this.form.value);
    this.form.reset();
    this.router.navigate(['remedios-list']);
  }
}
