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
