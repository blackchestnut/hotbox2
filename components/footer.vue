<script setup>
import {
  SUPPORT_EMAIL,
  SUPPORT_EMAIL_MAILTO,
  SUPPORT_PHONE,
  SUPPORT_PHONE_TEL,
} from "@/utils/constants";
</script>

<template>
  <div class="footer-wrapper">
    <footer class="footer page-container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>УСЛУГИ</h3>
          <ul>
            <li><NuxtLink to="/service/">Производство</NuxtLink></li>
            <li><NuxtLink to="/service/">Аренда</NuxtLink></li>
            <li>
              <NuxtLink to="/service/">Ремонт и обслуживание</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/boiler_ford_transit/">
                Мобильная котельная на базе Ford Transit
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>О НАС</h3>
          <ul>
            <li>
              <NuxtLink to="/about">О компании</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about/#partners">Партнеры</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>КОНТАКТЫ</h3>
          <div class="inf">
            <a :href="SUPPORT_EMAIL_MAILTO">{{ SUPPORT_EMAIL }}</a
            ><br />
            <a :href="SUPPORT_PHONE_TEL">{{ SUPPORT_PHONE }}</a>
          </div>
        </div>
      </div>
      <div class="footer-divider" />
      <div class="footer-bottom">
        <div class="footer-logo" />
        <p>© Все права защищены. АО НТЦ «Техтелеком-АС».</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-logo {
  height: 53px;
  width: 180px;
  background-image: url("./icons/footer-logo.svg");
  background-size: cover;
}

h3 {
  color: rgba(255, 255, 255, 0.6);
}

.inf a {
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  display: inline-block;
}
.inf a:hover {
  text-decoration: underline;
}

.footer-wrapper {
  background-color: #000000;
  padding-top: 60px;
  padding-bottom: 60px;
}

.footer {
  color: #fff;
  text-align: left;
  justify-content: space-between;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-column {
  display: flex;
  flex-direction: column; /* Устанавливаем направление для колонки */
  font-size: 16px;
  font-weight: 400;
}

.footer-column h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
}

.footer-column ul {
  list-style-type: none;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
}

.footer-column ul li {
  margin-bottom: 6px;
}

.footer-column ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-divider {
  margin: 50px 0;
  border-top: 1px solid #fff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Центрирует элементы по вертикали */
}
.footer-bottom p {
  font-size: 16px;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
@media (max-width: 1024px) {
  .footer-column {
    font-size: 14px;
    font-weight: 400;
  }
  .footer-bottom {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
