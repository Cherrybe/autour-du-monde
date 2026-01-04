<template>
	<lenis-wrapper :options="{}">
		<div class="position-relative z-1">
			<site-header />

			<page-transition>
				<slot />
			</page-transition>

		<site-footer />

		<!-- <client-only>
			<lazy-debug v-if="showDebug" />
		</client-only> -->
		</div>
	</lenis-wrapper>
</template>

<script setup lang="ts">
// const { public: publicConfig } = useRuntimeConfig();
// const showDebug = computed(() => publicConfig.showDebug);
</script>
