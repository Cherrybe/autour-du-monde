<template>
  <footer class="bg-primary-500 text-base-white">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <!-- Top row -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 mb-8"
      >
        <div class="font-heading font-semibold text-lg">Logo here</div>

        <!-- CTA -->
        <div class="flex md:justify-end">
          <CommonButton size="medium" variant="filled" color="secondary">
            Contact Us
          </CommonButton>
        </div>
      </div>
      
      <!-- Navigation -->
        <nav class="flex justify-center gap-8 text-sm font-medium mb-16">
          <CommonNavLink to="/" theme="footer">Home</CommonNavLink>
          <CommonNavLink to="/services" theme="footer">Services</CommonNavLink>
          <CommonNavLink to="/about" theme="footer">About</CommonNavLink>
          <CommonNavLink to="/faq" theme="footer">FAQ</CommonNavLink>
        </nav>

      <!-- Divider -->
      <div class="my-10 h-px bg-base-white/30" />

      <!-- Bottom row -->
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
      >
        <!-- Copyright -->
        <span class="opacity-80">
          Copyright© {{ new Date().getFullYear() }} autourdumondeconsult
        </span>

        <!-- Socials -->
        <div class="flex gap-6">
          <a href="#" aria-label="Instagram" class="hover:opacity-80">
            <IconsInstagram />
          </a>
          <a href="#" aria-label="Facebook" class="hover:opacity-80">
            <IconsFacebook />
          </a>
          <a href="#" aria-label="LinkedIn" class="hover:opacity-80">
            <IconsLinkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
