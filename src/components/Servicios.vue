<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Glide from '@glidejs/glide'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var glide = new Glide('#glideMarcas', {
        type: 'carousel',
        perView: 5,
        autoplay: 2000,
        breakpoints: {
            1000: {
            perView: 4
            },
            950: {
            perView: 3
            },
            920: {
            perView: 2
            },
            768: {
            perView: 1
            }
        }
    })
    
    glide.mount();
});
</script>
<template>
    <section class="bg-gray-100 dark:bg-gray-900 max-w-4xl m-auto mb-20" id="servicios">
        <div class="w-full mb-10">
            <h1 class="text-center text-4xl md:text-5xl font-bold text-[#251F17] dark:text-white">Servicios</h1>
            <div class="h-4 w-full">
                <div class="bg-[url('../../public/img/onda.svg')] bg-[length:22px_15px] w-40 h-4 m-auto"></div>
            </div>
        </div>
        <div class="px-4 mx-auto max-w-screen-xl">
            <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <div class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex justify-center items-center gap-2 px-2.5 py-1 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                    <img src="../../public/img/icono4.svg" alt="" class="h-8 text-blue-400"/>
                    <h2 class="text-blue-400 text-2xl md:text-4xl font-extrabold translate-y-[2px]">Venta</h2>
                </div>
                <p class="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Ofrecemos indicadores, plataformas, pesas patron, cámaras de seguridad, termómetros, estocas, rice lake, así como balanzas tipo grameras, comerciales, precision, colgantes y de pesar camiones.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <div class="bg-green-100 text-green-800 text-xs font-medium inline-flex justify-center items-center gap-2 px-2.5 py-1 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                        <img src="../../public/img/icono6.svg" alt="" class="h-8 text-blue-400"/>
                        <h2 class="text-green-400 text-2xl md:text-3xl font-extrabold translate-y-[2px]">Calibración</h2>
                    </div>
                    <p class="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Contamos con la debida certificación, aprovada por Produce, que permite que tu pesaje sea exacto, asegurandonos la conformidad tanto del proveedor a cliente.</p>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex justify-center items-center gap-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                        <img src="../../public/img/icono1.svg" alt="" class="h-8 text-blue-400"/>
                        <h2 class="text-purple-400 text-2xl md:text-3xl font-extrabold translate-y-[2px]">Mantenimiento</h2>
                    </a>
                    <p class="text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">La rápida accion de nuestros técnicos, nos ayuda a tener un plan de mantenimiento, que al efectuarlo nos aseguramos que sus equipos no presenten fallos a futuro.</p>
                </div>
            </div>
        </div>
        <div class="max-w-4xl my-20 px-6" id="glideMarcas">
            <h3 class="text-center text-xl md:text-2xl font-bold text-[#251F17] dark:text-white mb-5">MARCAS CON LAS QUE TRABAJAMOS</h3>
            <div class="relative w-full">
                <div class="glide__track overflow-hidden" data-glide-el="track">
                    <ul class="glide__slides flex">
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca1.jpg" alt="product image" lazy="loading"/></li>
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca2.jpg" alt="product image" lazy="loading"/></li>
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca3.jpg" alt="product image" lazy="loading"/></li>
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca4.jpg" alt="product image" lazy="loading"/></li>
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca5.jpg" alt="product image" lazy="loading"/></li>
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca6.jpg" alt="product image" lazy="loading"/></li>
                        <li class="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 glide__slide bg-white p-1 rounded-lg shadow h-32 md:h-20 object-contain"><img class="w-full h-full object-contain" src="../../public/img/marca7.jpg" alt="product image" lazy="loading"/></li>
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left absolute top-0 bottom-0 -left-[10px] md:-left-[30px]" data-glide-dir="<"><img src="../../public/img/arrowRight.png" alt="" class="h-6"/></button>
                    <button class="glide__arrow glide__arrow--right absolute top-0 bottom-0 -right-[10px] md:-right-[30px]" data-glide-dir=">"><img src="../../public/img/arrowLeft.png" alt="" class="h-6"/></button>
                </div>
            </div>
        </div>
    </section>
</template>