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

<script setup>
onMounted(() => {
  const {
    data: menuList,
    pending,
    error,
    refresh,
  } = useFetch('http://3.35.18.10:4000/home/menus', { languageType: 'KOR' })
})
</script>
