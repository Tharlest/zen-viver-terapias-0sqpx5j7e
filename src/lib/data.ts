import iconeSipat from '@/assets/icone-sipat-2012e.png'
import iconeBreathwork from '@/assets/icone-breathwork-3d370.png'
import iconeQuickMassage from '@/assets/icone-quick-massage-08173.png'

export const services = [
  {
    id: 'shiatsu',
    title: 'Shiatsu Corporativo',
    description:
      'Técnica de massagem terapêutica japonesa aplicada sobre a roupa, focada em pontos de tensão para alívio rápido de dores musculares no ambiente de trabalho.',
    fullDescription:
      'O Shiatsu Corporativo é uma intervenção rápida que atua diretamente nos pontos de tensão gerados pelo trabalho em escritório. Utilizando a pressão dos dedos, palmas das mãos e alongamentos, o terapeuta consegue liberar o fluxo de energia do corpo, proporcionando alívio imediato do estresse, melhora na postura e aumento da concentração. Cada sessão dura em média de 15 a 20 minutos, sendo perfeitamente adaptável à dinâmica corporativa.',
    benefits: [
      'Alívio de dores musculares e articulares',
      'Redução drástica do estresse e ansiedade',
      'Melhora significativa da postura',
      'Aumento imediato da produtividade e foco',
    ],
    icon: 'Hands',
    imgIcon: iconeQuickMassage,
  },
  {
    id: 'auriculoterapia',
    title: 'Terapia Auricular',
    description:
      'Estimulação de pontos específicos na orelha para promover o bem-estar físico e mental, reduzindo o estresse e ansiedade.',
    fullDescription:
      'A Auriculoterapia, ou Terapia Auricular, é uma técnica derivada da acupuntura que utiliza pequenas sementes ou esferas para estimular pontos específicos no pavilhão auricular. Como a orelha é um microssistema que representa todo o corpo humano, a estimulação desses pontos ajuda a reequilibrar o organismo, tratando queixas físicas e emocionais muito comuns no ambiente corporativo, como insônia, enxaqueca e tensões nervosas.',
    benefits: [
      'Tratamento eficaz de enxaquecas e cefaleias',
      'Melhora perceptível na qualidade do sono',
      'Reequilíbrio emocional e redução da irritabilidade',
      'Procedimento extremamente rápido e indolor',
    ],
    icon: 'Activity',
    imgIcon: 'https://img.usecurling.com/i?q=ear&shape=outline&color=green',
  },
  {
    id: 'breathwork',
    title: 'Breathwork Corporativo',
    description:
      'Vivências de respiração consciente projetadas para regular o sistema nervoso, melhorar o foco e reduzir a ansiedade.',
    fullDescription:
      'O Breathwork Corporativo é uma prática guiada de respiração consciente que ajuda os colaboradores a acessarem estados de relaxamento profundo e clareza mental em apenas alguns minutos. Através de técnicas respiratórias específicas, é possível regular o sistema nervoso autônomo, diminuindo a produção de cortisol (o hormônio do estresse) e aumentando a oxigenação cerebral, o que resulta em melhores tomadas de decisão e maior resiliência emocional para a equipe.',
    benefits: [
      'Redução rápida e efetiva da ansiedade',
      'Aumento duradouro da clareza mental',
      'Melhora na oxigenação do cérebro',
      'Equilíbrio e regulação do sistema nervoso',
    ],
    icon: 'Wind',
    imgIcon: iconeBreathwork,
  },
  {
    id: 'sipat',
    title: 'SIPAT & Eventos Corporativos',
    description:
      'Participação ativa em semanas de prevenção de acidentes e eventos empresariais com práticas engajadoras.',
    fullDescription:
      'Nossa participação na SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho) e em outros eventos corporativos vai muito além das palestras tradicionais monótonas. Levamos vivências práticas e interativas que realmente engajam os colaboradores com a sua própria saúde. Combinamos informações essenciais sobre ergonomia, saúde mental e qualidade de vida com demonstrações práticas das nossas terapias, criando um evento verdadeiramente memorável que atende perfeitamente às novas exigências da NR-1.',
    benefits: [
      'Adequação total às normas atualizadas da NR-1',
      'Engajamento real e ativo dos colaboradores',
      'Ações práticas, dinâmicas e vivenciais',
      'Conscientização profunda sobre saúde preventiva',
    ],
    icon: 'CalendarHeart',
    imgIcon: iconeSipat,
  },
]

export const blogPosts = [
  {
    slug: 'guia-sipat-2025',
    title: 'Guia SIPAT 2025: Como adequar sua empresa às novas exigências',
    excerpt:
      'Descubra como transformar sua SIPAT em um evento que realmente engaja e atende à NR-1/2025.',
    date: '15 Mar 2025',
    category: 'Regulamentação',
    image: 'https://img.usecurling.com/p/600/400?q=corporate%20meeting',
    content: `
      <h2>A Nova Realidade da NR-1 em 2025</h2>
      <p>A partir de 2025, a NR-1 exige uma postura muito mais proativa das empresas em relação à saúde mental e física dos colaboradores. Não basta mais realizar palestras pontuais; é preciso comprovar ações contínuas de mitigação de riscos ergonômicos e psicossociais.</p>
      <h3>O papel das terapias integrativas</h3>
      <p>Integrar serviços como Quick Massage e Shiatsu na rotina da empresa não é mais apenas um "benefício legal", mas uma ferramenta estratégica de compliance e produtividade. Nossos dados mostram que empresas que adotam essas práticas reduzem o absenteísmo em até 30% já no primeiro semestre.</p>
      <p>Planeje sua SIPAT com antecedência e garanta não apenas o cumprimento da lei, mas um retorno real sobre o investimento em bem-estar.</p>
    `,
  },
  {
    slug: 'quick-massage-e-produtividade',
    title: 'Quick Massage & Produtividade: O ROI do Bem-estar',
    excerpt: 'Por que 15 minutos de pausa podem render horas de trabalho focado para sua equipe.',
    date: '10 Mar 2025',
    category: 'Produtividade',
    image: 'https://img.usecurling.com/p/600/400?q=office%20massage',
    content:
      '<p>A Quick Massage é uma intervenção rápida que atua diretamente nos pontos de tensão gerados pelo trabalho em escritório...</p>',
  },
  {
    slug: 'breathwork-para-decisoes',
    title: 'Breathwork para Decisões Executivas',
    excerpt:
      'Como a oxigenação adequada do cérebro melhora a capacidade de resolução de problemas complexos.',
    date: '05 Mar 2025',
    category: 'Neurociência',
    image: 'https://img.usecurling.com/p/600/400?q=meditation%20office',
    content:
      '<p>A respiração consciente é uma das ferramentas mais subestimadas no mundo corporativo...</p>',
  },
  {
    slug: 'custos-do-absenteismo',
    title: 'Os Custos Ocultos do Absenteísmo',
    excerpt:
      'Calcule quanto sua empresa perde anualmente com afastamentos por estresse e dores musculares.',
    date: '28 Fev 2025',
    category: 'Gestão RH',
    image: 'https://img.usecurling.com/p/600/400?q=empty%20desk',
    content: '<p>O custo de um colaborador ausente vai muito além do seu salário diário...</p>',
  },
  {
    slug: 'retencao-vs-bonus',
    title: 'Retenção vs Bônus Financeiro',
    excerpt:
      'Estudos mostram que programas de qualidade de vida retêm mais talentos que pequenos aumentos salariais.',
    date: '20 Fev 2025',
    category: 'Talentos',
    image: 'https://img.usecurling.com/p/600/400?q=happy%20team',
    content:
      '<p>As novas gerações no mercado de trabalho valorizam a qualidade de vida acima de recompensas exclusivamente financeiras...</p>',
  },
  {
    slug: 'beneficios-da-reflexologia',
    title: 'Os Benefícios Silenciosos da Reflexologia',
    excerpt:
      'Entenda como o cuidado com os pés afeta a imunidade e a disposição geral do colaborador.',
    date: '15 Fev 2025',
    category: 'Saúde Física',
    image: 'https://img.usecurling.com/p/600/400?q=foot%20massage',
    content:
      '<p>A reflexologia podal baseia-se na premissa de que existem áreas reflexas nos pés que correspondem a todos os órgãos do corpo...</p>',
  },
  {
    slug: '5-riscos-ignorar-bem-estar',
    title: '5 Riscos de Ignorar o Bem-estar na Sua Empresa',
    excerpt:
      'Do passivo trabalhista à queda de inovação, o que acontece quando a saúde é deixada de lado.',
    date: '05 Fev 2025',
    category: 'Riscos Corporativos',
    image: 'https://img.usecurling.com/p/600/400?q=stressed%20worker',
    content:
      '<p>Ignorar a saúde mental e física dos colaboradores é assumir um risco operacional gigantesco...</p>',
  },
]

export const clientLogos = [
  'Seagems',
  'Galp',
  'Eneva',
  'Seadrill',
  'BW Energy',
  'Deep Sea',
  'Archer',
  'Karoon Energy',
  'Altera Infra',
  'Coca-Cola',
  'Ambev',
  'Red Bull',
  'Casa & Vídeo',
  'Metrô Rio',
  'ESPM',
  'Estácio',
  'Xerox',
]
