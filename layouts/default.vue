<template>
  <AppHeader />
  <div class="all-wrap">
    <AppAside />

    <div class="contents-wrap">
      <slot />
      <!-- // contents -->

      <AppFooterInfo />
      <!-- // footer-info -->
    </div>
    <!-- // contents-wrap -->
  </div>
  <!-- // all-wrap -->
  <AppFooterMb />
</template>

<script setup lang="ts">
// const menuList = ref()
// onMounted(async () => {
//   const {data: menus} = await useAsyncData('menuList', () => $fetch('http://3.35.18.10:4000/home/menus', {
//     params: {
//       languageType: 'KOR'
//     }
//   }))
//
//   menuList.value = menus
// })
</script>
