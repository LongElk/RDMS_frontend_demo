<template>
  <div class="main">
    <h1>Rayer Data Management System</h1>
    <ul>
      <MenuItem url="/patients-and-plans/patients" image="@/assets/images/patients_plans.png" text="Patients & Plans" />
      <MenuItem url="/configuration/machines" image="@/assets/images/configuration.png" text="Configuration" />
      <MenuItem url="/system/systemoverview" image="@/assets/images/system.png" text="System" />
      <MenuItem url="/user/users" image="@/assets/images/user.png" text="User" />
    </ul>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue';

export default {
  components: {
    MenuItem
  }
}
</script>

<style scoped>
.main {
  margin: 60px 0;
}

h1 {
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: 700;
  color: rgb(177, 195, 205);
  line-height: 36px;
  margin-bottom: 68px;
}

.main ul {
  list-style: none;
  margin: 0 11px;
  display: flex;
  flex-direction: row;
}
</style>