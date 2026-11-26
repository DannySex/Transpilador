import '../css/style.css';
import { transpilar, limpiar, copiar } from './accion/acciones.js';

document.getElementById('btn-transpilar').addEventListener('click', transpilar);
document.getElementById('btn-limpiar').addEventListener('click', limpiar);
document.getElementById('btn-copiar').addEventListener('click', copiar);