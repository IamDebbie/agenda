import { Component } from '@angular/core';
import { TitleService } from 'src/app/Controller/title.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.init();
  }
}
