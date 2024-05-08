<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Glide from '@glidejs/glide'
import BalanzasGrameras from './BalanzasGrameras.vue'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var glide = new Glide('.glide', {
        type: 'carousel',
        perView: 2,
        autoplay: 3000,
        breakpoints: {
            1000: {
                perView: 1
            }
        }
    })
    
    glide.mount();
});
</script>

<template>
    <section class="bg-gray-100 dark:bg-gray-900 max-w-4xl m-auto mb-20" id="productos">
        <div class="w-full mb-10">
            <h1 class="text-center text-4xl md:text-5xl font-bold text-[#251F17] dark:text-white">Productos Destacados</h1>
            <div class="h-4 w-full">
                <div class="bg-[url('../../public/img/onda.svg')] bg-[length:22px_15px] w-40 md:w-96 h-4 m-auto"></div>
            </div>
        </div>
        <div class="w-full shadow mt-10 px-6">
            <ul class="text-sm font-medium text-center text-gray-500 grid grid-cols-2 md:grid-cols-3 gap-2 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li class="w-full whitespace-nowrap">
                    <button id="balanzasGrameras-tab" data-tabs-target="#balanzasGrameras" type="button" role="tab" aria-controls="balanzasGrameras" aria-selected="true" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">Balanzas Grameras</button>
                </li>
                <li class="w-full whitespace-nowrap">
                    <button id="balanzasPrecision-tab" data-tabs-target="#balanzasPrecision" type="button" role="tab" aria-controls="balanzasPrecision" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">Visión</button>
                </li>
                <li class="w-full whitespace-nowrap">
                    <button id="balanzasPrecision-tab" data-tabs-target="#balanzasPrecision" type="button" role="tab" aria-controls="balanzasPrecision" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">Visión</button>
                </li>
                <li class="w-full whitespace-nowrap">
                    <button id="balanzasPrecision-tab" data-tabs-target="#balanzasPrecision" type="button" role="tab" aria-controls="balanzasPrecision" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">Visión</button>
                </li>
                <li class="w-full whitespace-nowrap">
                    <button id="balanzasPrecision-tab" data-tabs-target="#balanzasPrecision" type="button" role="tab" aria-controls="balanzasPrecision" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">Visión</button>
                </li>
                <li class="w-full whitespace-nowrap">
                    <button id="balanzasHumeda-tab" data-tabs-target="#balanzasHumeda" type="button" role="tab" aria-controls="balanzasHumeda" aria-selected="false" class="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg">Valores</button>
                </li>
            </ul>
            <div id="fullWidthTabContent" class="py-6">
                <div class="hidden rounded-lg" id="balanzasGrameras" role="tabpanel" aria-labelledby="balanzasGrameras-tab">
                    <BalanzasGrameras/>
                </div>
                <div class="hidden rounded-lg" id="balanzasPrecision" role="tabpanel" aria-labelledby="balanzasPrecision-tab">
                
                </div>
                <div class="hidden rounded-lg" id="balanzasHumeda" role="tabpanel" aria-labelledby="balanzasHumeda-tab">
                    
                </div>
            </div>
        </div>
    </section>
</template>