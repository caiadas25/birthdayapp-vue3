<template>
  <div>
    <div class="login-card-wrapper">
      <div class="login-card">
        <form class="login-card-form">
          <span class="login-card-title">Login</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" name="Login" />
        </form>
      </div>
      <div class="register-card">
        <span
          >Need an account? Click here to
          <router-link to="/register">register</router-link></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/colors.scss";
@import "@/styles/formulate.scss";

.login-card-wrapper {
  width: 50%;
  border: 1px solid black;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: 400px;
}
.login {
  width: 100%;
}
.login-card {
  flex: 2;
  align-self: center;
  border-right: 1px solid black;
  height: 100%;
  display: flex;
  background: #f5f5f5;
  &-title {
    margin-left: 20px;
    font-size: 3em;
    margin-bottom: 15px;
  }
  &-form {
    align-self: center;
    text-align: left;
    display: flex;
    flex-flow: column;
    width: 100%;
    input {
      width: 500px;
      padding: 15px;
      margin-bottom: 15px;
      margin-left: 20px;
      width: 80%;
      font-size: 25px;
    }
  }
}
.register-card {
  display: flex;
  flex: 1;
  background-color: #3369ff;
  span {
    align-self: center;
    font-size: 20px;
    color: #f5f5f5;
  }
}
.error {
  margin-left: 20px;
}
</style>