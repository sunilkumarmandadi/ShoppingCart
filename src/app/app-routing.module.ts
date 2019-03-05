import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';


const routes: Routes = [
{path: '', redirectTo: 'signin', pathMatch: 'full'},
{path: 'recipe', canActivate: [CanActivateGuard], canDeactivate: [CanDeactivateGuard],
loadChildren: './recipe/recipe-module/recipe-module.module#RecipeModuleModule'},
{path: 'home', component: HomeComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'signin', component: LoginComponent}
// {path: 'not-found', component: NotFoundComponent},
// {path: '**', redirectTo: 'not-found'}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
