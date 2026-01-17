<template>
  <section class="bg-base-white py-20">
    <div
      class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
    >
      <!-- Left content -->
      <div class="lg:col-span-4">
        <CommonSectionIntro label="Services" />

        <div class="flex flex-col items-start gap-6 mt-8">
          <h2 class="font-heading text-3xl leading-[4.5rem] md:text-5xl font-semibold text-base-black">
            Support That Feels Like Home,
            Even When You’re Far From It
          </h2>

          <CommonButton size="large" variant="filled" color="primary" class="mt-4">
            View More Services
          </CommonButton>
        </div>
      </div>

      <!-- Bento cards -->
      <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2  pt-8">
        <!-- Top card (spans full width) -->
        <CommonServiceCard
          featured
          span-class="md:col-span-2"
          title="Legal Assistance"
          description="Empowering migration dreams with expert legal guidance. We help you navigate French immigration laws with clarity and confidence."
          cta="Read More"
          icon-bg="bg-primary-100"
        >
          <template #icon>⚖️</template>
        </CommonServiceCard>

        <!-- Bottom left -->
        <CommonServiceCard
          title="Travel Consultancy"
          description="Strategic, tailored advice for every stage of your journey. Plan your move to France with confidence and foresight."
          cta="Read More"
          class="md:mt-6"
          icon-bg="bg-primary-500"
        >
          <template #icon>🧭</template>
        </CommonServiceCard>

        <!-- Bottom right -->
        <CommonServiceCard
          title="Admin Support"
          description="A one-stop solution for documentation and processes. We streamline the details so you can focus on your future."
          cta="Read More"
          class="md:mt-10"
          icon-bg="bg-primary-100"
        >
          <template #icon>📁</template>
        </CommonServiceCard>
      </div>
    </div>
  </section>
</template>
