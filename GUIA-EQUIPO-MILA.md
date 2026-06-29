# Guia para el Equipo MILA — Como editar el sitio web con Claude Code

## Que es esto?

El sitio web de MILA vive en **madeinlatinamerica.com**. Es un conjunto de archivos que viven en internet (en GitHub). Cada pagina del sitio es un archivo. Cuando alguien cambia un archivo y lo "sube", el sitio se actualiza automaticamente en segundos.

**Claude Code** es una aplicacion de escritorio (como Word o Photoshop) que tiene una inteligencia artificial adentro. Vos abris la app, le hablas en espanol, le pedis cambios al sitio, y ella los hace por vos. **No necesitas saber programar.**

---

## Paso 1: Preparacion inicial (una sola vez)

### 1.1 — Crear cuenta en GitHub

GitHub es donde viven los archivos del sitio. Necesitas una cuenta para poder hacer cambios.

1. Anda a https://github.com y crea una cuenta gratuita
2. **Importante:** Pasale tu nombre de usuario de GitHub a Nico para que te de acceso al proyecto

### 1.2 — Instalar la app de Claude Code

1. Anda a https://claude.ai/code
2. Descarga la aplicacion de escritorio para Mac
3. Instalala como cualquier otra app (arrastra al folder de Aplicaciones)
4. Abrila. Te va a pedir iniciar sesion — usa la cuenta que te indique Nico

### 1.3 — Conectar el proyecto de MILA

Cuando abras Claude Code por primera vez, vas a ver una pantalla de chat. Lo primero que tenes que hacer es conectar el proyecto:

1. En la app, busca la opcion de abrir un proyecto o carpeta
2. Claude te va a guiar para descargar (clonar) el proyecto de MILA desde GitHub
3. Si te pide alguna autorizacion de GitHub, aceptala

**Si te trabas en este paso**, simplemente escribile a Claude en el chat:

> "Necesito configurar el proyecto de MILA. El repositorio esta en https://github.com/zalucinc/mila. Ayudame a descargarlo y abrirlo"

Claude te va a guiar paso a paso.

---

## Paso 2: Como hablarle a Claude

Una vez que el proyecto esta abierto, simplemente escribi lo que queres hacer **en espanol, como si le hablaras a un companero de trabajo**. Claude ya conoce toda la estructura del sitio de MILA, los colores, las paginas, todo.

### Ejemplos de cosas que podes pedir:

---

**Cambiar textos:**

> "Cambia el titulo del evento Pop-Up Panama para que diga 'Pop-Up Panama — Edicion Especial 2026'"

> "En la pagina de Culture, cambia la descripcion del primer articulo por este texto: [pega tu texto nuevo aca]"

---

**Cambiar colores o diseno:**

> "Quiero que el fondo del hero sea verde oscuro en vez de burgundy"

> "Haz que los titulos de seccion sean mas grandes"

> "Agrega mas espacio entre las tarjetas del archivo"

> "Quiero que la barra de navegacion se quede fija arriba cuando scrolleo"

---

**Agregar una marca nueva:**

> "Agrega la marca 'Tropicalia' a la seccion de marcas en la pagina principal. La categoria es 'Resort Wear' y es de Costa Rica"

---

**Agregar un evento nuevo:**

> "Agrega un nuevo evento al calendario: Pop-Up Lima, del 15 al 17 de noviembre 2026, en el Centro Cultural de Lima"

---

**Crear contenido editorial nuevo:**

> "Crea un articulo nuevo en la pagina de Culture con el titulo 'El Tejido como Lenguaje' y este texto: [pega el texto completo aca]"

---

**Cambiar el orden de las secciones:**

> "Movi la seccion de Calendario arriba de la seccion de Archivo en la pagina principal"

---

**Agregar un video:**

> "Agrega este video de YouTube en la pagina de RSVP: https://youtube.com/watch?v=XXXXX"

(Subi tus videos a YouTube o Vimeo primero, y despues compartile el link a Claude)

---

## Paso 3: Como agregar fotos e imagenes

Para agregar una foto nueva al sitio:

1. **Arrastra la foto** directamente a la ventana de Claude Code, o usa el boton de adjuntar archivo (el clip o icono de imagen) en el chat
2. Decile a Claude que hacer con ella:

> "Usa esta foto como la imagen principal del editorial sobre Panama en la pagina de Culture"

> "Agrega esta imagen a la seccion de marcas como logo de Tropicalia"

> "Reemplaza la foto del hero en la pagina principal con esta imagen"

### Reglas importantes para fotos

Las fotos son lo que mas afecta la velocidad del sitio. Si las fotos son muy pesadas, el sitio carga lento — especialmente en celulares. Segui estas reglas:

**Tamano de archivo:**
- Cada foto deberia pesar **menos de 500KB** (medio megabyte)
- Si tu foto pesa mas de 1MB, decile a Claude: "Optimiza esta imagen para web antes de agregarla"
- Las fotos que saca un iPhone pueden pesar 5-10MB — siempre hay que optimizarlas

**Formato:**
- Fotos: usa **JPG** (para fotos normales) o **WebP** (mas moderno y liviano)
- Logos e iconos: usa **PNG** (fondo transparente) o **SVG**
- **No uses** fotos en formato HEIC (el formato nativo del iPhone) — decile a Claude que las convierta a JPG

**Dimensiones:**
- Para fotos de ancho completo (hero, banners): **maximo 1920 pixeles de ancho**
- Para fotos de tarjetas o grilla: **maximo 800 pixeles de ancho**
- No necesitas fotos de 4000px — nadie las va a ver a ese tamano en web

**Nombre del archivo:**
- Usa nombres descriptivos en minuscula, sin espacios ni acentos
- Bien: `popup-panama-2026.jpg`, `marca-tropicalia-logo.png`
- Mal: `IMG_4532.HEIC`, `Foto Final (2).jpg`, `captura de pantalla.png`
- Si tu foto tiene un nombre raro, decile a Claude: "Renombra esta imagen a popup-panama-2026.jpg"

**Para PDFs y documentos:**
- Igual que con las fotos — arrastralos al chat y decile a Claude donde los queres agregar
- Ejemplo: "Agrega este PDF como descargable en la pagina de Fashion con el texto 'Descargar Lookbook 2026'"

---

## Paso 4: Como publicar los cambios

Cuando Claude termina de hacer los cambios, necesitas "publicarlos" para que aparezcan en el sitio web real. Es muy simple:

Escribile a Claude:

> "Sube los cambios al sitio"

Claude va a hacer todo automaticamente. Te va a pedir que apruebes algunos pasos — simplemente dale que si (haciendo click en "Allow" o "Aceptar" cuando aparezca).

**Despues de publicar:**
1. Espera unos 30 segundos
2. Abri **madeinlatinamerica.com** en tu navegador
3. Recarga la pagina (Cmd + R en Mac)
4. Deberias ver tus cambios en vivo

Si el dominio principal todavia no esta configurado, usa la URL de prueba: https://mila-xi-six.vercel.app/

---

## Paso 5: Como empezar cada sesion de trabajo

Cada vez que abras Claude Code para hacer cambios:

1. Abri la app de Claude Code
2. Asegurate de que el proyecto MILA este abierto (deberias ver el nombre "mila" en alguna parte de la ventana)
3. **Siempre empeza pidiendole esto a Claude:**

> "Trae los cambios mas recientes del sitio antes de empezar"

Esto es importante para que tengas la version mas actualizada y no haya conflictos si alguien mas del equipo hizo cambios.

4. Ahora si — pedile lo que necesites

---

## Coordinacion del equipo — reglas para trabajar juntos

Cuando varias personas pueden editar el mismo sitio, es importante coordinarse para no pisarse los cambios. Estas reglas son simples pero importantes:

### Regla #1: No editar al mismo tiempo

Si dos personas editan el mismo archivo al mismo tiempo, se genera un "conflicto" y hay que resolverlo manualmente. Para evitarlo:

- **Avisa en el grupo** (WhatsApp, etc.) cuando vayas a hacer cambios: "Voy a editar la pagina de Fashion, dame 15 minutos"
- Cuando termines, avisa: "Listo, ya subi mis cambios"
- Si alguien mas esta editando, espera a que termine

### Regla #2: Siempre traer lo ultimo antes de empezar

Antes de hacer cualquier cambio, **siempre** decile a Claude:

> "Trae los cambios mas recientes del sitio"

Si te olvidas de esto y alguien mas hizo cambios, puede haber problemas.

### Regla #3: Publicar seguido, no acumular

No hagas 10 cambios sin publicar. El flujo ideal es:

1. Haz un cambio
2. Revisa que se vea bien
3. Publica ("Sube los cambios al sitio")
4. Siguiente cambio

Asi si algo sale mal, solo perdiste un cambio, no diez.

### Regla #4: Revisar en celular

Despues de publicar cambios visuales (colores, fotos, layout), abri el sitio en tu celular tambien. Muchos visitantes van a ver el sitio desde el telefono, y a veces algo que se ve bien en computadora se ve raro en celular.

Si algo se ve mal en celular, decile a Claude:
> "El cambio que hicimos se ve mal en celular. Necesito que se vea bien tanto en computadora como en telefono"

---

## Manejo de contenido — buenas practicas

### Textos y articulos

- **Escribi el contenido primero** en Google Docs, Notes, o donde te sea comodo. Cuando este listo, copialo y pegalo en el chat con Claude
- **Revisa la ortografia antes** de pegarlo — Claude no corrige ortografia del contenido que vos le das
- Si el texto es muy largo (mas de 3 parrafos), mandalo por partes para que Claude no se confunda

### Fotos editoriales

- Tene todas las fotos de un editorial **listas antes** de empezar. Es mas facil agregar 5 fotos de una vez que ir de a una
- Mantene copias de las fotos originales en Google Drive o similar — el sitio guarda versiones optimizadas, no las originales

### Eventos

- Cuando un evento ya paso, decile a Claude: "El evento Pop-Up Panama ya paso. Movelo a una seccion de eventos pasados o eliminalo del calendario"
- Mantene el calendario actualizado — un sitio con eventos vencidos da mala impresion

### Marcas y colaboraciones

- Cuando agregues una marca nueva, trata de incluir: nombre, pais, categoria, y si es posible una imagen o logo
- Si una marca ya no participa, decile a Claude que la quite del directorio

---

## Que paginas tiene el sitio

| Pagina | Que contiene |
|--------|-------------|
| **Inicio** | La pagina principal — el hero grande con "MADE IN LATIN AMERICA", la grilla de editorials (archivo), el calendario de eventos, y el directorio de marcas |
| **Culture** | Articulos editoriales sobre cultura latinoamericana — identidad, territorio, tradicion, comunidad |
| **Fashion** | Contenido de moda — editorials, lookbooks, perfiles de marcas, drops |
| **RSVP** | Eventos presenciales — pop-ups y conversatorios (charlas) |
| **Studio** | Colaboraciones creativas entre marcas, orquestadas por MILA |

---

## Colores de la marca

Cuando quieras referirte a un color especifico, podes usar estos nombres y Claude los entiende:

| Nombre | Color | Donde se usa |
|--------|-------|-------------|
| yellow | Amarillo claro | Fondo del calendario, acentos |
| pink | Rosa | Etiquetas de categorias |
| cream | Crema | Fondos claros de secciones |
| black | Negro | Texto principal, footer |
| burgundy | Burgundy / vino tinto | Fondo del hero, acentos oscuros |
| brown | Cafe / marron | Acentos secundarios |
| green | Verde oscuro | Acentos secundarios |
| blue | Azul medio | Acentos secundarios |
| lavender | Lavanda / lila | Acentos secundarios |

Ejemplo: "Cambia el fondo de la seccion de eventos al color lavender"

Tambien podes usar cualquier color que quieras aunque no este en esta lista:
> "Quiero que el fondo sea de un coral suave" — Claude va a buscar el tono correcto.

---

## Tips y buenas practicas

1. **Se especifico.** En vez de "cambia algo en la pagina", di exactamente que queres cambiar y en que pagina. Mientras mas claro seas, mejor resultado.

2. **Un cambio a la vez.** Es mejor hacer cambios chicos y publicar seguido, que hacer 20 cambios de una vez. Asi si algo sale mal, es facilisimo volver atras.

3. **Podes deshacer cualquier cosa.** Si algo quedo mal, decile a Claude:
   > "Deshaz el ultimo cambio" o "Quiero que vuelva a como estaba antes"

4. **Podes preguntar antes de actuar.** Si no estas seguro de como va a quedar algo:
   > "Como se veria si cambio el fondo del hero a verde? No lo cambies todavia, solo explicame"

5. **Para textos largos** (articulos, descripciones de eventos), escribilos primero en cualquier lado (Google Docs, Notes, WhatsApp) y despues pega el texto completo en el chat con Claude.

6. **Claude pide permisos.** A veces Claude te va a pedir permiso para ejecutar ciertos pasos. Si dice algo como "Allow" o "Run command", dale que si. Esos son los pasos necesarios para guardar y publicar tus cambios.

7. **Revisa en computadora Y celular.** Despues de cambios visuales, siempre chequea el sitio en ambos. Si algo se ve raro en uno de los dos, avisale a Claude.

8. **No borres cosas por las dudas.** Si no estas seguro de si algo se esta usando, preguntale a Claude antes de eliminarlo: "Se esta usando esta seccion? Es seguro borrarla?"

---

## Sobre el dominio: madeinlatinamerica.com

El sitio de MILA esta alojado en **Vercel**, una plataforma que se encarga de publicar el sitio automaticamente cada vez que alguien hace cambios.

### Direcciones del sitio

- **Dominio principal:** madeinlatinamerica.com — esta es la direccion publica que comparten con el mundo
- **URL de prueba:** mila-xi-six.vercel.app — esta siempre funciona y muestra exactamente lo mismo. Es util si el dominio principal tiene algun problema

Ambas direcciones muestran el mismo sitio. Cuando publicas cambios, se actualizan las dos al mismo tiempo.

### Conexion del dominio (Nico se encarga de esto)

Para que madeinlatinamerica.com funcione, se necesita configurar el DNS (es como la guia telefonica de internet — conecta el nombre "madeinlatinamerica.com" con el servidor de Vercel donde vive el sitio).

**Esto lo configura Nico.** Si el dominio no esta cargando o hay algun problema con la direccion, avisale. El equipo no necesita tocar esta configuracion.

Lo que si pueden hacer: si notan que madeinlatinamerica.com no carga pero mila-xi-six.vercel.app si, eso significa que hay un problema de DNS — manden mensaje a Nico.

### Cuando cambiemos de dominio o agreguemos otro

Si en el futuro MILA necesita otro dominio (por ejemplo, mila.co o similar):
- Nico se encarga de la configuracion
- El equipo no necesita cambiar nada de su flujo de trabajo — siguen usando Claude Code igual
- Los cambios se publican de la misma manera

---

## Si algo sale mal

**"No se como abrir el proyecto":**
> Escribile a Claude: "Ayudame a abrir el proyecto de MILA que esta en GitHub en https://github.com/zalucinc/mila"

**"Hice un cambio y quedo mal":**
> Escribile a Claude: "Deshaz todos los cambios que hicimos hoy y vuelve a como estaba antes"

**"El sitio no se actualizo despues de publicar":**
> Espera 30 segundos y recarga la pagina en tu navegador (Cmd + R). Si despues de un minuto sigue igual, decile a Claude: "Verifica que los cambios se hayan subido correctamente"

**"El sitio no carga en madeinlatinamerica.com pero si en la otra URL":**
> Es un problema de dominio/DNS. Avisale a Nico. Mientras tanto, usa mila-xi-six.vercel.app para verificar tus cambios.

**"Me dice que hay un conflicto":**
> Decile a Claude: "Hay un conflicto con los archivos. Ayudame a resolverlo sin perder mis cambios"

**"No entiendo lo que me esta diciendo Claude":**
> Decile: "Explicame en espanol simple que esta pasando y que tengo que hacer"

**"El sitio se ve raro en celular":**
> Decile a Claude: "El sitio se ve mal en celular. Revisa el responsive y arreglalo"

**Cualquier otro problema:**
> Escribile a Nico. O simplemente describile el problema a Claude — casi siempre puede resolverlo solo.

---

## Referencia rapida — que decirle a Claude

| Quiero... | Le digo a Claude... |
|-----------|-------------------|
| Cambiar un texto | "Cambia [texto actual] por [texto nuevo] en la pagina de [X]" |
| Agregar un evento | "Agrega un evento: [nombre], [fecha], [lugar]" |
| Agregar una marca | "Agrega la marca [nombre], categoria [X], de [pais]" |
| Agregar una foto | (arrastra la foto al chat) "Usa esta foto en [donde]" |
| Cambiar un color | "Cambia el color de [que cosa] a [que color]" |
| Publicar los cambios | "Sube los cambios al sitio" |
| Deshacer un cambio | "Deshaz el ultimo cambio" |
| Crear un articulo | "Crea un articulo en la pagina de [X] con titulo [Y] y texto [Z]" |
| Agregar un video | "Agrega este video de YouTube [URL] en la pagina de [X]" |
| Agregar un PDF | (arrastra el PDF al chat) "Ponlo como descarga en [donde]" |
| Empezar el dia | "Trae los cambios mas recientes del sitio antes de empezar" |
| Revisar en celular | "Verifica que el sitio se vea bien en celular" |
| Problema con el sitio | "El sitio tiene un problema: [describe que pasa]" |

---

## Informacion tecnica (solo si Claude te la pide)

Si Claude te hace alguna pregunta tecnica, esta informacion puede ser util. No necesitas entenderla — simplemente pegala en el chat si te la pide:

- Repositorio: https://github.com/zalucinc/mila
- Dominio: madeinlatinamerica.com
- URL de preview Vercel: https://mila-xi-six.vercel.app/
- Deploy automatico con Vercel en push a la rama `main`
- Sitio estatico (HTML + CSS + JS, sin backend ni base de datos)
- Archivos principales: index.html, culture.html, fashion.html, rsvp.html, studio.html, styles.css, motion.js
- Imagenes en la carpeta `assets/`
- DNS del dominio apunta a Vercel (configurado por Nico)

---

*Guia creada para el equipo MILA. Ultima actualizacion: junio 2026.*
*Si tienes dudas, escribile a Nico o simplemente preguntale a Claude — el te ayuda.*
