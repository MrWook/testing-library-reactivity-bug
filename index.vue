<template>
  <div>
    active: {{ active.length }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: [],
    }
  },

  mounted() {
    this.active.push('aasd')
  },
}
</script>
