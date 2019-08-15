<script>
import TabPanel from './TabPanel.vue'

export default {
  name: 'TabPanels',
  components: {
    TabPanel,
  },
  inject: ['state', 'onChange'],
  render() {
    return (this.$slots.default || [])
      .filter(e => e.componentOptions)
      .find((x, i) => i == this.state.tabIndex)
  },
}
</script>
