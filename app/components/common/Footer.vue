<template>
  <footer class="bg-primary-500 text-base-white">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <!-- Top row -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 mb-8"
      >
        <img
          src="assets/images/dark_logo.png"
          alt="Autour du Monde Logo"
          loading="lazy"
          class="size-24"
        />
        <!-- <NuxtImg
          src="/images/dark_logo.png"
          alt="Autour du Monde Logo"
          class="size-24"
          priority
        /> -->

        <!-- CTA -->
        <div class="flex md:justify-end">
          <CommonButton
            size="medium"
            variant="filled"
            color="secondary"
            @click="$router.push('#contact')"
          >
            {{ $t("footer.cta") }}
          </CommonButton>
        </div>
      </div>

      <!-- Navigation -->
      <!-- <nav class="flex justify-center gap-8 text-sm font-medium mb-16">
        <CommonNavLink to="/" theme="footer">Home</CommonNavLink>
        <CommonNavLink to="/services" theme="footer">Services</CommonNavLink>
        <CommonNavLink to="/about" theme="footer">About</CommonNavLink>
        <CommonNavLink to="/faq" theme="footer">FAQ</CommonNavLink>
      </nav> -->

      <!-- Divider -->
      <div class="my-10 h-px bg-base-white/30" />

      <!-- Bottom row -->
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
      >
        <!-- Copyright -->
        <span class="opacity-80">
          {{ $t("footer.copyright") }}
          {{ new Date().getFullYear() }} autourdumondeconsult
        </span>

        <!-- Socials -->
        <div class="flex gap-6">
          <a
            target="_blank"
            href="https://www.instagram.com/autourdumonde_consult?igsh=MW45cjY5eWRkaThmYQ=="
            aria-label="Instagram"
            class="hover:opacity-80"
          >
            <IconsInstagram />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
