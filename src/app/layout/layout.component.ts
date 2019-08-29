import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // Dummy to represent the data
  modes: any;

  constructor(
    private appConfig: AppConfigService,
  ) { }

  ngOnInit() {
    const data = this.appConfig.getAllConfig();
    this.modes = data;
    console.log(data);
  }

}
