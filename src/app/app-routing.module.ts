import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AppComponent } from 'app/app.component';


const routes: Routes = [
    // local
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',

    },
    {
        path: 'home',
        component: AppComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
