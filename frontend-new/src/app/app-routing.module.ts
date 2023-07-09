import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { IntroComponent } from './intro/intro.component';
import { PlainViewComponent } from './plain-view/plain-view.component';
import { ProjectComponent } from './project/project.component';
import { SplashComponent } from './splash/splash.component';

/*
  1. Home 
    a. Splash
    b. Introduction
    c. Projects
    d. About the Author
    e. Contacts
    f. Plain View
*/

const routes: Routes = [
  {
    path: "",
    component: SplashComponent
  },

  {
    path: "intro",
    component: IntroComponent
  },

  {
    path: "projects",
    component: ProjectComponent
  },

  {
    path: "contacts",
    component: ContactsComponent
  },

  {
    path: "plain",
    component: PlainViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
