import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3; //마지막 content id값
    this.state={
      mode:'create',
      selected_content_id:2,//2번 content 선택
      subject:{title:"WEB", sub:"World wid Web!"},
      welcome:{title:'Welcome', desc:'Hello, React!!'},//welcome 값일 때 출력하는 default
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is HyperText ...'},
        {id:3, title:'JS', desc:'JS is HyperText ...'}
      ]
    }
  }    
  render(){//HTML을 그리는 것을 결정
    var _title, _desc ,_article=null;
    if(this.state.mode === 'welcome'){//welcome 상태일때
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){//read 상태일떄
      var i = 0;
      while(i < this.state.contents.length){
        var data= this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }

        
        i=i+1;
      }
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    }else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
          //add content to this.state.contents
          this.max_content_id = this.max_content_id + 1
          //this.state.contents.push({id:this.mex_content_id, title:_title, desc:_desc});
          var _contents = this.state.contents.concat(
            {id:this.max_content_id, title:_title, desc:_desc} 
          )
          this.setState({
            contents:_contents
          })//contents 추가
        console.log(_title,_desc);
      }.bind(this)}></CreateContent>
    }
    return(
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage= {function(){
          this.setState({mode:'welcome'});
        }.bind(this)} //onchangepage로 클릭했을때 함수에 설치한 이벤트실행
        >
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){ //function에 event 주입
            console.log(e);
            e.preventDefault();// 기본적인 실행 안하도록(페이지 reload안하게)  함수 끝난 직후에 .bind
            this.setState({ //setState로 mode 바꾸기
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1> 
          {this.state.subject.sub}
        </header> */}
        <TOC 
        onChangePage={function(id){
          alert('hi');
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){//onChangeMode 이벤트 설치
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
