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
  | 'image-pair-toggle'

export interface ProjectSection {
  type: SectionType
  eyebrow?: string
  title?: string
  body?: string
  src?: string
  alt?: string
  caption?: string
  size?: 'full' | 'half'
  imageSrc?: string
  imageAlt?: string
  imageLeft?: boolean
  images?: { src: string; alt: string; caption?: string; hoverTitle?: string; hoverSubtitle?: string; hoverBody?: string }[]
  cols?: 2 | 3
  items?: { label: string; value: string }[]
  noBorderBottom?: boolean
  tightTop?: boolean
  panels?: { imageSrc?: string; imageAlt?: string; buttonLabel: string; body: string }[]
}

export type FilterCategory = 'experiencia' | 'producto' | 'identidad'

export interface Project {
  slug: string
  featured: boolean
  filterCategory: FilterCategory
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
  heroImageFit?: 'cover' | 'contain'
  heroImagePosition?: string
  thumbnail: string
  thumbnailAlt: string
  tags: string[]
  credits?: string
  sectionTitleFont?: 'display' | 'subtitle'
  sectionBodyFont?: 'display' | 'subtitle' | 'sans'
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
  filterCategory: 'experiencia',
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
  heroImage: '/images/projects/mini-bonyurt/Portada 2.png',
  heroImageAlt: 'Mini Bon Yurt experience hero image',
  heroImageFit: 'cover',
  heroImagePosition: 'center 60%',
  thumbnail: '/images/projects/mini-bonyurt/thumbnail.jpg',
  thumbnailAlt: 'Mini Bon Yurt project thumbnail',
  tags: [],
  credits: 'Brand: Mini Bon Yurt / Alpina',
  sectionTitleFont: 'display',
  sectionBodyFont: 'subtitle',

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
        title: 'A playful encounter between the product and children was designed',
        body: 'This project was conceived as an experience capable of bringing children closer to the Mini Bon Yurt universe through interaction, play, and narrative.\n\nThe proposal was born with the purpose of increasing Mini Bon Yurt sales at the La Cabaña Alpina point of sale in Sopó, creating an emotional connection between the product and children. Through an interactive play-based experience, the goal is for children to associate the brand with moments of fun, strengthening their affinity and brand recall. In this way, the experience not only drives purchase during the visit, but also encourages the desire to choose Mini Bon Yurt again on future occasions.',
      },
      {
        type: 'image-text',
        eyebrow: 'Experience Journey',
        title: 'The moments of the experience',
        body: 'The experience was structured in three moments. It begins at the store, where children first encounter the product and its visual narrative. It then develops through a central interactive activity that combines physical participation and digital feedback. Finally, it closes with a collectible outcome designed to extend the experience beyond the immediate encounter.',
        imageSrc: '/images/projects/mini-bonyurt/Momentos.png',
        imageAlt: 'Mini Bon Yurt experience moments',
        imageLeft: false,
      },
      {
        type: 'image-text',
        eyebrow: 'Moment 1',
        title: 'First contact at the point of sale',
        body: 'The experience begins inside La Cabaña Alpina in Sopó, specifically at the Mini Bon Yurt gondola. There, an advisor welcomes families and introduces the special activity taking place, explaining that children can participate by purchasing a Mini Bon Yurt x4 pack in their preferred flavor.\n\nOnce the purchase is made, a ticket is handed out at the register that serves as access to the experience. Upon leaving the point of sale, the interaction continues through a series of graphic elements and signage that guide families toward the activity space, sparking children\'s curiosity and building anticipation before the journey begins.',
        imageSrc: '/images/projects/mini-bonyurt/Inicio.png',
        imageAlt: 'First contact — Mini Bon Yurt',
        imageLeft: true,
      },
      {
        type: 'image-pair-toggle',
        eyebrow: 'Moment 2',
        panels: [
          {
            imageSrc: '',
            imageAlt: 'Digital game — Mini Bon Yurt',
            buttonLabel: 'Digital game',
            body: '[Description of the digital game]',
          },
          {
            imageSrc: '/images/projects/mini-bonyurt/fisico.png',
            imageAlt: 'Physical interaction — Mini Bon Yurt',
            buttonLabel: 'Physical interaction',
            body: 'The experience takes place inside one of the existing cabins at the venue, which is adapted to host the Mini BonYurt interactive activity. The interior is divided into three stations, each one styled with the visual identity of one of the three product flavors. This setup allows up to three children to participate simultaneously, each representing a different flavor throughout the activity.\n\nFacing the stations, a screen projects the video game in real time. Each participant has a motion controller placed on the floor of their station, equipped with vibration sensors. To control their character — a Mini BonYurt cup in their corresponding flavor — the children must move by making small jumps to the right or to the left. The sensors detect these movements and transmit them instantly to the system, which is connected to the screen via an HDMI interface, so that the players\' physical actions are immediately reflected in the game.\n\nThis interaction combines movement, coordination, and fun, turning the experience into an immersive activity that strengthens the bond between children and the brand.',
          },
        ],
      },
      {
        type: 'image-text',
        eyebrow: 'Moment 3',
        title: 'Closure and collectible memory',
        body: 'The experience concludes with the delivery of a collectible pin to each child, regardless of the result obtained in the game. This element serves as the closing of the activity and as a physical memento of the experience shared with Mini BonYurt and Alpina.\n\nThe collection consists of three pins, each one inspired by one of the Mini BonYurt flavors, encouraging children to return to complete the collection. In this way, the pin becomes an extension of the experience, strengthening brand recall beyond the visit.',
        imageSrc: '/images/projects/mini-bonyurt/fin.png',
        imageAlt: 'Moment 3 — Mini Bon Yurt',
        imageLeft: false,
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
        title: 'Se diseñó un encuentro lúdico entre el producto y los niños',
        body: 'Este proyecto fue concebido como una experiencia capaz de acercar a los niños al universo de Mini Bon Yurt a través de la interacción, el juego y la narrativa.\n\nLa propuesta nace con el propósito de incrementar las ventas de Mini BonYurt en el punto de venta de La Cabaña Alpina en Sopó, creando una conexión emocional entre el producto y los niños. A través de una experiencia interactiva basada en el juego, se busca que los pequeños asocien la marca con momentos de diversión, fortaleciendo su afinidad y recordación. De esta manera, la experiencia no solo impulsa la compra durante la visita, sino que también fomenta el deseo de volver a elegir Mini BonYurt en futuras ocasiones.',
      },
      {
        type: 'image-text',
        eyebrow: 'Recorrido',
        title: 'Los momentos de la experiencia',
        body: 'La experiencia se estructuró en tres momentos. Inicia en el punto de venta, donde los niños entran en contacto con el producto y con su narrativa visual. Luego se desarrolla en una actividad central que combina participación física y respuesta digital. Finalmente, cierra con un resultado coleccionable pensado para extender la experiencia más allá del encuentro inmediato.',
        imageSrc: '/images/projects/mini-bonyurt/Momentos.png',
        imageAlt: 'Momentos de la experiencia Mini Bon Yurt',
        imageLeft: false,
      },
      {
        type: 'image-text',
        eyebrow: 'Momento 1',
        title: 'Primer contacto en el punto de venta',
        body: 'La experiencia comienza desde el interior de La Cabaña Alpina en Sopó, específicamente en la góndola de Mini BonYurt. Allí, una asesora recibe a las familias y presenta la actividad especial que se está desarrollando, explicando que los niños podrán participar al adquirir un paquete de Mini BonYurt x4, del sabor de su preferencia.\n\nUna vez realizada la compra, en la caja se entrega una boleta que funciona como el acceso a la experiencia. Al salir del punto de venta, la interacción continúa mediante una serie de elementos gráficos y señalización que guían a las familias hacia el espacio de la actividad, despertando la curiosidad de los niños y generando expectativa antes de iniciar el recorrido.',
        imageSrc: '/images/projects/mini-bonyurt/Inicio.png',
        imageAlt: 'Primer contacto — Mini Bon Yurt',
        imageLeft: true,
      },
      {
        type: 'image-pair-toggle',
        eyebrow: 'Momento 2',
        panels: [
          {
            imageSrc: '',
            imageAlt: 'Juego digital — Mini Bon Yurt',
            buttonLabel: 'Juego digital',
            body: '[Descripción del juego digital]',
          },
          {
            imageSrc: '/images/projects/mini-bonyurt/fisico.png',
            imageAlt: 'Interacción física — Mini Bon Yurt',
            buttonLabel: 'Interacción física',
            body: 'La experiencia se desarrolla dentro de una de las cabañas existentes del espacio, la cual se adapta para albergar la actividad interactiva de Mini BonYurt. El interior se divide en tres estaciones, cada una ambientada con la identidad visual de cada uno de los tres sabores del producto. Esto permite que participen simultáneamente hasta tres niños, quienes representan un sabor diferente durante la dinámica.\n\nFrente a las estaciones se ubica una pantalla que proyecta el videojuego en tiempo real. Cada participante cuenta con un control de movimiento ubicado en el piso de su estación, equipado con sensores de vibración. Para controlar su personaje (un vasito de Mini BonYurt del sabor correspondiente) los niños deben desplazarse mediante pequeños saltos hacia la derecha o hacia la izquierda. Los sensores detectan estos movimientos y los transmiten instantáneamente al sistema, conectado a la pantalla mediante una interfaz HDMI, logrando que las acciones físicas de los jugadores se reflejen de forma inmediata en el juego.\n\nEsta interacción combina movimiento, coordinación y diversión, convirtiendo la experiencia en una actividad inmersiva que fortalece el vínculo de los niños con la marca.',
          },
        ],
      },
      {
        type: 'image-text',
        eyebrow: 'Momento 3',
        title: 'Cierre y recuerdo coleccionable',
        body: 'La experiencia concluye con la entrega de un pin coleccionable a cada niño, independientemente del resultado obtenido en el juego. Este elemento funciona como el cierre de la actividad y como un recuerdo físico de la experiencia vivida junto a Mini BonYurt y Alpina.\n\nLa colección está compuesta por tres pines, cada uno inspirado en uno de los sabores de Mini BonYurt, incentivando a los niños a regresar para completar la colección. De esta manera, el pin se convierte en una extensión de la experiencia, fortaleciendo la recordación de la marca más allá de la visita.',
        imageSrc: '/images/projects/mini-bonyurt/fin.png',
        imageAlt: 'Momento 3 — Mini Bon Yurt',
        imageLeft: false,
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
  filterCategory: 'producto',
  order: 2,
  year: '2025',
  category: {
    en: 'Jewelry Design',
    es: 'Diseño de Joyería',
  },
  title: {
    en: 'Fragments of the Earth',
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
  tags: [],
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
        title: 'More than a jewel, an amulet born from the memory of time.',
        body: 'A jewelry collection inspired by fossils that materializes the memory of the Earth through four ancestral guardians linked to the elements of fire, earth, air, and water. Through organic forms, textures that evoke natural vestiges, and an aesthetic language reminiscent of unearthed pieces, the proposal transforms jewelry into a symbolic object that transcends the ornamental and establishes an emotional connection between the wearer and the qualities of their guardian.',
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
        body: 'Fragmentos de la Tierra is born from the idea that time does not erase stories — it preserves them. Fossils are evidence that what once existed remains embedded in the memory of the Earth, hidden beneath layers of time until discovered again. Under this premise, the collection is conceived as a finding rather than a designed object: pieces that seem to have been unearthed, preserving the traces and textures of an ancestral past.\n\nEach piece in the collection materializes the presence of one of four ancestral guardians of nature, inspired by the elements that have shaped the world. Corazón de Jaguar, guardian of fire, represents courage, inner strength, and passion; Espíritu de Armadillo, guardian of earth, symbolizes protection, stability, and trust in one\'s own processes; Alma de Cóndor, guardian of air, evokes clarity, freedom, and the perspective to make decisions with wisdom; and Eco de Medusa, guardian of water, invites us to flow, heal, and connect with sensitivity. More than an accessory, each jewel acts as a symbolic amulet that accompanies the wearer, invoking the energy and qualities of the guardian it represents.\n\nThe irregularity of their forms responds to the authenticity of natural processes, making each piece unique. In this way, the collection conveys the idea that, just like fossils, each person carries an unrepeatable story marked by time. Fragmentos de la Tierra materializes that connection between past and present, turning the memory of nature into a personal and symbolic experience.',
      },
      {
        type: 'text',
        eyebrow: 'Research',
        title: 'Los Espíritus de la Tierra',
        body: 'The project draws from cultural and material references linked to nature, erosion, and the passage of time. Each ring is associated with one of four elemental forces and with a guardian figure that embodies its character: jaguar as fire, armadillo as earth, condor as air, and medusa as water.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/fragmentos/guardian-jaguar.jpg', alt: 'Corazón de Jaguar — Guardian of fire', hoverTitle: 'Heart of the Jaguar', hoverSubtitle: 'The fire that drives your essence', hoverBody: 'Inspired by the strength of the red jaguar, this guardian represents the fire element and symbolizes courage, determination, and passion. Its energy invites you to awaken your inner strength, face challenges with bravery, and move forward with the confidence of someone who recognizes their own power. Wearing it is a constant reminder that true drive is born from within.' },
          { src: '/images/projects/fragmentos/guardian-armadillo.jpg', alt: 'Espíritu de Armadillo — Guardian of earth', hoverTitle: 'Spirit of the Armadillo', hoverSubtitle: 'The earth that protects and strengthens', hoverBody: 'This guardian finds its origin in the calm and solidity of the earth. Inspired by the sacred armadillo, it evokes protection, stability, and connection with one\'s own roots. Its presence invites you to trust your personal processes, move forward with patience, and build from the security of a firm path, remembering that everything flourishes when the time is right.' },
          { src: '/images/projects/fragmentos/guardian-condor.jpg', alt: 'Alma de Cóndor — Guardian of air', hoverTitle: 'Soul of the Condor', hoverSubtitle: 'The air that expands your gaze', hoverBody: 'Representing the air element, the condor symbolizes freedom, clarity, and vision. From the heights, this guardian invites you to elevate your perspective, observe beyond the obvious, and make decisions with wisdom. Wearing it means opening space for new possibilities, thinking freely, and walking the path with lightness and balance.' },
          { src: '/images/projects/fragmentos/guardian-medusa.jpg', alt: 'Eco de Medusa — Guardian of water', hoverTitle: 'Echo of the Medusa', hoverSubtitle: 'The water that transforms and heals', hoverBody: 'Inspired by the serene movement of the jellyfish, this piece represents the water element and the capacity to flow with change. Its energy evokes sensitivity, intuition, and renewal, inviting you to connect with your emotions without fear and to release what no longer contributes to your growth. Wearing it is a reminder that true strength is also found in the capacity to adapt and heal.' },
        ],
        cols: 2,
      },
      {
        type: 'text',
        eyebrow: 'Sketching & Ideation',
        title: 'Developing forms that preserve irregularity and uniqueness',
        body: 'The formal exploration focused on creating pieces that feel organic, imperfect, and alive with memory. Sketching became a way to search for forms that did not erase irregularity, but rather embraced it as part of the emotional identity of the collection. In parallel, compositions were explored that evoked the patterns of the four natural elements: the fluid movement of water, the solidity and cracks of earth, the currents of air, and the expansive energy of fire — integrating these formal languages into each piece to reinforce the meaning of the ancestral guardians they represent.',
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
        body: 'Resin 3D printing was selected for the fabrication of the pieces, owing to its capacity to reproduce with high precision the textures, reliefs, and details that evoke erosion, fossils, and traces of time. This process allows organic and unrepeatable forms to be materialized, reinforcing the intention that each jewel be perceived as a unique finding charged with memory.',
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
        title: 'Más que una joya, un amuleto nacido de la memoria del tiempo.',
        body: 'Colección de joyería inspirada en fósiles que materializa la memoria de la Tierra a través de cuatro guardianes ancestrales vinculados a los elementos fuego, tierra, aire y agua. Mediante formas orgánicas, texturas que evocan vestigios naturales y un lenguaje estético que remite a piezas desenterradas, la propuesta transforma la joyería en un objeto simbólico que trasciende lo ornamental y establece una conexión emocional entre quien la porta y las cualidades de su guardián.',
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
        body: 'Fragmentos de la Tierra nace de la idea de que el tiempo no hace desaparecer las historias, sino que las conserva. Los fósiles son la evidencia de que aquello que existió permanece grabado en la memoria de la Tierra, oculto bajo capas de tiempo hasta ser descubierto nuevamente. Bajo esta premisa, la colección se concibe como un hallazgo más que como un objeto diseñado: piezas que parecen haber sido desenterradas, conservando las huellas y texturas de un pasado ancestral.\n\nCada pieza de la colección materializa la presencia de uno de los cuatro guardianes ancestrales de la naturaleza, inspirados en los elementos que han dado forma al mundo. Corazón de Jaguar, guardián del fuego, representa el coraje, la fuerza interior y la pasión; Espíritu de Armadillo, guardián de la tierra, simboliza la protección, la estabilidad y la confianza en los propios procesos; Alma de Cóndor, guardián del aire, evoca la claridad, la libertad y la perspectiva para tomar decisiones con sabiduría; y Eco de Medusa, guardián del agua, invita a fluir, sanar y conectar con la sensibilidad. Más que un accesorio, cada joya actúa como un amuleto simbólico que acompaña a quien la porta, invocando la energía y las cualidades del guardián que representa.\n\nLa irregularidad de sus formas responde a la autenticidad de los procesos naturales, haciendo que cada pieza sea única. Así, la colección transmite la idea de que, al igual que los fósiles, cada persona guarda una historia irrepetible marcada por el tiempo. Fragmentos de la Tierra materializa esa conexión entre pasado y presente, convirtiendo la memoria de la naturaleza en una experiencia personal y simbólica.',
      },
      {
        type: 'text',
        eyebrow: 'Investigación',
        title: 'Los Espíritus de la Tierra',
        body: 'El proyecto toma referencias culturales y materiales ligadas a la naturaleza, la erosión y el paso del tiempo. Cada anillo se asocia con una fuerza elemental y con una figura guardiana que encarna su carácter: el jaguar como fuego, el armadillo como tierra, el cóndor como aire y la medusa como agua.',
      },
      {
        type: 'gallery',
        images: [
          { src: '/images/projects/fragmentos/guardian-jaguar.jpg', alt: 'Corazón de Jaguar — Guardián del fuego', hoverTitle: 'Corazón de Jaguar', hoverSubtitle: 'El fuego que impulsa tu esencia', hoverBody: 'Inspirado en la fuerza del jaguar rojo, este guardián representa el elemento fuego y simboliza el coraje, la determinación y la pasión. Su energía invita a despertar la fuerza interior, enfrentar los desafíos con valentía y avanzar con la confianza de quien reconoce su propio poder. Portarlo es un recordatorio constante de que el verdadero impulso nace desde el interior.' },
          { src: '/images/projects/fragmentos/guardian-armadillo.jpg', alt: 'Espíritu de Armadillo — Guardián de la tierra', hoverTitle: 'Espíritu de Armadillo', hoverSubtitle: 'La tierra que protege y fortalece', hoverBody: 'Este guardián encuentra su origen en la calma y la solidez de la tierra. Inspirado en el armadillo sagrado, evoca protección, estabilidad y conexión con las propias raíces. Su presencia invita a confiar en los procesos personales, avanzar con paciencia y construir desde la seguridad de un camino firme, recordando que todo florece cuando llega su momento.' },
          { src: '/images/projects/fragmentos/guardian-condor.jpg', alt: 'Alma de Cóndor — Guardián del aire', hoverTitle: 'Alma de Cóndor', hoverSubtitle: 'El aire que expande la mirada', hoverBody: 'Representando el elemento aire, el cóndor simboliza libertad, claridad y visión. Desde las alturas, este guardián invita a elevar la perspectiva, observar más allá de lo evidente y tomar decisiones con sabiduría. Portarlo significa abrir espacio a nuevas posibilidades, pensar con libertad y recorrer el camino con ligereza y equilibrio.' },
          { src: '/images/projects/fragmentos/guardian-medusa.jpg', alt: 'Eco de Medusa — Guardián del agua', hoverTitle: 'Eco de Medusa', hoverSubtitle: 'El agua que transforma y sana', hoverBody: 'Inspirada en el movimiento sereno de la medusa, esta pieza representa el elemento agua y la capacidad de fluir con los cambios. Su energía evoca sensibilidad, intuición y renovación, invitando a conectar con las emociones sin temor y a soltar aquello que ya no aporta al crecimiento. Portarla es recordar que la verdadera fortaleza también se encuentra en la capacidad de adaptarse y sanar.' },
        ],
        cols: 2,
      },
      {
        type: 'text',
        eyebrow: 'Bocetos e Ideación',
        title: 'Desarrollar formas que conserven la irregularidad y la singularidad',
        body: 'La exploración formal se enfocó en crear piezas que se sintieran orgánicas, imperfectas y cargadas de memoria. El bocetaje fue una manera de buscar formas que no borraran la irregularidad, sino que la asumieran como parte de la identidad emocional de la colección. Paralelamente, se exploraron composiciones que evocaran los patrones de los cuatro elementos de la naturaleza: el movimiento fluido del agua, la solidez y las grietas de la tierra, las corrientes del aire y la energía expansiva del fuego, integrando estos lenguajes formales en cada una de las piezas para reforzar el significado de los guardianes ancestrales que representan.',
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
        body: 'Para la fabricación de las piezas se seleccionó la impresión 3D en resina, debido a su capacidad para reproducir con alta precisión las texturas, relieves y detalles que evocan la erosión, los fósiles y las huellas del tiempo. Este proceso permite materializar formas orgánicas e irrepetibles, reforzando la intención de que cada joya se perciba como un hallazgo único cargado de memoria.',
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
  filterCategory: 'producto',
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

// ═══════════════════════════════════════════════════════════════
// PROJECT 4: INGEMAT — placeholder (content coming soon)
// ═══════════════════════════════════════════════════════════════
const ingemat: Project = {
  slug: 'ingemat',
  featured: false,
  filterCategory: 'identidad',
  order: 4,
  year: '2025',
  category: { en: 'Brand Identity', es: 'Identidad de Marca' },
  title: { en: 'Ingemat', es: 'Ingemat' },
  shortDescription: {
    en: 'Brand identity project. Content coming soon.',
    es: 'Proyecto de identidad de marca. Contenido próximamente.',
  },
  heroImage: '/images/projects/ingemat/hero.jpg',
  heroImageAlt: 'Ingemat — brand identity',
  thumbnail: '/images/projects/ingemat/thumbnail.jpg',
  thumbnailAlt: 'Ingemat thumbnail',
  tags: ['Brand Identity'],
  sections: { en: [], es: [] },
}

// ═══════════════════════════════════════════════════════════════
// PROJECT 5: LA MENINA — placeholder (content coming soon)
// ═══════════════════════════════════════════════════════════════
const laMenina: Project = {
  slug: 'la-menina',
  featured: false,
  filterCategory: 'identidad',
  order: 5,
  year: '2025',
  category: { en: 'Brand Identity', es: 'Identidad de Marca' },
  title: { en: 'La Menina', es: 'La Menina' },
  shortDescription: {
    en: 'Brand identity project. Content coming soon.',
    es: 'Proyecto de identidad de marca. Contenido próximamente.',
  },
  heroImage: '/images/projects/la-menina/hero.jpg',
  heroImageAlt: 'La Menina — brand identity',
  thumbnail: '/images/projects/la-menina/thumbnail.jpg',
  thumbnailAlt: 'La Menina thumbnail',
  tags: ['Brand Identity'],
  sections: { en: [], es: [] },
}

// ─── Export all projects ──────────────────────────────────────
export const projects: Project[] = [miniBonyurt, fragmentos, heleonor, ingemat, laMenina]

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

export function getProjectsByCategory(category: FilterCategory): Project[] {
  return projects.filter((p) => p.filterCategory === category).sort((a, b) => a.order - b.order)
}