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
            Client Success Stories That Speak for Themselves
          </h2>

          <p class="mt-4 text-xl text-base-white leading-relaxed">
            We’re a team of dedicated consultants passionate about helping our
            clients grow, adapt, and thrive. Turning challenges abroad into
            opportunities and making every journey feel supported and at home.
          </p>
        </div>

        <CommonButton
          size="large"
          variant="filled"
          color="secondary"
          class="mt-6"
        >
          View More Reviews
        </CommonButton>
      </div>

      <!-- Testimonials -->
      <!-- Testimonials -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        <CommonTestimonialCard theme="primary" author="Prince">
          My wife and I wanted to start a business, but the language barrier
          made the legal process difficult. Autour du Monde Consult connected us
          with a commercial law expert and stayed by our side through every step
          to ensure a smooth setup. Today, they remain a trusted partner,
          reviewing our contracts and helping us avoid any legal lapses.
        </CommonTestimonialCard>

        <CommonTestimonialCard theme="secondary" author="Josephine">
          After years in France, I needed to change my residency status and was
          told it would be costly. Autour du Monde Consult guided me through the
          process clearly and without stress. Everything was explained in a way
          I could easily understand, and I achieved my goal without unnecessary
          costs.
        </CommonTestimonialCard>

        <CommonTestimonialCard
          theme="black"
          author="Mercy B."
          class="md:col-span-2 lg:col-span-1"
        >
          Traveling to Ghana used to be stressful due to my tight schedule and
          the visa process. Autour du Monde Consult now handles everything
          efficiently and always delivers on time. For over two years, they’ve
          been trusted partners managing all my consular travel needs with
          professionalism and ease.
        </CommonTestimonialCard>
      </div>
    </div>
  </section>
</template>
