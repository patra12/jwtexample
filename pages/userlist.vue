<template>
   <div id="app">
  
  <table>
    <thead>
      <tr>
        <th>Sr.</th>
        <th>Email</th>
        <th>Created Date</th>
        <th>Updated Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td>Birja@kusmail.com</td>
        <td>18-10-2019</td>
        <td>18-10-2019</td>
      </tr>
    </tbody>
  </table>
  
</div>
</template>

<script>
     const app = new Vue({
  el:'#app',
  data:{
    cats:[]
  },
  created:function() {
    fetch('https://api.myjson.com/bins/s9lux')
    .then(res => res.json())
    .then(res => {
      this.cats = res;
    })
  }
})

</script>