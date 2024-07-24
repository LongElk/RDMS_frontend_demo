<template>
  <a-breadcrumb v-if="breadcrumbItems.length > 0">
    <a-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    breadcrumbItems () {
      const pathArray = this.$route.path.split('/').filter(i => i);
      const breadcrumbArray = pathArray.map((item, index) => {
        return {
          name: item.charAt(0).toUpperCase() + item.slice(1),
          path: '/' + pathArray.slice(0, index + 1).join('/')
        };
      });
      return breadcrumbArray;
    }
  }
};
</script>