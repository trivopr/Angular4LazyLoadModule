import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routing: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },

    {
        path: 'articles',
        loadChildren: 'app/articles/articles.module#ArticlesModule'
    },

    {
        path: 'products',
        loadChildren: 'app/products/products.module#ProductsModule'
    },

    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const appRouting = RouterModule.forRoot(routing, { useHash: false });
