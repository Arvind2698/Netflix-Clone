import React from 'react';
import YouTube from 'react-youtube';
import YouTubeAPI from '../API/YouTube';

import TMBD from '../API/TMBD';
import './CSS/Row.css';

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
};

class Row extends React.Component{

    constructor(props){
        super(props);
        this.state={listOfData:[],currentVideoId:"",currentlySelected:null}
    }

    componentDidMount(){
        const getData=async ()=>{
            const data=await TMBD.get(this.props.url);
            this.setState({listOfData:data.data.results});
        }
        getData();
    }

    renderRowContent(){
        if(this.state.listOfData.length===0){
            return null;
        }

        const getImageData=this.state.listOfData.map((image,index)=>{
            return(<img onClick={()=>{this.renderTrailer(image)}} className={`row_poster ${this.props.isLargeRow && "row_posterLarge"} `}  src={`https://image.tmdb.org/t/p/original${image.poster_path}`} alt={image.original_name || ""} key={index} /> )
        });

        return getImageData;
    }

    renderTrailer(name){
        if(this.state.currentVideoId && name.id===this.state.currentlySelected.id ){
            this.setState({currentVideoId:null});
        }else{
            YouTubeAPI.get("/search",{
                params:{
                    q:`${name.name || name.original_name || name.title||name.original_title|| ""} trailer`
                }
            }).then((data)=>{this.setState({currentVideoId: data.data.items[0].id.videoId}); this.props.setActivePlayer(data.data.items[0].id.videoId) })
                .catch((err)=>{console.log(err)});
        }
        this.setState({currentlySelected:name});
    }

    render(){
        return(
            <div className="row">
                <h2>{this.props.label}</h2>
                <div className="row_posters">
                    {this.renderRowContent()}
                </div>
                {this.state.currentVideoId && this.state.currentVideoId===this.props.activePlayer  &&  <YouTube videoId={this.state.currentVideoId} opts={opts} />}
            </div>
        );
    }
}

export default Row;