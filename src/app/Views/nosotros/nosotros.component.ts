import { Component } from '@angular/core';
import { TitleService } from 'src/app/Controller/title.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.init();
  }


}
