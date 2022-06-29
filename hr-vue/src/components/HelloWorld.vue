<template>
  <div>
    <h1>Hello World Vue Component</h1>
    <img :src="naruto" alt="">

    <div class="com-box"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      naruto: require("../img/naruto.jpeg")
    };
  },
};
</script>

<style scoped>
.com-box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(../img/naruto.jpeg) no-repeat;
}
</style>