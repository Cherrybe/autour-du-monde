<template>
	<lenis-wrapper :options="{}">
		<div class="position-relative z-1">
			<common-nav-bar />

			<page-transition>
				<slot />
			</page-transition>
		</div>
	</lenis-wrapper>
</template>
