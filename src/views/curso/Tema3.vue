<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Ética y responsabilidad en el desarrollo de IA'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      p La ética en el desarrollo y uso de la inteligencia artificial (IA) es un tema central en el debate actual sobre tecnología y sociedad, pues implica garantizar que las soluciones basadas en IA respeten los derechos humanos, promuevan la equidad y actúen con transparencia y responsabilidad.
  

      .bg-full-width.bg-color-6.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up").text-white Aspectos éticos más relevantes
              p.mb-4(data-aos="fade-right") En el PDF Aspectos éticos más relevantes, se examinan los principales desafíos y principios que deben guiar el diseño, implementación y regulación de sistemas de IA, abordando temas como la privacidad, los sesgos, la autonomía humana y la rendición de cuentas. Este enfoque ético es clave para construir tecnologías confiables, seguras y alineadas con el bienestar colectivo.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Aspectos éticos más relevantes
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/1.png', alt='')


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Principales dilemas éticos

      p Conozcamos ahora cuáles son los principales dilemas éticos:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7 
                h4 Discriminación algorítmica
                p Los sistemas de IA aprenden de datos, y si esos datos contienen prejuicios históricos (de género, raza, clase, etc.), la IA puede replicarlos o incluso amplificarlos.
                p #[strong Ejemplo.] Un algoritmo de contratación que discrimina a mujeres porque los datos históricos favorecen a hombres.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7
                h4 Privacidad y vigilancia
                p La IA requiere grandes cantidades de datos. Esto plantea riesgos sobre cómo se recopilan, almacenan y usan esos datos, especialmente cuando se trata de información personal o sensible.
                p #[strong Ejemplo.] Reconocimiento facial masivo sin consentimiento en espacios públicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-3.png")
              .col-lg-7
                h4 Falta de transparencia
                p Muchos sistemas de IA funcionan como "cajas negras", donde ni los usuarios ni los desarrolladores pueden explicar exactamente cómo se toman las decisiones.
                p #[strong Ejemplo.] Un algoritmo bancario que rechaza un préstamo sin explicación clara.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-3.png")
              .col-lg-7
                h4 Responsabilidad difusa
                p Cuando una IA comete un error grave (por ejemplo, en salud, transporte o justicia), no siempre está claro quién debe asumir la responsabilidad: ¿el desarrollador? ¿la empresa? ¿el usuario?
      
      .bg-full-width-2.bg-fondo-5
        .px-4.px-md-5.py-4

          #t_3_2.titulo-segundo(data-aos="flip-up")
            h2 #[span 3.2] ¿Qué significa ser responsable en IA?

          p La responsabilidad en IA implica asumir las consecuencias éticas, sociales y legales de las decisiones tomadas por los sistemas inteligentes. Un enfoque responsable requiere:


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/2.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Diseñar con intención ética
                p.mb-0.text-center Anticipar riesgos desde la concepción del sistema.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/3.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Evaluar el impacto social
                p.mb-0.text-center Considerar a quién beneficia y a quién puede perjudicar la IA.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Rendir cuentas
                p.mb-0.text-center Establecer mecanismos para investigar y responder ante fallos.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Incluir diversidad de voces
                p.mb-0.text-center Incorporar múltiples perspectivas en el diseño de la IA, especialmente de comunidades vulnerables o minorías.

      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] 3.3 Propuestas y marcos para una IA ética



      .bg-full-width.bg-color-8
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg
              p Diversas organizaciones internacionales han propuesto principios comunes para el desarrollo ético de la IA:
              ul.lista-ul--color.color-dark.mb-4
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | #[strong OCDE.] Recomendaciones sobre IA centrada en el ser humano, transparente, segura y equitativa.

                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | #[strong Unión Europea.] Directrices para una IA confiable (trustworthy AI), con enfoque en derechos fundamentales.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong UNESCO.] Marco ético global para la IA, con énfasis en la inclusión y la sostenibilidad.
             

            .col-lg-auto
              img(src="@/assets/curso/tema3/6.svg", style="max-width: 400px").mx-auto      


      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/7.svg", style="max-width: 400px").mx-auto
            .col-lg
              p A nivel práctico, también se utilizan herramientas como:
              ul.lista-ul--color.color-dark.mb-4
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | #[strong Model Cards.] Documentos que explican el propósito, los límites y los datos usados en un modelo de IA.

                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | #[strong Impact Assessments.] Evaluaciones de impacto algorítmico antes del despliegue.

                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong Auditorías externas.] Evaluaciones independientes para revisar riesgos éticos y técnicos.

              

      .bg-full-width.bg-color-9
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg
              .bg-color-5.p-4
                p.mb-0 El desarrollo de la Inteligencia Artificial no puede limitarse a cuestiones técnicas. Implica decisiones con un profundo impacto humano, social y ético. Por eso, los creadores de IA deben asumir una doble responsabilidad: diseñar sistemas que funcionen bien y que estén alineados con valores éticos universales como la justicia, la equidad, la dignidad y la transparencia, la ética no debe verse como un obstáculo a la innovación, sino como su mejor aliada para garantizar que la IA contribuya a un futuro más justo, humano y sostenible.

            .col-lg-auto
              img(src="@/assets/curso/tema3/8.png", style="max-width: 505px").mx-auto


      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] ¿Qué es la ética en la IA?
      

      p La ética en la IA se refiere al conjunto de principios y valores que deben guiar el diseño, la implementación y el uso de tecnologías inteligentes, el objetivo es asegurar que la IA:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2.text-white 01
                p.mb-0 Respete los derechos humanos.
      
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2.text-white 02
                p.mb-0 Promueva el bienestar común.
      

        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2.text-white 03
                p.mb-0 Sea transparente y explicable.


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2.text-white 04
                p.mb-0 Evite discriminaciones o daños no deseados.
      
        .col-lg-4
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2.text-white 05
                p.mb-0 Está sujeto a mecanismos de rendición de cuentas.


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 Estos principios no son solo ideales filosóficos, sino también directrices prácticas que deben traducirse en normas, buenas prácticas y regulaciones concretas.

      
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/57582" target="_blank" rel="noopener noreferrer") Benítez Iglésias, R. (2014). Inteligencia artificial avanzada: ( ed.). Editorial UOC. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/mUYGZV3Wa80?si=qDEyABmKzCZ3HbYy" target="_blank" rel="noopener noreferrer") Diego- Enseñando Inteligencia Artificial. (2021, 29 de diciembre) Sesgos en los algoritmos de inteligencia artificial.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones representa un ejemplo de sesgo algorítmico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un algoritmo que mejora su precisión con el tiempo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un sistema de IA que ofrece mejores resultados a ciertos grupos sociales por haber sido entrenado con datos desbalanceados.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Un programa que optimiza rutas de entrega para ahorrar combustible.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Un chatbot que responde con rapidez a consultas de usuarios.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es una de las principales oportunidades que brinda la automatización basada en IA?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La eliminación completa del error humano en todos los contextos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La capacidad de reemplazar completamente al juicio humano en todas las decisiones.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'El aumento de la eficiencia y reducción de costos operativos en procesos repetitivos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El aumento del desempleo estructural.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un desafío ético asociado al uso de IA en decisiones automatizadas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mejora en el acceso a servicios digitales.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Riesgo de discriminación hacia ciertos grupos por datos históricos sesgados.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Mayor capacidad de procesamiento de información.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Disminución del uso de papel en los procesos administrativos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué se busca al aplicar estrategias de mitigación de sesgos en IA?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Hacer que los algoritmos trabajen más rápido.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aumentar el consumo energético del sistema.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Reducir las desigualdades y mejorar la equidad en los resultados algorítmicos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Eliminar por completo la necesidad de intervención humana.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es una posible consecuencia negativa de la automatización sin una planificación adecuada?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mayor tiempo libre para los trabajadores.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reducción de errores humanos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Desplazamiento laboral y aumento de desigualdad.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Incremento en la creatividad humana.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
