import { defineStore } from 'pinia';

export default defineStore('app.store', {
	state: () => ({
		enabled: false,
		debug: {
			orchestra: false,
			buildPanel: false,
		},
	}),
	getters: {
		isEnabled: (state) => state.enabled,
		getDebug: (state): { orchestra: boolean; buildPanel: boolean } =>
			state.debug,
	},
	actions: {
		enable() {
			this.enabled = true;
		},
		disable() {
			this.enabled = false;
		},
		setDebug(key: keyof typeof this.debug, value: boolean) {
			this.debug[key] = value;
		},
	},
});