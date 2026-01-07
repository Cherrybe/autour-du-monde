<template>
  <section
    class="relative w-full bg-primary-900 text-base-white overflow-hidden"
  >
    <div
      class="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div class="flex flex-col gap-6">
        <h1 class="font-heading text-4xl md:text-5xl leading-tight">
          Your Journey Deserves Care, Clarity, and Expertise.
        </h1>

        <p class="max-w-lg text-base-white/80">
          We provide trusted guidance for immigration, travel, and settlement —
          helping you move forward with confidence, every step of the way.
        </p>

        <div
          class="flex flex-col items-start gap-4 pt-2 min-[412px]:flex-row min-[412px]:items-center"
        >
          <CommonButton size="medium" variant="filled" color="secondary">
            Book a Consultation
          </CommonButton>

          <CommonButton size="medium" variant="outline" color="ghost">
            Learn How We Help
          </CommonButton>
        </div>
      </div>

      <div
        class="relative flex justify-center lg:justify-end md:hidden lg:flex"
      >
        <NuxtImg
          src="/images/consultation.jpg"
          alt="Consultation session"
          width="520"
          height="480"
          class="rounded-lg shadow-2xl w-full max-w-[520px] h-auto"
          loading="lazy"
        />
      </div>
    </div>

    <!-- subtle background depth -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-800/10 to-transparent"
    />
  </section>
</template>
