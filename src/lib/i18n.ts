
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      hero: {
        title: "Controle Total do Seu Negócio em Minutos",
        subtitle: "O Lojix App é o mini ERP que simplifica sua gestão de estoque, vendas e clientes para maximizar lucros.",
        description: "Gerencie produtos serializados, crie catálogos virtuais, agilize vendas com PDV e planeje suas importações com inteligência.",
        cta: {
          primary: "Experimente Grátis por 7 Dias",
          secondary: "Veja Como Funciona"
        },
        image: {
          alt: "Interface do Lojix App mostrando gestão de estoque"
        },
        badge: "Teste Grátis"
      },
      features: {
        title: "Tudo o Que Você Precisa para Vender Mais",
        subtitle: "Funcionalidades pensadas para simplificar sua operação e aumentar seus lucros.",
        inventory: {
          title: "Gestão de Inventário Serializado",
          description: "Registre cada produto com número de série e preço de compra único. Acompanhe o estoque em tempo real com alertas de reposição."
        },
        catalog: {
          title: "Catálogo Virtual",
          description: "Crie uma vitrine online profissional com link personalizado e botão de WhatsApp para vendas rápidas."
        },
        pos: {
          title: "Ponto de Venda (PDV)",
          description: "Registre vendas rapidamente, emita recibos não fiscais estilo DANFE e gerencie clientes em um fluxo simples."
        },
        forecast: {
          title: "Previsão de Demanda",
          description: "Use médias móveis e fatores sazonais para planejar suas importações com precisão."
        }
      },
      benefits: {
        title: "Por Que o Lojix App é a Escolha Certa?",
        subtitle: "Funcionalidades que entregam resultados reais para varejistas de importação.",
        profit: {
          title: "Lucro Real",
          description: "Rastreie preços de compra variáveis por unidade para calcular margens exatas e evitar prejuízos."
        },
        sales: {
          title: "Vendas Rápidas",
          description: "Impressione clientes com um catálogo profissional e feche vendas diretamente pelo WhatsApp."
        },
        organization: {
          title: "Organização Simples",
          description: "Controle estoque e vendas sem planilhas, com uma interface intuitiva e prática."
        },
        planning: {
          title: "Planejamento Inteligente",
          description: "Planeje importações com base em dados reais de vendas e sazonalidade."
        }
      },
      testimonial: {
        quote: "O Lojix App acabou com a bagunça do meu estoque e dobrou minhas vendas pelo WhatsApp!",
        author: "Maria Oliveira, Varejista de Moda, Ciudad del Este"
      },
      pricing: {
        title: "Escolha o Plano Perfeito para Seu Negócio",
        subtitle: "Comece agora com preços acessíveis e funcionalidades que transformam sua gestão.",
        monthly: "Mensal",
        annual: "Anual",
        popular: "Mais Popular",
        savings: "Economize 30%",
        basic: {
          name: "Plano Básico",
          description: "Ideal para organizar suas vendas iniciais.",
          features: [
            "Gestão de Inventário Básico",
            "Catálogo Virtual",
            "PDV Essencial",
            "CRM Básico"
          ],
          cta: "Assinar Plano Básico"
        },
        advanced: {
          name: "Plano Avançado",
          description: "Para quem quer controle total e otimização.",
          features: [
            "Tudo do Plano Básico",
            "Inventário Serializado Avançado",
            "Preço de Compra Variável",
            "Previsão de Demanda",
            "Relatórios Detalhados"
          ],
          cta: "Assinar Plano Avançado"
        }
      },
      finalCta: {
        title: "Comece Hoje e Transforme Sua Gestão!",
        subtitle: "Experimente o Lojix App grátis ou fale com nossa equipe para tirar dúvidas.",
        primary: "Experimente Grátis Agora",
        secondary: "Fale Conosco via WhatsApp"
      },
      footer: {
        tagline: "Transforme Sua Gestão",
        rights: "Todos os direitos reservados."
      }
    }
  },
  es: {
    translation: {
      hero: {
        title: "Control Total de Tu Negocio en Minutos",
        subtitle: "Lojix App es el mini ERP que simplifica tu gestión de inventario, ventas y clientes para maximizar ganancias.",
        description: "Gestiona productos serializados, crea catálogos virtuales, agiliza ventas con PDV y planifica tus importaciones con inteligencia.",
        cta: {
          primary: "Prueba Gratis por 7 Días",
          secondary: "Ver Cómo Funciona"
        },
        image: {
          alt: "Interfaz de Lojix App mostrando gestión de inventario"
        },
        badge: "Prueba Gratis"
      },
      features: {
        title: "Todo lo Que Necesitas para Vender Más",
        subtitle: "Funcionalidades pensadas para simplificar tu operación y aumentar tus ganancias.",
        inventory: {
          title: "Gestión de Inventario Serializado",
          description: "Registra cada producto con número de serie y precio de compra único. Monitorea el inventario en tiempo real con alertas de reposición."
        },
        catalog: {
          title: "Catálogo Virtual",
          description: "Crea un escaparate online profesional con enlace personalizado y botón de WhatsApp para ventas rápidas."
        },
        pos: {
          title: "Punto de Venta (PDV)",
          description: "Registra ventas rápidamente, emite recibos no fiscales estilo DANFE y gestiona clientes en un flujo simple."
        },
        forecast: {
          title: "Previsión de Demanda",
          description: "Usa promedios móviles y factores estacionales para planificar tus importaciones con precisión."
        }
      },
      benefits: {
        title: "¿Por Qué Lojix App es la Elección Correcta?",
        subtitle: "Funcionalidades que entregan resultados reales para comerciantes de importación.",
        profit: {
          title: "Ganancia Real",
          description: "Rastrea precios de compra variables por unidad para calcular márgenes exactos y evitar pérdidas."
        },
        sales: {
          title: "Ventas Rápidas",
          description: "Impresiona clientes con un catálogo profesional y cierra ventas directamente por WhatsApp."
        },
        organization: {
          title: "Organización Simple",
          description: "Controla inventario y ventas sin planillas, con una interfaz intuitiva y práctica."
        },
        planning: {
          title: "Planificación Inteligente",
          description: "Planifica importaciones basándote en datos reales de ventas y estacionalidad."
        }
      },
      testimonial: {
        quote: "¡Lojix App terminó con el desorden de mi inventario y duplicó mis ventas por WhatsApp!",
        author: "María Oliveira, Comerciante de Moda, Ciudad del Este"
      },
      pricing: {
        title: "Elige el Plan Perfecto para Tu Negocio",
        subtitle: "Comienza ahora con precios accesibles y funcionalidades que transforman tu gestión.",
        monthly: "Mensual",
        annual: "Anual",
        popular: "Más Popular",
        savings: "Ahorra 30%",
        basic: {
          name: "Plan Básico",
          description: "Ideal para organizar tus ventas iniciales.",
          features: [
            "Gestión de Inventario Básico",
            "Catálogo Virtual",
            "PDV Esencial",
            "CRM Básico"
          ],
          cta: "Suscribir Plan Básico"
        },
        advanced: {
          name: "Plan Avanzado",
          description: "Para quien quiere control total y optimización.",
          features: [
            "Todo del Plan Básico",
            "Inventario Serializado Avanzado",
            "Precio de Compra Variable",
            "Previsión de Demanda",
            "Reportes Detallados"
          ],
          cta: "Suscribir Plan Avanzado"
        }
      },
      finalCta: {
        title: "¡Comienza Hoy y Transforma Tu Gestión!",
        subtitle: "Prueba Lojix App gratis o habla con nuestro equipo para resolver dudas.",
        primary: "Prueba Gratis Ahora",
        secondary: "Contáctanos por WhatsApp"
      },
      footer: {
        tagline: "Transforma Tu Gestión",
        rights: "Todos los derechos reservados."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
