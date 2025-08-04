<template>
    <div class="w-full text-white bg-black/80">
        <div class="flex items-center justify-center mt-0 flex-col">
            <div class="w-[600px] h-32 flex mt-10 max-sm:mt-2 justify-center">
                <div class="sm:text-lg md:text-3xl lg:text-5xl text-center">
                    <p class="">Explore Our Crafted Projects</p>
                    <div class="mx-auto mt-5 w-11/12 h-px bg-menu-hover rounded"></div>
                </div>
            </div>
            <div class="w-[60%] text-xl max-sm:text-[10pt] text-center max-sm:-mt-10">
                <p class="mb-5">Explore Azizi Luxury Developments’ exquisite finished home projects, showcasing
                    stunning architecture, modern styles, and unparalleled amenities, reflecting a commitment to
                    quality, elegance, and a lavish lifestyle for every resident.</p>
            </div>
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div v-for="(img, i) in MenuService.getExploreImages()">
                        <NuxtImg sizes="xs:100vw sm:50vw lg:400px" :src="(img as any).src" />
                    </div>
                </div>
            </div>
            <div class="mb-10">
                <button
                    class="px-10 py-4 max-md:px-4 max-md:py-2 text-white bg-menu-hover border-menu-hover rounded-md hover:bg-gray-800 mt-20">View
                    All
                    <Icon name="mdi:arrow-right" size="20px" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MenuService } from '@/service/menuService'
const imgs = ref(null) as any
onMounted(() => {
    // MenuService.getExploreImages().forEach((x) => {
    //     imgs.value.push(x)
    // })
})
</script>

<style scoped></style>