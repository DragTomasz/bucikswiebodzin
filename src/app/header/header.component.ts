import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.translateService.setDefaultLang('pl')
    this.translateService.use(this.translateService.getBrowserLang() || 'pl')
    this.prepareMenuItems(this.translateService.currentLang);
  }

  private prepareMenuItems(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('HEADER').subscribe(translations => {
      this.items = [
        {
          label: translations.MEN,
        },
        {
          label: translations.WOMEN,
        },
        {
          label: translations.HOME,
        },
        {
          label: translations.SPORT,
        },
        {
          label: translations.CONTACT,
        },
        {
          label: translations.ABOUT_US,
        },
        {
          label: this.translateService.currentLang?.toUpperCase(),
          icon: 'pi pi-globe',
          items: [
            {
              label: 'PL',
              command: () => this.prepareMenuItems('pl'),
            },
            {
              label: 'EN',
              command: () => this.prepareMenuItems('en'),
            },
            {
              label: 'DE',
              command: () => this.prepareMenuItems('de'),
            },
            {
              label: 'UK',
              command: () => this.prepareMenuItems('uk'),
            },
          ],
        }
      ];
    })
  }
}

