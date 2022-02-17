<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">

        <v-card
          class="pa-16"
          min-width="344">
          <v-img :src="require(`@/assets/logo.png`)"/>

          <div class="pa-5"></div>

          <v-form>
            <v-text-field label="ID" required></v-text-field>

            <v-text-field label="Password" required></v-text-field>

            <v-checkbox label="자동 로그인"></v-checkbox>

            <v-btn dark color="#1a222d" large block to="/manager/dashboard">로그인</v-btn>
          </v-form>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  components: {
  }
}
</script>
