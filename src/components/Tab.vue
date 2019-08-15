<template>
  <div
    tabindex="1"
    :class="[{ [activeClass]: isActive }, 'cursor-pointer']"
    @click="onTabChange"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    activeClass: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
  mounted() {},
  methods: {
    onTabChange() {
      this.onChange()
    },
  },
}
</script>
