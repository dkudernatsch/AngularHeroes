/**
 * Created by dkude on 10/11/2016.
 */


import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./components/hero-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations:    [ AppComponent, HeroDetailComponent ],
    bootstrap:       [ AppComponent ]
})
export class AppModule{

}