import {Component, Input} from '@angular/core';
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
export class ProductWrapperComponent {

  @Input() gallery: string = '';
  @Input() header: string = '';
  @Input() content: string = '';
  @Input() maxRows: number = 3;
}
