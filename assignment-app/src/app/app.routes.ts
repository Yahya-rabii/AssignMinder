import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AuthGuard } from './app.routes.AuthGuard'

export const routes: Routes = [

    { path: '', component: HomePageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent  },
    { path: 'admin', component: AdmindashboardComponent , canActivate: [AuthGuard] }

];
