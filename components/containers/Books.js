import React, { Component } from 'react'
import BookCard from './../layouts/BookCard'
import { getState } from 'redux';
import AddBook from '../../actions/AddBook';
import DeleteBook from '../../actions/DeleteBook';
import EditBook from '../../actions/EditBook';

//top level of React component hierarchy
class Books extends Component {
  
  dispatchAction(input) {
      switch(input){
        case 'TRASH':
          this.props.store.dispatch(DeleteBook())
          break;
        case 'PLUS':
          this.props.store.dispatch(AddBook())
          break;
        case "PENCIL":
          this.props.store.dispatch(EditBook());
          break;
      }
  }

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }
  
  
  render() {
    const stateProps = this.props.store.getState();
    console.log(stateProps);
    const bookItems = stateProps.books.map((book) =>
        <BookCard 
            stateProps = { stateProps } 
            key={ book }
            dispatchAction={this.dispatchAction.bind(this)}
        />
    );
    return (
       <div role="article" className="books-container">
             { bookItems }
       </div>
    )
  }
}



export default Books
