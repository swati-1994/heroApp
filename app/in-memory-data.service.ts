import {Novel} from './novel';


import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let novels = [
            {type: 'Scientific', name: 'Deception Point', id: 1},
            {type: 'Thriller', name: 'Girl with the dragon tattoo', id: 2},
            {type: 'thriller', name: 'if tomorrow comes', id: 3},
            {type: 'fiction', name: 'Inferno', id: 4},
            {type: 'fiction', name: 'Twilight', id: 5},
            {type: 'fiction', name: 'Thousand Splendid suns', id: 6}
        ];
        return {novels};
    }
}