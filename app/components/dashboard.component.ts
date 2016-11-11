/**
 * Created by daniel on 11/11/16.
 */

import {Component, OnInit} from "@angular/core";
import {HeroService} from "../services/hero.service";
import {Hero} from "../model/Hero";
@Component({
    moduleId: module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(private heroService:HeroService){ }


    abstract ngOnInit(): void {
        this.heroService.getHeroesSlowly().then(heroes=> this.heroes = heroes.slice(1,5));
    }
}
