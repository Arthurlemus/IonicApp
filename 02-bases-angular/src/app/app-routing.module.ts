import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsModule } from './pages/posts/posts.module';

const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'about', component:  AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
