# solo-project


Hello guys ) This is my Chingu Solo Project - Tier 2 - Favorite Fonts. This project was build on react , with react-router. 
Main functions :
1.Text typed into the input box change the  text in each font card.
2.If the input box no longer has any input there is a text for example to show all font card.
3.You can choose font size for each font card.
4.Clickable 'reset' icon on the far right of the major navigation to clean all input fields.
5.On the page fonts displayed  as returned by the Google Fonts Developer API.
6.When the search input is cleared  the fonts  automaticaly displayed and sorted by poplarity again.
7.You can search fonts by typing them in the second input box.

But in some cases I use native js, such as: showing link to top on scroll, infinitive pagination:
```javascript
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
    
   
```
 Also I do not use redux-thunk , but I just run async function to fetch google fonts when componentDidMount is run, set links tags for stylesheet, and dispatch data to reducer :
 
 ```javascript
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
    
    ...
    
    import store from '../reducer/reducer';
    
    export default async function getData() {
    const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBHugCJVSIcLu-Pc2EYMQ78Tuky2mCWWng')
    const myJson = await response.json();
    const dataArr = JSON.parse(JSON.stringify(myJson.items))
    store.dispatch({type:'SET-DATA',data :dataArr })
    dataArr.forEach(el=>{
      let link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', `https://fonts.googleapis.com/css?family=${el.family}&display=swap` );
      document.head.appendChild(link);
      })
  }

    ```
    
