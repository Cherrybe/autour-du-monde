<template>
  <section class="bg-base-white py-20">
    <div
      class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
    >
      <!-- Left content -->
      <div class="lg:col-span-4">
        <div class="flex flex-col items-start gap-6">
          <h2
            class="font-heading text-3xl lg:leading-[3.5rem] md:text-5xl font-semibold text-base-black"
          >
            {{ $t("services.title") }}
          </h2>

          <CommonButton
            size="large"
            variant="filled"
            color="primary"
            class="mt-4"
          >
            {{ $t("services.cta") }}
          </CommonButton>
        </div>
      </div>

      <!-- Bento cards -->
      <div
        class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4"
      >
        <!-- Top card (spans full width) -->
        <CommonServiceCard
          featured
          span-class="md:col-span-2"
          :title="$t('services.legal.title')"
          :description="$t('services.legal.description')"
          :cta="$t('services.legal.cta')"
          icon-bg="bg-primary-100"
        >
          <template #icon>
            <IconsLegal />
          </template>
        </CommonServiceCard>

        <!-- Bottom left -->
        <CommonServiceCard
          :title="$t('services.travel.title')"
          :description="$t('services.travel.description')"
          :cta="$t('services.travel.cta')"
          class="md:mt-6"
          icon-bg="bg-primary-500"
        >
          <template #icon>
            <IconsTravel />
          </template>
        </CommonServiceCard>

        <!-- Bottom right -->
        <CommonServiceCard
          :title="$t('services.admin.title')"
          :description="$t('services.admin.description')"
          :cta="$t('services.admin.cta')"
          class="md:mt-10"
          icon-bg="bg-primary-100"
        >
          <template #icon>
            <IconsAdmin />
          </template>
        </CommonServiceCard>
      </div>
    </div>
  </section>
</template>
