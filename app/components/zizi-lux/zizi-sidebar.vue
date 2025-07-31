<template >
    <div >
        <!-- Overlay -->
        <div v-if="isMenuOpen" class="fixed inset-0 z-30 transition-opacity duration-300 bg-black bg-opacity-50"
            @click="closeMenu"></div>

        <!-- Side Menu -->
        <nav class="fixed top-0 left-0 z-40 w-2/5 h-full text-black shadow-2xl bg-black"
            :class="{ 'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
            :style="{ backgroundImage: `url(${backGroundUrl})` }">
            <div class="p-6">
                <!-- Menu Header -->
                <div class="flex items-center justify-between mb-8">
                    <button @click="closeMenu"
                        class="text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none ml-auto">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Menu Items -->
                <div class="items-center pt-5">
                    <ul>
                        <li class="text-white p-2 hover:text-menu-hover max-sm:text-sm flex items-center"
                            v-for="m in menu">
                            <div class="bg-white w-0.5 h-3 mr-2"></div>
                            {{ (m as any).label }}
                        </li>
                    </ul>
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
