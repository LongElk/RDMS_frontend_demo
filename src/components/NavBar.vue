<template>
  <a-layout-header class="header">
    <router-link to="/">
      <img src="@/assets/images/rayer_logo.png" alt="Rayer" />
    </router-link>
    <div class="top-menu">
      <router-link :to="link.path" v-for="link in currentLinks" :key="link.path" tag="a">
        {{ link.label.split('-')[1] }}
      </router-link>
    </div>
    <div>
      <a-icon type="setting" />
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data () {
    return {
      links: []
    };
  },
  computed: {
    currentLinks () {
      const currentPath = this.$route.path;
      if (currentPath.startsWith('/system')) {
        return this.getLinksByPrefix('/system');
      } else if (currentPath.startsWith('/user')) {
        return this.getLinksByPrefix('/user');
      } else if (currentPath.startsWith('/patients-and-plans')) {
        return this.getLinksByPrefix('/patients-and-plans')
      } else if (currentPath.startsWith('/configuration')) {
        return this.getLinksByPrefix('/configuration')
      }
      return [];
    },
    selectedKey () {
      return this.$route.path;
    }
  },
  methods: {
    getLinksByPrefix (prefix) {
      return this.$router.options.routes
        .filter(route => route.path.startsWith(prefix) && route.path !== prefix)
        .map(route => ({
          path: route.path,
          label: route.meta && route.meta.label ? route.meta.label : route.name
        }));
    }
  }
};
</script>

<style scoped>
.header {
  height: 72px;
  background: rgb(35, 102, 139);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header img {
  height: 40px;
}

.top-menu {
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-grow: 1;
}

.top-menu a {
  width: 180px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: rgb(255, 255, 255);
  text-align: center;
}

.top-menu a:hover {
  background-color: white;
}

.top-menu a.router-link-active {
  background: rgba(28, 28, 33, 0.24);
}

.ant-dropdown-link {
  color: white;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
