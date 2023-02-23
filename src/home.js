import React, { useEffect, useState } from 'react'
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

function movieItemDisplay(id, movieItem, movieTimesDisplay)
{
    return (
        <div key ={id} className="movie_container">
            <div className='movie_image_container'>
                <img className="movie_icon" alt='' src={movieItem.imagePath}/>
            </div>
            <div className="movie_details">
                <div className="movie_title">{movieItem.title}</div>
                <div className="movie_rating">{movieItem.rating}</div>
                <div className="movie_description">{movieItem.desription}</div>
            </div>
            <div className="movie_times_container">
                {movieTimesDisplay}
            </div>
        </div>
    );
}

function createMovieTimesDisplay(id, movieTimes)
{
    var movieTimesDisplay = [];
    for(var j = 0; j < movieTimes.length; j++)
    {
        var time = twentyFourHourToTwelveHour(movieTimes[j].getHours(), movieTimes[j].getMinutes());
        movieTimesDisplay[j] = <button key={id + j} className="movie_time">{time}</button>
    }

    return movieTimesDisplay;
}

function createDateButton(date)
{
    return (
        <button key={date} className='date_button' date={date}>{createDateString(date)}</button>
    );
}

function createDateList()
{
    var dateButtons = [];

    for(var i = 0; i < 14; i++)
    {
        var day = new Date();
        day.setDate(day.getDate() + i);
        dateButtons[i] = createDateButton(day);
    }

    return dateButtons;
}

function createDateString(date)
{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var day = days[date.getDay()];
    return day + " " +  mm + "/" + dd;
}



function DateSelectDropDown()
{
    var dateList = createDateList();
    const [date, setDate] = useState(new Date());
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div id="drop_down_container">
                <button id='drop_down_button' onClick={() => {setToggle(!toggle);}}>
                    <div>
                        {createDateString(date)}
                        <img id="drop_down_icon" src="../assets/drop_down_arrow.png" alt=""></img>
                    </div>
                </button>
            </div>
            <div id="drop_down_list_container">
                <div id='drop_down' className={toggle ? 'drop_down' : 'hide_list'}  onClick={(event) => { setToggle(!toggle); setDate(new Date(event.target.getAttribute('date'))); }}>{dateList}</div>
            </div>
        </div>
    );
}

function Home(){
    const movies = GetMovies();
    const movieItems = [];

    for(var i = 0; i < movies.length; i++)
    {
        var movieTimesDisplay = createMovieTimesDisplay("movie_time" + i, movies[i].times);
        movieItems[i] = movieItemDisplay("movie_item" + i, movies[i], movieTimesDisplay);
    }

    return (
        <div style={{margin:10}}>
            <DateSelectDropDown />
            {movieItems}
        </div>
    );
}

export default Home;