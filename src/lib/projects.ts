// ═══════════════════════════════════════════════════════════════
// PROJECTS DATA — Edit this file to manage all portfolio projects
//
// TO ADD A NEW PROJECT: Copy one project object, paste it below,
//   give it a unique slug, and fill in your content.
// TO REMOVE A PROJECT: Delete the entire project object.
// TO REORDER: Change the order of the objects in the array.
// ═══════════════════════════════════════════════════════════════

export type SectionType =
  | 'text'
  | 'image'
  | 'image-text'
  | 'gallery'
  | 'quote'
  | 'metadata'
  | 'reflection'
  | 'full-image'

export interface ProjectSection {
  type: SectionType
  eyebrow?: string
  title?: string
  body?: string
  src?: string
  alt?: string
  caption?: string
  imageSrc?: string
  imageAlt?: string
  imageLeft?: boolean
  images?: { src: string; alt: string; caption?: string }[]
  cols?: 2 | 3
  items?: { label: string; value: string }[]
}

export interface Project {
  slug: string
  featured: boolean
  order: number
  year: string
  category: {
    en: string
    es: string
  }
  title: {
    en: string
    es: string
  }
  shortDescription: {
    en: string
    es: string
  }
  heroImage: string
  heroImageAlt: string
  thumbnail: string
  thumbnailAlt: string
  tags: string[]
  credits?: string
  sections: {
    en: ProjectSection[]
    es: ProjectSection[]
  }
}

// ═══════════════════════════════════════════════════════════════
// PROJECT 1: MINI BON YURT
// ═══════════════════════════════════════════════════════════════
const miniBonyurt: Project = {
  slug: 'mini-bonyurt',
  featured: true,
  order: 1,
  year: '2025',
  category: {
    en: 'Experience Design',
    es: 'Diseño de Experiencias',
  },
  title: {
    en: 'Mini Bon Yurt Experience Design',
    es: 'Diseño de experiencias para Mini Bon Yurt',
  },
  shortDescription: {
    en: 'A physical and digital brand experience designed to strengthen the bond between children and Mini Bon Yurt through play, movement, and storytelling.',
    es: 'Una experiencia de marca física y digital diseñada para fortalecer el vínculo entre los niños y Mini Bon Yurt a través del juego, el movimiento y la narrativa.',
  },
  heroImage: '/images/projects/mini-bonyurt/hero.jpg',
  heroImageAlt: 'Mini Bon Yurt experience hero image',
  thumbnail: '/images/projects/mini-bonyurt/thumbnail.jpg',
  thumbnailAlt: 'Mini Bon Yurt project thumbnail',
  tags: ['Experience Design', 'Interaction Design', 'Brand Experience', 'User Journey'],
  credits: 'Brand: Mini Bon Yurt / Alpina',

  sections: {
    en: [
      {
        type: 'metadata',
        items: [
          { label: 'Year', value: '2025' },
          { label: 'Category', value: 'Experience Design' },
          { label: 'Context', value: 'Brand experience / Interactive proposal' },
          { label: 'Role', value: 'Industrial Designer' },
        ],
      },
      {
        type: 'text',
        eyebrow: 'Context',
        title: 'Designing a playful brand encounter for children',
        body: 'This project was conceived as an experience capable of bringing children closer to the Mini Bon Yurt universe through interaction, play, and narrative. The proposal goes beyond packaging or point-of-sale visibility: it imagines a complete journey where the brand becomes something children can move through, participate in, and remember.',
      },
      {
        type: 'image',
        src: '/images/projects/mini-bonyurt/context.jpg',
        alt: 'Mini Bon Yurt context and touchpoints',
        caption: 'The experience begins at the point of sale and unfolds through a sequence of physical and digital interactions.',
      },
      {
        type: 'text',
        eyebrow: 'Experience Journey',
        title: 'From first contact to an extended memory of the brand',
        body: 'The experience was structured in three moments. It begins at the store, where children first encounter the product and its visual narrative. It then develops through a central interactive activity that combines physical participation and digital feedback. Finally, it closes with a collectible outcome designed to extend the experience beyond the immediate encounter.',
      },
      {
        type: 'full-image',
        src: '/images/projects/mini-bonyurt/journey.jpg',
        alt: 'Mini Bon Yurt experience journey map',
      },
      {
        type: 'text',
        eyebrow: 'Interaction',
        title: 'A game that turns movement into participation',
        body: 'At the core of the proposal is an embodied game in which children jump from side to side to move their Mini Bon Yurt cup and catch the corresponding topping. The activity transforms the brand into a playful system, inviting children to interact physically while receiving instant visual feedback.',
      },
      {
        type: 'image-text',
        imageSrc: '/images/projects/mini-bonyurt/game.jpg',
        imageAlt: 'Interactive physical and digital Mini Bon Yurt game',
        imageLeft: true,
        eyebrow: 'System',
        title: 'Physical space, digital logic, and sensory response',
        body: 'The proposal was designed as a coordinated experience system. It integrates a physical setup, visual instructions, sensors, and a digital screen to create a seamless interaction. This structure allows the game to feel intuitive and dynamic while reinforcing the narrative identity of the brand.',
      },
      {
        type: 'gallery',
        images: [
          {
            src: '/images/projects/mini-bonyurt/system-1.jpg',
            alt: 'Technical and spatial system for Mini Bon Yurt experience',
            caption: 'Sensor layout, movement logic, and spatial flow.',
          },
          {
            src: '/images/projects/mini-bonyurt/system-2.jpg',
            alt: 'Mini Bon Yurt entry and exit flow',
            caption: 'The system was designed to guide entry, play, and exit clearly.',
          },
        ],
        cols: 2,
      },
      {
        type: 'text',
        eyebrow: 'Closure',
        title: 'Turning the end of the interaction into a lasting brand memory',
        body: 'To close the experience, collectible pins were proposed as a final reward. This gesture gives children a physical keepsake and extends the emotional connection with Mini Bon Yurt and Alpina beyond the moment of play. The experience, therefore, does not end at the screen or the product; it continues through memory and attachment.',
      },
      {
        type: 'full-image',
        src: '/images/projects/mini-bonyurt/final.jpg',
        alt: 'Final Mini Bon Yurt experience proposal',
      },
      {
        type: 'reflection',
        eyebrow: 'Reflection',
        title: 'Designing relationships, not just interactions',
        body: 'This project reinforced my interest in designing experiences that combine object, narrative, space, and user behavior. More than solving a functional problem, it explored how design can create emotional proximity between a brand and its audience through participation, rhythm, and play.',
      },
    ],
    es: [
      {
        type: 'metadata',
        items: [
          { label: 'Año', value: '2025' },
          { label: 'Categoría', value: 'Diseño de Experiencias' },
          { label: 'Contexto', value: 'Experiencia de marca / Propuesta interactiva' },
          { label: 'Rol', value: 'Diseñadora Industrial' },
        ],
      },
      {
        type: 'text',
        eyebrow: 'Contexto',
        title: 'Diseñar un encuentro lúdico entre la marca y los niños',
        body: 'Este proyecto fue concebido como una experiencia capaz de acercar a los niños al universo de Mini Bon Yurt a través de la interacción, el juego y la narrativa. La propuesta va más allá del empaque o de la visibilidad en el punto de venta: imagina un recorrido completo en el que la marca se convierte en algo que los niños pueden atravesar, vivir y recordar.',
      },
      {
        type: 'image',
        src: '/images/projects/mini-bonyurt/context.jpg',
        alt: 'Contexto y puntos de contacto de la experiencia Mini Bon Yurt',
        caption: 'La experiencia comienza en el punto de venta y se despliega en una secuencia de interacciones físicas y digitales.',
      },
      {
        type: 'text',
        eyebrow: 'Recorrido',
        title: 'Del primer contacto a una memoria extendida de la marca',
        body: 'La experiencia se estructuró en tres momentos. Inicia en el punto de venta, donde los niños entran en contacto con el producto y con su narrativa visual. Luego se desarrolla en una actividad central que combina participación física y respuesta digital. Finalmente, cierra con un resultado coleccionable pensado para extender la experiencia más allá del encuentro inmediato.',
      },
      {
        type: 'full-image',
        src: '/images/projects/mini-bonyurt/journey.jpg',
        alt: 'Mapa del recorrido de la experiencia Mini Bon Yurt',
      },
      {
        type: 'text',
        eyebrow: 'Interacción',
        title: 'Un juego que convierte el movimiento en participación',
        body: 'En el centro de la propuesta se encuentra un juego corporal en el que los niños saltan de lado a lado para mover su vasito de Mini Bon Yurt y atrapar el topping correspondiente. La actividad convierte la marca en un sistema lúdico, invitando a una interacción física con respuesta visual inmediata.',
      },
      {
        type: 'image-text',
        imageSrc: '/images/projects/mini-bonyurt/game.jpg',
        imageAlt: 'Juego físico y digital de Mini Bon Yurt',
        imageLeft: true,
        eyebrow: 'Sistema',
        title: 'Espacio físico, lógica digital y respuesta sensorial',
        body: 'La propuesta fue pensada como un sistema de experiencia coordinado. Integra una estructura física, instrucciones visuales, sensores y una pantalla digital para construir una interacción fluida. Esta organización permite que el juego se sienta intuitivo y dinámico, al tiempo que refuerza la identidad narrativa de la marca.',
      },
      {
        type: 'gallery',
        images: [
          {
            src: '/images/projects/mini-bonyurt/system-1.jpg',
            alt: 'Sistema técnico y espacial de la experiencia Mini Bon Yurt',
            caption: 'Disposición de sensores, lógica del movimiento y flujo espacial.',
          },
          {
            src: '/images/projects/mini-bonyurt/system-2.jpg',
            alt: 'Flujo de entrada y salida de la experiencia Mini Bon Yurt',
            caption: 'El sistema fue diseñado para guiar con claridad la entrada, el juego y la salida.',
          },
        ],
        cols: 2,
      },
      {
        type: 'text',
        eyebrow: 'Cierre',
        title: 'Convertir el final de la interacción en un recuerdo de marca',
        body: 'Como cierre de la experiencia se propusieron pines coleccionables como recompensa final. Este gesto permite que los niños se lleven un recuerdo físico y prolonguen el vínculo emocional con Mini Bon Yurt y Alpina más allá del momento de juego. La experiencia, por tanto, no termina en la pantalla ni en el producto; continúa en la memoria y en el afecto.',
      },
      {
        type: 'full-image',
        src: '/images/projects/mini-bonyurt/final.jpg',
        alt: 'Propuesta final de la experiencia Mini Bon Yurt',
      },
      {
        type: 'reflection',
        eyebrow: 'Reflexión',
        title: 'Diseñar relaciones, no solo interacciones',
        body: 'Este proyecto reforzó mi interés por diseñar experiencias que combinen objeto, narrativa, espacio y comportamiento del usuario. Más que resolver un problema funcional, exploró cómo el diseño puede construir cercanía emocional entre una marca y su audiencia a través de la participación, el ritmo y el juego.',
      },
    ],
  },
}

// ═══════════════════════════════════════════════════════════════
// PROJECT 2: FRAGMENTOS DE LA TIERRA
// ═══════════════════════════════════════════════════════════════
const fragmentos: Project = {
  slug: 'fragmentos-de-la-tierra',
  featured: true,
  order: 2,
  year: '2025',
  category: {
    en: 'Jewelry Design',
    es: 'Diseño de Joyería',
  },
  title: {
    en: 'Fragmentos de la Tierra',
    es: 'Fragmentos de la Tierra',
  },
  shortDescription: {
    en: 'A jewelry collection shaped by fossil memory, ancestral symbolism, and the idea that each piece carries the presence of something ancient.',
    es: 'Una colección de joyas atravesada por la memoria fósil, el simbolismo ancestral y la idea de que cada pieza porta la presencia de algo antiguo.',
  },
  heroImage: '/images/projects/fragmentos/hero.jpg',
  heroImageAlt: 'Fragmentos de la Tierra hero image',
  thumbnail: '/images/projects/fragmentos/thumbnail.jpg',
  thumbnailAlt: 'Fragmentos de la Tierra project thumbnail',
  tags: ['Jewelry', 'Conceptual Design', 'Material Research', 'Craft'],
  credits: '',

  sections: {
    en: [
      {
        type: 'metadata',
        items: [
          { label: 'Year', value: '2025' },
          { label: 'Category', value: 'Jewelry Design' },
          { label: 'Context', value: 'Conceptual collection' },
          { label: 'Role', value: 'Designer' },
        ],
      },
      {
        type: 'text',
        eyebrow: 'Concept',
        title: 'Jewelry that feels unearthed rather than merely designed',
        body: 'Fragmentos de la Tierra was born from the idea that some forms seem to carry a memory older than us. The collection imagines jewelry as if it had been hidden under layers of time, waiting to be discovered. Each piece emerges as a fragment that connects the present body with an ancient presence.',
      },
      {
        type: 'full-image',
        src: '/images/projects/fragmentos/concept.jpg',
        alt: 'Concept image or moodboard for Fragmentos de la Tierra',
      },
      {
        type: 'text',
        eyebrow: 'Narrative',
        title: 'A collection shaped by memory, symbolism, and presence',
        body: 'More than decorative objects, these pieces were conceived as carriers of symbolic force. Their forms suggest fossils, traces, and irregular remains that evoke the memory of the earth. Wearing them is imagined not simply as adornment, but as invoking a connection with something ancestral, singular, and protective.',
      },
      {
        type: 'text',
        eyebrow: 'Research',
        title: 'Natural elements as emotional and formal guides',
        body: 'The project draws from cultural and material references linked to nature, erosion, and the passage of time. Each ring is associated with one of four elemental forces and with a guardian figure that embodies its character: jaguar as fire, armadillo as earth, condor as air, and medusa as water.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/fragmentos/research-1.jpg', alt: 'Fragmentos de la Tierra reference image 1' },
          { src: '/images/projects/fragmentos/research-2.jpg', alt: 'Fragmentos de la Tierra reference image 2' },
          { src: '/images/projects/fragmentos/research-3.jpg', alt: 'Fragmentos de la Tierra reference image 3' },
        ],
        cols: 3,
      },
      {
        type: 'text',
        eyebrow: 'Sketching & Ideation',
        title: 'Developing forms that preserve irregularity and uniqueness',
        body: 'The formal exploration focused on creating pieces that feel organic, imperfect, and alive with memory. Sketching became a way to search for forms that did not erase irregularity, but rather embraced it as part of the emotional identity of the collection.',
      },
      {
        type: 'full-image',
        src: '/images/projects/fragmentos/sketches.jpg',
        alt: 'Sketches for Fragmentos de la Tierra',
      },
      {
        type: 'text',
        eyebrow: 'Materials',
        title: 'Material as a vehicle for meaning',
        body: 'Material decisions were approached as narrative decisions. Texture, finish, and form were used to evoke erosion, fossils, and traces of time. The intention was for each piece to feel singular, as though no two could exist in exactly the same way.',
      },
      {
        type: 'image-text',
        imageSrc: '/images/projects/fragmentos/material.jpg',
        imageAlt: 'Material and texture detail from Fragmentos de la Tierra',
        imageLeft: true,
        eyebrow: 'Craft',
        title: 'Translating a poetic concept into wearable form',
        body: 'Craft was essential in turning the conceptual depth of the project into actual objects. The making process aimed to preserve the tactile, irregular, and intimate qualities of the collection, allowing each piece to maintain its own identity while still belonging to a coherent symbolic universe.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/fragmentos/final-1.jpg', alt: 'Fragmentos de la Tierra final piece 1' },
          { src: '/images/projects/fragmentos/final-2.jpg', alt: 'Fragmentos de la Tierra final piece 2' },
          { src: '/images/projects/fragmentos/final-3.jpg', alt: 'Fragmentos de la Tierra final piece 3' },
          { src: '/images/projects/fragmentos/final-4.jpg', alt: 'Fragmentos de la Tierra final piece 4' },
        ],
        cols: 2,
      },
      {
        type: 'text',
        eyebrow: 'Collection',
        title: 'A set of pieces connected by an ancestral logic',
        body: 'The final collection brings together objects that feel related not by repetition but by resonance. Each one embodies a different energy while participating in a shared language of earth, memory, and symbolic protection. The result is a body of work that is both intimate and mythic.',
      },
      {
        type: 'reflection',
        eyebrow: 'Reflection',
        title: 'Designing objects that communicate beyond function',
        body: 'This project deepened my interest in conceptual design and in the power of objects to carry narrative weight. It allowed me to explore jewelry not only as adornment, but as a medium for identity, emotion, and symbolic connection.',
      },
    ],
    es: [
      {
        type: 'metadata',
        items: [
          { label: 'Año', value: '2025' },
          { label: 'Categoría', value: 'Diseño de Joyería' },
          { label: 'Contexto', value: 'Colección conceptual' },
          { label: 'Rol', value: 'Diseñadora' },
        ],
      },
      {
        type: 'text',
        eyebrow: 'Concepto',
        title: 'Joyas que se sienten desenterradas más que simplemente diseñadas',
        body: 'Fragmentos de la Tierra nace de la idea de que existen formas que parecen contener una memoria más antigua que nosotros. La colección imagina joyas como si hubieran permanecido ocultas bajo capas de tiempo, esperando ser descubiertas. Cada pieza aparece como un fragmento que conecta el cuerpo presente con una presencia ancestral.',
      },
      {
        type: 'full-image',
        src: '/images/projects/fragmentos/concept.jpg',
        alt: 'Imagen conceptual o moodboard de Fragmentos de la Tierra',
      },
      {
        type: 'text',
        eyebrow: 'Narrativa',
        title: 'Una colección construida desde la memoria, el símbolo y la presencia',
        body: 'Más que objetos decorativos, estas piezas fueron concebidas como portadoras de una fuerza simbólica. Sus formas sugieren fósiles, rastros y restos irregulares que evocan la memoria de la tierra. Llevarlas no se plantea únicamente como un acto de adorno, sino como una forma de invocar una conexión con algo ancestral, singular y protector.',
      },
      {
        type: 'text',
        eyebrow: 'Investigación',
        title: 'Los elementos naturales como guías emocionales y formales',
        body: 'El proyecto toma referencias culturales y materiales ligadas a la naturaleza, la erosión y el paso del tiempo. Cada anillo se asocia con una fuerza elemental y con una figura guardiana que encarna su carácter: el jaguar como fuego, el armadillo como tierra, el cóndor como aire y la medusa como agua.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/fragmentos/research-1.jpg', alt: 'Imagen de referencia de Fragmentos de la Tierra 1' },
          { src: '/images/projects/fragmentos/research-2.jpg', alt: 'Imagen de referencia de Fragmentos de la Tierra 2' },
          { src: '/images/projects/fragmentos/research-3.jpg', alt: 'Imagen de referencia de Fragmentos de la Tierra 3' },
        ],
        cols: 3,
      },
      {
        type: 'text',
        eyebrow: 'Bocetos e Ideación',
        title: 'Desarrollar formas que conserven la irregularidad y la singularidad',
        body: 'La exploración formal se enfocó en crear piezas que se sintieran orgánicas, imperfectas y cargadas de memoria. El bocetaje fue una manera de buscar formas que no borraran la irregularidad, sino que la asumieran como parte de la identidad emocional de la colección.',
      },
      {
        type: 'full-image',
        src: '/images/projects/fragmentos/sketches.jpg',
        alt: 'Bocetos de Fragmentos de la Tierra',
      },
      {
        type: 'text',
        eyebrow: 'Materiales',
        title: 'El material como vehículo de significado',
        body: 'Las decisiones materiales se abordaron como decisiones narrativas. La textura, el acabado y la forma fueron utilizados para evocar erosión, fósiles y huellas del tiempo. La intención era que cada pieza se sintiera singular, como si no pudiera existir otra exactamente igual.',
      },
      {
        type: 'image-text',
        imageSrc: '/images/projects/fragmentos/material.jpg',
        imageAlt: 'Detalle de material y textura de Fragmentos de la Tierra',
        imageLeft: true,
        eyebrow: 'Oficio',
        title: 'Traducir un concepto poético en una forma utilizable',
        body: 'El oficio fue fundamental para convertir la profundidad conceptual del proyecto en objetos concretos. El proceso de fabricación buscó preservar las cualidades táctiles, irregulares e íntimas de la colección, permitiendo que cada pieza mantuviera su identidad propia sin perder coherencia dentro del universo simbólico general.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/fragmentos/final-1.jpg', alt: 'Pieza final de Fragmentos de la Tierra 1' },
          { src: '/images/projects/fragmentos/final-2.jpg', alt: 'Pieza final de Fragmentos de la Tierra 2' },
          { src: '/images/projects/fragmentos/final-3.jpg', alt: 'Pieza final de Fragmentos de la Tierra 3' },
          { src: '/images/projects/fragmentos/final-4.jpg', alt: 'Pieza final de Fragmentos de la Tierra 4' },
        ],
        cols: 2,
      },
      {
        type: 'text',
        eyebrow: 'Colección',
        title: 'Un conjunto de piezas unidas por una lógica ancestral',
        body: 'La colección final reúne objetos que se sienten vinculados no por repetición, sino por resonancia. Cada uno encarna una energía distinta mientras participa de un lenguaje compartido de tierra, memoria y protección simbólica. El resultado es un cuerpo de trabajo íntimo y, al mismo tiempo, mítico.',
      },
      {
        type: 'reflection',
        eyebrow: 'Reflexión',
        title: 'Diseñar objetos que comuniquen más allá de la función',
        body: 'Este proyecto profundizó mi interés por el diseño conceptual y por la capacidad de los objetos para cargar una narrativa. Me permitió explorar la joyería no solo como adorno, sino como un medio para construir identidad, emoción y conexión simbólica.',
      },
    ],
  },
}

// ═══════════════════════════════════════════════════════════════
// PROJECT 3: HELEONOR
// ═══════════════════════════════════════════════════════════════
const heleonor: Project = {
  slug: 'heleonor',
  featured: true,
  order: 3,
  year: '2024',
  category: {
    en: 'Fashion Accessories',
    es: 'Accesorios de Moda',
  },
  title: {
    en: 'Heleonor',
    es: 'Heleonor',
  },
  shortDescription: {
    en: 'A collection for Mario Hernández that combines luxury and versatility through transformable, unisex pieces designed to elevate everyday outfits.',
    es: 'Una colección para Mario Hernández que combina lujo y versatilidad a través de piezas transformables y unisex pensadas para elevar los outfits cotidianos.',
  },
  heroImage: '/images/projects/heleonor/hero.jpg',
  heroImageAlt: 'Heleonor collection hero image',
  thumbnail: '/images/projects/heleonor/thumbnail.jpg',
  thumbnailAlt: 'Heleonor project thumbnail',
  tags: ['Fashion Accessories', 'Luxury', 'Versatility', 'Transformable Design'],
  credits: 'Brand: Mario Hernández',

  sections: {
    en: [
      {
        type: 'metadata',
        items: [
          { label: 'Year', value: '2024' },
          { label: 'Category', value: 'Fashion Accessories' },
          { label: 'Context', value: 'Collection for Mario Hernández' },
          { label: 'Role', value: 'Designer' },
        ],
      },
      {
        type: 'text',
        eyebrow: 'Context',
        title: 'A collection built around transformation and everyday sophistication',
        body: 'Heleonor is a collection developed for Mario Hernández that explores how accessories can move between different contexts of use without losing elegance. The proposal understands luxury not as excess, but as the capacity of a piece to adapt, accompany, and elevate daily life.',
      },
      {
        type: 'full-image',
        src: '/images/projects/heleonor/context.jpg',
        alt: 'Heleonor collection context image',
      },
      {
        type: 'text',
        eyebrow: 'Concept',
        title: 'Versatility as a language of luxury',
        body: 'The collection is inspired by the idea of transformation. Its pieces are conceived as unisex objects capable of adapting to different moments, from a more casual scenario to a special occasion. This flexibility becomes the conceptual core of the project and defines its relationship with style, identity, and use.',
      },
      {
        type: 'text',
        eyebrow: 'Process',
        title: 'Designing pieces that shift without losing coherence',
        body: 'The design process focused on balancing visual refinement with adaptability. The challenge was to create accessories that could transform or serve multiple purposes while maintaining a strong, cohesive identity. This required careful attention to proportion, detail, and the emotional role these objects play in everyday styling.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/heleonor/research-1.jpg', alt: 'Heleonor research and reference image 1' },
          { src: '/images/projects/heleonor/research-2.jpg', alt: 'Heleonor research and reference image 2' },
        ],
        cols: 2,
      },
      {
        type: 'image-text',
        imageSrc: '/images/projects/heleonor/process.jpg',
        imageAlt: 'Heleonor process image',
        imageLeft: false,
        eyebrow: 'Refinement',
        title: 'Between function, styling, and presence',
        body: 'A key part of the project was understanding how transformation could become desirable, intuitive, and visually integrated. The pieces were approached not only as functional accessories, but as elements that shape how a person presents themselves and inhabits different occasions.',
      },
      {
        type: 'full-image',
        src: '/images/projects/heleonor/final.jpg',
        alt: 'Heleonor final collection image',
      },
      {
        type: 'text',
        eyebrow: 'Final Outcome',
        title: 'A collection that elevates everyday dressing through adaptability',
        body: 'The final proposal brings together pieces that merge utility, elegance, and identity. Heleonor presents luxury through transformation: objects that adapt to multiple scenarios while maintaining sophistication, coherence, and emotional value.',
      },
      {
        type: 'reflection',
        eyebrow: 'Reflection',
        title: 'Designing accessories as expressions of lifestyle',
        body: 'This project expanded my interest in accessories as objects that sit between product, fashion, and identity. It confirmed the importance of versatility as a design value and allowed me to explore how transformation can be both functional and aspirational.',
      },
    ],
    es: [
      {
        type: 'metadata',
        items: [
          { label: 'Año', value: '2024' },
          { label: 'Categoría', value: 'Accesorios de Moda' },
          { label: 'Contexto', value: 'Colección para Mario Hernández' },
          { label: 'Rol', value: 'Diseñadora' },
        ],
      },
      {
        type: 'text',
        eyebrow: 'Contexto',
        title: 'Una colección construida desde la transformación y la sofisticación cotidiana',
        body: 'Heleonor es una colección desarrollada para Mario Hernández que explora cómo los accesorios pueden desplazarse entre distintos contextos de uso sin perder elegancia. La propuesta entiende el lujo no como exceso, sino como la capacidad de una pieza para adaptarse, acompañar y elevar la vida diaria.',
      },
      {
        type: 'full-image',
        src: '/images/projects/heleonor/context.jpg',
        alt: 'Imagen de contexto de la colección Heleonor',
      },
      {
        type: 'text',
        eyebrow: 'Concepto',
        title: 'La versatilidad como lenguaje del lujo',
        body: 'La colección se inspira en la idea de transformación. Sus piezas se conciben como objetos unisex capaces de adaptarse a diferentes momentos, desde un escenario más casual hasta una ocasión especial. Esa flexibilidad se convierte en el núcleo conceptual del proyecto y define su relación con el estilo, la identidad y el uso.',
      },
      {
        type: 'text',
        eyebrow: 'Proceso',
        title: 'Diseñar piezas que cambian sin perder coherencia',
        body: 'El proceso de diseño se centró en equilibrar refinamiento visual y adaptabilidad. El reto consistía en crear accesorios que pudieran transformarse o cumplir distintos usos sin perder una identidad clara y cohesionada. Esto exigió una atención cuidadosa a la proporción, al detalle y al rol emocional que estos objetos tienen dentro del vestir cotidiano.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/heleonor/research-1.jpg', alt: 'Imagen de investigación y referencia de Heleonor 1' },
          { src: '/images/projects/heleonor/research-2.jpg', alt: 'Imagen de investigación y referencia de Heleonor 2' },
        ],
        cols: 2,
      },
      {
        type: 'image-text',
        imageSrc: '/images/projects/heleonor/process.jpg',
        imageAlt: 'Imagen del proceso de Heleonor',
        imageLeft: false,
        eyebrow: 'Refinamiento',
        title: 'Entre función, estilización y presencia',
        body: 'Una parte clave del proyecto fue entender cómo la transformación podía volverse deseable, intuitiva y visualmente integrada. Las piezas se abordaron no solo como accesorios funcionales, sino como elementos que configuran la manera en que una persona se presenta y habita distintas ocasiones.',
      },
      {
        type: 'full-image',
        src: '/images/projects/heleonor/final.jpg',
        alt: 'Imagen final de la colección Heleonor',
      },
      {
        type: 'text',
        eyebrow: 'Resultado Final',
        title: 'Una colección que eleva el vestir cotidiano a través de la adaptabilidad',
        body: 'La propuesta final reúne piezas que integran utilidad, elegancia e identidad. Heleonor presenta el lujo a través de la transformación: objetos que se adaptan a múltiples escenarios manteniendo sofisticación, coherencia y valor emocional.',
      },
      {
        type: 'reflection',
        eyebrow: 'Reflexión',
        title: 'Diseñar accesorios como expresiones de estilo de vida',
        body: 'Este proyecto amplió mi interés por los accesorios como objetos que se sitúan entre producto, moda e identidad. Confirmó la importancia de la versatilidad como valor de diseño y me permitió explorar cómo la transformación puede ser al mismo tiempo funcional y aspiracional.',
      },
    ],
  },
}

// ─── Export all projects ──────────────────────────────────────
export const projects: Project[] = [miniBonyurt, fragmentos, heleonor]

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

export function getAllProjectsSorted(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}