<template>
  <div class="main">
    <div class="title">
      <p>Data Management System</p>
    </div>
    <a-form layout="vertical">
      <a-form-item>
        <span>Login Name</span>
        <a-input v-model="username" />
      </a-form-item>
      <a-form-item>
        <span>Password</span>
        <a-input-password v-model="password" />
      </a-form-item>
      <a-form-item>
        <a-button @click="login">Login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { login } from '../api';

export default {
  data () {
    return {
      username: '',
      password: '',
      status: null,
    };
  },
  methods: {
    async login () {
      try {
        const response = await login(this.username, this.password);
        if (response.status === 200) {
          window.location.href = '/'; // 跳转到主页
        } else if (response.status === 401) {
          window.alert('Unauthorized. Please try again.');
        } else {
          window.alert(`Unexpected status code: ${response.status}`);
        }
      } catch (error) {
        console.error('Error during login:', error);
        window.alert('An error occurred. Please try again.');
      }
    }
  },
}
</script>

<style scoped>
.class {
  margin-top: 140px
}

.title {
  margin-bottom: 36px;
}

.ant-form {
  margin: 0 auto;
}
</style>
