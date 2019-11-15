import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';

//modulos
import {UserModule} from './usersPages/user/user.module';
import {AdviserModule} from './usersPages/adviser/adviser.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//servicios
import {ServiceModule} from './services/service.module';


//componentes
import { AppComponent } from './app.component';

import { PdfViewerComponent } from './generalComponents/pdf-viewer/pdf-viewer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    UserModule,
    ServiceModule,
    AdviserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
