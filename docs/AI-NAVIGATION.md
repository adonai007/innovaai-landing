# Lectura y navegación

Las vistas `/es/resumen/` y `/en/resumen/` ofrecen el contenido de InnovAI en
HTML estático con un índice, productos, el texto del capítulo de video,
herramientas para equipos, proceso, preguntas abiertas y contacto. Reutilizan
los mismos datos de la portada. No descargan el recorrido de video ni esperan
la animación de la introducción. Funcionan como documentos sin JavaScript.

Los enlaces se encuentran en la introducción, el menú móvil y el pie. El cambio
de idioma de cada resumen conserva la vista de lectura. Ambas páginas tienen
canonical propio y hreflang y se incluyen en el sitemap generado por Astro.
Los IDs de preguntas y secciones también son los destinos de los datos JSON-LD.

`/llms.txt` y `/llms-full.txt` se generan en el build desde los datos ES/EN.
Los antiguos archivos manuales de `public/` se reemplazaron por esas rutas para
evitar desajustes entre lo publicado en HTML y las guías. Son recursos
complementarios, sin garantías de indexación ni de aparición en respuestas de
IA. No se han cambiado los permisos de rastreo.

Verificación: gate de TypeScript, build, comprobación de destinos y referencias
ARIA/JSON-LD, navegación por el índice, preguntas, cambio de idioma, teclado,
consola y vistas de móvil, tablet y escritorio. La base de este cambio es
`e5ff860`, la versión que Render tenía publicada, con la introducción InnovAI.
La promoción en Render continúa siendo manual.
