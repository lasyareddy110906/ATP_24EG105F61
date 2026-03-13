 const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//filter() only "Sci-Fi" movies
const r1=movies.filter((movie)=> movie.genre==="Sci-Fi");
console.log(r1);


//map() to return:
    //        "Inception (8.8)"
const r2=movies.map((movie)=> `${movie.title} (${movie.rating})`);
console.log(r2);    


//reduce() to find average movie rating
const r3=movies.reduce((total,movie)=> total+movie.rating,0)/movies.length;
console.log(r3);


//find() movie "Joker"
const r4=movies.find((movie)=> movie.title==="Joker");
console.log(r4);


//findIndex() of "Avengers"
const r5=movies.findIndex((movie)=> movie.title==="Avengers");
console.log(r5);

