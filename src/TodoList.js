import React,{ Component ,Fragment} from 'react';
import './style.css'

class TodoList extends Component {

    constructor(props){
        //调用父类的构造函数
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange.bind(this)}
                        className="input"
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li  
                                        key={index} 
                                        onClick={this.handleItemDelete.bind(this,index)}
                                        dangerouslySetInnerHTML={{__html:item}}
                                    >
                                    </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e){
        this.setState({
            inputValue: e.target.value 
        })
    }

    handleBtnClick(){
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        })
    }

    handleItemDelete(index){
        //state 不允许我们做任何改变,如果需要改变，创建一个副本
        const list = [...this.state.list]
        list.splice(index,1)
        console.log(index)
        this.setState({
            list
        })
    }
}

export default TodoList