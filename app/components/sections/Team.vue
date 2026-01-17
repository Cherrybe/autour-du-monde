<template>
  <section class="py-20 bg-base-white">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Header -->
      <CommonSectionIntro label="Our Team" />

      <h2
        class="mt-6 font-heading text-3xl md:text-5xl font-semibold text-base-black"
      >
        Our Experts, Your Partners
      </h2>
      <!-- Bento Grid -->
      <div class="mt-12 space-y-6">
        <!-- Top row: 1.5 / 1.5 -->
        <div class="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr] gap-6">
          <CommonTeamCard
            name="Anthony Osei-Agyei"
            position="Founder & CEO"
            image="/images/team/anthony.jpg"
            bio="Anthony brings years of legal and cross-border consulting experience, guiding clients with clarity, trust, and cultural understanding."
          />

          <CommonTeamCard
            name="Mawuena Osei-Agyei"
            position="Administrative Secretary"
            image="/images/team/mawuena.jpg"
            bio="Mawuena ensures smooth operations by coordinating documentation, schedules, and client communications with precision."
          />
        </div>

        <!-- Bottom row: 1 / 1 / 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CommonTeamCard
            name="Alexis Lecuyer"
            position="Associate & Legal Expert"
            image="/images/team/alexis.jpg"
            bio="Alexis supports clients through complex legal and immigration processes with clarity and confidence."
          />

          <CommonTeamCard
            name="Florian Esnault"
            position="Communication & Legal Expert"
            image="/images/team/florian.jpg"
            bio="Florian bridges legal expertise with clear communication and structured documentation."
          />

          <CommonTeamCard
            name="Timothy Yeboah"
            position="Consultant & Technical Advisor"
            image="/images/team/timothy.jpg"
            bio="Timothy provides technical insight and strategic support across systems and workflows."
          />
        </div>
      </div>
    </div>
  </section>
</template>
