import { Component } from '@angular/core';
import { TitleService } from 'src/app/Controller/title.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.init();
  }

}
