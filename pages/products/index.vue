<template>
  <Menu />
  <div class="page-container">
    <RouterLink to="/">
      <div class="back">
        <div class="back-logo"></div>
      </div>
    </RouterLink>
    <div class="head-one">
      <h1>Автоматизированные котельные системы HotBox</h1>
      <p>
        Мы разрабатываем котельные для обеспечения эффективной работой<br />
        системы отопления, вентиляции, ГВС на различных объектах.<br />
        Мобильность наших котельных установок дает возможность в<br />
        любой момент перевозить ее на новое место
      </p>
    </div>
    <div class="two-button-container">
      <div class="sort-mobile" @click="showFilterModal = true"></div>
      <div class="sort-power-mobile" @click="showPowerModal = true"></div>
    </div>

    <!------------------------ Десктопная сортировка ------------------------->
    <div class="sort-container">
      <div
        class="custom-select"
        tabindex="0"
        @click="toggleDropdown"
        @focusout="isOpen = false"
      >
        <div class="selected">{{ selectedOption.text }}</div>
        <div class="arrow" :class="{ open: isOpen }">
          <img src="/images/black_logos/menu-arrow.svg" />
        </div>
        <ul v-if="isOpen" class="options">
          <li
            v-for="option in options"
            :key="option.value"
            @mousedown.prevent="selectOption(option)"
            :class="{ selected: selectedOption.value === option.value }"
          >
            {{ option.text }}
          </li>
        </ul>
      </div>
    </div>
    <!------------------------ Модальное окно сортировки по мощности ------------------------->
    <div
      v-if="showPowerModal"
      class="modal-overlay"
      @click.self="showPowerModal = false"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h3>Сортировка по мощности</h3>
          <div class="close" @click="showPowerModal = false"></div>
        </div>
        <div class="modal-body">
          <div
            class="sort-option"
            :class="{ selected: sortOption === 'powerAsc' }"
            @click="
              selectSortOption('powerAsc');
              showPowerModal = false;
            "
          >
            Мощность: по возрастанию
          </div>
          <div
            class="sort-option"
            :class="{ selected: sortOption === 'powerDesc' }"
            @click="
              selectSortOption('powerDesc');
              showPowerModal = false;
            "
          >
            Мощность: по убыванию
          </div>
        </div>
      </div>
    </div>

    <!------------------------ Модальное окно фильтров ------------------------->
    <div
      v-if="showFilterModal"
      class="modal-overlay"
      @click.self="showFilterModal = false"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h3>Фильтры</h3>
          <div class="close" @click="showFilterModal = false"></div>
        </div>
        <div class="modal-body">
          <div class="numbers">КОЛИЧЕСТВО КОТЛОВ</div>
          <div class="checkbox-group">
            <label
              v-for="count in boilerCounts"
              :key="count"
              class="checkbox-label"
            >
              <input
                type="checkbox"
                :value="count"
                v-model="selectedBoilerCounts"
                class="checkbox-input"
                @change="applyFilters"
              />
              <span class="checkbox-text">{{ count }}</span>
            </label>
          </div>

          <div class="numbers">МОЩНОСТЬ (МАКС.)</div>
          <div class="checkbox-group">
            <label
              v-for="power in maxPowers"
              :key="power"
              class="checkbox-label"
            >
              <input
                type="checkbox"
                :value="power"
                v-model="selectedMaxPowers"
                class="checkbox-input"
                @change="applyFilters"
              />
              <span class="checkbox-text">{{ power }} кВт</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="filter-items-container">
      <div class="filters">
        <div class="checkbox-container">
          <div class="numbers">КОЛИЧЕСТВО КОТЛОВ</div>
          <div class="checkbox-group">
            <label v-for="count in boilerCounts" :key="count">
              <input
                type="checkbox"
                :value="count"
                v-model="selectedBoilerCounts"
                class="checkbox-input"
                @change="applyFilters"
              />
              {{ count }}
            </label>
          </div>

          <div class="numbers">МОЩНОСТЬ (МАКС.)</div>
          <div class="checkbox-group">
            <label v-for="power in maxPowers" :key="power">
              <input
                type="checkbox"
                :value="power"
                v-model="selectedMaxPowers"
                class="checkbox-input"
                @change="applyFilters"
              />
              {{ power }} кВт
            </label>
          </div>
        </div>
      </div>
      <div v-if="!isProductsPresent" class="no-results-message">
        <div class="no-results-title">Подходящих котельных нет</div>
        <div>Выберите другие фильтры</div>
        <button class="reset-button" @click="resetFilters">
          Сбросить фильтры
        </button>
      </div>
      <ProductsListDesktop
        v-if="isProductsPresent"
        :products="filteredAndSortedBoilers"
      />
    </div>

    <ProductsListMobile
      v-if="isProductsPresent"
      :products="filteredAndSortedBoilers"
    />

    <div class="merits">
      <div class="desktop-info-block">
        <h2>10 лет</h2>
        <div class="desktop-divider"></div>
        <p>
          Наш опыт работы в<br />
          сфере теплоснабжения
        </p>
      </div>
      <div class="desktop-info-block">
        <h2>48 часов</h2>
        <div class="desktop-divider"></div>
        <p>
          Срок монтажа<br />
          котельной на фундаменте
        </p>
      </div>
      <div class="desktop-info-block">
        <h2>60 дней</h2>
        <div class="desktop-divider"></div>
        <p>
          Средний срок<br />
          изготовления котельной
        </p>
      </div>
      <div class="desktop-info-block">
        <h2>12 месяцев</h2>
        <div class="desktop-divider"></div>
        <p>
          Гарантийный срок со<br />
          дня реализации
        </p>
      </div>
    </div>

    <div class="mobile-container">
      <div class="info-block">
        <h2>10 лет</h2>
        <div class="divider"></div>
        <p>
          Наш опыт работы в&nbsp;<br />
          сфере теплоснабжения
        </p>
      </div>
      <div class="info-block">
        <h2>48 часов</h2>
        <div class="divider"></div>
        <p>
          Срок монтажа<br />
          котельной на&nbsp;фундаменте
        </p>
      </div>
      <div class="info-block">
        <h2>60 дней</h2>
        <div class="divider"></div>
        <p>
          Средний срок<br />
          изготовления котельной
        </p>
      </div>
      <div class="info-block">
        <h2>12 месяцев</h2>
        <div class="divider"></div>
        <p>
          Гарантийный срок со&nbsp;<br />
          дня реализации
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "boiler",
});

import { ref, computed } from "vue";
import Menu from "@/components/menu.vue";
import ProductsListMobile from "@/components/products_list_mobile.vue";
import ProductsListDesktop from "@/components/products_list_desktop.vue";
import { boilers } from "@/utils/data";

const boilerCounts = [1, 2];
const maxPowers = [500, 1200, 1400, 1600, 4800, 6000, 6100, 7400];

const selectedBoilerCounts = ref([]);
const selectedMaxPowers = ref([]);
const sortOption = ref("powerAsc");
const isOpen = ref(false);
const selectedOption = ref({
  value: "powerAsc",
  text: "Мощность: по возрастанию",
});
const showPowerModal = ref(false);
const showFilterModal = ref(false);

const options = [
  { value: "powerAsc", text: "Мощность: по возрастанию" },
  { value: "powerDesc", text: "Мощность: по убыванию" },
];

const filteredBoilers = computed(() => {
  let filtered = [...boilers];

  // Фильтрация по количеству котлов
  if (selectedBoilerCounts.value.length > 0) {
    filtered = filtered.filter((boiler) =>
      selectedBoilerCounts.value.includes(boiler.boilerCount)
    );
  }

  // Фильтрация по мощности
  if (selectedMaxPowers.value.length > 0) {
    filtered = filtered.filter((boiler) =>
      selectedMaxPowers.value.includes(parseInt(boiler.power))
    );
  }

  return filtered;
});

const filteredAndSortedBoilers = computed(() => {
  let sorted = [...filteredBoilers.value];

  switch (sortOption.value) {
    case "powerAsc":
      sorted.sort((a, b) => parseInt(a.power) - parseInt(b.power));
      break;
    case "powerDesc":
      sorted.sort((a, b) => parseInt(b.power) - parseInt(a.power));
      break;
    default:
      break;
  }

  return sorted;
});

const isProductsPresent = () => {
  return filteredAndSortedBoilers.length > 0;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  sortOption.value = option.value;
};

const selectSortOption = (optionValue) => {
  const option = options.find((opt) => opt.value === optionValue);
  if (option) {
    selectedOption.value = option;
    sortOption.value = optionValue;
  }
};

const resetFilters = () => {
  selectedBoilerCounts.value = [];
  selectedMaxPowers.value = [];
};
</script>

<style scoped>
.checkbox-container {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  max-height: 600px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
}

.numbers {
  font-size: 18px;
  font-weight: 600;
  margin: 20px 16px;
}

label {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.checkbox-input {
  width: 26px;
  height: 26px;
  appearance: none;
  background-color: #e0e0e0;
  border-radius: 8px;
  margin-right: 16px;
  margin-left: 16px;
  cursor: pointer;
}

.checkbox-input:checked {
  background-color: #000;
  border-color: #000;
}

.checkbox-input:checked::before {
  content: "";
  display: block;
  background-image: url("/images/arrows/checkbox-arrow.svg");
  height: 26px;
  width: 26px;
}

.filter-items-container {
  display: flex;
  margin: 0 auto;
  margin-top: 160px;
  gap: 60px;
}

.filters {
  display: flex;
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.fat {
  font-weight: 600;
}
.head-one {
  margin-bottom: 30px;
}
.merits {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Позволяет блокам переноситься на маленьких экранах */
  gap: 20px; /* Отступ между блоками */
  margin-top: 30px;
  margin-bottom: 60px;
  text-align: center;
}

.desktop-info-block {
  width: 260px; /* Максимальная ширина */
  height: 164px;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 10px 0px;
  box-sizing: border-box; /* Учитывает padding в общей ширине */
  position: relative; /* Для позиционирования разделителя */
}

.desktop-info-block h2 {
  font-size: 22px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 8px;
}

.desktop-info-block p {
  font-size: 18px;
  margin-bottom: 0;
  padding: 0px;
}

.desktop-divider {
  height: 2px;
  background-color: #000;

  left: 0;
  right: 0;
  margin-bottom: 20px;
}

.i {
  margin-top: 10px;
}

.custom-select {
  padding: 12px;
  cursor: pointer;
  position: relative;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 360px;
  font-size: 16px;
}

.arrow {
  position: absolute;
  right: 12px;
  top: 14px;
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}
.two-button-container {
  display: none;
}
.options {
  position: absolute;
  border: none;
  list-style: none;
  z-index: 10;
  background-color: #f9f9f9;
  width: 100%;
  left: 0;
  padding-bottom: 12px;
  border-radius: 8px;
}

.options li {
  padding-top: 12px;
  padding-left: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.options li:hover {
  color: #535151;
}

.options li.selected {
  font-weight: 600;
}

.mobile-container {
  display: none;
}
.details-button {
  display: none;
}

/* Модальные окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: flex-start;
}

.modal-content {
  background-color: white;
  border-radius: 0 0 12px 12px;
  width: 100%;
  max-width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  position: relative;
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.close {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url("/images/black_logos/close.svg");
  background-size: contain;
  position: absolute;
  right: 0;
  top: 0;
}
.sort-container {
  float: right;
}
.sort-option {
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  cursor: pointer;
}

.sort-option:last-child {
  border-bottom: none;
}

.sort-option:hover {
  background-color: #f5f5f5;
}

.selected li {
  font-weight: 600;
}

.no-results-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  flex-grow: 1;
}

.no-results-title {
  font-weight: 600;
  margin-bottom: 4px;
}
.reset-button {
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: solid 3px #000;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.reset-button:hover {
  background-color: #474a4d;
  border-color: #474a4d;
}
.reset-button:active {
  background-color: #474a4d;
  border-color: #696770;
}
.items-mobile {
  display: none;
}
@media (max-width: 1024px) {
  .items-mobile {
    display: block;
  }
  .page-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }
  .topbar {
    display: none;
  }
  .sort-option.selected {
    font-weight: 600;
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
  .head-one h1 {
    font-size: 22px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .head-one p {
    font-size: 16px;
    margin-bottom: 30px;
    padding: 0px;
    color: #000;
  }

  .two-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .sort-mobile {
    background-image: url("/images/black_logos/sort-logo-mobile.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 36px;
    height: 36px;
  }
  .sort-power-mobile {
    background-image: url("/images/black_logos/three-lines-mobile.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 36px;
    height: 36px;
  }

  .filters {
    display: none;
  }
  .custom-select {
    display: none;
  }

  .items {
    display: none;
  }

  .mobile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .info-block {
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 0px;
  }

  .divider {
    width: 188px;
    height: 2px;
    background-color: #000;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: #666;
    padding: 0px;
    margin-bottom: 20px;
  }
  .merits {
    display: none;
  }

  /* Стили для модальных окон в мобильной версии */
  .modal-overlay {
    align-items: flex-end; /* Выравниваем модальное окно по низу */
  }

  .modal-content {
    width: 100%;
    max-width: 100%;
    border-radius: 8px 8px 0px 0px;
  }

  .checkbox-group {
    margin-bottom: 15px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 16px;
  }

  .checkbox-input {
    margin-right: 12px;
    flex-shrink: 0;
  }

  .checkbox-text {
    display: inline-block;
    vertical-align: middle;
  }

  .numbers {
    font-size: 16px;
    margin: 15px 0;
    text-align: left;
    font-weight: 600;
  }

  .modal-body {
    padding: 0 16px;
  }

  .modal-header {
    padding: 0 16px 20px;
  }
  .filter-items-container {
    margin-top: 0px;
  }
}
</style>
