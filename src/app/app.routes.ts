import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';




export const routes: Routes = [
    { path: '', component: HomeComponent }

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

