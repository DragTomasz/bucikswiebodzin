import {Component, OnInit} from '@angular/core';
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import {HammerModule} from "@angular/platform-browser";

@Component({
  selector: 'app-product-wrapper',
  standalone: true,
  imports: [Angular2ImageGalleryModule, HammerModule],
  templateUrl: './product-wrapper.component.html',
  styleUrl: './product-wrapper.component.scss'
})
export class ProductWrapperComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
