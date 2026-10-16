# Validación de la landing cinematográfica

Fecha: 15 de octubre de 2026, America/La_Paz. Objetivo: innovai.click, ES y EN.

## Comprobaciones realizadas

- `npm run build`: correcto con Astro 5.18.2 y Node 20.20.2.
- TypeScript estricto de `cinema.ts` y `animations.ts`: correcto (`tsc --noEmit --strict --target ES2022 --module ESNext --moduleResolution bundler --lib ES2022,DOM --skipLibCheck`).
- `git diff --check`: correcto.
- 16 escenarios de navegador: ambos idiomas, 390×844 y 1440×900, JavaScript normal/desactivado/movimiento reducido; además 844×390 y 1024×500. Ningún desbordamiento horizontal, error JavaScript ni respuesta 404 con recursos finales. Comprobados WhatsApp, destinos de producto, anclas, cambio de idioma, menú con Tab/Shift+Tab/Escape y retorno del foco, restauración de inert y bloqueo de desplazamiento.
- 8 escenarios de video: móvil y escritorio; los tres clips producen fotogramas distintos y no negros al avanzar de 20% a 80% y volver a 20%. Pausa y reanudación, desplazamiento rápido, navegación entre idiomas, ahorro de datos y cambio de preferencia de movimiento comprobados. Un 404 provocado en el primer clip conserva su imagen, permite cargar los siguientes y no genera reintentos continuos.
- Sin JavaScript, con movimiento reducido, ahorro de datos y en ventanas de poca altura no se solicitan los clips.
- Inspección visual de portada y escenas en móvil/escritorio. Versiones separadas de video y póster para cada encuadre. H.264, sin pista de audio, fotogramas clave frecuentes y metadatos al inicio del archivo.

Las pruebas automatizadas utilizaron Playwright con Chromium. No acreditan una prueba física en Safari/iOS; el ciclo inicial de reproducción silenciosa/pausa tiene una espera limitada y conserva el póster si el dispositivo no decodifica. Tampoco sustituyen mediciones de tráfico real o Core Web Vitals de producción.

Los hashes y tamaños publicados están en `media-files.json`; los modelos, referencias, instrucciones y trabajos de generación están en `media-production.json`. Los recursos originales y capturas locales de prueba quedan fuera del sitio y del repositorio.

## Limitaciones

La secuencia es conceptual y silenciosa. No es una grabación de una implementación de cliente ni demuestra resultados numéricos. La medición propia de InnovaAI y las tres advertencias restantes de dependencias se detallan en `review-findings.md`.

## Publicación

Render sirve `dist/` de `adonai007/innovaai-landing`, rama `main`, con publicación automática por commit. La revisión de GitHub y la compilación CI deben pasar antes de integrar. Después se comprueban el commit publicado, ambas rutas de idioma, los seis videos, los enlaces y el sitemap en el dominio final. La aplicación clínica y el PR de DentiMed no forman parte de esta publicación.
