import {AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {

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
          command: ()  =>  {
            document.getElementById('section-men')?.scrollIntoView({behavior: 'smooth'})
          }
        },
        {
          label: translations.WOMEN,
          command() {
            document.getElementById('section-women')?.scrollIntoView({behavior: 'smooth'})
          }
        },
        {
          label: translations.HOME,
          command() {
            document.getElementById('section-home')?.scrollIntoView({behavior: 'smooth'})
          }
        },
        {
          label: translations.SPORT,
          command() {
            document.getElementById('section-sport')?.scrollIntoView({behavior: 'smooth'})
          }
        },
        {
          label: translations.CONTACT,
          command() {
            document.getElementById('section-contact')?.scrollIntoView({behavior: 'smooth'})
          }
        },
        // {
        //   label: translations.ABOUT_US,
        // },
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

