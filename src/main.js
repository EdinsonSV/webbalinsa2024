import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

let inputElement = document.getElementById('swith_modo_oscuro');

// Verificar si el navegador está en modo oscuro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    inputElement.checked = false;
} else {
    document.documentElement.classList.remove('dark');
    inputElement.checked = true;
}

// Verificar el estado del modo oscuro en el localStorage
if (localStorage.getItem('modoOscuro') === 'true') {
    // Aplicar el modo oscuro
    document.documentElement.classList.add('dark');
    inputElement.checked = false;
} else {
    document.documentElement.classList.remove('dark');
    inputElement.checked = true;
}

// Manejar el click en el interruptor de modo oscuro
document.getElementById('swith_modo_oscuro').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('modoOscuro', document.documentElement.classList.contains('dark'));
});