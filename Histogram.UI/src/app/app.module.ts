import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { GlobalErrorHandlerService } from './admin/system/helper/global-error-handler.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AdminModule,
    FeatureModule,
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) { }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
