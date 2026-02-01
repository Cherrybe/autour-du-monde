<template>
  <section class="bg-base-white py-20">
    <div
      class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
    >
      <!-- Left content -->
      <div class="lg:col-span-5">
        <h2
          class="font-body text-3xl md:text-5xl font-semibold text-base-black leading-tight max-w-[34.75rem]"
        >
          {{ $t("process.title") }}
        </h2>

        <div class="mt-10 overflow-hidden rounded">
          <NuxtImg
            src="/images/our-process.jpg"
            alt="Consultation process"
            width="556"
            height="368"
            class="rounded w-full object-cover grayscale"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Right steps -->
      <div class="lg:col-span-7 flex flex-col gap-10">
        <CommonProcessStep
          number="01"
          :title="$t('process.consulting.title')"
          :description="$t('process.consulting.description')"
        />

        <CommonProcessStep
          number="02"
          :title="$t('process.documentation.title')"
          :description="$t('process.documentation.description')"
        />

        <CommonProcessStep
          number="03"
          :title="$t('process.application.title')"
          :description="$t('process.application.description')"
        />

        <CommonProcessStep
          number="04"
          :title="$t('process.approval.title')"
          :description="$t('process.approval.description')"
        />
      </div>
    </div>
  </section>
</template>
