const movie1 = {
    imagePath: "../assets/80ForBradyPoster.jpg",
    title: "80 For Brady", 
    rating: "PG-13",
    desription:  "Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl.",
    length: "1 hr 50 mins",
    // year, monthIndex, date, hour, minute
    times: [new Date(2023, 1, 8, 0, 30), new Date(2023, 1, 8, 1, 30),
        new Date(2023, 1, 8, 12, 30), new Date(2023, 1, 8, 13, 30),
        new Date(2023, 1, 8, 23, 30)], 
    price: 1
};

const movie2 = {
    imagePath: "../assets/80ForBradyPoster.jpg",
    title: "Puss In Boots",
    rating: "PG-13",
    desription: " Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl.",
    length: "1 hr 50 mins",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};

const movie3 = {
    imagePath: "../assets/80ForBradyPoster.jpg",
    title: "Puss In Boots",
    rating: "PG-13",
    desription: " Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl. Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl. Four best friends live life to the fullest when they embark on a wild trip to see their  Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl.hero, Tom Brady, play in the 2017 Super Bowl.",
    length: "1 hr 50 mins",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};

const movie4 = {
    imagePath: "../assets/80ForBradyPoster.jpg",
    title: "Puss In Boots",
    rating: "PG-13",
    desription: " Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl.",
    length: "1 hr 50 mins",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};

const movie5 = {
    imagePath: "../assets/80ForBradyPoster.jpg",
    title: "Puss In Boots",
    rating: "PG-13",
    desription: " Four best friends live life to the fullest when they embark on a wild trip to see their hero, Tom Brady, play in the 2017 Super Bowl.",
    length: "1 hr 50 mins",
    times: [new Date(2023, 1, 8, 14, 45)], 
    price: 1
};

const movieList = [movie1, movie2, movie3, movie4, movie5];


function GetMovies()
{
    return movieList;
}



export default GetMovies;