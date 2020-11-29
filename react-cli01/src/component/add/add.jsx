import React, { Component } from 'react'

export default class Add extends Component {
    add=()=>{
        let {addComment} = this.props
        // 1.获取用户输入
        let {name ,content} =this
        // 2.校验数据
        if(!name.value.trim()||!content.value.trim()){
            alert('名字和内容均不能为空')
            return 
        }
        //3.将数据维护到状态中 
       addComment({id:(new Date()).valueOf(),name:name.value,content:content.value})
       name.value=''
       content.value=''
    }
    render() {
        return (
            <div>
                <div className="col-md-4">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" className="form-control" placeholder="用户名"  ref={name=>this.name=name}/>
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            <textarea className="form-control" rows="6" placeholder="评论内容" ref={(content)=>{this.content=content}}></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}