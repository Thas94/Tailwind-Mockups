<template>
    <div class="w-full text-white bg-center bg-cover bg-no-repeat bg-[url('/azizi/house-design.jpg')]">
        <div class="flex items-center justify-center mt-0 flex-col bg-black/50">
            <div class="w-[600px] h-32 flex mt-10 max-sm:mt-2 justify-center">
                <div class="sm:text-lg md:text-3xl lg:text-5xl text-center">
                    <p class="">Azizi Luxury Developments meticulous crafting Process</p>
                </div>
            </div>
            <div class="w-[60%] text-xl max-sm:text-[10pt] text-center max-sm:-mt-10">
                <p class="mb-5">Explore Azizi Luxury Developments’ exquisite finished home projects, showcasing
                    stunning architecture, modern styles, and unparalleled amenities, reflecting a commitment to
                    quality, elegance, and a lavish lifestyle for every resident.</p>
            </div>
            <div class="mt-10">
                <div class="grid grid-cols-1 md:lg:grid-cols-2 gap-x-14 gap-y-10 rounded-full">
                    <div v-for="(img, i) in MenuService.getCraftImages()">
                        <NuxtImg class="rounded-md max-sm:w-[350px]" :src="(img as any).src" />
                    </div>
                </div>
            </div>
            <div class="mb-10">
                <button
                    class="px-10 py-4 max-md:px-4 max-md:py-2 text-white bg-menu-hover border-menu-hover rounded-md hover:bg-gray-800 mt-20">More
                    Detail
                    <Icon name="mdi:arrow-right" size="20px" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MenuService } from '@/service/menuService'
</script>

<style scoped>

</style>