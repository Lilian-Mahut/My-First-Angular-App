import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Cooper Sheldon' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Idéfix' },
      { id: 14, name: 'Deadpool' },
      { id: 15, name: 'Iron man' },
      { id: 16, name: 'Harry Potter' },
      { id: 17, name: 'Mario brothers' },
      { id: 18, name: 'Jack Burton' },
      { id: 19, name: 'Dr Manhattan' },
      { id: 20, name: 'Nicky Larson' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}