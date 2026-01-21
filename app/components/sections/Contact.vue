<template>
  <section class="py-20 bg-base-white">
    <div class="mx-auto max-w-7xl px-6">
      <h2
        class="font-heading text-3xl md:text-5xl font-semibold text-base-black"
      >
        Connect With Our Consulting Team
      </h2>
      <div
        class="mt-8 grid grid-cols-1 lg:grid-cols-12 seection gap-12 items-start"
      >
        <div class="lg:col-span-5">
          <p class="mt-4 text-secondary-600 leading-relaxed max-w-md">
            From visas to essential travel documents, we’re here to make every
            step easier. Get in touch and let our team handle the details while
            you focus on your journey.
          </p>

          <p class="mt-8 font-medium text-base-black">
            You can also contact us via
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
                4 Rue Ferdinand Laulanie,<br />
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
            <form class="grid grid-cols-1 gap-6">
              <!-- Full name -->
              <div>
                <label for="fullName" class="form-label">Full Name *</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  class="form-input"
                  required
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="form-label">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  class="form-input"
                  required
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="form-label">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+33 1 23 45 67 89 / +233 24 123 4567"
                  class="form-input"
                />
              </div>

              <!-- Service -->
              <div>
                <label for="service" class="form-label"
                  >Service Interested In *</label
                >
                <select id="service" class="form-input" required>
                  <option value="">Select a service</option>
                  <option>Legal Assistance</option>
                  <option>Travel Consultancy</option>
                  <option>Admin Support</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="form-label"
                  >How can we help you? *</label
                >
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  class="form-input resize-none"
                  required
                />
              </div>

              <!-- Submit -->
              <CommonButton
                type="submit"
                size="large"
                variant="filled"
                color="primary"
                class="w-full mt-2"
              >
                Send Message
              </CommonButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
