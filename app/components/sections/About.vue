<template>
  <section class="bg-[#FEFEFE] py-20">
    <div
      class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 "
    >
      <div class="hidden lg:block lg:col-span-5">
        <NuxtImg
          src="/images/home-about.jpg"
          alt="home-about session"
          width="520"
          height="564"
          class="rounded w-full max-w-[520px] h-auto"
          loading="lazy"
        />
      </div>

      <!-- CONTENT -->
      <div class="lg:col-span-7">
        <h2
          class="font-heading text-3xl md:text-5xl font-semibold text-base-black mb-4 max-w-[39.875rem]"
        >
          Your Journey, Our Expertise.
        </h2>

        <p class="text-xl text-base-black max-w-[44.188rem] mb-4">
          At Autour du Monde Consult, we turn uncertainty into clarity for
          individuals building new lives in France and beyond. Founded by
          passionate legal specialists, we’re committed to empowering
          communities, breaking barriers, and guiding you every step of the way.
        </p>

        <!-- Bullet points -->
        <ul class="space-y-3 mb-7">
          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-200 text-base-white flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <p class="text-base-black text-xl">
              <strong class="font-semibold">
                A mission rooted in community,
              </strong>
              built to uplift and support the diaspora.
            </p>
          </li>

          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-200 text-base-white flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <p class="text-base-black text-xl">
              <strong class="font-semibold">
                A team that speaks your language,
              </strong>
              professionally and culturally.
            </p>
          </li>

          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-200 text-base-white flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <p class="text-base-black text-xl">
              <strong class="font-semibold">
                A track record of real impact,
              </strong>
              helping clients navigate their journey with confidence.
            </p>
          </li>
        </ul>

        <!-- CTA -->
        <CommonButton size="large" variant="filled" color="primary">
          Book a Consultation
        </CommonButton>
      </div>
    </div>
  </section>
</template>
