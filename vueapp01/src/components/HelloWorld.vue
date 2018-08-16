<template>
    <div style="margin-left:5%;margin-right:5%;">
    <div>
    <h1 style="text-align:left;">{{ title }}</h1>
    <p style="text-align:left;">{{ message }}</p>
    </div>
    <div>
        <input type="text" v-model="selectValueBase" v-on:change="apiCall()">
           <select  v-model="selectKeyBase">
        <option v-for="(infot, key) in info" :key = "key" :value="key" v-bind:selected="key !== 0 ? 'selected' : false">
          {{ key.replace("USD","") }}
        </option>
        </select>
        <img style="margin-top:5%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rwR-obKQNj887avy_qc7bime95POpen6GB-889jVwUQE2wpR" alt="image d'une double fleche" v-on:click="switchSelect()"/>
        <input type="text"  v-model="selectValueComparate">
        <select v-model="selectKeyComparate">
        <option v-for="(infot, key) in info" :key = "key" :value="key">
          {{ key.replace("USD","") }}
        </option>
        </select>
    </div>
    <div>
        <p href="">CGU</p>
    </div>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae scelerisque ante, vel vestibulum elit. Sed eleifend nisi nec purus tempor, sed faucibus tellus tincidunt. Donec vestibulum auctor risus. Nam eget gravida dolor, a sodales justo. Sed feugiat lectus dui, et dapibus neque malesuada a. Nunc non libero fringilla, laoreet eros sit amet, tempor nisl. Nulla hendrerit lacus commodo sem viverra euismod. Aliquam id egestas ante. Nulla interdum porttitor magna, quis accumsan risus rutrum sit amet. Sed congue, urna a aliquet dignissim, nisi sapien consectetur nibh, ac luctus eros purus sed urna. Donec vulputate malesuada tempor. Phasellus scelerisque ante quis nunc tempor, in euismod erat iaculis. Sed sed lorem arcu. Nullam interdum ipsum sapien, ac convallis risus hendrerit sed. Nullam tempus nisi at nisl rhoncus, sed tempus elit luctus.',
      title: 'MyExchange.io',
      devises: null,
      selectKeyBase: "USDAED",
      selectValueBase: null,
      selectValueComparate: null,
      selectKeyComparate: "USDAFN",
      info: null
    }
  },
  created () {
    axios
      .get('http://www.apilayer.net/api/live?access_key=b7f93ed61b1b1ded3db75de606b6bc46')
      .then(response => (this.info = response.data.quotes))
        
  },
  methods: {
    switchSelect: function () {
      var baseKeyPivot = this.$data.selectKeyBase;
      var baseValuePivot = this.$data.selectValueBase;
      this.$data.selectValueBase = this.$data.selectValueComparate;
      this.$data.selectKeyBase = this.$data.selectKeyComparate;
      this.$data.selectValueComparate = baseValuePivot;
      this.$data.selectKeyComparate = baseKeyPivot;


      
    },
    apiCall: function() {
       var baseCurrency = this.$data.info[this.$data.selectKeyBase];
       var targetCurrency = this.$data.info[this.$data.selectKeyComparate];
       var currency = (this.$data.selectValueBase*targetCurrency);
       var result = (currency/baseCurrency);
       this.$data.selectValueComparate = result;
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
