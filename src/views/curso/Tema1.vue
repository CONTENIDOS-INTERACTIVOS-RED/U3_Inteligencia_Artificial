<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. IA y automatización: oportunidades y desafíos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p La inteligencia artificial y la automatización están transformando de manera acelerada el panorama laboral y productivo, generando tanto oportunidades como desafíos significativos.

    .bg-full-width.bg-color-6.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up").text-white IA y automatización: oportunidades y desafíos
            p.mb-4(data-aos="fade-right") En el PDF IA y automatización, se analizan los beneficios de estas tecnologías en términos de eficiencia e innovación, así como sus implicaciones sociales, éticas y económicas, especialmente en relación con el empleo, la formación del talento humano y la equidad en el acceso a sus beneficios. Este análisis permite comprender la necesidad de una transición responsable y estratégica hacia un entorno automatizado e inclusivo.

    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> IA y automatización: oportunidades y desafíos
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')
    


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Oportunidades de la IA y la automatización


    p Conozcamos cuáles son las oportunidades de la IA y la automatización.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7.order-lg-1
              h5 Aumento de la eficiencia
              p La automatización permite realizar tareas repetitivas de forma más rápida y con menos errores. En sectores como la manufactura, la logística o el análisis de datos, los sistemas automatizados superan en velocidad y precisión a los humanos.
              p #[b Ejemplo.] Robots en líneas de ensamblaje que operan 24/7 sin fatiga.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7.order-lg-1
              h5 Reducción de costos operativos
              p Una vez implementados, los sistemas de IA pueden generar ahorros significativos al reducir la necesidad de intervención humana y optimizar recursos.
              p #[b Ejemplo.] Chatbots que reemplazan parcialmente la atención al cliente, disminuyendo costos laborales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h5 Innovación en servicios y productos
              p La IA permite crear soluciones nuevas, personalizadas y más inteligentes. Se abren posibilidades en medicina personalizada, educación adaptativa, ciudades inteligentes y más.
              p #[b Ejemplo.] Algoritmos que detectan tumores en imágenes médicas con una precisión superior al promedio humano.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h5 Mejora en la toma de decisiones
              p La IA ayuda a procesar grandes volúmenes de datos y descubrir patrones que serían invisibles para los humanos, lo que mejora las decisiones estratégicas.
              p #[b Ejemplo.] Sistemas de predicción del clima o del mercado financiero.
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Desafíos de la IA y la automatización


    p Ahora, estudiemos los desafíos de la IA y la automatización.


    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Desplazamiento laboral")
            p Uno de los mayores retos es la pérdida de empleos debido a la automatización de tareas. Aunque se crean nuevos puestos, muchos trabajos tradicionales pueden desaparecer.
            p #[b Ejemplo.] Cajeros, choferes o trabajadores de fábricas reemplazados por máquinas inteligentes.
    
          .div(titulo="Aumento de la desigualdad")
            p El acceso desigual a la tecnología puede agravar brechas sociales y económicas. Las empresas con más recursos pueden automatizar más rápido, dejando atrás a pequeñas organizaciones y trabajadores poco calificados.
            p #[b Ejemplo.] Grandes corporaciones optimizan sus procesos con IA mientras las pymes no pueden competir.
    
          .div(titulo="Falta de transparencia y rendición de cuentas")
            p Los algoritmos de IA a menudo funcionan como “cajas negras”, donde ni los usuarios ni los desarrolladores pueden explicar exactamente cómo se toman las decisiones.
            p #[b Ejemplo.] Sistemas de recomendación que promueven contenido sin saber por qué o a quién benefician.

    
          .div(titulo="Riesgos éticos y de privacidad")
            p El uso masivo de datos personales para entrenar algoritmos plantea riesgos en cuanto al respeto a la privacidad, la vigilancia masiva y la toma de decisiones sesgadas.
            p #[b Ejemplo.] IA que decide a quién dar un crédito usando variables opacas que pueden estar indirectamente sesgadas.

          .div(titulo="Dependencia tecnológica")
            p La automatización excesiva puede generar una pérdida de habilidades humanas y una dependencia peligrosa de sistemas que, si fallan, pueden tener consecuencias graves.
            p #[b Ejemplo.] Un hospital que depende totalmente de un sistema automatizado para distribuir medicamentos.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
    






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
