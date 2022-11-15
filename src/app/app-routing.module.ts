import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./starships/starships.module').then((m) => m.StarshipsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
