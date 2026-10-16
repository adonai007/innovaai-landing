# InnovaAI · Revisión de Continuidad

Revisión del 15 de octubre de 2026, zona `America/La_Paz`, sobre `origin/main` `8f8a5e3`. Sitio objetivo: `innovai.click`. La captura y las estadísticas de DentiMed sirven como contexto del trabajo anterior; no son datos de tráfico de InnovaAI.

## Tres Omisiones y Sus Correcciones

| Omisión comprobada | Efecto | Mejora correspondiente |
| --- | --- | --- |
| El título, los botones y el visual de portada parten de `opacity: 0`; dependen de que GSAP se ejecute. | Si JavaScript no carga, la primera pantalla pierde la propuesta y el contacto principal. | Contenido visible por defecto, movimiento como mejora opcional y una alternativa estática accesible para el relato visual. |
| Los enlaces de producto llevan a sublandings locales de DentiMed con funciones, precios y prueba gratuita obsoletos. Las mismas afirmaciones están en el SEO y los archivos para asistentes. | El visitante recibe mensajes contradictorios sobre el producto real y la aprobación profesional. | Un único destino oficial: `https://dentimed.app`, con enlaces coherentes en español e inglés y retirada de las páginas locales de venta. |
| El menú móvil puede dejar el foco en contenido tapado, y el WhatsApp flotante oculto sigue siendo alcanzable por teclado. Falta un acceso para saltar al contenido principal. | La navegación y el contacto son menos previsibles con teclado o tecnologías de asistencia. | Foco coherente al abrir y cerrar el menú, estado accesible del CTA flotante y enlace para saltar al contenido. |

La corrección de contenido de DentiMed está en esta rama. Los cambios visuales y de navegación se integran en la misma revisión y deben verificarse juntos antes de publicar. Este documento no acredita una publicación ni reemplaza la comprobación del sitio final.

## Alcance de la Corrección de DentiMed

- Las tarjetas y el pie de página enlazan directamente `https://dentimed.app` en ambos idiomas.
- `/es/dentimed/`, `/en/dentimed/`, `/es/diariomed/` y `/en/diariomed/` contienen únicamente la transición al sitio oficial, con `noindex`, canonical y un enlace manual. No requieren JavaScript.
- La transición utiliza `meta refresh` en HTML estático. No equivale a una respuesta HTTP 301; no se ha configurado una regla de servidor en estos archivos.
- Se retiran los metadatos SEO dentales que ya no tienen consumidor. `llms.txt` y `llms-full.txt` describen borradores revisables y envío manual de WhatsApp, sin FHIR, odontograma, resultados porcentuales ni precios del sitio antiguo.
- El destino oficial está en español. La redirección inglesa no promete una traducción del sitio externo.
- Los componentes y datos dentales antiguos dejan de renderizarse en las rutas públicas. Su presencia residual en el código no debe usarse como evidencia de funciones actuales ni reactivarse sin verificar el producto.

## Prácticas Visuales Transferibles

La referencia de DentiMed aporta un relato por etapas, una propuesta comprensible en móvil y un contacto disponible sin terminar el recorrido. El video es una capa opcional: los textos y la acción principal deben seguir funcionando sin reproducción, con movimiento reducido y si falla la descarga.

InnovaAI ya contiene imágenes de colaboración, una escena dental y recursos de sus productos. Su existencia no acredita resultados comerciales ni testimonios. El guion de la pieza de marca está en [innovai-brand-film.md](innovai-brand-film.md); cualquier escena conceptual debe conservar ese carácter y no representar una función inexistente. No se añaden datos de pacientes, conversaciones clínicas ni pantallas con información personal en esta corrección de contenido.

## Límite de la Analítica

No hay IDs propios de Umami, Clarity o Cloudflare Web Analytics configurados para InnovaAI en el código revisado. No se pueden reutilizar los IDs de DentiMed: mezclarían sitios y harían inválida la lectura de los resultados. La revisión del repositorio tampoco demuestra que no exista medición inyectada desde un servicio externo; eso requiere comprobar la configuración y la página publicada.

No se atribuyen a InnovaAI los nueve visitantes, los seis eventos de historia ni los cero clics de WhatsApp del resumen de DentiMed. Para medir esta landing hace falta identificar su proyecto propio en cada proveedor y verificar el comportamiento con sus dominios. Un clic en WhatsApp solo expresa intención de abrirlo; no confirma envío, conversación recibida ni lead.

## Validación de Entrega

La integración debe comprobar español e inglés, enlaces del producto y rutas antiguas, HTML sin claims retirados, sitemap sin las rutas de transición, lectura sin JavaScript, movimiento reducido, navegación por teclado y ausencia de desbordamiento móvil. Las cifras de conversión o rendimiento deben proceder de una medición identificada, con periodo, zona horaria y muestra; no se inventan objetivos ni resultados.

## Limitación Conocida de Dependencias

La auditoría inicial de npm del 15 de octubre de 2026, sobre el lock con Astro 5.18.1, informó **15 paquetes afectados: 1 crítico, 12 altos, 1 moderado y 1 bajo**. Después de aplicar únicamente la corrección compatible con `npm audit fix --ignore-scripts`, la auditoría comprobada bajó a **3 paquetes afectados: Astro crítico, sharp alto y esbuild bajo**. Se resolvieron 12 avisos mediante 22 cambios de paquetes en `package-lock.json`, sin modificar `package.json` ni efectuar una actualización mayor.

Los paquetes afectados pertenecen al árbol de Astro, Vite y herramientas de compilación. npm los clasifica como dependencias de producción porque están declarados en `dependencies`; eso no significa que los 15 paquetes se ejecuten en el navegador. La configuración revisada genera un sitio estático, sin adaptador SSR, formularios que acepten contenido externo ni uso de `astro:assets` para procesar imágenes de visitantes. No se identificó una vía para activar esos avisos desde las páginas actuales; esta evaluación no sustituye actualizar el entorno de construcción.

- El aviso crítico [GHSA-26w7-cxv4-gfx2](https://github.com/advisories/GHSA-26w7-cxv4-gfx2) exige que Astro procese un AVIF no confiable. Publicar archivos estáticos no activa por sí solo esa operación.
- Los avisos de Vite, entre ellos [GHSA-p9ff-h696-f583](https://github.com/advisories/GHSA-p9ff-h696-f583) y [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff), estaban relacionados con el servidor de desarrollo expuesto a la red y ya no aparecen en la auditoría posterior a la corrección compatible. El servidor de desarrollo no debe usarse como servidor de producción.
- Los tres avisos restantes de Astro, sharp y esbuild pertenecen al entorno de construcción. Deben evaluarse y corregirse con una actualización adicional; no se considera que estén resueltos por generar una web estática.
- La corrección forzada propone Astro 7.4.0 y requiere Node 22.22.0 o posterior, mientras que la CI revisada usa Node 20. Es una migración que debe comprobarse por separado, no un cambio automático del proyecto durante el trabajo visual.

Las tres advertencias restantes se conservan como limitación conocida. La corrección compatible está aplicada; no se declara una auditoría limpia. La migración a Astro 7 y Node 22 queda como trabajo separado, con validación de compatibilidad y una nueva auditoría.
