<template>
  <div class="min-h-screen flex flex-col">
    <common-nav-bar />

    <page-transition class="flex-1">
      <slot />
    </page-transition>

    <common-footer />
  </div>
</template>
