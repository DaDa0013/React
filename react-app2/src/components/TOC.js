import React, { Component } from 'react';

class TOC extends Component {
  render(){
    var data = this.props.data;
    var i = 0;
    var lists = [];
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/" +data[i].id}
            data-id={data[i].id}
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
              //this.props.onChangePage(e.target.dataset.id);
            }.bind(this, data[i].id)}
          >{data[i].title}</a></li>); //반복문으로 1,2,3번 출력, key로 구분해주기(반복문일때)
        i = i + 1;
      }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;