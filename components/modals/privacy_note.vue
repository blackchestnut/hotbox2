<template>
  <div class='privacy'>
    Нажимая «Отправить», вы подтверждаете согласие на обработку
    и хранение ваших персональных данных в соответствии с 
    <NuxtLink to='/privacy' class='link' target='_blank'>
      политикой обработки персональных данных
    </NuxtLink>
  </div>
</template>

<style scoped>
.privacy {
  font-size: 14px;
  text-align: center;
}

.link {
  color: #000;
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .privacy {
    font-size: 10px;
  }
}
</style>
