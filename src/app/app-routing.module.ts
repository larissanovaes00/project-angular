import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from "./components/add-product/add-product.component"
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    {
        path: 'produtos',
        component: ProductsComponent,
        data: { title: 'Lista de Produtos' }
    },
    {
        path: 'produto-detalhe/:id',
        component: DetailProductComponent,
        data: { title: 'Detalhe do Produto' }
    },
    {
        path: 'produto-novo',
        component: AddProductComponent,
        data: { title: 'Adicionar Produto' }
    },
    {
        path: 'produto-editar/:id',
        component: EditProductComponent,
        data: { title: 'Editar o Produto' }
    },
    {
        path: '',
        redirectTo: '/produtos',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
