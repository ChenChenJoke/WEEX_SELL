<template>
  <div class="wrapper">
    <nav-bar @tabTo="onTabTo"></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from '@/components/nav.vue';
export default {
  
  name: 'App',
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  components: {
    'nav-bar': tabBar
  },
  methods: {
      onTabTo(_result){
          /*
          let _key = _result.data.key || '';
          this.$router && this.$router.push('/'+_key)
          */
      }
  }
}
</script>

<style scoped>

</style>
