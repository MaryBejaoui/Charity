import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addrubrique',
  templateUrl: './addrubrique.component.html',
  styleUrls: ['./addrubrique.component.sass']
})
export class AddrubriqueComponent implements OnInit {

  constructor(private fb: FormBuilder,private modalService: NgbModal) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  angForm: FormGroup | any;
  createForm() {
    this.angForm = this.fb.group({
      titre: ['', [Validators.required,]],
       description: ['', [Validators.required]],
       photo: ['', [Validators.required]],

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
