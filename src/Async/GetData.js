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

