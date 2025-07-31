<template >
    <div>
        <nav class="fixed top-0 left-0 z-20 w-2/5 h-full text-black shadow-2xl bg-black"
            :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
            :style="{ backgroundImage: `url(${backGroundUrl})` }">
            <div class="p-6">
                <div class="flex items-center justify-between mb-8">
                    <button @click="closeMenu"
                        class="text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none ml-auto">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div class="items-center pt-5">
                    <ul>
                        <li class="text-white p-2 hover:text-menu-hover max-sm:text-sm flex items-center"
                            v-for="(m, i) in menu">
                            <div class="bg-white w-0.5 h-3 mr-2" v-if="i > 0"></div>
                            {{ (m as any).label }}
                        </li>
                    </ul>
                </div>
                <div class="items-center py-28 p-1 text-white">
                    CRAFTING LUXURY, BUILDING DREAMS
                </div>
                <div class="text-white w-40 md:bottom-0">
                    <p class="text-center text-[8pt]">Copyright © 2024 Azizi Luxury Developments. All rights reserved.</p>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
const backGroundUrl = '/azizi/concrete.jpg'
import { MenuService } from '@/service/menuService'
const { isMenuOpen } = storeToRefs(useSideMenuStore())
const closeMenu = () => {
    isMenuOpen.value = false
}
const menu = ref([{}])
onMounted(() => {
    MenuService.getMenuList().forEach((x) => {
        menu.value.push(x)
    })
})
</script>
