import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { DropdownMenuItemComponent } from './components/dropdown-menu-item/dropdown-menu-item.component';
import { ContentComponent } from './components/content/content.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { InsituteComponent } from './components/institute/institute.component';
import { CourseComponent } from './components/course/course.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from "ngx-pagination";
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';
import { MobileFiltersComponent } from './components/mobile-filters/mobile-filters.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    DrawerComponent,
    MobileMenuComponent,
    DropdownMenuItemComponent,
    ContentComponent,
    ContentHeaderComponent,
    InsituteComponent,
    CourseComponent,
    FooterComponent,
    FiltersComponent,
    DesktopHeaderComponent,
    MobileFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
