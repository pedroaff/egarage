<template>
<div>
    <footer class="footer">
        <div class="container">
            <span class="text-muted">E-garage. 2019</span>
        </div>
    </footer>
</div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

</style>