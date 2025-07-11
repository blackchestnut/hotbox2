<template>
  <TopBarComponent />
  <div class="page-container">
    <div class="error-container">
      <div class="error"></div>
    </div>
    <p>Упс, похоже страница испарилась</p>
    <div class="main-button">
      <NuxtLink to="/" class="btn main">Главная</NuxtLink>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import TopBarComponent from "@/components/top_bar.vue";
import FooterComponent from "@/components/footer.vue";
const { error } = defineProps({
  error: Object,
});
</script>
<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
}
.error {
  background-image: url("/images/red_logos/ERROR_404.png");
  background-size: cover;
  width: 100%;
  max-width: 364px;
  height: 334px;
}
.main-button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 60px;
}
p {
  text-align: center;
}
</style>
