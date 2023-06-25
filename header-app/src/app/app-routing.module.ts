import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {EmptyRouteComponent} from './empty-route/empty-route.component'

const routes: Routes = [
{
  path: '**', component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // when we switch to other page,page should display top position
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
