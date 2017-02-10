<template>
  <div>
    <h1>Admin View</h1>
    <p>Hi {{user.first_name}}, welcome back</p>

    <h3>Users list</h3>
    <table>
      <thead>
        <th>
          <td></td>
        </th>
      </thead>
    </table>
  </div>
</template>

<script>
  import state from '../../state/app_state'

export default {
  name: 'admin-user',
  data(){ return state;}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
