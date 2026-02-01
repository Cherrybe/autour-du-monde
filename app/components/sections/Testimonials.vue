<template>
  <section class="relative py-16">
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url(/images/testimonials.jpg)"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60" />

    <!-- Content -->
    <div class="relative mx-auto max-w-7xl px-6">
      <!-- Header -->
      <div class="mb-14">
        <div class="max-w-[52.188rem]">
          <h2
            class="text-3xl md:text-5xl font-heading font-semibold text-base-white max-w-[44.688rem]"
          >
            {{ $t("testimonials.title") }}
          </h2>

          <p class="mt-4 text-xl text-base-white leading-relaxed">
            {{ $t("testimonials.subtitle") }}
          </p>
        </div>

        <CommonButton
          size="large"
          variant="filled"
          color="secondary"
          class="mt-6"
          @click="$router.push('#contact')"
        >
          {{ $t("testimonials.cta") }}
        </CommonButton>
      </div>

      <!-- Testimonials -->
      <!-- Testimonials -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        <CommonTestimonialCard
          theme="primary"
          :author="$t('testimonials.reviews.prince.author')"
        >
          {{ $t("testimonials.reviews.prince.text") }}
        </CommonTestimonialCard>

        <CommonTestimonialCard
          theme="secondary"
          :author="$t('testimonials.reviews.josephine.author')"
        >
          {{ $t("testimonials.reviews.josephine.text") }}
        </CommonTestimonialCard>

        <CommonTestimonialCard
          theme="black"
          :author="$t('testimonials.reviews.mercy.author')"
          class="md:col-span-2 lg:col-span-1"
        >
          {{ $t("testimonials.reviews.mercy.text") }}
        </CommonTestimonialCard>
      </div>
    </div>
  </section>
</template>
