import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ProCourseComponent } from './components/pro-course/pro-course.component';

const routes: Routes = [
{path:"",component:ContainerComponent},
{path:"data-binding",component:DataBindingComponent},
{path:"event-binding",component:EventBindingComponent},
{path:"directive",component:DirectiveComponent},
{path:"pro-course",component:ProCourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
