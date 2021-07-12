import React, { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();//페이지 전환막음
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  } 
}

export default Subject;