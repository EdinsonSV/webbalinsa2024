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
    new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    rewind: true,
    responsive:[{
        breakpoint: 687,
        settings: {
            slidesToShow: 3,
        }
    },{
        breakpoint: 1000,
        settings: {
            slidesToShow: 5,
        }
    }]
    });
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
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <div class="bg-green-100 text-green-800 text-xs font-medium inline-flex justify-center items-center gap-2 px-2.5 py-1 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                        <img src="../../public/img/icono6.svg" alt="" class="h-8 text-blue-400"/>
                        <h2 class="text-green-400 text-2xl md:text-3xl font-extrabold translate-y-[2px]">Calibración</h2>
                    </div>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <a href="#" class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex justify-center items-center gap-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                        <img src="../../public/img/icono1.svg" alt="" class="h-8 text-blue-400"/>
                        <h2 class="text-purple-400 text-2xl md:text-3xl font-extrabold translate-y-[2px]">Mantenimiento</h2>
                    </a>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
                </div>
            </div>
        </div>
        <div class="my-10 relative w-[80%] md:w-full m-auto">
            <button class="glider-prev"><img src="../../public/img/arrowRight.png" alt="" class="h-6 w-6"></button>
            <div class="glider">
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca1.jpg" alt="product image" />
                </div>
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca2.jpg" alt="product image" />
                </div>
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca3.jpg" alt="product image" />
                </div>
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca4.jpg" alt="product image" />
                </div>
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca5.jpg" alt="product image" />
                </div>
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca6.jpg" alt="product image" />
                </div>
                <div class="mx-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <img class="p-2 rounded-t-lg h-36 md:h-20 w-full" src="../../public/img/marca7.jpg" alt="product image" />
                </div>
            </div>
            <button class="glider-next"><img src="../../public/img/arrowLeft.png" alt="" class="h-6 w-6"></button>
        </div>
    </section>
</template>