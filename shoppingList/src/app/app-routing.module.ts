import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [{ path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent }, 
          { path: ':id', component: RecipeDetailComponent },
          { path: ':id/edit', component: RecipeEditComponent } 
        ]
    },
    {
        path: 'shoppingList',
        component: ShoppingListComponent
    },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: '404 Not found' }
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

@NgModule({
    //imports:[RouterModule.forRoot(appRoutes, { useHash: true })],
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}