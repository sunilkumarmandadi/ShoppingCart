import { Component, OnInit } from '@angular/core';
import { LogService } from '../app/shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'shopping-list';
  constructor(private logservice11: LogService) {

  }
  ngOnInit() {

  }
     onNavigate(feature: string) {
this.logservice11.logInConsole(feature);
  this.loadedFeature = feature;
    }
}
