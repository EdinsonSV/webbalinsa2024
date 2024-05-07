<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <section class="bg-[#14110D] w-full py-10" id="footer">
        <div class="text-white max-w-4xl m-auto px-4">
            <div class="w-full flex justify-center items-start md:items-center gap-4 flex-col md:flex-row">
                <div class="flex-1">
                    <a href="#" class="flex items-center justify-start space-x-2 h-[72px] rtl:space-x-reverse">
                        <img src="../../public/img/icon.png" class="h-10" alt="Flowbite Logo" />
                        <div class="flex flex-col justify-center items-start">
                            <span class="leading-[0.8] text-sm balinsaLetra font-semibold whitespace-nowrap text-white">INDUSTRIAS</span>
                            <span class="leading-[0.8] text-2xl balinsaLetra font-semibold whitespace-nowrap text-white">BALINSA</span>
                        </div>
                    </a>
                    <div class="whitespace-nowrap">
                        <ul class="md:space-y-1">
                            <li><i class="bi bi-phone"></i> <a href="https://wa.me/+51924205463" target="_blank">+51 924 205 463</a></li>
                            <li><i class="bi bi-phone"></i> <a href="https://wa.me/+51924808237" target="_blank">+51 924 808 237</a></li>
                            <li><i class="bi bi-phone"></i> <a href="https://wa.me/+51955571986" target="_blank">+51 955 571 986</a></li>
                            <!--<li><i class="bi bi-envelope-at"></i> <a href="mailto:ventas@balinsa.com">ventas@balinsa.com</a></li>-->
                            <li><i class="bi bi-envelope-at"></i> <a href="mailto:industriasbalinsa@gmail.com">industriasbalinsa@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex-1 flex w-full flex-col gap-2"> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5760377075835!2d-80.64800492406675!3d-5.171684752218804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1baf6381612d%3A0x1d8dda0d387c3909!2sINDUSTRIAS%20BALINSA%20E.I.R.L.!5e0!3m2!1ses!2spe!4v1688765002173!5m2!1ses!2spe" width="100%" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg"></iframe>
                    <p class="text-xs">Av. Separadora Mz A LT 8 Sector 28 de Julio (Frente a la Urb. Los Jardines de la Avifap) - Piura</p>
                </div>
            </div>
            <hr class="my-6 border-gray-100" />
            <div class="flex justify-center items-center">
                <div class="text-sm text-gray-100 text-center">
                    © 2024 <b>Industrias Balinsa</b>
                    <span class="text-[10px] -translate-y-12">®</span>
                    . Todos los derechos reservados.</div>
            </div>
        </div>
    </section>
</template>