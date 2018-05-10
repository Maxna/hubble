import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelescopeFormComponent } from './telescope-form/telescope-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TelescopeFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
