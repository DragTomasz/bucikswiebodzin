import {Component, OnInit} from '@angular/core';
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import {HammerModule} from "@angular/platform-browser";
import {CardModule} from 'primeng/card';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-product-wrapper',
  standalone: true,
  imports: [Angular2ImageGalleryModule, CardModule, HammerModule, TranslateModule],
  templateUrl: './product-wrapper.component.html',
  styleUrl: './product-wrapper.component.scss'
})
export class ProductWrapperComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
