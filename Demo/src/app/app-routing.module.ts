import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeComponent } from './notice/notice.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Import All Routing Components
const routes: Routes = [
	{ path: '', redirectTo: '/notice', pathMatch: 'full'}, // If URL is blank
	{ path: 'notice', component: NoticeComponent},
	{ path: 'announcement', component: AnnouncementComponent},
	{ path: 'faq', component: FaqComponent},
	{ path: '**', component: PageNotFoundComponent} //If URL is instead Of defined routing components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

// Export All Routing Components
export const routingComponents = [
									NoticeComponent,
									AnnouncementComponent,
									FaqComponent,
									PageNotFoundComponent
								];