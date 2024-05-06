<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la imagen del trailer por su ID
    let trailerImg = document.getElementById("trailerImg");
    let BImg = document.getElementById("BImg");
    let A1Img = document.getElementById("A1Img");
    let LImg = document.getElementById("LImg");
    let IImg = document.getElementById("IImg");
    let NImg = document.getElementById("NImg");
    let SImg = document.getElementById("SImg");
    let A2Img = document.getElementById("A2Img");
    let DivTrailerPesas = document.getElementById("divTrailerPesas");

    // Función para animar la imagen
    function animateTrailer() {
        trailerImg.style.display = "block";
        trailerImg.style.right = "-218.50px"; // Se posiciona al inicio
        BImg.style.display = "block";
        BImg.style.right = "-30.2px"; // Se posiciona al inicio
        A1Img.style.display = "block";
        A1Img.style.right = "-30.2px"; // Se posiciona al inicio
        LImg.style.display = "block";
        LImg.style.right = "-30.2px"; // Se posiciona al inicio
        IImg.style.display = "block";
        IImg.style.right = "-30.2px"; // Se posiciona al inicio
        NImg.style.display = "block";
        NImg.style.right = "-30.2px"; // Se posiciona al inicio
        SImg.style.display = "block";
        SImg.style.right = "-30.2px"; // Se posiciona al inicio
        A2Img.style.display = "block";
        A2Img.style.right = "-30.2px"; // Se posiciona al inicio
        setTimeout(function() {
            trailerImg.style.transition = "right 3.5s ease-out";
            trailerImg.style.right = "calc(50% - 87.46px)"; // Se posiciona en el centro
        }, 100);
        setTimeout(function() {
            BImg.style.transition = "right 3.5s ease-out";
            BImg.style.right = "calc(50% + 30px)"; // Se posiciona en el centro
        }, 3500);
        setTimeout(function() {
            A1Img.style.transition = "right 3.5s ease-out";
            A1Img.style.right = "calc(50% + 10px)"; // Se posiciona en el centro
        }, 3750);
        setTimeout(function() {
            LImg.style.transition = "right 3.5s ease-out";
            LImg.style.right = "calc(50% - 10px)"; // Se posiciona en el centro
        }, 4000);
        setTimeout(function() {
            IImg.style.transition = "right 3.5s ease-out";
            IImg.style.right = "calc(50% - 30px)"; // Se posiciona en el centro
        }, 4250);
        setTimeout(function() {
            NImg.style.transition = "right 3.5s ease-out";
            NImg.style.right = "calc(50% - 50px)"; // Se posiciona en el centro
        }, 4500);
        setTimeout(function() {
            SImg.style.transition = "right 3.5s ease-out";
            SImg.style.right = "calc(50% - 70px)"; // Se posiciona en el centro
        }, 4750);
        setTimeout(function() {
            A2Img.style.transition = "right 3.5s ease-out";
            A2Img.style.right = "calc(50% - 90px)"; // Se posiciona en el centro
        }, 5000);
        setTimeout(function() {
            trailerImg.style.display = "none";
            BImg.style.display = "none";
            A1Img.style.display = "none";
            LImg.style.display = "none";
            IImg.style.display = "none";
            NImg.style.display = "none";
            SImg.style.display = "none";
            A2Img.style.display = "none";
        }, 9000);

        setTimeout(function() {
            DivTrailerPesas.style.display = "block";
            DivTrailerPesas.style.right = "calc(50% - 87.46px)"; // Se posiciona en el centro
        }, 9000);
        setTimeout(function() {
            DivTrailerPesas.style.transition = "right 3.5s ease-in";
            DivTrailerPesas.style.right = "100%";
        }, 9500);
        setTimeout(function() {
            DivTrailerPesas.style.display = "none";
        }, 13000);
    }

    // Llamar a la función para iniciar la animación cuando se cargue la página
    animateTrailer();
    setInterval(animateTrailer, 13500);

    let textoEscritoElement = document.getElementById('texto-escrito');

    let textoCompleto = "Diseñamos, fabricamos y comercializamos una amplia gama de balanzas, junto con sistemas de automatización personalizados para el crecimiento empresarial.";

    let contador = 0;

    let intervalo = setInterval(function() {
        let letra = textoCompleto.charAt(contador);
        textoEscritoElement.innerHTML += letra;
        contador++;
        if (contador >= textoCompleto.length) {
            clearInterval(intervalo);
        }
    }, 20);

});
</script>

<template>
    <main class="min-w-screen h-screen relative overflow-hidden" id="inicio">
        <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800 shadow-lg fixed top-0 left-0 w-full max-h-[72px] z-50">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[72px] px-4">
                <a href="#" class="flex items-center justify-center space-x-2 h-[72px] rtl:space-x-reverse">
                    <img src="../../public/img/icon.png" class="h-12" alt="Flowbite Logo" />
                    <div class="flex flex-col justify-center items-start">
                        <span class="leading-[0.8] text-lg md:leading-[0.8] balinsaLetra md:text-xl font-semibold whitespace-nowrap text-[#251F17] dark:text-white">INDUSTRIAS</span>
                        <span class="leading-[0.8] text-2xl md:leading-[0.8] balinsaLetra md:text-4xl font-semibold whitespace-nowrap text-[#251F17] dark:text-white">BALINSA</span>
                    </div>
                </a>
                <button data-collapse-toggle="mega-menu-full-image" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-image" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse md:items-center bg-white dark:bg-gray-800 rounded-lg">
                        <li>
                            <a href="#inicio" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="#nosotros" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Nosotros</a>
                        </li>
                        <li>
                            <a href="#servicios" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Servicios</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Productos</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Contactanos</a>
                        </li>
                        <li class="p-2">
                            <input type="checkbox" class="l" id="swith_modo_oscuro">
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Termina Contenido del nav -->
        <section class="w-screen h-screen bg-[url('../../public/img/fondo.jpg')] bg-cover bg-center bg-no-repeat bg-mainEdinson relative flex justify-center">
            <div class="absolute z-20 w-full h-full max-w-screen-xl">
                <div class="flex justify-center items-center w-full h-full flex-col">
                    <div class="flex flex-col max-w-3xl gap-6 md:gap-10 px-4">
                        <h4 class="text-white text-2xl font-semibold leading-none">Innovación Industrial</h4>
                        <h1 class="text-white text-4xl md:text-6xl font-bold leading-none md:leading-tight">Soluciones de Pesaje y Automatización</h1>
                        <p id="texto-escrito" class="text-white text-lg leading-[1.2] md:leading-normal"></p>
                        <a href="https://heyzine.com/flip-book/cff364737d.html" target="_blank"><button class="Documents-btn">
                            <span class="folderContainer">
                                <svg
                                class="fileBack"
                                width="146"
                                height="113"
                                viewBox="0 0 146 113"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                                    fill="url(#paint0_linear_117_4)"
                                ></path>
                                <defs>
                                    <linearGradient
                                    id="paint0_linear_117_4"
                                    x1="0"
                                    y1="0"
                                    x2="72.93"
                                    y2="95.4804"
                                    gradientUnits="userSpaceOnUse"
                                    >
                                    <stop stop-color="#FFC300"></stop>
                                    <stop offset="1" stop-color="#CD9C00"></stop>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <svg
                                class="filePage"
                                width="88"
                                height="99"
                                viewBox="0 0 88 99"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
                                <defs>
                                    <linearGradient
                                    id="paint0_linear_117_6"
                                    x1="0"
                                    y1="0"
                                    x2="81"
                                    y2="160.5"
                                    gradientUnits="userSpaceOnUse"
                                    >
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="#686868"></stop>
                                    </linearGradient>
                                </defs>
                                </svg>

                                <svg
                                class="fileFront"
                                width="160"
                                height="79"
                                viewBox="0 0 160 79"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                                    fill="url(#paint0_linear_117_5)"
                                ></path>
                                <defs>
                                    <linearGradient
                                    id="paint0_linear_117_5"
                                    x1="38.7619"
                                    y1="8.71323"
                                    x2="66.9106"
                                    y2="82.8317"
                                    gradientUnits="userSpaceOnUse"
                                    >
                                    <stop stop-color="#FFC300 "></stop>
                                    <stop offset="1" stop-color="#CD9C00"></stop>
                                    </linearGradient>
                                </defs>
                                </svg>
                            </span>
                            <p class="text">Nuestro Brochure</p>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>
        <div class="w-full h-16 absolute z-30 flex items-center overflow-hidden -bottom-[1px]">
            <div class="relative w-full h-full overflow-hidden">
                <div class="h-16 absolute -right-[218.50px]" id="trailerImg">
                    <img src="../../public/img/luces.png" alt="Luces" class="h-16 opacity-0 dark:opacity-100 absolute dark:relative"/>
                    <img src="../../public/img/trailer 1C-01.png" alt="Trailer" class="h-16"/>
                </div>
                <div class="relative w-full h-7">
                    <img src="../../public/img/B.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="BImg">
                    <img src="../../public/img/A.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="A1Img">
                    <img src="../../public/img/L.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="LImg">
                    <img src="../../public/img/I.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="IImg">
                    <img src="../../public/img/N.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="NImg">
                    <img src="../../public/img/S.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="SImg">
                    <img src="../../public/img/A2.png" alt="" class="h-7 absolute -bottom-[17px] -right-[30.2px]" id="A2Img">
                </div>
            </div>
            <div class="absolute h-full overflow-hidden -right-[174.50px] dark:-right-[218.50px] z-30 w-[174.50px] dark:w-[218.50px] bottom-0" id="divTrailerPesas">
                <div class="relative w-full">
                    <img src="../../public/img/luces.png" alt="Luces" class="h-16 w-full opacity-0 dark:opacity-100 absolute dark:relative"/>
                    <img src="../../public/img/trailer 1C-01.png" alt="Trailer" class="h-16 w-full"/>
                    <div class="absolute top-0 h-7 w-full">
                        <img src="../../public/img/B.png" alt="" class="h-7 absolute -bottom-[17px] right-[117.5px]">
                        <img src="../../public/img/A.png" alt="" class="h-7 absolute -bottom-[17px] right-[97.5px]">
                        <img src="../../public/img/L.png" alt="" class="h-7 absolute -bottom-[17px] right-[77.5px]">
                        <img src="../../public/img/I.png" alt="" class="h-7 absolute -bottom-[17px] right-[57.5px]">
                        <img src="../../public/img/N.png" alt="" class="h-7 absolute -bottom-[17px] right-[37.5px]">
                        <img src="../../public/img/S.png" alt="" class="h-7 absolute -bottom-[17px] right-[17.5px]">
                        <img src="../../public/img/A2.png" alt="" class="h-7 absolute -bottom-[17px] -right-[2.5px]">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.l {
  display: block;
  margin-bottom: 1.5em;
  font-size: 1em;
}

.l {
  background-color: rgba(0,0,0,0.7);
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.3) inset;
  color: #fdea7b;
  display: inline-flex;
  align-items: center;
  margin: auto;
  padding: 0.15em;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.l:before, .l:after {
  content: "";
  display: block;
}

.l:before {
  background-color: #d7d7d7;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;
  transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  z-index: 1;
}

.l:after {
  background: linear-gradient(transparent 50%, rgba(0,0,0,0.15) 0) 0 50% / 50% 100%,
		repeating-linear-gradient(90deg,#bbb 0,#bbb,#bbb 20%,#999 20%,#999 40%) 0 50% / 50% 100%,
		radial-gradient(circle at 50% 50%,#888 25%, transparent 26%);
  background-repeat: no-repeat;
  border: 0.25em solid transparent;
  border-left: 0.4em solid #d8d8d8;
  border-right: 0 solid transparent;
  transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
  transform: translateX(-22.5%);
  transform-origin: 25% 50%;
  width: 1.2em;
  height: 1em;
  box-sizing: border-box;
}
/* Checked */
.l:checked {
  background-color: rgba(0,0,0,0.45);
  box-shadow: 0.125em 0.125em 0 0.125em rgba(0,0,0,0.1) inset;
}

.l:checked:before {
  background-color: currentColor;
  transform: translateX(125%)
}

.l:checked:after {
  border-left-color: currentColor;
  transform: translateX(-2.5%) rotateY(180deg);
}
/* Other States */
.l:focus {
	/* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
  outline: 0;
}

.Documents-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  height: 45px;
  border: none;
  padding: 0px 15px;
  border-radius: 5px;
  background-color: #e8c70c;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.folderContainer {
  width: 40px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}
.fileBack {
  z-index: 1;
  width: 80%;
  height: auto;
}
.filePage {
  width: 50%;
  height: auto;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease-out;
}
.fileFront {
  width: 85%;
  height: auto;
  position: absolute;
  z-index: 3;
  opacity: 0.95;
  transform-origin: bottom;
  transition: all 0.3s ease-out;
}
.text {
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.Documents-btn:hover .filePage {
  transform: translateY(-5px);
}
.Documents-btn:hover {
  background-color: #d8ba10;
}
.Documents-btn:active {
  transform: scale(0.95);
}
.Documents-btn:hover .fileFront {
  transform: rotateX(30deg);
}

</style>