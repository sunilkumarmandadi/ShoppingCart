import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './shared/highlight.directive';
import { LogService } from './shared/log.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe/recipe.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceTestService } from './service-test.service';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { ShoppingModuleModule } from './shopping-list/shopping-module/shopping-module.module';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { RecipeInterceptor } from './recipe/recipe-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NotFoundComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    ShoppingModuleModule,
    SharedModuleModule,
    CoreModule
  ],
  providers: [LogService,
  ShoppingListService,
   RecipeService,
   ServiceTestService,
   CanActivateGuard,
   CanDeactivateGuard,
   {provide: HTTP_INTERCEPTORS, useClass: RecipeInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
