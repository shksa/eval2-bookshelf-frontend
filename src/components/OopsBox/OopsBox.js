import React from 'react';
import './OopsBox.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class OopsBox extends React.Component {
  handleClick =(e) => {
    fetch('http://localhost:3000/insertAndGetBooks', {
      method: 'POST',
    })
      .then(response => response.json())
      .then((response) => {
        console.log('fetched books from backend', response);
        if (response !== 'no books found') {
          this.props.dispatchStoreBooksObj(response);
        }
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="oopsBox">
        <h3>Oops no books found!</h3>
        <h3>Import them now?</h3>
        <button onClick={this.handleClick}>yes</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchStoreBooksObj: booksObj => dispatch(actions.storeBooksObj(booksObj)),
  };
}

export default connect(null, mapDispatchToProps)(OopsBox);

