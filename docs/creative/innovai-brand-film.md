# InnovaAI · Menos Repetición. Más Criterio.

Dirección creativa actualizada el 15 de octubre de 2026 para `innovai.click`. La entrega es una experiencia cinematográfica dentro de la web: una portada estática y tres capítulos que avanzan con el desplazamiento. Los tres clips contienen cinco segundos de metraje cada uno; el tiempo que tarda una persona en recorrerlos depende de cómo navega. No se presenta como un anuncio lineal de 42 segundos.

## Objetivo y Dirección Visual

Explicar cómo InnovaAI parte del trabajo manual de un equipo, incorpora voz y contexto, conecta automatizaciones y agentes, y conserva la revisión humana. La invitación final es el diagnóstico gratuito ya ofrecido por la empresa. Audiencia: responsables de empresas y equipos de Latinoamérica.

Una oficina contemporánea frente a una ciudad latinoamericana vibrante. La vida urbana aporta escala, profundidad y energía; el trabajo en la mesa mantiene la historia cercana. El mismo espacio y la misma persona conectan el recorrido. La luz de la ciudad, los reflejos y el movimiento de cámara crean una imagen cinematográfica con identidad propia de InnovaAI.

La onda de voz verde y azul es el elemento conductor. Aparece a partir de una instrucción y enlaza representaciones conceptuales de información, automatizaciones y agentes que preparan trabajo. El punto de llegada es una persona que revisa el resultado. Las interfaces ilustrativas no muestran información clínica, nombres de clientes ni resultados comerciales inventados.

## Portada y Tres Capítulos

| Parte | Imagen y Acción | Mensaje Visible |
| --- | --- | --- |
| Portada | Imagen de la oficina con la onda de voz activa y la ciudad vibrante. Anticipa la transformación; al bajar se muestra el punto de partida manual. Es una imagen estática, con texto y contacto disponibles desde el inicio. | Presentación de InnovaAI y diagnóstico gratuito. |
| 01 · Rutina · clip de 5 s | La cámara recorre el trabajo manual: documentos, búsqueda y tareas repetidas en la oficina. La ciudad continúa al fondo. | «La ciudad avanza. Tu trabajo también puede.» |
| 02 · Voz · clip de 5 s | Una instrucción de voz se convierte en una onda verde y azul. La onda conecta los elementos de trabajo y hace visible la preparación de acciones mediante automatizaciones y agentes. | «Una instrucción. Todo empieza a conectar.» |
| 03 · Criterio · clip de 5 s | La información queda organizada. La persona revisa el trabajo preparado y conserva la decisión sobre el siguiente paso. | «Menos pasos. Más espacio para decidir.» / «La IA prepara. Tú revisas y confirmas.» |

El texto en pantalla es HTML accesible, separado del video y disponible en español e inglés. El recorrido se identifica como una visión de lo que podemos diseñar con el cliente. No es una grabación de una implementación real ni una garantía de funciones disponibles sin definir el alcance.

## Producción y Continuidad

- Imagen maestra: **GPT Image 2.5**, calidad **high**, resolución **2K**.
- Movimiento: **MiniMax H3**, **2K**, tres clips de **5 segundos**.
- Cada clip siguiente parte del último fotograma real del anterior. Esto conserva la oficina, la persona, la iluminación y la posición de cámara a través de las transiciones.
- La portada utiliza la imagen de la etapa de voz. Los pósters de los capítulos se extraen del metraje correspondiente para reducir los cambios visibles entre imagen y video.
- Entrega web: imágenes **WebP** y clips **H.264 MP4**, con versiones de escritorio a **1920 × 1080** y recorte móvil a **768 × 1024**. El recorte mantiene la acción relevante dentro de la composición vertical.
- Logo, títulos y llamadas a la acción pertenecen a la interfaz de InnovaAI. El modelo no necesita generar tipografía de marca ni pantallas clínicas.

La resolución 2K describe los recursos de generación; las versiones publicadas se adaptan a la web. Tres clips de cinco segundos aportan quince segundos de metraje, sin imponer quince segundos de reproducción al visitante.

## Comportamiento de la Web

El video sigue el desplazamiento y puede recorrerse hacia delante o hacia atrás. El montaje usa una escena fija dentro de cada capítulo, una imagen debajo del video y carga progresiva por cercanía. El control de movimiento permite detenerlo; el acceso a productos y diagnóstico no depende de completar la historia.

Sin JavaScript, los textos, imágenes y enlaces siguen siendo contenido normal. Con movimiento reducido, ahorro de datos o una conexión limitada compatible con su detección, la experiencia usa imágenes. Un error al descargar o decodificar un clip conserva su póster y permite continuar. La web funciona sin sonido; no se han generado música ni locución para esta entrega.

## Referencias y Autoría

Referencia técnica: [midudev/mcp-higgsfield-landing, revisión da1bbe6](https://github.com/midudev/mcp-higgsfield-landing/tree/da1bbe693ef1939794662e96c0ba6571e9c3f418). La revisión comprobada no tiene archivo LICENSE o COPYING y GitHub no identifica una licencia. Se estudian únicamente patrones generales: relato por etapas, continuidad mediante fotogramas, póster de respaldo, preparación del video para desplazamiento y adaptación móvil. No se copia código, recursos, textos ni diseño del repositorio.

La experiencia previa de DentiMed está documentada en su `docs/PLAYBOOK.md`. Aporta criterios de legibilidad, carga progresiva y degradación a imágenes. La escena, el guion, la identidad y la implementación de InnovaAI son propios.

## Locución Opcional para una Campaña Futura

Este texto se conserva como borrador reutilizable para una pieza independiente. No tiene duración contratada, no está sincronizado con los clips y no se ha generado ni publicado audio:

> Cada día, tu equipo busca, copia y vuelve a empezar. Todo empieza por elegir qué vale la pena mejorar. Entendemos tu operación y conectamos tus procesos, tus datos y tu equipo. Tu voz aporta contexto; las automatizaciones y los agentes preparan el trabajo. Probamos contigo. Medimos. Ajustamos. Tú conservas la decisión. InnovaAI. IA aplicada a tu empresa. Empecemos por una conversación.

Una futura campaña con música, voz o edición lineal requiere un montaje propio. Este borrador no cambia el funcionamiento silencioso de la web.

## Base Verificable y Límites

El relato parte de los servicios y el proceso de consultoría descritos en `src/data/es/services.ts`, `process-steps.ts` y `cta.ts`. Las escenas de automatización y agentes son una representación conceptual del trabajo que puede diseñarse con el cliente; no prometen autonomía ilimitada ni resultados sin revisión.

Dicta y DentiMed conservan sus secciones de producto y enlaces oficiales. DentiMed se describe como asistente que prepara borradores para revisión profesional; las antiguas sublandings locales se retiran. No se incorporan porcentajes de ahorro, testimonios ni plazos garantizados.

La revisión técnica y sus límites, incluidos analítica y dependencias, están en [review-findings.md](review-findings.md). La publicación y su validación deben comprobarse en la entrega, no inferirse de este guion.
