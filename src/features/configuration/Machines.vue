<template>
  <div class="main">
    <a-page-header title="Patients" />
    <a-input-search placeholder="Medical ID / Patient Name" type="text" />
    <a-table :columns="columns" :dataSource="data"></a-table>
  </div>
</template>

<style scoped>
.main {
  padding: 24px;
}

.ant-page-header {
  border: 1px solid rgb(235, 237, 240);
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'Index',
          dataIndex: 'index'
        },
        {
          title: 'Machine UID',
          dataIndex: 'UID'
        },
        {
          title: 'Machine Name',
          dataIndex: 'name'
        },
        {
          title: 'Machine Version',
          dataIndex: 'version'
        }
      ],
      data: [
        // Example data
        {
          index: 1,
          UID: '123456',
          name: 'John Doe',
          version: 30
        }
      ]
    };
  },
};
</script>
