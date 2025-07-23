export default defineNuxtRouteMiddleware((to) => {
  const redirects: Record<string, string> = {
    "/kotelnye": "/products/",
    "/kotelnye/": "/products/",

    "/uslugi": "/service/",
    "/uslugi/": "/service/",

    "/kotelnye/tproduct/568561636-338643712651-paku-500-kvt-1k-nr":
      "/products/paku-500-kvt-1k-nr/",
    "/kotelnye/tproduct/568561636-338643712651-paku-500-kvt-1k-nr/":
      "/products/paku-500-kvt-1k-nr/",

    "/kotelnye/tproduct/568561636-499769678311-bmak-1000-kvt-2k":
      "/products/bmak-1000-kvt-2k/",
    "/kotelnye/tproduct/568561636-499769678311-bmak-1000-kvt-2k/":
      "/products/bmak-1000-kvt-2k/",

    "/kotelnye/tproduct/568561636-661168969271-bmak-1040-kvt-1k":
      "/products/bmak-1040-kvt-1k/",
    "/kotelnye/tproduct/568561636-661168969271-bmak-1040-kvt-1k/":
      "/products/bmak-1040-kvt-1k/",

    "/kotelnye/tproduct/568561636-908020219101-bmak-1200-kvt-1k":
      "/products/bmak-1200-kvt-1k/",
    "/kotelnye/tproduct/568561636-908020219101-bmak-1200-kvt-1k/":
      "/products/bmak-1200-kvt-1k/",

    "/kotelnye/tproduct/568561636-948854818621-bmak-1400-kvt-1k":
      "/products/bmak-1400-kvt-1k/",
    "/kotelnye/tproduct/568561636-948854818621-bmak-1400-kvt-1k/":
      "/products/bmak-1400-kvt-1k/",

    "/kotelnye/tproduct/568561636-685915865511-bmak-1600-kvt-1k":
      "/products/bmak-1600-kvt-1k/",
    "/kotelnye/tproduct/568561636-685915865511-bmak-1600-kvt-1k/":
      "/products/bmak-1600-kvt-1k/",

    "/kotelnye/tproduct/568561636-928367668211-bmak-4800-kvt-2k":
      "/products/bmak-4800-kvt-2k/",
    "/kotelnye/tproduct/568561636-928367668211-bmak-4800-kvt-2k/":
      "/products/bmak-4800-kvt-2k/",

    "/kotelnye/tproduct/568561636-176718174111-bmak-6000-kvt-2k":
      "/products/bmak-6000-kvt-2k/",
    "/kotelnye/tproduct/568561636-176718174111-bmak-6000-kvt-2k/":
      "/products/bmak-6000-kvt-2k/",

    "/kotelnye/tproduct/568561636-182787297351-bmak-6100-kvt-2k":
      "/products/bmak-6100-kvt-2k/",
    "/kotelnye/tproduct/568561636-182787297351-bmak-6100-kvt-2k/":
      "/products/bmak-6100-kvt-2k/",

    "/kotelnye/tproduct/568561636-223714637291-bmak-7400-kvt-2k":
      "/products/bmak-7400-kvt-2k/",
    "/kotelnye/tproduct/568561636-223714637291-bmak-7400-kvt-2k/":
      "/products/bmak-7400-kvt-2k/",
  };

  const destination = redirects[to.path];
  if (destination) {
    console.log(`Redirecting from ${to.path} to ${destination}`);
    return navigateTo(destination);
  }
});
