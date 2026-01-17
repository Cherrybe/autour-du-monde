<template>
  <transition mode="out-in" @enter="onEnter" @after-enter="onAfterEnter">
    <div
      :key="route.fullPath"
      class="flex flex-col flex-1"
    >
      <slot />
    </div>
  </transition>

  <!-- CUSTOM PAGE TRANSITION -->
  <client-only>
    <teleport to="body">
      <div
        id="page-transition"
        ref="$transition"
        class="fixed inset-0 z-[999] pointer-events-none opacity-0 bg-primary-200"
      />
    </teleport>
  </client-only>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { GSAPDuration, GSAPEase } from "~/libs/constant/gsap";
import useAppStore from "~/store/useAppStore";

const route = useRoute();
const { hook } = useNuxtApp();
const lenis = useLenis();
const $store = shallowRef<ReturnType<typeof useAppStore> | null>(null);

tryOnMounted(() => {
  $store.value = useAppStore();
});

const onAfterEnter = async () => {
  await nextTick();

  if (lenis.value) {
    await nextTick();
    lenis.value.scrollTo(0, { immediate: true, force: true });
  }
};

const onEnter = async (e: Element, done: () => void) => done();

const $transition = ref<HTMLElement | null>(null);

hook("page:start", () => {
  $store.value?.disable();
});

hook("page:finish", () => {
  setTimeout(async () => {
    await nextTick();
    $store.value?.enable();

    gsap.to($transition.value, {
      opacity: 0,
      duration: GSAPDuration.FAST,
      ease: GSAPEase.SLOW_IN_OUT,
    });
  }, 0);
});
</script>
