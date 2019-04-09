import React, { Component } from 'react'
import { getState } from 'redux';
import Loader from '../layouts/Loader';
import axios from 'axios';

//actions
import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';
import StreamCard from '../layouts/StreamCard';


class Streams extends Component {


    apiRequest () {
        axios.get('https://api.twitch.tv/kraken/streams/featured?client_id=32xyyrvm28knyd8kfpm2xinzk62g4k')
        .then(response => {
          const streams = response.data.featured.map(function(feat) {
            return feat.stream;
          });
          this.dispatchFetchSuccess(streams);
        })
        .catch(e => {
          console.log(e);
        });
    }

    dispatchFetchSuccess (streams) {
      this.props.streamStore.dispatch(FetchSuccess(streams));
    }

    dispatchFetchRequest () {
        this.props.streamStore.dispatch(FetchRequest());
    }

    componentWillMount () {
        this.props.streamStore.subscribe(this.forceUpdate.bind(this));
        this.apiRequest();
        this.dispatchFetchRequest();
      }


 
    
  render() {
    const stateProps = this.props.streamStore.getState();
    const status = stateProps.status;
    
    const streamCardItems = stateProps.streams.map((stream) =>
      <StreamCard
        key = { stream._id }
        streamCover = { stream.preview.medium }
        streamLink = { stream.channel.url }
      />
    );
    
    return (
      <div id="Streams">
      <h2>Twich API</h2>
      {status === "loading" ? (
         <Loader />
       ) : (
          status === "success" ? (
            
            <div className="stream-cards-container">
           
            {streamCardItems}
            </div>
          ) : (
            <div></div>
          )
        )
      }
      </div>
    )
  }
}


export default  Streams