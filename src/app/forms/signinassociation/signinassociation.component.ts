import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-signinassociation',
  templateUrl: './signinassociation.component.html',
  styleUrls: ['./signinassociation.component.sass']
})
export class SigninassociationComponent implements OnInit {


  ngOnInit(): void {
  }
  angForm: FormGroup | any;

  constructor(private fb: FormBuilder,private modalService: NgbModal) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      titre: ['', [Validators.required,]],
       email: ['', [Validators.required ,  Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
       motdepasse: ['', [Validators.required, Validators.minLength(8),,Validators.maxLength(8)] ],
       description: ['', [Validators.required]],
       tel: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
       photoverif: ['', [Validators.required]],
       adresse:['', [Validators.required]],


    });
  }


  toggleEye: boolean = true;

  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;

		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';


	}
	open(content:any) {
		this.modalService.open(content);
	}


}
