import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  yearFrom = 1930;
  yearTo = 2019;

  constructor() { }

  getTechs() {
    return [
      {
        id: 1,
        name: 'Polaroid',
        description: 'AAAAAAAAAAAAAAAAAAAA',
        shortDescription: 'AAAAA',
        category: 'fotografia',
        dateFrom: '12/08/1999',
        dateTo: '12/08/2006',
        yearFrom: 1999,
        yearTo: 2006,
        author: 'Peppino',
        latitude: 125.1518787,
        longitude: 125.1597,
        image: 'src\assets\DataImage\polaroid.jpg'
      }, {
        id: 1,
        name: 'Super 8',
        description: 'Il Super 8 millimetri è un formato cinematografico. ',
        shortDescription: 'La Super 8 millimetri, o semplicemente Super 8, è una videocamera che utilizza nello specifico il formato 8 millimetri, dal quale prende il nome.',
        category: 'fotografia',
        dateFrom: '01/01/1965',
        dateTo: '01/01/1075',
        yearFrom: 1965,
        yearTo: 1975,
        author: 'Kodak',
        latitude: 43.157285,
        longitude: -77.615214,
        image: 'src\assets\DataImage\polaroid.jpg'
      }, {
        id: 2,
        name: 'Betamax',
        description: 'Videocassette.',
        shortDescription: 'Primo sistema di videoregistrazione a nastro magnetico, ideato appositamente per il mercato domestico. ',
        category: 'video',
        dateFrom: '10/05/1975',
        dateTo: '1/12/2002',
        yearFrom: 1975,
        yearTo: 2002,
        author: 'Sony',
        latitude: 125.1518787,
        longitude: 125.1597,
        image: 'src\assets\DataImage\polaroid.jpg'
      }, {
        id: 3,
        name: 'Formato VHS',
        description: 'Formato video predominante degli anni ‘80.',
        shortDescription: 'Sistema di videoregistrazione standard in formato analogico su supporto meccanico.',
        category: 'video',
        dateFrom: '09/11/1976',
        dateTo: '01/01/2008',
        yearFrom: 1976,
        yearTo: 2008,
        author: 'JVC',
        latitude: 35.444991,
        longitude: 139.636768,
        image: ''
      }
    ];
  }


}
