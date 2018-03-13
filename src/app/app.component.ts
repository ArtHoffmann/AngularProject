import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { bounce } from 'ng-animate';
import { TdMediaService } from '@covalent/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, style, transition, animate, keyframes, query, stagger, useAnimation, state } from '@angular/animations';
import { ScrollEvent } from 'ngx-scroll-event';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 1,
        transform: 'translateX(100%)'
      })),
      transition('show => hide', animate('900ms ease-out')),
      transition('hide => show', animate('900ms ease-in'))
    ]),
  ],
})
export class AppComponent implements OnInit {
  active: boolean;
  title = 'Template';
  bounce: any;
  goals = ['My first life goal'];
  state = 'hide';


  ngOnInit(): void {
    window.onload = function () {
      document.getElementById('myElem').scrollIntoView();
    };
  }

  constructor(public media: TdMediaService,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer,
    public el: ElementRef) {
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
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

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
