import { Routes } from '@angular/router';
import { CollectionPreviewComponent } from './pages/collection-preview/collection-preview.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'preview',
    pathMatch: 'full'
  },
  {
    path: 'preview',
    component: CollectionPreviewComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    redirectTo: 'preview'
  }
];
