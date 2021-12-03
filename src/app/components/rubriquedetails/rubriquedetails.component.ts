import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rubriquedetails',
  templateUrl: './rubriquedetails.component.html',
  styleUrls: ['./rubriquedetails.component.sass']
})
export class RubriquedetailsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  imageSrc = 'assets/images/product/1.jpg';

  sizeClass = "";


  ngOnInit(): void {
  }
  onClick(imagename:any) {
    this.imageSrc = "assets/images/product/"+imagename;
  }

	open(content:any) {
		this.modalService.open(content);
	}

    toggleSizeClass(size:any) {
        this.sizeClass = size;
    }

}
