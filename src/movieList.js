const movie1 = {
    imagePath: "../assets/80ForBradyPoster.jpg",
    title: "80 For Brady", 
    rating: "PG-13",
    desription:  "Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl.",
    length: "1 hr 48 mins",
    times: [new Date(2023, 1, 8, 0, 30), new Date(2023, 1, 8, 1, 30),
        new Date(2023, 1, 8, 12, 30), new Date(2023, 1, 8, 13, 30),
        new Date(2023, 1, 8, 23, 30)], 
    price: 1
};

const movie2 = {
    imagePath: "../assets/knockAtCabin.jpg",
    title: "Knock At The Cabin",
    rating: "R",
    desription: "While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse",
    length: "1 hr 50 mins",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};

const movie3 = {
    imagePath: "../assets/marlowe.jpg",
    title: "Marlowe",
    rating: "R",
    desription: " In late 1930’s Bay City, a brooding, down on his luck detective is hired to find the ex-lover of a glamorous heiress.",
    length: "2 hr",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};

const movie4 = {
    imagePath: "../assets/JesusRevolution.jpg",
    title: "Jesus Revloution",
    rating: "PG",
    desription: "The true story of a national spiritual awakening in the early 1970’s and its origins within a community of teenage hippies in Southern California.",
    length: "2 hr 10 mins",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};


const movieList = [movie1, movie2, movie3, movie4];


function GetMovies()
{
    return movieList;
}



export default GetMovies;