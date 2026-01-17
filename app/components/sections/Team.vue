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
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- CEO -->
        <CommonTeamCard
          class="md:col-span-2 lg:col-span-2"
          name="Anthony Osei-Agyei"
          position="Founder & CEO"
          image="/images/team/anthony.jpg"
          bio="Anthony brings years of legal and cross-border consulting experience, guiding clients with clarity, trust, and cultural understanding."
        />

        <!-- Card 2 -->
        <CommonTeamCard
          name="Mawuena Osei-Agyei"
          position="Administrative Secretary"
          image="/images/team/mawuena.jpg"
          bio="Mawuena oversees daily operations, ensuring efficient coordination and clear communication."
        />

        <!-- Bottom cards -->
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
  </section>
</template>
