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
        trailerImg.style.right = "-174.92px"; // Se posiciona al inicio
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
});
</script>

<template>
    <main class="min-w-screen h-screen relative" id="inicio">
        <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800 shadow-lg sticky top-0 left-0 w-full max-h-[72px] z-50">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[72px] px-4">
                <a href="#" class="flex items-center justify-center space-x-2 h-[72px] rtl:space-x-reverse">
                    <img src="../../public/img/icon.png" class="h-12" alt="Flowbite Logo" />
                    <div class="flex flex-col justify-center items-start">
                        <span class="text-xl font-semibold whitespace-nowrap dark:text-white balinsaLetra">INDUSTRIAS</span>
                        <span class="text-4xl font-semibold whitespace-nowrap dark:text-white balinsaLetra">BALINSA</span>
                    </div>
                </a>
                <button data-collapse-toggle="mega-menu-full-image" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-image" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div id="mega-menu-full-image" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <a href="#inicio" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Servicios</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Productos</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700">Contactanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Termina Contenido del nav -->
        <section class="w-screen h-[calc(100vh-72px)] bg-[url('../../public/img/fondo.jpg')] bg-cover bg-center bg-no-repeat bg-mainEdinson relative flex justify-center">
            <div class="absolute z-20 w-full h-full max-w-screen-xl">
                
            </div>
        </section>
        <div class="w-full h-16 absolute bottom-0 z-30 flex items-center overflow-hidden">
            <div class="relative w-full h-full overflow-hidden">
                <img src="../../public/img/trailer 1C-01.png" alt="Trailer" class="h-16 absolute -right-[174.92px]" id="trailerImg"/>
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
            <div class="absolute h-full overflow-hidden -right-[174.92px] z-30 w-[174.92px]" id="divTrailerPesas">
                <div class="relative w-full">
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

</style>