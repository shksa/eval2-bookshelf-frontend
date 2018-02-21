import React from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';

class Card extends React.Component {
  renderPictureArea() {
    return (<PictureArea
      url="https://img4.goodfon.com/wallpaper/big/4/e8/material-design-linii-background-seryi-fon.jpg"
      username="Ken"
    />);
  }

  renderTextArea() {
    return <TextArea text="Please note that first and last names are required before saving your client." />;
  }

  render() {
    return (
      <div className="board">
        <div className="picture-area">
          {this.renderPictureArea()}
        </div>
        <div className="text-area">
          {this.renderTextArea()}
        </div>
      </div>
    );
  }
}

class PictureArea extends React.Component {
  render() {
    return (
      <div className="picture-area-wrapper">
        <img className="picture" src={this.props.url} alt="background" />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <a href="#" className={this.props.styleClass}>{this.props.buttonText}</a>
    );
  }
}

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <div className="main-text">{this.props.text}</div>
        <Button styleClass="cancel-button" buttonText="Cancel" />
      </div>
    );
  }
}
