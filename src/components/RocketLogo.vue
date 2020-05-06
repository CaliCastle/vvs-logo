<template>
  <svg
    class="fill-current"
    viewBox="0 0 206 204"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Trail"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M146 144H166V164H146V144ZM186 184V164H166V184H186ZM186 184V204H206V184H186Z"
    />
    <path
      id="Body"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 0H86V20H106V40H126V67H146V20H166V106H146V125H126V126H125.948V145.767H106.5L105.995 146L106 164H20V146H67V126H40V106H20V86H0V0ZM87 67H67V87H87V67Z"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RocketLogo extends Vue {}
</script>
