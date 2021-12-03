import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rubriques',
  templateUrl: './rubriques.component.html',
  styleUrls: ['./rubriques.component.sass']
})
export class RubriquesComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  rubriques = [
    {
      image: "assets/images/product/2.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      date: "30-1-2020",
      association: "association",
      code: "FXG-103-XX",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
  },
  {
    image: "assets/images/product/2.jpg",
    title: "Solid Women's V-neck Dark T-Shirt",
    date: "12-1-2021",
    association: "association",
    code: "FXG-103-XX",


    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
},
{
  image: "assets/images/product/2.jpg",
  title: "Solid Women's V-neck Dark T-Shirt",
  date: "30-1-2020",
  association: "association",
  code: "FXG-103-XX",


  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
},
{
  image: "assets/images/product/2.jpg",
  title: "Solid Women's V-neck Dark T-Shirt",
  date: "30-1-2020",
  association: "association",
  code: "FXG-103-XX",


  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
},
{
  image: "assets/images/product/2.jpg",
  title: "Solid Women's V-neck Dark T-Shirt",
  date: "30-1-2020",
  association: "association",
  code: "FXG-103-XX",


  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
},
{
  image: "assets/images/product/2.jpg",
  title: "Solid Women's V-neck Dark T-Shirt",
  date: "30-1-2020",
  association: "association",
  code: "FXG-103-XX",


  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
},
];

open(content:any) {
this.modalService.open(content);
}


}
