<template>
    <nav class="bg-black fixed top-0 w-full z-20">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white">
            <NuxtLink to="zizi-lux" class="">
                <NuxtImg class="h-20 w-40" densities="1px" format="webp" src="/azizi/logo.png" alt="" />
            </NuxtLink>
            <ul class="hidden gap-6 ml-auto text-white text-xl hover:cursor-pointer md:flex">
                <li class=" hover:text-menu-hover hover:underline max-sm:text-sm" v-for="m in menu">{{ (m as any).label}}</li>
            </ul>
            <!-- Mobile Menu Toggle -->
            <div class="md:hidden">
                <button class="text-white focus:outline-none" @click="ToggleMenu">
                    <div class="w-5 h-10 flex flex-col justify-center items-center mr-3">
                        <span class="block w-10 h-1 bg-white rounded-full"></span>
                        <span class="block w-10 h-1 mt-1 bg-white rounded-full"></span>
                        <span class="block w-8 h-1 mt-1 bg-white rounded-full ml-2"></span>
                    </div>
                </button>
            </div>
        </div>
    </nav>
    <div class="md:hidden" v-if="isMenuOpen">
        <zizi-lux-zizi-sidebar />
    </div>
</template>

<script setup lang="ts">
import { MenuService } from '@/service/menuService'
const { ToggleMenu } = useSideMenuStore()
const { isMenuOpen } = storeToRefs(useSideMenuStore())
const menu = ref([{}])
onMounted(() => {
    MenuService.getMenuList().forEach((x) => {
        menu.value.push(x)
    })
})
</script>
