<template>
  <div id="app" @click="updateActionTime" @mousemove="updateActionTime">
    <NavBar />
    <a-layout>
      <BreadCrumb />
      <router-view />
    </a-layout>
    <PageFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';
import BreadCrumb from './components/BreadCrumb.vue';

export default {
  components: {
    NavBar,
    PageFooter,
    BreadCrumb
  },
  created () {
    this.$store.dispatch('autoLogin')
  },
  methods: {
    updateActionTime () {
      this.$store.dispatch('updateActionTime');
    },
  }
}
</script>

<style scoped>
.ant-layout {
  padding: 0 30px;
}
</style>