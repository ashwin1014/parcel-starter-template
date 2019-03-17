import "babel-polyfill";
import './style.css';
import M from 'materialize-css';

window.addEventListener('load', ()=>{
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
});