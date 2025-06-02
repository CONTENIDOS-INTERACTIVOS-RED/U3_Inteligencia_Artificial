export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Impacto de la IA en la sociedad y la ética',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'IA y automatización: oportunidades y desafíos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Oportunidades de la IA y la automatización',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Desafíos de la IA y la automatización',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sesgos en los algoritmos: cómo se generan y sus implicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios claves',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Naturaleza de los sesgos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de sesgo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estrategias para mitigar los sesgos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ética y responsabilidad en el desarrollo de IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principales dilemas éticos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '¿Qué significa ser responsable en IA?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Propuestas y marcos para una IA ética',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '¿Qué es la ética en la IA?',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vicente Vírseda, J. A. González Arias, J. & Parra Rodríguez, F. J. (2019). Métodos de Data Science aplicados a la Economía y a la Dirección y Administración de Empresas: (ed.). UNED - Universidad Nacional de Educación a Distancia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122249',
    },
    {
      referencia:
        'Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: (ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744',
    },
    {
      referencia:
        'Benítez Iglesias, R. (2014). Inteligencia artificial avanzada: (ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57582',
    },
  ],
  glosario: [
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'Rama de la informática que desarrolla sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.',
    },
    {
      termino: 'Aprendizaje automático (Machine Learning)',
      significado:
        'Es una subárea de la IA que permite a las máquinas aprender a partir de datos sin ser programadas explícitamente.',
    },
    {
      termino: 'Ética en IA',
      significado:
        'Conjunto de principios y normas que guían el desarrollo y uso responsable de tecnologías de inteligencia artificial, asegurando que sus impactos sean beneficiosos y no dañinos para la sociedad.',
    },
    {
      termino: 'Regulación tecnológica',
      significado:
        'Conjunto de leyes, normas y políticas diseñadas para guiar y controlar el desarrollo, uso y consecuencias de las tecnologías emergentes, como la IA.',
    },
    {
      termino: 'Responsabilidad algorítmica',
      significado:
        'Principio que establece que los desarrolladores y usuarios de sistemas de IA deben ser responsables de las decisiones y consecuencias derivadas del uso de dichos sistemas.',
    },
    {
      termino: 'Automatización',
      significado:
        'Es el uso de tecnología para realizar tareas con mínima o ninguna intervención humana, mejorando la eficiencia en procesos industriales, administrativos y de software.',
    },
    {
      termino: 'Sesgo algorítmico',
      significado:
        'Tendencia sistemática de un algoritmo a favorecer o perjudicar a ciertos grupos de personas, generalmente como resultado de datos de entrenamiento desbalanceados o decisiones de diseño.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Característica deseada en los sistemas de IA que implica que sus procesos de decisión puedan ser comprendidos y auditados por humanos.',
    },
    {
      termino: 'Caja negra',
      significado:
        'Término utilizado para describir sistemas de IA cuyos procesos internos no son fácilmente comprensibles o transparentes, lo que dificulta auditar sus decisiones.',
    },
    {
      termino: 'Explicabilidad',
      significado:
        'Capacidad de un modelo de IA para ofrecer razones comprensibles sobre cómo y por qué llegó a una decisión específica.',
    },
    {
      termino: 'Desigualdad tecnológica',
      significado:
        'Brecha que se genera cuando ciertos grupos tienen más acceso o beneficios respecto a otros en el uso y desarrollo de nuevas tecnologías.',
    },
  ],
}
