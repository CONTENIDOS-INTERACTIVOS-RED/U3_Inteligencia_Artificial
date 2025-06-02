<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Sesgos en los algoritmos: cómo se generan y sus implicaciones'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p La presencia de sesgos en los algoritmos de inteligencia artificial representa un desafío crítico para garantizar la equidad, la transparencia y la ética en su aplicación.


      .bg-full-width.bg-color-6.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up").text-white Sesgos en los algoritmos: cómo se generan y sus implicaciones
              p.mb-4(data-aos="fade-right") En el PDF Sesgos en los algoritmos, se examinan las fuentes de estos sesgos, sus efectos en ámbitos clave como la contratación, la justicia y la salud, así como las estrategias para mitigarlos mediante enfoques técnicos, éticos y normativos. Este análisis proporciona herramientas fundamentales para promover un uso más justo y responsable de la IA en la sociedad.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Sesgos en los algoritmos
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/1.png', alt='')
      
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Principios claves


      p La transparencia y la explicabilidad son principios éticos claves que son esenciales para el desarrollo responsable de la IA. La disponibilidad a gran escala de datos de comportamiento humano y las mayores capacidades de la inteligencia artificial están permitiendo a investigadores, empresas, profesionales y responsables políticos co-desarrollar y evaluar en el mundo real procesos algorítmicos de toma de decisiones diseñados para maximizar la equidad, la rendición de cuentas y la transparencia, respetando al mismo tiempo la privacidad. A continuación, conozcamos los principales:


      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 873px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="10%" y="64%" numero="+")
                  h5 01. Transparencia
                  p Posibilidad de comprender cómo funcionan los algoritmos de IA y cómo toman decisiones.
      
      
                .bg-color-white.box-shadow.p-3(x="75%" y="23%" numero="+")
                  h5 02. Explicabilidad
                  p Posibilidad de explicar las decisiones de la IA a las personas afectadas por ellas.
      

      
                .bg-color-white.box-shadow.p-3(x="90%" y="64%" numero="+")
                  h5 03. Rendición de cuentas
                  p Necesidad de que haya individuos u organizaciones responsables de las acciones de los sistemas de IA.
      

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La responsabilidad es otro principio ético clave que es esencial para el desarrollo responsable de la IA, que establece la rendición de cuentas se refiere a la necesidad de que haya individuos u organizaciones responsables de las acciones de los sistemas de IA.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 Esto requiere establecer líneas claras de responsabilidad y desarrollar mecanismos para garantizar que los sistemas de IA se utilizan de forma responsable y ética. Además, los principios éticos para la investigación en IA sanitaria hacen hincapié en la transparencia y la explicabilidad, en los estrictos protocolos que se adhieren a las leyes y reglamentos pertinentes, y en el compromiso de las partes interesadas, es importante extender estos elementos a los diferentes campos de aplicación de la IA.
      
      p La rendición de cuentas puede demostrarse mediante una gestión eficaz, una supervisión periódica, la mitigación de riesgos, la evaluación del impacto, la comunicación abierta y la reparación de daños.


      .row.mb-4
        .col-lg-8
          .bg-color-1.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start.mb-4
              .col-lg-auto
                img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Además, se debe garantizar la privacidad y la confidencialidad salvaguardando los datos contra el uso indebido mediante el establecimiento de directrices claras para la gestión de los datos, lo que mitiga los riesgos asociados a las filtraciones de datos y el acceso no autorizado.
      
            .row.align-items-start.mb-4
              .col-lg-auto
                img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Esto en sectores como el de la salud y financiero son de gran importancia, y el establecimiento de normas claras en estos campos, puede permitir generalizar sus resultados para aplicarlos en los demás sectores.


      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La colaboración entre investigadores, profesionales, responsables políticos y expertos en tecnología es esencial para superar los retos éticos y promover el uso responsable de la IA. Como los sistemas de IA son cada vez más sofisticados y están más integrados en la vida humana, es esencial tener en cuenta estas normas éticas para garantizar que la IA se utiliza de forma responsable y para el bien común. Por lo tanto, los desarrolladores de IA deben dar prioridad a estos principios durante todo el ciclo de vida de la IA, desde el diseño hasta el despliegue, para fomentar la confianza y maximizar los beneficios sociales de la IA.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 Estos principios son importantes porque permiten a las personas comprender y cuestionar las decisiones de la IA, y responsabilizar a los desarrolladores y usuarios de la IA por sus acciones.
      



      .bg-full-width.bg-fondo-2.mb-5
        .p-4.p-md-5

          #t_2_2.titulo-segundo(data-aos="flip-up")
            h2 #[span 2.2] Naturaleza de los sesgos

          .row.justify-content-center.align-items-center

            .col-lg
              p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente #[em podcast].

              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Naturaleza de los sesgos"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in", style="max-width: 610px;")


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Tipos de sesgo


      p Existen diferentes tipos de sesgo en los algoritmos de IA, a continuación, se tratarán de forma global los principales.


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", alt="").mb-4.mb-lg-0
        .col-lg-8

      
          AcordionA(tipo="b")#Acordeon1
            .div(titulo="Sesgo de representatividad")
              p Este fenómeno se produce cuando el sistema predictivo reduce la cantidad de datos utilizados por su naturaleza representativa, lo que puede influir negativamente en la validez estadístico-inductiva del modelo desarrollado.
              p
                strong Ejemplo. 
                | Podría ser el caso en el que se llevan a cabo devoluciones de productos en plataformas de comercio electrónico. Si se decide utilizar únicamente esta información para clasificar a un consumidor específico, se puede caer en la trampa de considerar a ese individuo como un cliente familiarizado. Esto ocurre debido a que el co-sistema en uso presenta un sesgo representativo que impacta negativamente en la línea de productos del sistema analizado, llevando a conclusiones que no reflejan la realidad general de todos los consumidores.
            .div(titulo="Sesgo de exterioridad (ambiental)")
              p Esto ocurre cuando se excluyen ciertas características relevantes, lo que puede comprometer la validez de diversas relaciones que están presentes entre el ambiente que produce dicho sesgo y el efecto específico que se busca predecir.
              p
                strong Ejemplo. 
                | En un sistema predictivo de créditos, si no se incorporan adecuadamente los resultados de investigaciones económicas pertinentes, esto podría llevar a una mala asignación de las reputaciones crediticias de los usuarios. Esto no solo afecta a los individuos, sino que puede ocasionar repercusiones más amplias en el sistema financiero. Además, el sesgo puede derivar en decisiones que no reflejan la realidad económica y social que rodea a los solicitantes de crédito.
            .div(titulo="Sesgo de explicación (determinismo funcional)")
              p Este fenómeno ocurre cuando dentro de los sistemas se excluyen grupos de individuos cuyos estímulos pueden ser similares o cuando, de alguna manera, se minimizan las predicciones realizadas por el sistema respecto a los resultados, lo que compromete de manera significativa la validez de las elecciones que realiza el usuario. Esto intenta incentivar para que esas elecciones se mantengan firmes y no se vean afectadas por las predicciones del sistema.
              p
                strong Ejemplo. 
                | Un ejemplo claro de esto es un sistema de entretenimiento cuyo software ha sido diseñado de tal manera que limita la exposición a ciertos contenidos, buscando influir en las preferencias del usuario y en sus decisiones subsiguientes.
      


      .row.align-items-start.mb-5
        .col-lg-8

      
          AcordionA(tipo="b")#Acordeon2
            .div(titulo="Sesgo de responsabilidad")
              p Este sesgo surge cuando no está claro quién debe asumir la responsabilidad por los resultados de un sistema de IA, especialmente cuando esos resultados son perjudiciales. La Inteligencia Artificial, por su naturaleza, implica muchas capas de participación: diseñadores, ingenieros, empresas, usuarios, reguladores, etc. Esta multiplicidad de actores puede provocar una especie de "zona gris" legal y ética.
              p
                strong Ejemplo. 
                | Si un coche autónomo atropella a una persona, ¿quién tiene la culpa? ¿El fabricante del coche? ¿El programador del algoritmo de frenado? ¿El dueño del vehículo?
            .div(titulo="Sesgo de datos")
              p Este es uno de los más comunes. Se produce cuando los datos usados para entrenar una IA son incompletos, desequilibrados o reflejan prejuicios existentes en la sociedad. El sistema aprende esos sesgos como si fueran verdades objetivas.
              p
                strong Ejemplo. 
                | Si un sistema de contratación se entrena con datos de empleados históricos, y estos reflejan una preferencia por hombres, el modelo aprenderá a preferir hombres.
            .div(titulo="Sesgo de confirmación")
              p Este sesgo ocurre cuando el modelo (o las personas que lo usan) interpreta los resultados de la IA de forma que refuerza sus creencias previas, en lugar de cuestionarlas. A menudo, los sistemas son entrenados o ajustados para confirmar hipótesis iniciales en lugar de desafiarlas.
              p
                strong Ejemplo. 
                | Un sistema predictivo policial que detecta más crimen en barrios pobres simplemente porque históricamente se ha hecho más vigilancia ahí. El modelo refuerza esa suposición y sigue enviando más patrullas, aunque el crimen real no haya aumentado.

      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")#Acordeon3
            .div(titulo="Sesgo de automatización")
              p Este sesgo se refiere a la tendencia de los humanos a confiar demasiado en decisiones automatizadas, incluso cuando tienen dudas o cuando esas decisiones contradicen la lógica o los hechos.
              p
                strong Ejemplo. 
                | Un médico sigue la recomendación de una IA diagnóstica, aunque su experiencia le indique lo contrario, simplemente porque "la IA debe saber más".
            .div(titulo="Sesgo del algoritmo")
              p Este sesgo aparece cuando las propias reglas, parámetros o arquitectura del algoritmo favorecen ciertos resultados. Incluso con buenos datos, un algoritmo mal diseñado puede producir decisiones injustas.
              p
                strong Ejemplo. 
                | Un sistema de búsqueda que prioriza resultados por número de clics, lo cual favorece información sensacionalista o sesgada.
            .div(titulo="Sesgo de observación")
              p Este sesgo se presenta cuando la forma en que se recolectan los datos introduce distorsiones, es decir, cuando la observación misma afecta el fenómeno o los datos obtenidos.
              p
                strong Ejemplo. 
                | Un sistema de salud que se entrena solo con datos de pacientes de hospitales privados probablemente no refleje los problemas de salud de poblaciones rurales o sin acceso.


      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En la siguiente tabla se relacionan los diferentes tipos de sesgo, una breve descripción, cuál es su origen principal y las consecuencias que pueden traer.
      
      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Comparativa de sesgos en algoritmos de IA


      .tabla-a.color-acento-contenido.mb-5
        table#Tabla1.bordes
          thead
            tr
              th.bg-color-tabla.text-white Nombre del sesgo
              th.bg-color-tabla.text-white Descripción
              th.bg-color-tabla.text-white Origen principal
              th.bg-color-tabla.text-white Consecuencias
          tbody
            tr
              td #[strong Responsabilidad]
              td Falta de claridad sobre quién responde por los errores de la IA.
              td Diseño organizacional.
              td Dificultad para rendir cuentas y corregir errores.
            tr
              td #[strong Exterioridad]
              td No se consideran efectos externos del sistema de IA.
              td Falta de evaluación sistémica.
              td Impactos sociales o ambientales no mitigados.
            tr
              td #[strong Explicación]
              td Decisiones poco transparentes o difíciles de entender.
              td Modelos opacos (caja negra).
              td Desconfianza, falta de supervisión.
            tr
              td #[strong Datos]
              td Datos sesgados o incompletos.
              td Recolección y selección de datos.
              td Resultados injustos o inexactos.
            tr
              td #[strong Confirmación]
              td Refuerzo de supuestos previos al analizar datos.
              td Interpretación humana.
              td Predicciones parciales o injustas.
            tr
              td #[strong Automatización]
              td Confianza excesiva en la IA.
              td Uso sin supervisión humana.
              td Errores no cuestionados.
            tr
              td #[strong Representación]
              td Grupos poco o mal representados en los datos.
              td Dataset desequilibrado.
              td Discriminación indirecta.
            tr
              td #[strong Algoritmo]
              td Sesgos por reglas o parámetros del algoritmo.
              td Diseño del modelo.
              td Resultados parcializados.
            tr
              td #[strong Observación]
              td Forma en que se recolectan los datos influye en los resultados.
              td Métodos de medición.
              td Poca generalización o precisión.
      

      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Estrategias para mitigar los sesgos


      .row.mb-5
        .col-lg-7
          .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
            p Mitigar los sesgos en algoritmos de Inteligencia Artificial, es clave para desarrollar sistemas más justos, seguros y responsables. Afortunadamente, hay muchas estrategias técnicas, éticas, legales y organizacionales, que se pueden aplicar en diferentes etapas del desarrollo de la IA.
            p.mb-0 A continuación, se describen las principales estrategias para mitigar sesgos en IA, agrupadas por fases del ciclo de vida del sistema.
          
        .col-lg-5.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in").mb-4.mb-lg-0
      
      
      .bg-full-width.bg-fondo-3.mb-5
        .p-4.p-md-5
          h2 Durante la recolección de datos
          p Los datos son la base del modelo. Si están sesgados, el sistema también lo estará, por esto se plantean las siguientes estrategias:


          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/15.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center Auditoría de datos
                p.mb-0.text-center Analizar los datos para detectar desbalance, omisiones o representaciones injustas.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/16.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center Diversificación de fuentes
                p.mb-0.text-center Incluir datos de distintas poblaciones, contextos geográficos, culturas, géneros, etc.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/17.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center Anotación cuidadosa
                p.mb-0.text-center Entrenar a los etiquetadores para evitar prejuicios inconscientes.
            
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/18.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center Datos sintéticos
                p.mb-0.text-center Generar ejemplos balanceados usando técnicas como GANs cuando hay escasez de ciertos grupos.



      h2 Durante el diseño y entrenamiento del modelo
      p En esta etapa es donde se establecen los parámetros y estructuras que pueden amplificar sesgos, algunas estrategias para mitigar los sesgos en esta fase, son:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-1.png")
              .col-lg-7
                h4 Equidad algorítmica
                p Aplicar técnicas de fairness como
                  em reweighing
                  | ,
                  em adversarial debiasing
                  | ,
                  em preprocessing
                  |  y
                  em postprocessing
                  |  para corregir sesgos matemáticamente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7
                h4 Regularización con métricas de equidad
                p Incluir penalizaciones cuando el modelo trata injustamente a ciertos grupos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7
                h4 Evaluación con métricas justas
                p Usar métricas como
                  em equalized odds
                  | ,
                  em demographic parity
                  |  o
                  em disparate impact
                  | , para medir discriminación algorítmica.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slide-4.png")
              .col-lg-7
                h4 Modelos interpretables
                p Favorecer modelos transparentes como árboles de decisión o regresiones, antes que cajas negras.
      


      h2 Durante el despliegue y uso
      p Un sistema puede funcionar bien durante el entrenamiento, pero fallar en la vida real si las condiciones cambian; por esto se plantean las siguientes estrategias, para ayudar a reducir estos riesgos:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Monitoreo constante
                p.mb-0 Revisar en tiempo real si el modelo sigue funcionando de forma justa y precisa.
      
        .col-lg-6
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 #[em Feedback] humano
                p.mb-0 Incluir supervisión humana para revisar decisiones críticas (como rechazos de crédito o diagnósticos médicos).

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Canales de apelación
                p.mb-0 Permitir a los usuarios cuestionar o apelar decisiones algorítmicas.
      
        .col-lg-6
          .bg-color-1.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Pruebas en contextos reales
                p.mb-0 Hacer pruebas piloto antes del despliegue total, para ver cómo el sistema impacta a diferentes comunidades.
      

      .bg-full-width-2.bg-fondo-4
        .px-4.px-md-5.py-4
          h2 A nivel organizacional y ético
          p Incluso los mejores modelos pueden fallar si no hay una cultura responsable, es por esto por lo que se deben implementar las siguientes estrategias:


          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/23.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Equipos diversos
                  p.mb-0.text-center Incluir personas de distintos géneros, culturas, profesiones y trayectorias, para reducir sesgos desde la concepción del sistema.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/24.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Ética por diseño
                  p.mb-0.text-center Integrar principios éticos (justicia, privacidad, responsabilidad) desde el principio del desarrollo.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/25.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Transparencia y documentación
                  p.mb-0.text-center Usar herramientas como <em>Model Cards y Datasheets for Datasets</em>, para documentar cómo se construyó el sistema y qué limitaciones tiene.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/26.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Cumplimiento legal
                  p.mb-0.text-center Asegurar que el sistema cumple con normas como el Reglamento General de Protección de Datos (GDPR), leyes antidiscriminatorias, etc.
          


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744" target="_blank" rel="noopener noreferrer") Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: ( ed.). Editorial UOC. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=ESLcIjf3Bs8" target="_blank" rel="noopener noreferrer") NEWMEDIA UFM. (2025, 20 de marzo). Perspectiva ética y social de la IA
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
