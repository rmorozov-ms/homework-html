import html from "./app.html";
import './app.css'
import { fillTable } from './tableProcessor.js'


const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

fillTable();