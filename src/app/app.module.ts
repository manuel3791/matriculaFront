import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainheaderComponent } from './component/mainheader/mainheader.component';
import { MainsidebarComponent } from './component/mainsidebar/mainsidebar.component';
import { ContentwrapperComponent } from './component/contentwrapper/contentwrapper.component';
import { ControlsidebarComponent } from './component/controlsidebar/controlsidebar.component';
import { MainfooterComponent } from './component/mainfooter/mainfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    MainsidebarComponent,
    ContentwrapperComponent,
    ControlsidebarComponent,
    MainfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
