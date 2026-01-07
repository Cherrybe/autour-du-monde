<template>
  <header class="relative w-full bg-base-white border-b border-primary-100">
    <div class="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
      <CommonLogo />

      <!-- Desktop nav -->
      <div class="hidden lg:flex items-center gap-5">
        <nav aria-label="Menu links" class="flex items-center gap-8">
          <CommonNavLink to="/services">Services</CommonNavLink>
          <CommonNavLink to="/about">About</CommonNavLink>
          <CommonNavLink to="/faq">FAQ</CommonNavLink>
          <CommonNavLink to="#contact">Contact</CommonNavLink>
        </nav>

        <CommonButton size="medium" variant="filled" color="secondary">
          Book Consultation
        </CommonButton>
      </div>

      <!-- Mobile / tablet trigger -->
      <button
        class="lg:hidden text-base-black p-2"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <Icon
          :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
          size="24"
        />
      </button>
    </div>

    <!-- Overlay dropdown -->
    <ClientOnly>
      <div
        class="absolute left-0 top-full w-full bg-base-white border-b border-primary-100 z-50 overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden"
        :class="isMenuOpen ? 'max-h-[500px]' : 'max-h-0'"
      >
        <div class="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-6">
          <nav aria-label="Tablet and mobile menu links" class="flex flex-col divide-y divide-[#E7E7E7]">
            <CommonNavLink to="/services" class="py-4 !text-lg" @click="isMenuOpen = false">
              Services
            </CommonNavLink>
            <CommonNavLink to="/about" class="py-4 !text-lg" @click="isMenuOpen = false">
              About
            </CommonNavLink>
            <CommonNavLink to="/faq" class="py-4 !text-lg" @click="isMenuOpen = false">
              FAQ
            </CommonNavLink>
            <CommonNavLink to="#contact" class="py-4 !text-lg" @click="isMenuOpen = false">
              Contact
            </CommonNavLink>
          </nav>

          <div class="flex justify-end">
            <CommonButton
              size="medium"
              variant="filled"
              color="secondary"
              @click="isMenuOpen = false"
            >
              Book Consultation
            </CommonButton>
          </div>
        </div>
      </div>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
</script>
