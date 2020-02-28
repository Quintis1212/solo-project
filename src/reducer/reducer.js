import {createStore} from 'redux';




function reducer(state=0, action) {
    switch (action.type) {
    case 'SET-DATA':
        state = action.data
        return {data:state,staticData:state,fontSize:24,backgroundColor:"white",listDisplayBlock:true};

    case 'SET-TEXT':
        let text = action.textVal
        return {...state,textVal:text};

    case 'SET-BACKGROUND':
      let backgroundColor = action.backgroundColor
      return {...state,backgroundColor:backgroundColor};

    case 'SET-LIST-DISPLAY':
      return {...state,listDisplayBlock:action.listDisplayBlock};

    case 'SET-FONT-SIZE':
        let fontSizeNew = parseInt(action.fontSize);
        return {...state,fontSize:fontSizeNew};

    case 'SET-FONT-FAMILY':
        let font = action.fontFamily.trim()
        if (font === "") {
          return {...state,data: state.staticData};
        }
        var regexp = new RegExp((font),"i") 
        let filteredData = state.staticData.filter(el=>{
        return  el.family.match(regexp)
        })
        console.log(regexp)
        return {...state,data:filteredData,fontFamily:font};

      default:
        return state
    }
  }

 

  const store = createStore(reducer); 
  

 
  export default store