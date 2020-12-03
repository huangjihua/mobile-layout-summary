<template>
  <div>
    <LayoutDemo />  
  </div>
</template>

<script>
import LayoutDemo from '@comps/layout-demo.vue';
import './rem'

export default {
  components:{
    LayoutDemo,
  }
}
</script>
<style lang="scss">
@import 'style';
</style>