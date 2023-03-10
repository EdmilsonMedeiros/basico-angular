import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './componentes/first-component/first-component.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path : 'list', component: ListRenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
