import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { DateTimeAdapter } from 'ng-pick-datetime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Youqel';
  dateTimeAdapter: DateTimeAdapter<any>;
  selectedLanguage = 'en';

  constructor(private translate: TranslateService,
    dateTimeAdapter: DateTimeAdapter<any>) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.selectedLanguage);
    translate.use(this.selectedLanguage);
    this.dateTimeAdapter = dateTimeAdapter;
    this.dateTimeAdapter.setLocale(translate.getDefaultLang);

  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.dateTimeAdapter.setLocale(lang);
    this.selectedLanguage = lang;

  }
}
