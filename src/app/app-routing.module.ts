import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './pages/residences/residences.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';

const routes: Routes = [
  { path: 'residence', component: ResidencesComponent },
  { path: 'users', component: UsersComponent},
  { path: 'products', component: ProductsComponent},
  { path: '', redirectTo:'residence', pathMatch:'full'},
  { path: 'residence/:id', component:ApartmentsComponent},
  { path: '**', component:NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
