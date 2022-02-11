<template>
  <div>{{ email }}</div>
  <div v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>

  <form>
    <h1>Register</h1>
    <div>
      <label for="email">Email</label>
      <input type="text" required id="email" v-model="email" />
    </div>
    <div>
      <label for="email">Password</label>
      <input type="password" required id="password" v-model="password" />
    </div>
    <div>
      <label for="email">Confirm Password</label>
      <input
        type="password"
        required
        id="confirmPassword"
        v-model="confirmPassword"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { supabase } from "@/supabase/init";
import { ref } from "vue";
@Options({
  components: {},
})
export default class Register extends Vue {
  email: HTMLInputElement | null = null;
  password: HTMLInputElement | null = null;
  confirmPassword: HTMLInputElement | null = null;
  errorMessage: HTMLInputElement | null = null;

  async register() {
    if (this.password?.value === this.confirmPassword?.value) {
      try {
        const { error } = await supabase.auth.signUp({
          email: this.email!.value,
          password: this.password!.value,
        });
        if (error) throw error;
        this.$router.push("/login");
      } catch (error: any) {
        this.errorMessage!.value = error.message;
      }
    }
    this.errorMessage!.value = "Error: Passwords do not match.";
    setTimeout(() => {
      this.errorMessage!.value = "";
    }, 5000);
  }
}
</script>
