import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';

const routes: Routes = [
  {path: 'event-list', component: EventListComponent}, 
  {path: 'bucketlist', component: BucketlistPageComponent}, 
  {path: '', component: EventListComponent, pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
