<script setup>
import Menu from "@/components/menu.vue";
</script>

<template>
  <Menu />
  <div class="page-container">
    <NuxtLink to="/products">
      <div class="back">
        <div class="back-logo"></div>
      </div>
    </NuxtLink>
    <div class="first-row">
      <h1 class="h1">Новости компании</h1>
      <p class="p1">Здесь мы публикуем свежие обновления внутри компании</p>
      <h2 class="h2">
        Новостная колонка "Тепло в тренде: новости из мира котельных"
      </h2>
      <div class="container"></div>
      <div class="description">
        Горячее предложение от "АО НТЦ Техтелеком-АС" - аренда и продажа мощных
        котельных! 🔥<br />
        🔧Аренда и продажа котельных от 500 до 3000 кВт<br />
        ✔️ Большой парк котельных различной мощности в наличии!!!<br />
        ✔️Надежные и энергоэффективные решения для Вашего бизнеса<br />
        ✔️Соответствие всем нормам и требованиям<br />
        ✔️Индивидуальный подход к каждому клиенту и проекту<br />
        🔥 Успей заказать свою котельную сейчас! ЗИМА БЛИЗКО!!!<br />
        📞Звоните или пишите нам прямо сейчас, чтобы узнать больше!<br />
      </div>

      <NuxtLink to="/products">
        <div class="more-container">
          <a class="more">Подробнее об установке</a>
        </div>
      </NuxtLink>

      <div class="symbows-wrapper">
        <div class="symbows"></div>
      </div>
      <div class="symbows-mobile"></div>
    </div>
    <div class="second-row">
      <h1 class="h1">Участие в программе Московские сезоны 2024</h1>
      <div class="container3"></div>
      <div class="description">
        Компания АО НТЦ "Техтелеком-АC" стала одной из первых компаний, которые
        приняли участие в программе “Московские сезоны” по растопке ледяных
        катков в Москве и Московской области.<br />
        В марте 2024 года, компания предоставила свои услуги на катках и ледовых
        аренах, что позволило обеспечить безопасность, комфорт и соблюдение
        сроков закрытия программы “Московские сезоны”<br />
        В рамках программы, АО НТЦ "Техтелеком-AC" использовала передовые
        технологии и оборудование для растопки льда, а именно котлы наружного
        размещения мощностью 500кВт, весом 1500кг, размерами 258x130x190см
        (ДxШxВ).<br />
        В производстве котельных использовалось Итальянское оборудование. ПАКУ
        (портативная автоматизированная котельная установка) полностью<br />
        автоматизирована, что позволяет управлять котельной удаленно, без
        постоянного присутствия обслуживающего персонала. После доставки ПАКУ на
        место установки подключение к коммуникациям и настройка занимает не
        более двух часов.<br />
        Это сделало возможным быстро и эффективно растопить лед на катках. Кроме
        того, компания провела обучение персонала по работе с оборудованием что,
        обеспечило качественно новый уровень экологической, производственной и
        пожарной безопасности при проведении работ.<br />
        Участие в программе “Московские сезоны” позволило АО НТЦ "Техтелеком-AC"
        укрепить свой имидж надежного партнера в области растопки льда в Москве
        и Московской области, а также получить новые заказы и контракты на
        будущее.<br />
      </div>

      <NuxtLink to="/products">
        <div class="more-container">
          <a class="more">Подробнее об установке</a>
        </div>
      </NuxtLink>

      <div class="symbows-wrapper">
        <div class="symbows"></div>
      </div>
      <div class="symbows-mobile"></div>
    </div>
    <div class="third-row">
      <div class="description">
        <div class="container4"></div>
        ПАКУ 0,5 мВт 1К на базе котла Wiesberg Steel 501<br />
        Новая блочно-модульная автоматизированная котельная наружного
        размещения<br />
        Котельная установка разработана для отопления объектов, а также для
        растопки ледовых покрытий.<br />
        ПАКУ 500 кВт полностью автоматизирована, что позволяет управлять
        котельной удаленно, без постоянного присутствия<br />
        обслуживающего персонала.<br />
        Эта модель котельной обладает высокой степенью эксплуатационной
        готовности.<br />
        Особенность установки - наружное размещение. Котёл имеет небольшие
        габариты и малый вес, что позволяет устанавливать<br />
        его в кузов грузового транспортного средства и работать непосредственно
        с него.<br />
        Срок службы: Не менее 10 лет<br />
        Масса ПАКУ: Не более 1500 кг<br />
      </div>
    </div>

    <NuxtLink to="/products">
      <div class="more-container">
        <a class="more">Подробнее об установке</a>
      </div>
    </NuxtLink>

    <div class="symbows-wrapper">
      <div class="symbows"></div>
    </div>
    <div class="symbows-mobile"></div>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.symbows-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.symbows-wrapper::before,
.symbows-wrapper::after {
  content: "";
  flex: 1;
  height: 2px;
  background-color: red;
}

.symbows-wrapper::before {
  margin-right: 12px; /* расстояние от линии до изображения */
}

.symbows-wrapper::after {
  margin-left: 12px;
}

.symbows {
  background-image: url("/images/red_logos/symbows.png");
  width: 120px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
}

.symbows-mobile {
  display: none;
}
.description {
  font-size: 30px;
  line-height: 50px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.container {
  background-image: url("/images/big_images_of_boilers/container.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 1152 / 660; /* сохраняет пропорции 1152x660 */
}

.container3 {
  background-image: url("/images/big_images_of_boilers/bluebox.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 1131 / 660;
}

.container4 {
  background-image: url("/images/big_images_of_boilers/blackbox.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 1128 / 660;
  margin-bottom: 60px;
}

/*Мобильная версия*/
@media (max-width: 1024px) {
  .page-container {
    margin: 0 auto;
    padding: 0 16px;
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

  .h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .p1 {
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0px;
  }
  .h2 {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  .container,
  .container3,
  .container4 {
    width: 100%;
    height: 272px;
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .symbows,
  .symbows-wrapper {
    display: none;
  }
  .symbows-mobile {
    display: block;
    background-image: url("/images/red_logos/symbows-mobile.svg");
    width: 60px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .more-container {
    margin-bottom: 20px;
  }
}
</style>
