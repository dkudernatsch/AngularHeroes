/**
 * Created by dkude on 11/11/2016.
 */
import {Component, Input} from "@angular/core";
import {Hero} from "../model/Hero";

@Component({
    selector:"my-hero-detail",
    template:
        `<div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id: </label>{{selectedHero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name"/>
        </div>
        </div>`
})

export class HeroDetailComponent{
    @Input()
    hero:Hero;
}