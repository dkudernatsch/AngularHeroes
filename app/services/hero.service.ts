/**
 * Created by daniel on 11/11/16.
 */

import {Injectable} from "@angular/core";
import {HEROES} from "./mockHeroes";
import {Hero} from "../model/Hero";



@Injectable()
export class HeroService{

    public getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    public getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero[]>(
            resolve=>setTimeout(resolve, 300))
            .then(() => this.getHeroes());
    }
}