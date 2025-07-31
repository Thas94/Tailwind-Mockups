<template>
    <header class="border-b">
        <nav class="fixed top-0 bg-black w-full h-20 flex items-center pr-40">
            <NuxtLink to="zizi-lux" class="">
                <NuxtImg class="h-20 w-40" densities="1px" format="webp" src="/azizi/logo.png" alt="" />
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-white text-xl hover:cursor-pointer max-sm:hidden max-md:hidden">
                <li class=" hover:text-menu-hover hover:underline max-sm:text-sm" v-for="m in menu">{{ (m as any).label }}</li>
            </ul>
            <button class="ml-auto sm:hidden md:hidden" @click="ToggleMenu">
                <div class="w-5 h-10 flex flex-col justify-center items-center">
                    <span class="block w-14 h-1 bg-white rounded-full"></span>
                    <span class="block w-14 h-1 mt-2 bg-white rounded-full"></span>
                    <span class="block w-10 h-1 mt-2 bg-white rounded-full ml-4"></span>
                </div>
            </button>
        </nav>
    </header>
    <div class="sm:hidden md:hidden" v-if="isMenuOpen">
        <zizi-lux-zizi-sidebar />
    </div>
</template>

<script setup lang="ts">
import {MenuService} from '@/service/menuService'
const { ToggleMenu } = useSideMenuStore()
const { isMenuOpen } = storeToRefs(useSideMenuStore())
const menu = ref([{}])
onMounted(() => {
    MenuService.getMenuList().forEach((x) => {
        menu.value.push(x)
    })
})
</script>
