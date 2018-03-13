import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
import { TdMediaService } from '@covalent/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollEvent } from 'ngx-scroll-event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ],
})
export class AppComponent implements OnInit {
  active: boolean;
  title = 'Template';
  bounce: any;




  ngOnInit(): void {
    window.onload = function () {
      document.getElementById('myElem').scrollIntoView();
    };
  }

  constructor(public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl
        ('https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent-mark.svg'));

  }
  JumpToElement(id: any) {
    switch (id) {
      case 1: {
        const element = document.getElementById('Leistungen');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 2: {
        const element = document.getElementById('Leistungen');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }

      case 3: {
        const element = document.getElementById('Fahrzeuge');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 4: {
        const element = document.getElementById('Terminfahrt');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 5: {
        const element = document.getElementById('Kontakt');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      case 6: {
        const element = document.getElementById('Footer');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
      default: {
        const element = document.getElementById('Leistungen');
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
        break;
      }
    }

  }
}
