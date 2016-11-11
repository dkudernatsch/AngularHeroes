/**
 * Created by dkude on 11/11/2016.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Hero} from "../model/Hero";
import {HeroService} from "../services/hero.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector:"my-hero-detail",
    template:
        `<div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
        </div>`

})

export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location: Location
    ){}


    ngOnInit(): void {
        this.route.params.forEach(
            (params:Params)=>{
                let id = +params['id'];
                this.heroService.getHero(id).then(hero => this.hero = hero);
            }
        )
    }

    goBack(){
        this.location.back();
    }

    @Input()
    hero:Hero;
}