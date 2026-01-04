<!--
  LenisWrapper.vue
  ----------------
  This component sets up a Lenis smooth scrolling instance
  with wrapper and content refs, provides it globally via
  Vue's provide/inject system, and ensures cleanup on unmount.
-->

<template>
	<div ref="$wrapper" class="lenis">
		<div ref="$content">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
import Lenis, { type LenisOptions } from 'lenis'
import Tempus from 'tempus'

const props = defineProps<{
	root?: boolean
	options?: LenisOptions
}>()

const { root = true, options = {} } = props

const { hook } = useNuxtApp()
const $wrapper = ref<HTMLElement | null>(null)
const $content = ref<HTMLElement | null>(null)
const lenis = shallowRef<Lenis | null>(null)
const removeRaf = ref<(() => void) | undefined>(undefined)

provide('lenis-instance', lenis)
defineExpose({ lenis })

const initLenis = () => {
	lenis.value = new Lenis(
		root
			? options
			: {
					wrapper: $wrapper.value!,
					content: $content.value!,
					eventsTarget: $wrapper.value!,
					...options,
			  }
	)

	lenis.value.scrollTo(0, { immediate: true })

	removeRaf.value = Tempus.add((time: number) => {
		lenis.value?.raf(time)
	})
}

tryOnMounted(() => {
	if (!lenis.value) initLenis()

	hook('page:finish', async () => {
		await nextTick()
		lenis.value?.scrollTo(0, { immediate: true, force: true })
	})
})

tryOnBeforeUnmount(() => {
	removeRaf.value?.()
	lenis.value?.destroy()
})
</script>
