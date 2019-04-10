import React, { Component } from 'react'
import { getState } from 'redux';
import Loader from '../layouts/Loader';
import RequestApi from '../../actions/RequestApi';

//actions

import StreamCard from '../layouts/StreamCard';
import Alert from '../layouts/Alert';



class Streams extends Component {

  componentWillMount () {
    this.props.streamStore.subscribe(this.forceUpdate.bind(this));
    this.props.streamStore.dispatch(RequestApi());
  }
    
  render() {
    const stateProps = this.props.streamStore.getState();
    const status = stateProps.status;
    const error = stateProps.error;
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
        status === "error" ? (
          <div>
          <Alert error = { error } />
          </div>
        ) : (
          <div></div>
        )
      )
    )
  }
      </div>
    )
  }
}


export default  Streams