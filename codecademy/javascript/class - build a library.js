class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(checkedOut) {
      this._isCheckedOut = checkedOut;
    }
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      return this._ratings.reduce((acc,currval) => (acc + currval), 0) / this._ratings.length;
    }
    addRating(rating) {
      if (rating >= 1 && rating <=5) {
        this._ratings.push(rating);
      }
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast, songTitles) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
      this._songTitles = songTitles;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
    get movieCast() {
      return this._movieCast;
    }
    get songTitles() {
      return this._songTitles;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artisti = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    suffle() {
      return this._songs[Math.floor(Math.random() * this._songs.length)];
    }
  }
  
  class Catalog {
    constructor() {
      this._catalog = [];
    }
    get catalog() {
      this._catalog;
    }
    addMedia(media) {
      this._catalog.push(media);
    }
  }
    
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(7);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116,['Keanu Reeves', 'Dennis Hopper', 'Sandra Bullock', 'Joe Morton', 'Jeff Daniels'], ['A Million Miles Away', 'Soul Deep', 'Let\'s Go for a Ride']);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  console.log(speed);
  
  const volbeat = new CD('Volbeat', 'Seal the Deal & Let\'s Boogie', ['The Bliss', 'Black Rose', 'You Will Know']);
  volbeat.toggleCheckOutStatus();
  console.log(volbeat.isCheckedOut);
  volbeat.addRating(3);
  volbeat.addRating(3);
  volbeat.addRating(4);
  console.log(volbeat.getAverageRating());
  console.log(volbeat);
  
  const myLibrary = new Catalog();
  myLibrary.addMedia(historyOfEverything);
  myLibrary.addMedia(speed);
  myLibrary.addMedia(volbeat);
  console.log(myLibrary);
  
  