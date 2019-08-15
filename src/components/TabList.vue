<script>
import Tab from './Tab.vue'

export default {
  name: 'TabList',
  components: {
    Tab,
  },
  inject: ['state', 'onChange'],
  render(createElement) {
    return createElement(
      'div',
      {},
      (this.$slots.default || [])
        .filter(e => e.componentOptions)
        .map((e, i) => {
          return createElement(
            e.componentOptions.tag,
            {
              class: e.data.class,
              staticClass: e.data.staticClass,
              staticStyle: e.data.staticStyle,
              style: e.data.style,

              props: {
                ...e.componentOptions.propsData,
                isActive: this.state.tabIndex == i,
                activeClass: this.state.activeClass,
                onChange: () => this.onChange(i),
              },
            },
            e.componentOptions.children
          )
        })
    )
  },
}
</script>

<style></style>
