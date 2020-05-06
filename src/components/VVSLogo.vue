<template>
  <div class="fill-current">
    <component :is="componentName" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FullLogo from './FullLogo.vue'
import RocketLogo from './RocketLogo.vue'

@Component({
  components: { FullLogo, RocketLogo }
})
export default class VVSLogo extends Vue {
  @Prop({ type: String, default: 'full' })
  private type!: 'full' | 'rocket'

  get componentName() {
    switch (this.type) {
      case 'full':
        return 'FullLogo'
      case 'rocket':
        return 'RocketLogo'
      default:
        console.warn(`Can't find ${this.type} type vvs logo.`)
        return 'svg'
    }
  }
}
</script>
