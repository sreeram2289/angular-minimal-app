import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { RestComponent } from './rest.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'restdata',
        component: RestComponent
      },
      {
        path: 'sample',
        component: SampleComponent
      }
    ]),
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
