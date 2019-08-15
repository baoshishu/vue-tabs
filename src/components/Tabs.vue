<template>
  <div><slot /></div>
</template>
<script>
export default {
  name: 'Tabs',
  props: {
    defaultIndex: {
      required: false,
      type: [Number, String],
      default: 0,
    },
    activeIndex: {
      required: false,
      type: [Number, String],
      default: undefined,
    },
    activeClass: {
      required: false,
      type: String,
      default: '',
    },
  },
  data() {
    return {
      index: this.defaultIndex,
    }
  },
  computed: {
    controlled() {
      return this.activeIndex !== undefined
    },
    tabIndex() {
      return this.controlled ? this.activeIndex : this.index
    },
  },
  methods: {
    onChange(i) {
      if (this.controlled) {
        this.$emit('update:activeIndex', i)
      } else {
        this.index = i
      }
      this.$emit('tab-change', i)
    },
  },

  provide() {
    return {
      state: this,
      onChange: this.onChange,
      activeClass: this.activeClass,
    }
  },
}
</script>
