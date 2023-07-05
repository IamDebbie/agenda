
import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TitleService } from './Controller/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   
  showMenu = false;
  constructor(private titleService: TitleService, public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = false; 
      }
    });
  }

  ngOnInit() {
    this.titleService.init();
    this.router.navigate(['/inicio']);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.showMenu = window.innerWidth <= 768;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
