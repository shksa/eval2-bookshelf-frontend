import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import BooksShelf from './components/BooksShelf/BooksShelf';
import OopsBox from './components/OopsBox/OopsBox';

class App extends React.Component {
  componentDidMount = () => {
    console.log('ComponentDidMount called');
    fetch('http://localhost:3000/getBooksFromDb', {
      method: 'GET',
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
    let view = null;
    if (this.props.shelfPage) {
      view = <BooksShelf />;
    } else {
      view = <OopsBox />;
    }
    return (
      <div>
        <div className="sidenav">
          <a href="#about">About</a>
        </div>
        <div className="main">
          {view}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shelfPage: state.updater.shelfPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchStoreBooksObj: booksObj => dispatch(actions.storeBooksObj(booksObj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

