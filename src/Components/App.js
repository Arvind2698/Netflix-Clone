import React,{useState} from 'react';

import Row from './Row';
import './CSS/App.css';
import Banner from './Banner';
import Nav from './Nav';

const App=()=>{

    const [activePlayer,setActivePlayer] = useState(null);

    return(
        <div className="app">
            <Nav />
            <Banner url="/discover/tv?with_networks=213" />
            <Row label="NETFLIX ORIGINALS" url="/discover/tv?with_networks=213" isLargeRow={true} activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Trending Now" url="/trending/all/week?language=en-US" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Top Rated" url="/movie/top_rated?language=en-US" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Action Movies" url="/discover/movie?with_genres=28" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Comedy Movies" url="/discover/movie?with_genres=35" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Horror Movies" url="/discover/movie?with_genres=27" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Romance Movies" url="/discover/movie?with_genres=10749" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
            <Row label="Documentaries" url="/discover/movie?with_genres=99" activePlayer={activePlayer} setActivePlayer={setActivePlayer}/>
        </div>
    );
}

export default App;