<script setup>
import { ref, computed } from "vue";
import Menu from "@/components/menu.vue";
import { SUPPORT_EMAIL_MAILTO, sendLeadMessage } from "@/utils/constants";

const isOrderModalVisible = ref(false);
const selectedOrder = ref(null);

// Счетчик
const count = ref(1);
const clientName = ref("");
const clientEmail = ref("");
const clientPhone = ref("");

const isSubmitDisabled = computed(() => {
  return !clientName.value || !clientEmail.value || !clientPhone.value;
});
// Функции для управления счетчиком
const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 1) {
    count.value--;
  }
};

const showOrderModal = (order) => {
  selectedOrder.value = order;
  isOrderModalVisible.value = true;
};

const closeOrderModal = () => {
  isOrderModalVisible.value = false;
  clientName.value = "";
  clientEmail.value = "";
  clientPhone.value = "";
  count.value = 1;
};

const sendMessage = async () => {
  if (isSubmitDisabled.value) return;

  const message =
    `**Заявка на заказ**\n` +
    `Имя: ${clientName.value}\n` +
    `Email: ${clientEmail.value}\n` +
    `Телефон: ${clientPhone.value}\n` +
    `Что заказано: ${selectedOrder.value}\n` +
    `Количество: ${count.value}`;

  const result = await sendLeadMessage(message);
  if (result) {
    alert(
      "Отправлено. Мы уже получили заявку и свяжемся с вами в ближайшее время"
    );
    closeOrderModal();
  } else {
    alert("Ошибка. Не удалось отправить");
  }
};
</script>

<template>
  <Menu />
  <RouterLink to="/">
    <div class="back">
      <div class="back-logo"></div>
    </div>
  </RouterLink>
  <div class="page-container">
    <div class="service">
      <div class="full-complex">
        Полный комплекс услуг по работе с котельными системами
      </div>
      <div class="shipment">
        Проектирование, изготовление поставка, подключение, запуск, поставка
        дизельного топлива, мониторинг и сервисное обслуживание.
      </div>
      <div class="rent">Аренда</div>
      <div class="rent-description">
        Аренда автоматизированных блочно-модульных котельных установок (БМАК)
        для обогрева жилых и промышленных помещений, складов, ангаров и т. п. на
        дизельном топливе.
      </div>
      <div class="rent-ford">
        Также возможна аренда мобильной котельной установки мощностью 500 кВт на
        базе автомобиля Ford Transit
      </div>
    </div>
  </div>
  <div class="prices-wrapper">
    <div class="prices">
      <div
        class="transparent-button"
        @click="showOrderModal('Аренда БМАК 0,5 мВт 1К')"
      >
        <div class="name">БМАК 0,5 мВт 1К</div>
        <div class="characteristic">
          Наружное размещение Теплоснабжение и ГВС Дизельное топливо Мощность
          500 кВт Доставка, демонтаж и вывоз котельной рассчитывается
          индивидуально
        </div>
        <div class="order-block">
          от 150 000 руб. / месяц
          <div class="order-arrow"></div>
        </div>
      </div>
      <div
        class="transparent-button"
        @click="showOrderModal('Аренда БМАК 1,04 мВт 1К без ГВС')"
      >
        <div class="name">БМАК 1,04 мВт 1К без ГВС</div>
        <div class="characteristic">
          Есть бензогенератор Теплоснабжение Дизельное топливо Мощность 1040 кВт
          Доставка, демонтаж и вывоз котельной рассчитывается индивидуально
        </div>
        <div class="order-block">
          от 250 000 руб. / месяц
          <div class="order-arrow"></div>
        </div>
      </div>
      <div
        class="transparent-button"
        @click="showOrderModal('Аренда БМАК 1,0 мВт 2К без ГВС')"
      >
        <div class="name">БМАК 1,0 мВт 2К без ГВС</div>
        <div class="characteristic">
          Есть бензогенератор Теплоснабжение Дизельное топливо Мощность 1000 кВт
          Доставка, демонтаж и вывоз котельной рассчитывается индивидуально
        </div>
        <div class="order-block">
          от 260 000 руб. / месяц
          <div class="order-arrow"></div>
        </div>
      </div>
      <div
        class="transparent-button"
        @click="showOrderModal('Аренда БМАК 3,0 мВт 1К без ГВС')"
      >
        <div class="name">БМАК 3,0 мВт 1К без ГВС</div>
        <div class="characteristic">
          Есть бензогенератор Теплоснабжение Дизельное топливо Мощность 3000 кВт
          Доставка, демонтаж и вывоз котельной рассчитывается индивидуально
        </div>
        <div class="order-block">
          от 350 000 руб. / месяц
          <div class="order-arrow"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-container">
    <div class="production">
      <div class="fabrication">Проиводство</div>
      <div class="manufacturing-and-delivery">
        Изготовление и поставка блочно-модульных автоматизированных котельных
        установок (БМАК) в соответствии с техническими требованиями заказчика
        необходимой мощности.
      </div>
      <div class="manufacturing-boilers">
        Изготовление котлов наружного размещений БМАК 0,5 МВт с возможностью
        каскадного подключения.
      </div>
      <div class="manufacturing-mobile-boilers">
        Изготовления мобильных котельных установок мощностью до 500 кВт на базе
        автомобилей.
      </div>
    </div>
    <div class="plan"></div>
    <div class="button-order">
      <button
        class="btn order"
        @click="showOrderModal('Производство котельной на заказ')"
      >
        ЗАКАЗАТЬ
      </button>
    </div>
  </div>
  <div class="repair-container">
    <div class="repair-inner">
      <div class="repair-and-maintenance">Ремонт и обслуживание</div>
      <div class="state">
        В штате компании постоянно работает 5 сервисных бригад, готовых на
        высоком уровне оказать работы по обслуживанию, пуско-наладке и запуску
        котельного оборудования.
      </div>
      <div class="brigade">
        Бригада будет у Вас на объекте в течении 24 часов.
      </div>
    </div>
    <div class="button-order">
      <button
        class="btn order"
        @click="showOrderModal('Ремонт и обслуживание')"
      >
        ЗАКАЗАТЬ
      </button>
    </div>
  </div>

  <!-- Модальное окно -->
  <div
    v-if="isOrderModalVisible"
    class="modal-overlay"
    @click="closeOrderModal"
  >
    <div class="modal-content" @click.stop>
      <a class="close" @click="closeOrderModal"></a>

      <h3>Заявка на заказ</h3>
      <div class="subheader">Наш менеджер свяжется с вами в течение дня</div>
      <div class="line"></div>

      <div class="information-container">
        <div class="modal-boiler-info">
          <h4>{{ selectedOrder }}</h4>
        </div>
        <!-- Счетчик -->
        <div class="counter">
          <button class="circle" @click="decrement">&#8722;</button>
          <div class="count">{{ count }}</div>
          <button class="circle" @click="increment">&#43;</button>
        </div>
      </div>

      <div class="form-container">
        <input v-model="clientName" placeholder="Ваше имя" type="text" />
        <input v-model="clientEmail" placeholder="E-mail" type="email" />
        <input v-model="clientPhone" placeholder="Телефон" type="tel" />
        <div class="submit-container">
          <a
            class="submit-button"
            type="submit"
            :class="{ disabled: isSubmitDisabled }"
            @click="sendMessage()"
          >
            Отправить
          </a>
        </div>
        <div class="politics">
          Нажимая на кнопку вы соглашаетесь с условиями
          <NuxtLink to="/privacy">политики конфиденциальности</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "service",
};
</script>

<style scoped>
.service {
  font-size: 30px;
  padding-bottom: 60px;
}

.full-complex {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}
.shipment {
  font-size: 30px;
  margin-bottom: 60px;
}
.rent {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}
.rent-description {
  font-size: 30px;
  margin-bottom: 30px;
}
.rent-ford {
  font-size: 30px;
  margin-bottom: 60px;
}

.prices-wrapper {
  background-color: black;
  padding: 36px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.prices {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
}

.name {
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
}

.transparent-button {
  display: grid;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.144);
  border: none;
  color: white;
  padding: 30px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
  text-align: left;
  line-height: 36px;
  font-size: 20px;
}

.transparent-button:hover {
  background-color: rgba(255, 255, 255, 0.199);
}

.production {
  font-size: 30px;
}
.fabrication {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}
.manufacturing-and-delivery {
  font-size: 30px;
  margin-bottom: 30px;
}
.manufacturing-boilers {
  font-size: 30px;
  margin-bottom: 30px;
}
.manufacturing-mobile-boilers {
  font-size: 30px;
  margin-bottom: 60px;
}
.plan {
  background-image: url("/images/big_images_of_boilers/plan.png");
  height: 785px;
  width: 1136px;
  margin: 0 auto;
}

.repair-container {
  background-image: url("/images/big_images_of_boilers/repair-background.png");
  background-size: cover;
  padding: 126px 40px 40px;
  color: #fff;
}

.repair-inner {
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.199);
  border-radius: 8px;
  margin: 0 auto;
  max-width: 1200px;
}
.repair-and-maintenance {
  font-size: 40px;
  margin-bottom: 30px;
}
.state {
  font-size: 30px;
  margin-bottom: 30px;
}
.brigade {
  font-size: 30px;
  margin-bottom: 30px;
}

/* Стили для модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal-content {
  max-width: 800px;
  max-height: 90vh;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
}

@media only screen and (max-width: 600px) {
  .modal-content {
    padding: 30px;
  }
}

.close {
  width: 32px;
  height: 32px;
  cursor: pointer;
  float: right;
  background-image: url("/images/black_logos/close.svg");
  background-size: contain;
}

.subheader {
  font-size: 16px;
}

.line {
  border-top: 1px solid #b0b0b0;
  width: 100%;
  margin: 30px 0;
}

.information-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 30px;
}

.modal-boiler-info {
  flex: 1;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 38px;
  border-radius: 50px;
  min-width: 116px;
  max-width: 116px;
}

.circle {
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.count {
  color: white;
  font-size: 20px;
  width: 40px;
  text-align: center;
  padding: 0 4px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media only screen and (max-width: 600px) {
  .form-container {
    align-items: center;
    text-align: center;
  }
}

input {
  background-color: #eaeaea;
  border: none;
  padding: 18px 22px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 8px;
  line-height: 20px;
  width: 100%;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #8d8d8d;
}

.politics {
  font-size: 14px;
}

.politics a {
  color: #000;
}
.order-arrow {
  background-image: url("/images/white_logos/order-arrow.svg");
  width: 34px;
  height: 34px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 10px;
}
.order-block {
  display: flex;
}

@media (max-width: 1024px) {
  .service-wrapper {
    max-width: 100%;
    padding: 0px 16px;
  }

  .topbar {
    display: none;
  }
  .back {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #696770;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 16px;
  }
  .back-logo {
    background-image: url("/images/back_arrow/back2.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  .back:hover {
    border: 2px solid #555555;
  }

  .service {
    max-width: 100%;
    padding: 0px;
  }
  .full-complex {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .shipment {
    font-size: 16px;
    margin-bottom: 40px;
  }
  .rent {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .rent-description {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .rent-ford {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .prices-wrapper {
    padding: 24px 16px;
  }
  .prices {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .transparent-button {
    /*gap: 1px;*/
    margin: 0px;
    padding: 20px;
  }
  .name {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .characteristic {
    font-size: 16px;
  }
  .order-block {
    font-size: 16px;
  }
  .production {
    max-width: 100%;
    max-height: 320px;
  }
  .fabrication {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .manufacturing-and-delivery {
    font-size: 16px;
    margin-bottom: 20px;
    max-width: 360px;
  }
  .manufacturing-boilers {
    font-size: 16px;
    margin-bottom: 20px;
    max-width: 360px;
  }
  .manufacturing-mobile-boilers {
    font-size: 16px;
    margin-bottom: 30px;
    max-width: 360px;
  }
  .plan {
    max-width: 296px;
    height: 203px;
    margin-bottom: 0px;
    background-size: cover;
  }

  .repair-container {
    padding-top: 36px;
    padding-bottom: 36px;
    padding-left: 0px;
    padding-right: 0px;
    height: auto;
    background-image: url("/images/big_images_of_boilers/repair-background-mobile.png");
  }
  .repair-inner {
    padding: 20px;
    margin-bottom: 20px;
    max-width: 300px;
    margin-left: 45px;
    margin-right: 45px;
  }
  .repair-and-maintenance {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .state {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .brigade {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .button-order {
    padding: 0px;
    margin-top: 0px;
  }
}
</style>
