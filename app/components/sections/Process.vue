<template>
  <section class="bg-base-white py-20">
    <div class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      <!-- Left content -->
      <div class="lg:col-span-5">
        <h2
          class="font-body text-3xl md:text-5xl font-semibold text-base-black leading-tight max-w-[34.75rem]"
        >
          How We Guide You Every Step of the Way
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
          title="Consulting"
          description="We begin by listening to your story, understanding your goals, and identifying the best path forward. This first conversation helps us tailor our guidance to your unique situation and ensure you feel supported from the very start."
        />

        <CommonProcessStep
          number="02"
          title="Documentation"
          description="Our team walks you through every document you need, explaining each requirement in simple terms. We help you collect, organize, and verify all paperwork to avoid delays, mistakes, or rejections."
        />

        <CommonProcessStep
          number="03"
          title="Application"
          description="Once your documents are ready, we handle the full submission process—filling out forms, coordinating with institutions, and ensuring everything meets official standards. You stay informed while we manage the heavy lifting."
        />

        <CommonProcessStep
          number="04"
          title="Approval"
          description="When your application is approved, we guide you through the next steps so you can prepare for your journey stress-free. With everything handled professionally, you move forward feeling confident, supported, and ready."
        />
      </div>

    </div>
  </section>
</template>
