<template>
  <section id="services" class="bg-base-white py-20">
    <div
      class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <!-- Left content -->
      <div class="lg:col-span-4">
        <div class="flex flex-col items-start gap-6">
          <h2
            class="font-heading font-semibold text-base-black max-w-md lg:leading-[3.5rem]"
            :class="
              locale === 'fr'
                ? 'text-[40px] md:text-[40px]'
                : 'text-3xl md:text-5xl'
            "
          >
            {{ $t("services.title") }}
          </h2>

          <CommonButton
            size="large"
            variant="filled"
            color="primary"
            class="mt-2"
            @click="$router.push('#contact')"
          >
            {{ $t("services.cta") }}
          </CommonButton>
        </div>
      </div>

      <!-- Bento cards -->
      <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Featured card (full width on md+) -->
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

        <!-- Travel -->
        <CommonServiceCard
          :title="$t('services.travel.title')"
          :description="$t('services.travel.description')"
          :cta="$t('services.travel.cta')"
          icon-bg="bg-primary-500"
        >
          <template #icon>
            <IconsTravel />
          </template>
        </CommonServiceCard>

        <!-- Admin -->
        <CommonServiceCard
          :title="$t('services.admin.title')"
          :description="$t('services.admin.description')"
          :cta="$t('services.admin.cta')"
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

<script setup lang="ts">
const { locale } = useI18n();
</script>
