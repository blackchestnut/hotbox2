<template>
  <TopBarComponent />
  <Menu />
  <div class="page-container">
    <h3 v-if="error.statusCode === 404">Упс, похоже страница испарилась</h3>
    <h3 v-else>Похоже, наш механизм дал сбой</h3>

    <div v-if="error.statusCode === 404" class="error_404"></div>
    <div v-else class="error_500"></div>

    <p>
      <template v-if="error.statusCode === 404">Страница не найдена</template>
      <template v-else>
        Ошибка {{ error.statusCode }}: {{ error.message }}
      </template>
    </p>

    <NuxtLink to="/" class="btn button-main">Главная</NuxtLink>
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
.page-container {
  text-align: center;
}

.error_404 {
  background-image: url("/images/red_logos/ERROR_404.png");
  background-size: cover;
  width: 364px;
  height: 334px;
  margin: 60px auto;
}

.error_500 {
  background-image: url("/images/red_logos/ERROR_500.svg");
  background-size: cover;
  width: 364px;
  height: 334px;
  margin: 60px auto;
}

.button-main {
  margin-top: 30px;
  margin-bottom: 60px;
}

@media (max-width: 1024px) {
  .error_404 {
    width: 240px;
    height: 220px;
    margin: 30px auto;
  }
  .error_500 {
    width: 240px;
    height: 220px;
    margin: 30px auto;
  }
  h3 {
    font-size: 20px;
    margin-top: 30px;
  }
  .button-main {
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
