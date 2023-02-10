import React from 'react'
import GetMovies from './movieList';
import './css/home.css'


function twentyFourHourToTwelveHour(hour, min)
{
    var suffix = 'am';
    if(hour < 1)
    {
        hour += 12;
    }
    else if(hour === 12)
    {
        suffix = 'pm';
    }
    else if(hour > 12)
    {
        hour -= 12;
        suffix = 'pm';
    }

    return hour + ":" + min + suffix;
}

function Home(){
    const movies = GetMovies();

    const movieItems = [];
    for(var i = 0; i < movies.length; i++)
    {
        var movieTimes = movies[i].times;
        var movieTimesDisplay = [];
        for(var j = 0; j < movieTimes.length; j++)
        {
            var time = twentyFourHourToTwelveHour(movieTimes[j].getHours(), movieTimes[j].getMinutes());
            movieTimesDisplay[j] = <button className="movie_time">{time}</button>
        }

        movieItems[i] = 
        <div className="movie_container">
            <div className='movie_image_container'>
                <img className="movie_icon" alt='' src={movies[i].imagePath}/>
            </div>
            <div className="movie_details">
                <div className="movie_title">{movies[i].title}</div>
                <div className="movie_rating">{movies[i].rating}</div>
                <div className="movie_description">{movies[i].desription}</div>
            </div>
            <div className="movie_times_container">
                {movieTimesDisplay}
            </div>
        </div>
    }

    return (
        <div style={{margin:10}}>
            {movieItems}
        </div>
    );
}

export default Home;