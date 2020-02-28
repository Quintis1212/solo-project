import React, { Component } from 'react'
import { connect } from 'react-redux';
import styleThemeFunction from '../Auxiliar/themeFunction'

 class TextItem extends Component {
    state = {
        itemsOnPage:16,
        linkToTop: false
    }

    static getDerivedStateFromProps(props, state) {
        return props
    }

    componentDidMount(){
        let component  = this                                                      
       const scrollFunc=(component)=>{ 
        window.addEventListener('scroll', function(e) {
            console.log( Math.round( window.scrollY)  , document.body.offsetHeight);
            if ((window.innerHeight + window.scrollY) > (document.body.offsetHeight-10) ){
                  component.handleScroll()
            }

            if (window.scrollY > 150) {
                component.linkToTopHandler(true)
            } else if (window.scrollY < 150) {
                component.linkToTopHandler(false)
            }

          });
       }
       scrollFunc(component)
    }

    linkToTopHandler=(val)=>{
        this.setState({
            linkToTop: val
        })
    }


    handleScroll=()=>{
        this.setState({
            itemsOnPage:this.state.itemsOnPage+4
        })
    }

    render() {

        const listStyle= {
                display: "grid",
                "gridTemplateColumns": "repeat(auto-fill, 300px)",
                "columnGap": "20px",
                "justifyContent": "center",
                "textAlign": "left"
            
        }





        return (
            <main   className="main-content" style={this.state.data.listDisplayBlock !== false? listStyle : null}>
                {this.state.data ? this.state.data.data.map((el,i)=>{
        
                return i < this.state.itemsOnPage?  (
                        <div  className="main-content-item" key={el.family} style={styleThemeFunction(this.state.data.backgroundColor)[0]}>
                        <p>{el.family}</p>
                        <p  style={{fontFamily: el.family,fontSize:this.state.data.fontSize+"px"}}>{this.state.data.textVal|| "Text example"}</p>
                        <i className="fas fa-plus"></i>
                       </div>
                    ) : null
                }): null}
                
               {this.state.linkToTop? <a className="link-to-top" href="#root"><i className="fas fa-arrow-circle-up"></i></a> :null } 
            </main>
            
            
        )
    }
}


export default connect(state=>({
    data:state
}), 
 dispatch=>({
    
 })

)(TextItem)