import React from 'react';

import TMBD from '../API/TMBD';
import './CSS/Banner.css';

class Banner extends React.Component{

    constructor(props){
        super(props);
        this.state={currentBannerDisplay:null};
    }

    componentDidMount(){
        const getData=async ()=>{
            const data=await TMBD.get(this.props.url);
            this.setState({currentBannerDisplay:data.data.results[Math.floor(Math.random() * 21)]});
        }

        getData();
    }

    truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
    }

    render(){
        console.log(this.state.currentBannerDisplay);
        if(!this.state.currentBannerDisplay){
            return(null);
        }
        return(
            <header className="banner"
            style={{backgroundSize:"cover",
                    backgroundPosition:"center center",
                    backgroundImage:`url(https://image.tmdb.org/t/p/original${this.state.currentBannerDisplay.backdrop_path})`}}>

                <div className="banner_content">
                    <h1 className="banner_title">{this.state.currentBannerDisplay.name || this.state.currentBannerDisplay.title || this.state.currentBannerDisplay.original_name}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button" onClick={()=>{this.renderTrailer()}}>Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h1 className="banner_description">{this.truncateString(this.state.currentBannerDisplay.overview,150)}</h1>
                </div>
                <div className="banner_fadeBottom"></div>
            </header>
        );
    }
}

export default Banner;