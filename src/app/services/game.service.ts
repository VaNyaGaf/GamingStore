import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public getGames(): Observable<Game[]> {
    return of([
      {
        title: 'Cyberpunk 2077',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, ' +
          'a megalopolis obsessed with power, glamour and body modification. You play as V, '+
          'a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
          price: 60,
          publishDate: new Date(2020, 11, 10),
          imgPath: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
      },
      {
        title: 'The last of us',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, ' +
          'a megalopolis obsessed with power, glamour and body modification. You play as V, '+
          'a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
          price: 59.99,
          publishDate: new Date(2020, 6, 19),
          imgPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/TLOU_P2_Box_Art_2.png/220px-TLOU_P2_Box_Art_2.png'
      },
      {
        title: 'Ghost of Tsushima',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, ' +
          'a megalopolis obsessed with power, glamour and body modification. You play as V, '+
          'a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
          price: 45,
          publishDate: new Date(2020, 7, 17),
          imgPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg'
      },
      {
        title: 'Doom Eternal',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, ' +
          'a megalopolis obsessed with power, glamour and body modification. You play as V, '+
          'a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
          price: 35,
          publishDate: new Date(2020, 3, 20),
          imgPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Cover_Art_of_Doom_Eternal.png/220px-Cover_Art_of_Doom_Eternal.png'
      },
      {
        title: 'Resident Evil 3',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, ' +
          'a megalopolis obsessed with power, glamour and body modification. You play as V, '+
          'a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
          price: 49.99,
          publishDate: new Date(2020, 4, 3),
          imgPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Resident_Evil_3.jpg/220px-Resident_Evil_3.jpg'
      },
    ] as Game[])
  }
}
