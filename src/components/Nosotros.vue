<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <section class="w-full px-4 py-20 md:px-10 flex justify-center items-center" id="nosotros">
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl dark:border-gray-700 dark:bg-gray-800">
            <div class="object-cover rounded-t-lg w-full md:h-96 md:w-[450px] md:rounded-none md:rounded-s-lg">
                <img class="object-cover object-left md:h-96 w-full md:w-[450px] rounded-t-lg md:rounded-none md:rounded-s-lg" src="../../public/img/balanzaparapesarcamion.jpg" alt="">
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CREAMOS E IMPLEMENTAMOS ESTRATEGIAS DE AUTOMATIZACIÓN INTEGRALES</h5>
                <p class="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">En BALINSA, somos expertos en brindar estrategias de valor personalizadas y efectivas a nuestros clientes en el campo de balanzas y automatización. Nuestra dedicación se centra en comprender a fondo los objetivos comerciales de cada cliente para ofrecer soluciones que impulsen un crecimiento sólido y sostenible.</p>
                <p class="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">Nos enorgullece estar a la vanguardia de las últimas tendencias y avances tecnológicos en el ámbito de las balanzas y la automatización. Constantemente nos mantenemos actualizados sobre las innovaciones y las mejores prácticas del sector, lo que nos permite experimentar y mejorar continuamente nuestras estrategias.</p>
            </div>
        </div>
    </section>
</template>