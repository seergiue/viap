<template>
  <Page actionBarHidden="true" androidStatusBarBackground="#45B1E1">
    <GridLayout columns="*" rows="*">
      <FlexboxLayout col="0" row="0" backgroundImage="~/assets/images/background.jpg" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover" v-if="isIOS" />
      <Image src="~/assets/images/background.jpg" stretch="aspectFill" v-else />
      <FlexboxLayout col="0" row="0" backgroundColor="black" opacity="0.7"></FlexboxLayout>
      <GridLayout columns="*" rows="*, auto" col="0" row="0">
        <StackLayout col="0" row="0" padding="30">
          <StackLayout>
            <Label :text="'Welcome to' | L" color="white" fontSize="35" fontWeight="600" />
            <Label :text="'VIAP travel' | L" color="white" fontSize="35" fontWeight="600" />
          </StackLayout>
          <FlexboxLayout backgroundColor="#45B1E1" padding="15 30" borderRadius="10" @tap="openUrl('https://pursuit.travelloop.com')" marginTop="30" class="between">
            <Label text="PURSUIT" color="white" fontSize="18" fontWeight="600"></Label>
            <Image src="~/assets/images/arrow.png" width="30"></Image>
          </FlexboxLayout>
          <FlexboxLayout backgroundColor="#45B1E1" padding="15 30" borderRadius="10" @tap="openUrl('https://back-travel.com/login/')" marginTop="30" class="between">
            <Label :text="'TRIP REQUEST' | L" color="white" fontSize="18" fontWeight="600"></Label>
            <Image src="~/assets/images/arrow.png" width="30"></Image>
          </FlexboxLayout>
          <FlexboxLayout backgroundColor="#45B1E1" padding="15 30" borderRadius="10" @tap="onTapFlightSearch" marginTop="30" class="between">
            <Label :text="'FLIGHT SEARCH' | L" color="white" fontSize="18" fontWeight="600"></Label>
            <Image src="~/assets/images/arrow.png" width="30"></Image>
          </FlexboxLayout>
          <FlexboxLayout backgroundColor="#45B1E1" padding="15 30" borderRadius="10" @tap="openUrl('https://back-travel.com/login/')" marginTop="30" class="between">
            <Label :text="'HOTEL SEARCH' | L" color="white" fontSize="18" fontWeight="600"></Label>
            <Image src="~/assets/images/arrow.png" width="30"></Image>
          </FlexboxLayout>
        </StackLayout>
        <StackLayout col="0" row="1" class="center" marginBottom="40" @tap="openUrl('https://viap.es')">
          <Image src="~/assets/images/logo.png" width="50" height="50" />
          <Label text="VIAP travel" color="white" fontSize="18" fontWeight="600" marginTop="20" />
        </StackLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { openUrl } from '@nativescript/core/utils/utils'
import { InAppBrowser } from 'nativescript-inappbrowser';
import { isIOS } from '@nativescript/core';
import FlightSearch from "~/components/FlightSearch.vue";

const { localize } = require('@nativescript/localize')

export default Vue.extend({
    methods: {
      async openUrl(url: string) {
        if (await InAppBrowser.isAvailable()) {
          await InAppBrowser.open(url, {
            modalPresentationStyle: 'fullScreen'
          })

          return
        }

        openUrl(url)
      },
      onTapFlightSearch() {
        this.$navigateTo(FlightSearch)
      }
    },
    async mounted() {
      if (!isIOS) {
        InAppBrowser.warmup()
      }
    },
    computed: {
      isIOS() {
        return isIOS;
      }
    },
  });
</script>

<style scoped lang="scss">
  .center {
    text-align: center;
  }

  .between {
    justify-content: space-between;
  }
</style>
