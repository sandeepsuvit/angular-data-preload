import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppConfigService } from './services/app-config.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    AppConfigService,
    { 
      provide: APP_INITIALIZER,
      // Config loader factory
      // Note: This service will load the config file upon application load
      useFactory: (config: AppConfigService) => () => config.load(), 
      deps: [AppConfigService], 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
