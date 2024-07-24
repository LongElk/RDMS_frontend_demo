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
          title: 'Medical ID',
          dataIndex: 'medicalId'
        },
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age'
        },
        {
          title: 'Gender',
          dataIndex: 'gender'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        },
        {
          title: 'Phone',
          dataIndex: 'phone'
        },
        {
          title: 'Email',
          dataIndex: 'email'
        },
        {
          title: 'Diagnosis',
          dataIndex: 'diagnosis'
        },
        {
          title: 'Actions',
          dataIndex: 'actions'
        }
      ],
      data: [
        // Example data
        {
          index: 1,
          medicalId: '123456',
          name: 'John Doe',
          age: 30,
          gender: 'Male',
          address: '123 Main St',
          phone: '123-456-7890',
          email: 'john.doe@example.com',
          diagnosis: 'Flu',
          actions: 'View Details'
        }
      ]
    };
  },
};
</script>
