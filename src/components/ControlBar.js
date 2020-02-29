import React, { Component } from 'react'
import getData from '../Async/GetData'
import { connect } from 'react-redux';
import styleThemeFunction from '../Auxiliar/themeFunction'


 class ControlBar extends Component {
    state ={
        textVal:'',
        fontVal:'',
    }

    static getDerivedStateFromProps(props, state) {
        return props
    }

    componentDidMount(){
        getData()
    }

    textHandler=(e)=>{
        let val = e.target.value
        let key = e.target.id

        this.setState({
            [key]:val
        })
        return key === "textVal"?  this.props.setText(val) : this.props.setFontFamily(val)
    }

    fontHandler=(val)=>{
        this.props.setFontSize(val)
    }

    pageBackgroundHandler=(e)=>{
         this.props.setBackground(e.target.value)
    }

    displayListHandler=()=>{
        this.props.setListDisplay(!this.state.data.listDisplayBlock)
    }

    clearTextField= ()=>{
        this.props.setText("") 
        this.props.setFontFamily("")
        this.setState({
            textVal:'',
            fontVal:'',
        })
    }
    render() {

        document.body.style.background =this.state.data.backgroundColor

        return (
            <header >
                <nav>
                <div className="navigation">
                <h2 className="logo">Google</h2>
                <span className="nav-links">
                    <h4>Catalog</h4>
                    <h4>Featured</h4>
                    <h4>Articles</h4>
                    <h4>About</h4>
                </span>
                </div>
                <div className="control-bar" style={styleThemeFunction(this.state.data.backgroundColor)[0]}>
                <input style={styleThemeFunction(this.state.data.backgroundColor)[0]} id="fontVal" value={this.state.fontVal} placeholder="Type font-family" onChange={this.textHandler} ></input>
                <input style={styleThemeFunction(this.state.data.backgroundColor)[0]} id="textVal" value={this.state.textVal} placeholder="Type some text here" onChange={this.textHandler}></input>
                <select id="select-box" style={styleThemeFunction(this.state.data.backgroundColor)[0]} defaultValue="24" onChange={(event) => this.fontHandler(event.target.value)}>
                    <option  value="20">20</option>
                    <option  value="24">24</option>
                    <option value="32">32</option>
                    <option value="40">40</option>
                </select>
                <span >
                <input className="black-theme-button" type="radio"   name="page-background"  value="black" onClick={this.pageBackgroundHandler}></input>
               <input className="white-theme-button" type="radio"  name="page-background" value="white"  onClick={this.pageBackgroundHandler}></input>
                </span>
                {this.state.data.listDisplayBlock !== false?<i style={styleThemeFunction(this.state.data.backgroundColor)[0]} onClick={this.displayListHandler}  className="fas fa-th-large"></i> : <i style={styleThemeFunction(this.state.data.backgroundColor)[0]} onClick={this.displayListHandler} className="fas fa-list"></i>  }
                {this.state.data.listDisplayBlock !== false?<i style={styleThemeFunction(this.state.data.backgroundColor)[0]} onClick={this.clearTextField}  className="fas fa-undo-alt"></i> : <i style={styleThemeFunction(this.state.data.backgroundColor)[0]} onClick={this.clearTextField} className="fas fa-undo-alt"></i>  }
                </div>
                </nav>
            </header>
        )
    }
}



export default connect(state=>({
    data:state
}), 
 dispatch=>({
        setText:(val)=>{
        dispatch({type:'SET-TEXT',textVal:val})
        },
        setFontFamily:(val)=>{
        dispatch({type:'SET-FONT-FAMILY',fontFamily:val})
        },
        setFontSize:(val)=>{
        dispatch({type:'SET-FONT-SIZE',fontSize:val})
        },
        setBackground:(val)=>{
        dispatch({type:'SET-BACKGROUND',backgroundColor:val})
        },
        setListDisplay:(val)=>{
        dispatch({type:'SET-LIST-DISPLAY',listDisplayBlock:val})
        }


 })

)(ControlBar)