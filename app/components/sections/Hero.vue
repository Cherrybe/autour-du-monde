<template>
  <section
    ref="sectionRef"
    class="relative w-full bg-primary-900 text-base-white overflow-hidden"
  >
    <div
      class="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div class="flex flex-col gap-6">
        <h1
          ref="titleRef"
          class="font-heading text-4xl md:text-5xl leading-tight"
        >
          {{ $t("hero.title") }}
        </h1>

        <p ref="textRef" class="max-w-lg text-base-white/80">
          {{ $t("hero.subtitle") }}
        </p>

        <div
          ref="ctaRef"
          class="flex flex-col items-start gap-4 pt-2 min-[412px]:flex-row min-[412px]:items-center"
        >
          <CommonButton
            size="medium"
            variant="filled"
            color="secondary"
            @click="$router.push('#services')"
          >
            {{ $t("hero.cta") }}
          </CommonButton>

          <CommonButton
            size="medium"
            variant="outline"
            color="ghost"
            @click="$router.push('#process')"
          >
            {{ $t("hero.cta2") }}
          </CommonButton>
        </div>
      </div>

      <div
        ref="imageRef"
        class="relative flex justify-center lg:justify-end md:hidden lg:flex"
      >
        <img
          src="assets/images/consultation.jpg"
          alt="Consultation process"
          loading="lazy"
          class="rounded-lg shadow-2xl w-full max-w-[520px] h-[480px] object-cover"
        />
        <!-- <NuxtImg
          src="/images/consultation.jpg"
          alt="Consultation session"
          width="520"
          height="480"
          class="rounded-lg shadow-2xl w-full max-w-[520px] h-auto"
          loading="lazy"
        /> -->
      </div>
    </div>

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-800/10 to-transparent"
    />
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const ctaRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);

tryOnMounted(() => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8,
    },
  });

  tl.from(sectionRef.value, {
    opacity: 0,
    duration: 0.6,
  });

  tl.from(
    titleRef.value,
    {
      y: 24,
      opacity: 0,
    },
    "-=0.3",
  );

  tl.from(
    textRef.value,
    {
      y: 16,
      opacity: 0,
    },
    "-=0.4",
  );

  tl.from(
    ctaRef.value,
    {
      y: 12,
      opacity: 0,
    },
    "-=0.4",
  );

  if (imageRef.value) {
    tl.from(
      imageRef.value,
      {
        y: 20,
        opacity: 0,
      },
      "-=0.5",
    );
  }
});
</script>
