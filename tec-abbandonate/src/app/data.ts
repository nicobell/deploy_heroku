export class Data{
  id: number;
  name : string;
  description: string;
  shortDescription: string;
  category: string;
  dateFrom: string;
  dateTo: string;
  yearFrom: string;
  yearTo: string;
  author: string;
  latitude: number;
  longitude: number;
  image: string //path immagine del progetto
}
 
/*
ESEMIO DI INSERIMENTO
!!ATTENZIONE alle stringhe che vanno messe tra apici
{
  id: 1;
  name: 'Polaroid';
  description: 'AAAAAAAAAAAAAAAAAAAA';
  shortDescription: 'AAAAA';
  dateFrom: '12/08/1999'; !!Rispetta il formato!!!
  dateTo: '12/08/2006';
  yearFrom: '1999';
  yearTo: '2006';
  author: 'Peppino';
  latitude: 125.1518787;
  latitude: 125.1597;
  image: 'src\assets\DataImage\polaroid.jpg' !!Rispettare il path dlla cartella!!!
}

*/
