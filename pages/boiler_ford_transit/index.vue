<script setup>
import { SUPPORT_EMAIL_MAILTO, sendLeadMessage } from "@/utils/constants";
import { ref, computed } from "vue";
import Menu from "@/components/menu.vue";
import PrivacyNote from "@/components/modals/privacy_note.vue";
import { car } from "@/utils/data";
import OrderBoilerFordTransit from "@/components/order_boiler_ford_transit.vue";

const currentImageIndex = ref(0);
const selectedCar = ref("");
const selectedImage = ref("");
const isOrderModalVisible = ref(false);
const images = car[0].images;

const showOrderModal = () => {
  // console.log("Opening modal..."); // Отладка
  selectedCar.value = car[0].name;
  selectedImage.value = images[currentImageIndex.value];
  isOrderModalVisible.value = true;
  // console.log("isOrderModalVisible:", isOrderModalVisible.value); // Отладка
};
const closeOrderModal = () => {
  isOrderModalVisible.value = false;
  clientName.value = "";
  clientEmail.value = "";
  clientPhone.value = "";
  itemCount.value = 1;
};

const itemCount = ref(1);
const clientName = ref("");
const clientEmail = ref("");
const clientPhone = ref("");

const isSubmitDisabled = computed(() => {
  return !clientName.value || !clientEmail.value || !clientPhone.value;
});

const countChange = (value) => {
  itemCount.value = value;
};

const sendMessage = async () => {
  if (isSubmitDisabled.value) return;

  const message =
    `*Заявка на заказ*\n` +
    `\`${selectedCar.value}\`\n` +
    `Имя: \`${clientName.value}\`\n` +
    `Email: \`${clientEmail.value}\`\n` +
    `Телефон: \`${clientPhone.value}\`\n` +
    `Количество: \`${itemCount.value} шт.\``;

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
  <div class="page-container">
    <RouterLink to="/">
      <div class="back">
        <div class="back-logo"></div>
      </div>
    </RouterLink>
    <div class="title">
      <div class="boiler-ford">
        Мобильная котельная установка на базе фургона Ford Transit
      </div>
      <div class="boiler-ford-description-1">
        Мобильность автомобиля позволяет оперативно приехать и подать тепло на
        объекты с высоким уровнем стесненности.
      </div>
      <div class="boiler-ford-description-2">
        В производстве применяются только проверенные и надежные комплектующие
        для безотказной работы при аварийных ситуациях на объектах, требующих
        срочной подачи тепла.
      </div>
    </div>

    <!-- Сетка для трех блоков -->
    <div class="row">
      <div class="block">
        <div class="car1"></div>
        <div class="Nameline">
          <div class="subtitle">
            <img
              src="/images/white_logos/power-logo.svg"
              alt="Power Logo"
              class="power-logo"
            />Мощность
          </div>
          <div class="description">
            Мощность котельной установки может варьироваться от 50 до 500
            кВт,<br />
            в зависимости от нужд заказчика.
          </div>
        </div>
      </div>
      <div class="block">
        <div class="car2"></div>
        <div class="Nameline">
          <div class="subtitle">
            <img
              src="/images/white_logos/curcle-logo.svg"
              alt="Curcle Logo"
              class="-logo"
            />Область применения
          </div>
          <div class="description">
            Мобильная котельная на базе Ford Transit может применяться в МЧС для
            подачи тепла, в службе ЖКХ, в Вооруженных силах для отопления
            ангаров, казарм и т.п.
          </div>
        </div>
      </div>
      <div class="block">
        <div class="car3"></div>
        <div class="Nameline">
          <div class="subtitle">
            <img
              src="/images/white_logos/arrow-logo.svg"
              alt="Arrow Logo"
              class="arrow-logo"
            />Варианты реализации
          </div>
          <div class="description">
            Возможна реализация проекта на другом транспорте (повышенной
            проходимости и большей мощности).
          </div>
        </div>
      </div>
    </div>
    <div class="button-order">
      <button class="btn order" @click.prevent="showOrderModal">
        ЗАКАЗАТЬ
      </button>
    </div>

    <!--------------------------------------------------------------------------------->
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
          <OrderBoilerFordTransit
            :selectedCar="selectedCar"
            :selectedImage="selectedImage"
            :countChange="countChange"
          />
        </div>

        <div class="form-container">
          <input
            v-model="clientName"
            id="crm_lead_client"
            name="crm_lead[client]"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            v-model="clientEmail"
            id="crm_lead_email"
            name="crm_lead[email]"
            placeholder="E-mail"
            type="email"
          />
          <input
            v-model="clientPhone"
            id="crm_lead_phone"
            name="crm_lead[phone]"
            placeholder="Телефон"
            type="tel"
          />
          <div class="submit-container">
            <a
              class="submit-button"
              type="submit"
              :class="{ disabled: isSubmitDisabled }"
              :disabled="isSubmitDisabled"
              @click="sendMessage()"
            >
              Отправить
            </a>
          </div>

          <PrivacyNote />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  margin: auto;
  font-size: 30px;
}
.boiler-ford {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}
.boiler-ford-description-1 {
  font-size: 30px;
  margin-bottom: 30px;
}
.boiler-ford-description-2 {
  font-size: 30px;
  margin-bottom: 60px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.block {
  background-color: #000000;
  height: auto;
  width: 357px;
  text-align: center;
  color: white;
  border-radius: 8px;
  text-align: left;
  font-size: 20px;
}
.Nameline {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle {
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.car1 {
  background-image: url("/images/car/car1.png");
  width: 100%;
  height: 359px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.car2 {
  background-image: url("/images/car/car2.png");
  width: 100%;
  height: 359px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.car3 {
  background-image: url("/images/car/car3.png");
  width: 100%;
  height: 359px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.description {
  font-size: 20px;
  line-height: 30px;
}
.power-logo,
.-logo,
.arrow-logo {
  height: 30px;
  margin-right: 10px;
}

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
  max-height: 90vh; /* Установите максимальную высоту в 90% от высоты окна */
  background-color: #fff;
  border-radius: 8px;
  padding: 50px; /* Уменьшите отступы для лучшей адаптивности */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto; /* Позволяет прокручивать содержимое, если оно превышает высоту */
}
@media only screen and (max-width: 600px) {
  .modal-content {
    padding: 30px;
  }
}

.subheader {
  font-size: 16px;
}
.line {
  border-top: 1px solid #b0b0b0;
  width: 100%;
  margin: 30px 0;
}

@media only screen and (max-width: 600px) {
  .boiler-image {
    display: none;
  }
}

.information-container {
  display: flex;
  gap: 38px;
  justify-content: space-between;
  align-items: center; /* Выравнивание по центру по вертикали */
  padding-bottom: 30px;
}

@media only screen and (max-width: 600px) {
  .information-container {
    flex-direction: column;
  }
}

.modal-boiler-info {
  line-height: 24px;
  font-size: 18px;
}

@media only screen and (max-width: 800px) {
  .modal-boiler-info {
    width: 100%;
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
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

/*Мобильная версия*/
@media (max-width: 1024px) {
  .page-container {
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

  .boiler-ford {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .boiler-ford-description-1 {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .boiler-ford-description-2 {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .title {
    width: 100%; /* Ширина заголовка на всю ширину экрана */
  }

  .row {
    flex-direction: column; /* Блоки в столбик */
    align-items: center; /* Центрируем блоки */
  }

  .block {
    width: 100%;
    height: 540px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .Nameline {
    padding: 15px; /* Уменьшаем отступы внутри блоков */
  }

  .subtitle {
    font-size: 20px; /* Уменьшаем размер шрифта */
    margin-bottom: 10px; /* Уменьшаем отступ */
  }

  .description {
    font-size: 16px; /* Уменьшаем размер шрифта */
    line-height: 24px; /* Уменьшаем межстрочный интервал */
  }

  .car1,
  .car2,
  .car3 {
    border-radius: 8px 8px 0 0;
    max-width: 100%;
    max-height: auto;
  }
}
</style>
