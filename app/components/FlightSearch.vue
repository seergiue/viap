<template>
  <Page androidStatusBarBackground="#45B1E1">
    <StackLayout padding="30">
      <Label text="Hello :)" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
const { localize } = require('@nativescript/localize')

export default Vue.extend({
    methods: {
    },
  });
</script>

<style scoped lang="scss">
</style>
