import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path:"", component:ContentComponent},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"createpost",component:CreatePostComponent},
  {path:"updatepost", component:UpdatePostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
