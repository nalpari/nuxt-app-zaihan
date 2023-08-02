<script setup lang="ts">
import type { Menu, MenuResponse } from '~/composables/data'

const menuList = ref<Menu[]>()
const { data: menus, pending } = await useAsyncData<null | MenuResponse>('menuList', () =>
  $fetch('http://3.35.18.10:4000/home/menus', {
    params: {
      languageType: 'KOR',
    },
  }),
)
console.log(menus)
menuList.value = menus.value?.data.contents
</script>

<template>
  <aside class="menu-lnb view-pc">
    <ul v-if="pending">
      <li>Loading...</li>
    </ul>
    <ul v-else v-for="menu in menuList" :key="menu.id">
      <li>
        <NuxtLink :to="menu.id" class="menu-active">
          <img src="/images/menu/menu_info.png" alt="" />
          {{ menu.name }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
