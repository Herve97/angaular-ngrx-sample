import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import * as authEffects from './auth/store/effects';
// import { registerEffect } from './auth/store/effects';
// import { authReducer } from './auth/store/reducers';
// import { RegisterComponent } from './auth/components/register/register.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: true,
      traceLimit: 75,
    }),
    EffectsModule.forRoot([authEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
