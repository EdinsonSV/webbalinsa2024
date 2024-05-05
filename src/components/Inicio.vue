<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-800 shadow-lg sticky top-0 left-0 w-full max-h-[72px] z-50">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="#" class="flex items-center space-x-2 rtl:space-x-reverse">
                <img src="../../public/img/icon.png" class="h-10" alt="Flowbite Logo" />
                <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white balinsaLetra">alinsa</span>
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
                        <a href="#" class="block py-2 px-3 text-balinsa border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:hover:bg-gray-700 hover:text-yellow-400 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Inicio</a>
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
</template>