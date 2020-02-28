



//let currentTheme = this.state.data.backgroundColor

const styleThemeFunction = (currentTheme) => {

    const styleArr= [ 
        {
            color: "black",
            borderColor:"black",
            backgroundColor:"white",

        },
    
        {
            color: "white",
            borderColor:" white",
            backgroundColor:"black"
        }
    ]

    let currentCSSTheme= styleArr.filter(el=>{
        return el.color !== currentTheme
    })

    return currentCSSTheme;

}

export default styleThemeFunction;

