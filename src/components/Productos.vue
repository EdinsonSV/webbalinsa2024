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
    var glide = new Glide('#glide1', {
        type: 'carousel',
        perView: 2,
        autoplay: 2000,
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
        <BalanzasGrameras/>
    </section>
</template>