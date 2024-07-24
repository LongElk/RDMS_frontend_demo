<template>
  <li @click="navigateTo(url)" :style="{ backgroundImage: `url(${image})` }" class="menu-item">
    <span>{{ text }}</span>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    url: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateTo (url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  width: 324px;
  height: 384px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 11px;
}

.menu-item:hover {
  background-color: rgb(0, 110, 171);
}

.menu-item span {
  line-height: 28px;
  margin-top: 130px;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
