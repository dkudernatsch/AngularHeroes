/**
 * Created by dkude on 10/11/2016.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HeroesComponent} from "./components/heroes.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./components/hero-detail.component";
import {HeroService} from "./services/hero.service";
import {AppComponent} from "./components/app.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard.component";





@NgModule({
    imports: [  BrowserModule,
                FormsModule,
                RouterModule.forRoot([
                    {
                        path:'',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },{
                        path:"heroes",
                        component: HeroesComponent
                    },{
                        path:'dashboard',
                        component: DashboardComponent
                    },{
                        path:'/detail/:id',
                        component: HeroDetailComponent
                    }
                ])
    ],
    declarations:[
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers:  [ HeroService ],
    bootstrap:  [ AppComponent ]
})
export class AppModule{

}