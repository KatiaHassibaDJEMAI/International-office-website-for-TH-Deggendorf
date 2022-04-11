import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {MatNativeDateModule} from '@angular/material/core';
/**
 * Project was created without Routing option
 * so Routing will be setup here (otherwise in app-routing.module.ts)
 * followed https://angular.io/start/start-routing
 * used structure from mit-ws-20-21-requests.pdf
 * so components needed are: Start, Navigation, Room Info, Int. Office, Login
 * difference to structure image: gave navigation higher prio than room info
 * 
 */

// Components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoomsComponent } from './rooms/rooms.component';
//import { LoginComponent, RegisterDialog } from './login/login.component';
import { LoginComponent } from './login/login.component';
import { InternationalComponent } from './international/international.component';
import { AdminComponent } from './admin/admin.component';
import { JwtGuard } from './jwt.guard';

// Modules
import { InternationalModule } from './international/international.module';
import {ExchangeStudentsModule} from './exchange-students/exchange-students.module'
import {InternationalStudentsModule} from './international-students/international-students.module'
//import {StudyabroadModule} from './studyabroad/studyabroad.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {  MatSidenavModule} from '@angular/material/sidenav';
import {  MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateLoader, TranslateModule, TranslateService } from  '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatTabsModule } from '@angular/material/tabs';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';


import { InternalComponent } from './internal/internal.component';
import { MensaComponent } from './mensa/mensa.component';
import { ProfessorComponent } from './professor/professor.component';
import { StaffComponent } from './staff/staff.component';
import { StudyabroadComponent } from './studyabroad/studyabroad.component';
import { ExchangeStudentsComponent } from './exchange-students/exchange-students.component';
import { InternationalStudentsComponent } from './international-students/international-students.component';
import { CareerServiceComponent } from './career-service/career-service.component';
import { AwpLanguagesComponent } from './awp-languages/awp-languages.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechnewsComponent } from './technews/technews.component';
import { NewsapiService } from './service/newsapi.service';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {EventDetails} from 'src/assets/data/event.service';
import { RegisterComponent } from './register/register.component'
//import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavigationComponent,
    RoomsComponent,
    LoginComponent,
   // RegisterDialog,
    SelectLanguageComponent,
    AdminComponent,
    InternalComponent,
    MensaComponent,
    ProfessorComponent,
    StaffComponent,
    StudyabroadComponent,
    ExchangeStudentsComponent,
    InternationalStudentsComponent,
    CareerServiceComponent,
    AwpLanguagesComponent,
    EventsComponent,
    NewsComponent,
    HeadlinesComponent,
    TechnewsComponent,
    NewsListComponent,
    NewsDetailsComponent,
    EventDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: StartComponent },
      { path: 'navigation', component: NavigationComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'international', component: InternationalComponent },
      // { path: 'international', loadChildren: './international/international.module#InternationalModule' },
      { path: 'admin', component: AdminComponent, canActivate: [JwtGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'internal', component: InternalComponent },
      { path: 'mensa', component: MensaComponent },
      { path: 'professor', component: ProfessorComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'studyabroad', component: StudyabroadComponent },
      { path: 'exchange-students', component: ExchangeStudentsComponent },
      { path: 'international-students', component: InternationalStudentsComponent },
      { path: 'career-service', component: CareerServiceComponent },
      { path: 'awp-languages', component: AwpLanguagesComponent },
      { path: 'events', component: EventsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news-details', component: NewsListComponent },
      {path: "event-details/:id",component: EventDetailsComponent},
      {path: "register",component: RegisterComponent}
    ]),
    InternationalModule,
    ExchangeStudentsModule,
    InternationalStudentsModule,
    //StudyabroadModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatGridListModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    I18nModule,
  BrowserModule,
  MatExpansionModule,
  CommonModule,
  //MatAccordion
],
    
  exports: [
    RouterModule,
  ],
 //  entryComponents: [LoginComponent, RegisterDialog],
  entryComponents: [LoginComponent],
  providers: [NewsapiService,EventDetails], // SocketioService
  bootstrap: [AppComponent]
})
export class AppModule { }
