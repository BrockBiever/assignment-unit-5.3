console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [] ;


function addToCollection(collection, title, artist, yearPublished){
  collection.push(title) ,
  collection.push(artist),
  collection.push(yearPublished)
 
  ;
console.log(collection) ;
  return collection
};

addToCollection(myCollection,'A Love Letter to You', 'TrippyRedd', 2017) ;
addToCollection(myCollection, 'Guilty Gear Strive ST','Arc System Works', 2022);
addToCollection(myCollection, 'Mellon Collie And The Infinite Sadness', 'The Smashing Pumpkins', 1994);
addToCollection(myCollection, 'Love Is Rage 2', 'Lil Uzi Vert',2020 );
addToCollection(myCollection, 'Screaming for Vengance', 'Judas Priest', 1981);
addToCollection(myCollection, 'Hybrid Theory', 'Linkin Park', 2000);

function showMyCollection(collection){
for (let i = 0; i <= collection.length; i++)
console.log(collection[i]);
return collection ;
} ;

showMyCollection(myCollection) ;

function findByArtist(collection, artist){
for( let i = 0; i <= collection.length; i++ )

return artist
} ;
artists = [] ;



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
