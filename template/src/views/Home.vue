<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="https://github.com/joneqian/vue2-express-family" target="_blank">打个广告，看不看，你随意！！！</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: '少年，把你的代码撸起来，不要停！！！'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    };
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
