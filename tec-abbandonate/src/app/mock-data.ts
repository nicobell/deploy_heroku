
import { Data } from 'src/app/data';

export const DATA: Data[] = [
  {
    id: 1,
    name: 'Super 8',
    description: 'Il Super 8 millimetri è un formato cinematografico. ',
    shortDescription: 'La Super 8 millimetri, o semplicemente Super 8, è una videocamera che utilizza nello specifico il formato 8 millimetri, dal quale prende il nome.',
    category: 'fotografia',
    dateFrom: '01/01/1965', /* !!Rispetta il formato!!! */
    dateTo: '01/01/1075',
    yearFrom: 1965,
    yearTo: 1975,
    author: 'Kodak',
    latitude: 43.157285,
    longitude: -77.615214,
    image: 'src/assets/DataImage/polaroid.jpg' /* !!Rispettare il path della cartella!!! */
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
    latitude: 37,//35.689506,
    longitude: 140.6917,
    image: 'src/assets/DataImage/betamax.jpg' /* !!Rispettare il path della cartella!!! */
  //creata in Giappone ma venduta negli Stati Uniti
  //videotape format war contro VHS - 1970s e 1980s
  }, {
    id: 3,
    name: 'Formato VHS',
    description: 'Formato video predominante degli anni 80.' ,
    shortDescription: 'Sistema di videoregistrazione standard in formato analogico su supporto meccanico. ',
    category: 'video',
    dateFrom: '09/11/1976',
    dateTo: '01/01/2008',
    yearFrom: 1976,
    yearTo: 2008,
    author: 'JVC',
    latitude: 35.444991,
    longitude: 139.636768,
    image: '',
  /*1999 hanno ridotto tantissimo la produzione, ma hanno continuato a vendere fino al 2015. Dal 2016 solo un'azienda al mondo li produce. Credo siano ancora prodotti - WIKI DICE 2008 */	
  }, {
    id: 4,
    name: 'Laserdisc',
    description: 'Primo standard di registrazione su disco ottico. ',
    shortDescription: 'Simili ai classici CD, ma dalle dimensioni dei vinili.',
    category: 'video',
    dateFrom: '11/12/1978',
    dateTo: '01/01/1995',
    yearFrom: 1978,
    yearTo: 1995,
    author: 'David Paul Greg - James Russell',
    latitude: 33.839722 ,
    longitude: -118.259722 ,
    image: '',
  //poco popolare in Europa e Nord America, mentre negli USA andava fortissimo
  }, {
    id: 5 ,
    name: 'Grammofono',
    description: 'Sistema di registrazione e riproduzione del suono. ',
    shortDescription: 'Questo strumento permetteva di registrare suoni e melodie su degli appositi dispositivi che lo supportavano, rendendo quindi possibile riascoltare ciò che si era inciso in precedenza. ',
    category: 'audio',
    dateFrom: '01/01/1877',
    dateTo: '01/01/1929',
    yearFrom: 1877,
    yearTo: 1929,
    author: 'Thomas Edison',
    latitude: 40.565 ,
    longitude: -74.3375 ,
    image: '',
  /* Edison continued to manufacture and sell cylinder records until quitting the record business entirely in November of 1929, and the history of disc and cylinder rivalry was concluded */
  //facciamo riferimento solo ai primi - cilindrici - e non quelli elettronici con braccetto
  }, {
    id: 6 ,
    name: 'Giradischi',
    description: 'Dispositivi per registrare e ascoltare suoni e musica.',
    shortDescription: 'Il giradischi è l\'evoluzione economica del grammofono.',
    category: 'audio',
    dateFrom: '01/01/1937',
    dateTo: '01/01/1997',
    yearFrom: 1937,
    yearTo: 1997,
    author: 'RCA Victor',
    latitude: 40.565, 
    longitude: -74.3375,
    image: '',
  //dopo la grande depressione i soldi erano pochi
  //dal 2007 tornati in voga
  }, {
    id: 7,
    name: 'Bobina Aperta', //reel to reel
    description: 'Supporto per la registrazione del suono ',
    shortDescription: ' La bobina aperta è un formato di nastro magnetico che lascia un\'estremità del nastro libera',
    category: 'audio',
    dateFrom: '01/01/1950',
    dateTo: '01/01/2000',
    yearFrom: 1950,
    yearTo: 2000,
    author: 'AEG',
    latitude: 52.5170365,
    longitude: 13.3888599,
    image: '',
  }, {
    id: 8,
    name: 'Registratore a nastro', //cassette-tape recorder
    description: 'Dispositivo per la registrazione su cassette a nastro',
    shortDescription: ' In origine lanciato sul mercato nel come dispositivo per dettatura vocale progettato per uso portatile e successivamente utilizzato per la lettura delle cassette audio ',
    category: 'audio',
    dateFrom: '01/01/1963',
    dateTo: '01/01/2000',
    yearFrom: 1963,
    yearTo: 2000,
    author: 'Philips',
    latitude: 52.366667 ,
    longitude: 4.866667 ,
    image: '',
  }, {
    id: 9 ,
    name: 'Radio Transistor',
    description: 'Dispositivo audio con circuito a transistor',
    shortDescription: 'Dispositivo di piccole dimensioni funzionante grazie ad circuito a transistor utilizzato per la riproduzione di segnali audio',
    category: 'audio',
    dateFrom: '01/01/1954',
    dateTo: '',
    yearFrom: 1954,
    yearTo: 2019,
    author: 'Texas Instruments',
    latitude: 32.783333,
    longitude: -96.8,
    image: '',
  }, {
    id: 10 ,
    name: 'Cassette', //compact cassette
    description: 'Supporto audio a nastro magnetico',
    shortDescription: 'Supporto per nastro magnetico analogico utilizzato per la registrazione e la riproduzione audio.',
    category: 'audio',
    dateFrom: '01/01/1962',
    dateTo: '',
    yearFrom: 1962,
    yearTo: 2019,
    author: 'Philips',
    latitude: 50.93,
    longitude: 5.3375,
    image: '',
  }

];