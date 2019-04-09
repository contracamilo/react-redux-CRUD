import React, { Component } from 'react'
import { getState } from 'redux';
import Loader from '../layouts/Loader';
import axios from 'axios';

//actions
import FetchRequest from '../../actions/FetchRequest';
import FetchSuccess from '../../actions/FetchSuccess';
import FetchFailure from '../../actions/FetchFailure';


class Streams extends Component {


    apiRequest () {
        axios.get('https://api.twitch.tv/kraken/streams/featured?client_id=32xyyrvm28knyd8kfpm2xinzk62g4k')
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(error);
          });
    }

    dispatchFetchRequest () {
        this.props.store.dispatch(FetchRequest());
    }

    componentWillMount () {
        this.props.store.subscribe(this.forceUpdate.bind(this));
        this.apiRequest();
        this.dispatchFetchRequest();
      }


 
    
  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    return (
        <div>
            {status === "loading" ? (
                <Loader />
                ) : (
                <div>Holi</div>
                )
            }
        </div>
    )
  }
}


export default  Streams