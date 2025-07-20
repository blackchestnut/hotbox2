<template>
  <TopBarComponent />
  <Menu />
  <div class="page-container">
    <h3 v-if="error.statusCode === 404">Упс, похоже страница испарилась</h3>
    <h3 v-else>Похоже, наш механизм дал сбой</h3>

    <div class="error-container">
      <div v-if="error.statusCode === 404" class="error_404"></div>
      <div v-else class="error_500"></div>
    </div>

    <p>
      <template v-if="error.statusCode === 404">Страница не найдена</template>
      <template v-else>
        Ошибка {{ error.statusCode }}: {{ error.message }}
      </template>
    </p>

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
.error_404 {
  background-image: url("/images/red_logos/ERROR_404.png");
  background-size: cover;
  width: 100%;
  max-width: 364px;
  height: 334px;
}
.error_500 {
  background-image: url("/images/red_logos/ERROR_500.svg");
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
h3 {
  text-align: center;
}
@media (max-width: 1024px) {
  .error_404 {
    width: 100%;
    max-width: 240px;
    height: 220px;
  }
  .error_500 {
    width: 100%;
    max-width: 240px;
    height: 220px;
  }
  h3 {
    font-size: 20px;
    margin-top: 30px;
  }
  .error-container {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .main-button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
