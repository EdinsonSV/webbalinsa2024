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
// Función para actualizar las clases de los elementos li
function updateTabClasses() {
    // Obtener todos los elementos li dentro de la lista de pestañas
    const tabsListItems = document.querySelectorAll('#fullWidthTab li');

    // Iterar sobre cada elemento li
    tabsListItems.forEach(li => {
        // Agregar clases al elemento li
        li.classList.add('dark:border-transparent', 'text-gray-500', 'hover:text-gray-600', 'dark:text-gray-400', 'border-gray-100', 'hover:border-gray-300', 'dark:border-gray-700', 'dark:hover:text-gray-300');

        // Verificar si el botón dentro del li está seleccionado
        const button = li.querySelector('button');
        if (button.getAttribute('aria-selected') === 'true') {
            // Agregar clases adicionales si está seleccionado
            button.classList.add('text-balinsa', 'border-yellow-400', 'hover:text-yellow-400', 'dark:border-yellow-400', 'dark:hover:text-yellow-400', 'dark:text-yellow-400');
        } else {
            // Remover clases del elemento li si no está seleccionado
            button.classList.remove('text-balinsa', 'border-yellow-400', 'hover:text-yellow-400', 'dark:border-yellow-400', 'dark:hover:text-yellow-400', 'dark:text-yellow-400');
        }
    });
}

// Obtener todos los botones dentro de la lista de pestañas
const tabButtons = document.querySelectorAll('#fullWidthTab button');

// Agregar evento de clic a cada botón
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Llamar a la función para actualizar las clases de los elementos li
        updateTabClasses();
    });
});

// Llamar a la función al cargar la página para asegurarse de que las clases se establezcan correctamente inicialmente
updateTabClasses();

});
</script>
<template>
    <section class="w-full px-4 py-20 md:px-10 flex justify-center items-center flex-col" id="nosotros">
        <div class="w-full mb-10">
            <h1 class="text-center text-4xl md:text-5xl font-bold text-[#251F17] dark:text-white">Nosotros</h1>
            <div class="h-4 w-full">
                <div class="bg-[url('../../public/img/onda.svg')] bg-[length:22px_15px] w-40 h-4 m-auto"></div>
            </div>
        </div>
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl dark:border-gray-700 dark:bg-gray-800">
            <div class="object-cover rounded-t-lg w-full md:h-96 md:w-[450px] md:rounded-none md:rounded-s-lg">
                <img class="object-cover object-left md:h-96 w-full md:w-[450px] rounded-t-lg md:rounded-none md:rounded-s-lg" src="../../public/img/balanzaparapesarcamion.png" alt="" lazy="loading">
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-[#251F17] dark:text-white">CREAMOS E IMPLEMENTAMOS ESTRATEGIAS DE AUTOMATIZACIÓN INTEGRALES</h5>
                <p class="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">En BALINSA, somos expertos en brindar estrategias de valor personalizadas y efectivas a nuestros clientes en el campo de balanzas y automatización. Nuestra dedicación se centra en comprender a fondo los objetivos comerciales de cada cliente para ofrecer soluciones que impulsen un crecimiento sólido y sostenible.</p>
                <p class="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">Nos enorgullece estar a la vanguardia de las últimas tendencias y avances tecnológicos en el ámbito de las balanzas y la automatización. Constantemente nos mantenemos actualizados sobre las innovaciones y las mejores prácticas del sector, lo que nos permite experimentar y mejorar continuamente nuestras estrategias.</p>
            </div>
        </div>

        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 max-w-4xl">
            <ul class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li class="w-full">
                    <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Misión</button>
                </li>
                <li class="w-full">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Visión</button>
                </li>
                <li class="w-full">
                    <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Valores</button>
                </li>
            </ul>
            <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    <p class="text-gray-800 dark:text-gray-400 text-sm md:text-base">Contribuir a una mejor competitividad de la empresa creada para brindar ventas y servicios con la más alta tecnología que el mercado requiere, dando soluciones integrales de pesaje y metrología, cumpliendo con los estándares de calidad, resaltando que nuestro equipo de trabajo opera bajo un marco estricto de ética, cultura ambiental y responsabilidad social, Buscando la plena satisfacción que aumenten la rentabilidad de los procesos productivos</p>
                </div>
                <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <p class="text-gray-800 dark:text-gray-400 text-sm md:text-base">Ser una empresa líder en la comercialización de productos de pesaje, metrología y cctv, buscando nuevas alternativas, soluciones y oportunidades en el mercado nacional, satisfaciendo las necesidades no solo de nuestros clientes sino también de la industria peruana, brindando calidad, excelencia y atención inmediata en el servicio</p>
                </div>
                <div class="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                    <ul role="list" class="space-y-2 text-gray-800 dark:text-gray-400">
                        <li class="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="leading-tight">Actuar con ética y responsabilidad.</span>
                        </li>
                        <li class="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="leading-tight">Integridad y protagonismo.</span>
                        </li>
                        <li class="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="leading-tight">Honrar los acuerdos y compromisos.</span>
                        </li>
                        <li class="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="leading-tight">Basar nuestras relaciones en el respeto mutuo y la confianza.</span>
                        </li>
                        <li class="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="leading-tight">Trabajar de forma eficiente.</span>
                        </li>
                        <li class="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg class="flex-shrink-0 w-3.5 h-3.5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="leading-tight">Compromiso, adaptación y proactivos a los cambios.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>