import React from 'react'
import Add from './component/add/add'
import List from './component/list/list.jsx'
import { log } from 'util';
class App extends React.Component {
  state = {
    comments:[
      {id:'1',name:'班长',content:'我觉得很简单'},
      {id:'2',name:'龙哥',content:'我是没学，学了我也会'},{
        id:'3',name:'老师',content:'其实没那么难'
      }]
  }
  addComment=(commentObj)=>{
         let{comments}=this.state
         comments.unshift(commentObj)
          this.setState({comments})
         
         console.log(commentObj);
         
          
  }
  render() {
    const {comments} =this.state
    return (
    <div>
    <header className="site-header jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <Add addComment={this.addComment}/>
      <List comments={comments}/>
      
    </div>
      
      </div>)
  }
}
export default App;