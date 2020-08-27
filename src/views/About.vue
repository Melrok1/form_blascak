<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Meno</p>
    <p>{{ name }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: 'Martin'
    }
  }
}
</script>
