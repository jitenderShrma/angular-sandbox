import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

// Components
import {HomeComponent} from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes:Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component:UsersComponent},
  {path:"posts", component:PostsComponent},
  {path: "**", component: NotFoundComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
