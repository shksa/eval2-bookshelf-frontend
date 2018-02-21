import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';
import BooksShelf from '../BooksShelf/BooksShelf';
import OopsBox from '../OopsBox/OopsBox';

function Main(props) {
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
      <div>
        {view}
      </div>
    </div>
  );
}

// export default Main;
