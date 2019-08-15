<template>
  <div id="app">
    <Tabs :default-index="0" @tab-change="changeTab" active-class="bg-blue-500">
      <TabList style="display:flex;" class="flex justify-between w-64">
        <Tab class="text-red-500">tab1</Tab>
        <Tab>tab2</Tab>
        <Tab>tab3</Tab>
        <Tab style="color:cyan">tab4</Tab>
      </TabList>
      <TabPanels :class="'bg-blue-500'">
        <TabPanel :class="'text-red-500'">panel1 </TabPanel>
        <TabPanel>panel2 </TabPanel>
        <TabPanel>panel3 </TabPanel>
        <TabPanel>panel4 </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, TabList, TabPanel, Tab, TabPanels } from '@/index.js'
// import { Tabs, TabList, TabPanel, Tab, TabPanels } from '../dist/vue-tabs.umd'

export default {
  name: 'app',
  data() {
    return {
      activeIndex: 0,
      bgRed: 'background:red;',
    }
  },
  methods: {
    changeTab(i) {
      this.activeIndex = i
    },
  },
  components: {
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Tab,
  },
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
