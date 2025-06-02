<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router"; // Импортируем useRouter для навигации
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { boilers } from "/utils/data";

import "swiper/css";
import "swiper/css/pagination";

const router = useRouter(); // Получаем доступ к роутеру
const MOBILE_WIDTH_LIMIT = 1024;

const isMobile = ref(false);

onMounted(() => {
  // Безопасный доступ к window
  isMobile.value = window.innerWidth <= MOBILE_WIDTH_LIMIT;
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

function updateIsMobile() {
  isMobile.value = window.innerWidth <= MOBILE_WIDTH_LIMIT;
}

const modules = [Pagination];
const ITEMS_ON_PAGE = 3;

// TODO: Delete
const slides_to_delete = [
  {
    text: "ПАКУ 500 кВт 1К (Н/Р)",
    image: "/images/boilers/paku-500-kvt-1k-nr/1.png",
    description: "Установка 0,5 МВт, 1 котел",
    link: "/kotelnye/paku-500-kvt-1k-nr",
  },
  {
    text: "БМАК 1000 кВт 2К",
    image: "/images/boilers/bmak-1000-kvt-2k/1.png",
    description: "Котельная 1,0 МВт, 2 котла",
    link: "/kotelnye/bmak-1000-kvt-2k",
  },
  {
    text: "БМАК 1040 кВт 1К",
    image: "/images/boilers/bmak-1040-kvt-1k/1.png",
    description: "Котельная 1,04 МВт, 1 котел",
    link: "/kotelnye/bmak-1040-kvt-1k",
  },
  {
    text: "БМАК 1200 кВт 1К",
    image: "/images/boilers/bmak-1200-kvt-1k/1.png",
    description: "Котельная 1,2 МВт, 1 котел",
    link: "/kotelnye/bmak-1200-kvt-1k",
  },
  {
    text: "БМАК 1400 кВт 1К",
    image: "/images/boilers/bmak-1400-kvt-1k/1.png",
    description: "Котельная 1,4 МВт, 1 котел",
    link: "/kotelnye/bmak-1400-kvt-1k",
  },
  {
    text: "БМАК 1600 кВт 1К",
    image: "/images/boilers/bmak-1600-kvt-1k/1.png",
    description: "Котельная 1,6 МВт, 1 котел",
    link: "/kotelnye/bmak-1600-kvt-1k",
  },
  {
    text: "БМАК 4800 кВт 2К",
    image: "/images/boilers/bmak-4800-kvt-2k/1.png",
    description: "Котельная 4,8 МВт, 2 котла",
    link: "/kotelnye/bmak-4800-kvt-2k",
  },
  {
    text: "БМАК 6000 кВт 2К",
    image: "/images/boilers/bmak-6000-kvt-2k/1.png",
    description: "Котельная 6 МВт, 2 котла",
    link: "/kotelnye/bmak-6000-kvt-2k",
  },
  {
    text: "БМАК 6100 кВт 2К",
    image: "/images/boilers/bmak-6100-kvt-2k/1.png",
    description: "Котельная 6,1 МВт, 2 котла",
    link: "/kotelnye/bmak-6100-kvt-2k",
  },
  {
    text: "БМАК 7400 кВт 2К",
    image: "/images/boilers/bmak-7400-kvt-2k/1.png",
    image: "/images/boilers/bmak-7400-kvt-2k/1.png",
    description: "Котельная 7,4 МВт, 2 котла",
    link: "/kotelnye/bmak-7400-kvt-2k",
  },
];

const swiperInstance = ref(null);
const currentPage = ref(0);

const totalPages = Math.ceil(boilers.length / ITEMS_ON_PAGE);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const goToNextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const goToPrevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const goToPage = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index * ITEMS_ON_PAGE);
    currentPage.value = index;
  }
};

const showDetails = (index) => {
  const selectedSlide = boilers[index];
  router.push({ name: "products-id", params: { id: selectedSlide.path } }); // Используем роутер для перехода
};
</script>

<template>
  <article class="page-container">
    <div class="system">
      <div class="header">
        <div class="boilers-hotbox">Котельные системы HotBox</div>
        <div class="subheadline">
          Это современные, полностью автономные, мобильные тепловые установки.
          Более 10 лет мы работаем для вас
        </div>
      </div>
      <div class="background">
        <div class="container">
          <div class="swiper-wrapper-container">
            <swiper
              :modules="modules"
              :slides-per-view="isMobile ? 1 : 3"
              :space-between="isMobile ? 16 : 30"
              :slides-per-group="1"
              :pagination="{ el: '.custom-pagination', clickable: true }"
              class="mySwiper"
              @swiper="onSwiper"
            >
              <swiper-slide v-for="(slide, index) in boilers" :key="index">
                <div
                  class="slide-inner"
                  @click="isMobile ? showDetails(index) : null"
                >
                  <img
                    :src="slide.images[0]"
                    alt="Slide Image"
                    class="slide-image"
                  />
                  <div class="label">{{ slide.type }}</div>
                  <div class="description">{{ slide.sliderDescription }}</div>
                  <NuxtLink
                    class="btn btn-white btn-small details-button"
                    :to="{ name: 'products-id', params: { id: slide.path } }"
                  >
                    ПОДРОБНЕЕ
                  </NuxtLink>
                </div>
              </swiper-slide>
            </swiper>
            <div class="custom-pagination"></div>
          </div>

          <div class="slider-navigation">
            <button class="b-slider-prev btn btn-black" @click="goToPrevSlide">
              <img src="\images\arrows\Vector.svg" />
            </button>
            <div class="pagination-buttons">
              <button
                v-for="(page, index) in totalPages"
                :key="index"
                @click="goToPage(index)"
                :class="[
                  'pagination-button',
                  currentPage === index ? 'active' : '',
                ]"
              >
                {{ index + 1 }}
              </button>
            </div>
            <button class="b-slider-next btn btn-black" @click="goToNextSlide">
              <img src="\images\arrows\Vector1.svg" />
            </button>
          </div>
          <NuxtLink class="btn btn-black" to="/products">
            ПОЛНЫЙ КАТАЛОГ
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.system {
  margin: 0 auto;
  text-align: center;
}
.header {
  margin-top: 100px;
  text-align: center;
}
.boilers-hotbox {
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  margin-bottom: 30px;
}
.subheadline {
  margin-top: 60px;
  font-size: 30px;
  margin-bottom: 60px;
}
.background {
  margin-top: 30px;
  width: 100%;
}

.slide-inner {
  height: auto;
  width: 358px;
  justify-content: center;
  padding-bottom: 30px;
  background-color: #ebebeb;
  border-radius: 8px;
  transition: transform 0.3s ease;
  border: 1px solid #e2e1e7;
}

.label {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}
.slider-navigation {
  display: flex;
  justify-content: center;
  padding-top: 43px;
  padding-bottom: 43px;
}
.b-slider-prev,
.b-slider-next {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-buttons {
  display: flex;
  justify-content: center;
}
.pagination-button {
  margin: 0 5px;
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  color: black;
  border-color: #ffffff;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.pagination-button:hover {
  background-color: #474a4d;
  border-color: #474a4d;
  color: white;
}
.pagination-button:active {
  background-color: black;
  border-color: black;
  color: white;
}
.slide-image {
  width: 100%;
}
.description {
  padding-top: 25px;
  padding-bottom: 25px;
}
.custom-pagination {
  display: none;
}

@media (max-width: 1024px) {
  .system {
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    height: auto;
    max-width: 100%;
  }
  .header {
    margin: 0 auto;
    margin-top: 20px;
    text-align: left;
    padding: 0px 16px;
  }
  .subheadline {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
  }
  .slider-navigation {
    display: none;
  }

  .boilers-hotbox {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .slide-inner {
    max-width: 280px;
    max-height: 420px;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }
  .slide-image {
    width: 100%;
    height: auto;
  }
  .label {
    font-size: 16px;
    color: #000000;
    padding-top: 20px;
    text-align: center;
    margin: 0 auto;
  }
  .description {
    font-size: 14px;
    color: #333;
    padding-top: 20px;
    padding-bottom: 20px;

    text-align: center;
    margin: 0 auto;
  }
  .swiper-slide {
    margin-right: 0px;
  }
  .details-button {
    display: none;
  }

  .custom-pagination {
    display: block;
    margin-top: 12px;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
<style>
.custom-pagination .swiper-pagination-bullet {
  background: #c8c7ca;
  width: 8px;
  height: 8px;
  opacity: 1;
  margin: 0 8px;
  border-radius: 50%;
}

.custom-pagination .swiper-pagination-bullet-active {
  background: #000000;
}
.custom-pagination {
  --swiper-pagination-bullet-horizontal-gap: 6px;
}
</style>
