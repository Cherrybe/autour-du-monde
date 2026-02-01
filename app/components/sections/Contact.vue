<template>
  <section id="contact" class="py-20 bg-base-white">
    <div class="mx-auto max-w-7xl px-6">
      <h2
        class="font-heading text-3xl md:text-5xl font-semibold text-base-black"
      >
        {{ $t("contact.title") }}
      </h2>
      <div
        class="mt-8 grid grid-cols-1 lg:grid-cols-12 seection gap-12 items-start"
      >
        <div class="lg:col-span-5">
          <p class="mt-4 text-secondary-600 leading-relaxed max-w-md">
            {{ $t("contact.description") }}
          </p>

          <p class="mt-8 font-medium text-base-black">
            {{ $t("contact.contactVia") }}
          </p>

          <!-- Contact details -->
          <ul class="mt-4 space-y-4">
            <li class="flex items-center gap-3 text-secondary-700">
              <span
                class="flex size-10 p-2 items-center justify-center rounded-full border"
              >
                <IconsMail />
              </span>
              <span>autourdumondeconsult@gmail.com</span>
            </li>

            <li class="flex items-center gap-3 text-secondary-700">
              <span
                class="flex size-10 p-2 items-center justify-center rounded-full border"
              >
                <IconsPhone />
              </span>
              <span>0033627475218</span>
            </li>

            <li class="flex items-start gap-3 text-secondary-700">
              <span
                class="flex size-10 p-2 items-center justify-center rounded-full border"
              >
                <IconsLocation />
              </span>
              <span>
                4 Rue Ferdinand Laulanie,<br >
                31100, Toulouse
              </span>
            </li>
          </ul>

          <!-- Map -->
          <div class="mt-10 overflow-hidden rounded border">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=4%20Rue%20Ferdinand%20Laulanie,%2031100%20Toulouse&output=embed"
              class="w-full h-[308px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="rounded border bg-base-white p-8 shadow-sm">
            <!-- Success message -->
            <div
              v-if="submitStatus === 'success'"
              class="mb-6 p-4 rounded bg-green-50 border border-green-200 text-green-700"
            >
              {{ $t("contact.success") }}
            </div>

            <!-- Error message -->
            <div
              v-if="submitStatus === 'error'"
              class="mb-6 p-4 rounded bg-red-50 border border-red-200 text-red-700"
            >
              {{ errorMessage }}
            </div>

            <form class="grid grid-cols-1 gap-6" @submit.prevent="handleSubmit">
              <!-- Full name -->
              <div>
                <label for="fullName" class="form-label"
                  >{{ $t("contact.form.fullName") }} *</label
                >
                <input
                  id="fullName"
                  v-model="formData.fullName"
                  type="text"
                  :placeholder="$t('contact.form.fullNamePlaceholder')"
                  class="form-input"
                  required
                  :disabled="isSubmitting"
                >
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="form-label"
                  >{{ $t("contact.form.email") }} *</label
                >
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  :placeholder="$t('contact.form.emailPlaceholder')"
                  class="form-input"
                  required
                  :disabled="isSubmitting"
                >
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="form-label">{{
                  $t("contact.form.phone")
                }}</label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  :placeholder="$t('contact.form.phonePlaceholder')"
                  class="form-input"
                  :disabled="isSubmitting"
                >
              </div>

              <!-- Service -->
              <div>
                <label for="service" class="form-label"
                  >{{ $t("contact.form.service") }} *</label
                >
                <select
                  id="service"
                  v-model="formData.service"
                  class="form-input"
                  required
                  :disabled="isSubmitting"
                >
                  <option value="">
                    {{ $t("contact.form.servicePlaceholder") }}
                  </option>
                  <option>{{ $t("contact.form.services.legal") }}</option>
                  <option>{{ $t("contact.form.services.travel") }}</option>
                  <option>{{ $t("contact.form.services.admin") }}</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="form-label"
                  >{{ $t("contact.form.message") }} *</label
                >
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  :placeholder="$t('contact.form.messagePlaceholder')"
                  class="form-input resize-none"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <!-- Submit -->
              <CommonButton
                type="submit"
                size="large"
                variant="filled"
                color="primary"
                class="w-full mt-2"
                :disabled="isSubmitting"
              >
                {{
                  isSubmitting
                    ? $t("contact.form.submitting")
                    : $t("contact.form.submit")
                }}
              </CommonButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const formData = reactive({
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const isSubmitting = ref(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const errorMessage = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = "idle";
  errorMessage.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    submitStatus.value = "success";

    // Reset form
    formData.fullName = "";
    formData.email = "";
    formData.phone = "";
    formData.service = "";
    formData.message = "";

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = "idle";
    }, 5000);
  } catch (error: unknown) {
    submitStatus.value = "error";
    const err = error as { data?: { message?: string } };
    errorMessage.value =
      err.data?.message || "Failed to send message. Please try again later.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
