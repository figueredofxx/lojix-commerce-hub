
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        features: "Funcionalidades",
        pricing: "Planos",
        contact: "Contato",
        tryFree: "Experimente Grátis"
      },
      hero: {
        title: "Diga Adeus às Planilhas e Multiplique Seus Lucros!",
        subtitle: "O Lojix App é o mini ERP que organiza seu estoque, turbina suas vendas e simplifica sua gestão.",
        description: "Controle cada produto, venda mais rápido com catálogos incríveis e planeje suas importações com inteligência. Tudo isso em minutos!",
        cta: {
          primary: "Comece Grátis Agora",
          secondary: "Veja o Lojix em Ação"
        },
        image: {
          alt: "Dashboard do Lojix App mostrando gestão de estoque"
        },
        badge: "Teste Grátis por 7 Dias",
        liveNow: "Online Agora"
      },
      painPoints: {
        title: "Acabe com a Bagunça e Venda Mais",
        subtitle: "Resolva as dores do seu negócio com ferramentas feitas para você.",
        disorganized: {
          problem: "Estoque Desorganizado?",
          solution: "Registre cada produto com número de série e preço de compra único. Acompanhe tudo em tempo real com alertas automáticos."
        },
        slowSales: {
          problem: "Vendas Lentas?",
          solution: "Crie catálogos virtuais com links personalizados e feche vendas pelo WhatsApp em minutos."
        },
        complexManagement: {
          problem: "Gestão Complicada?",
          solution: "Use nosso PDV intuitivo para registrar vendas, emitir recibos estilo DANFE e gerenciar clientes em segundos."
        },
        blindImports: {
          problem: "Importações no Escuro?",
          solution: "Planeje suas compras com previsões baseadas em vendas reais e sazonalidade, como Black Friday e Natal."
        }
      },
      differentials: {
        title: "Por Que o Lojix App é a Sua Melhor Escolha?",
        subtitle: "Diferenciais que transformam seu negócio de importação em uma máquina de lucros.",
        realProfit: {
          title: "Lucro na Palma da Mão",
          description: "Saiba exatamente quanto ganha por produto, com rastreamento de preços variáveis por unidade."
        },
        impressiveSales: {
          title: "Vendas que Impressionam",
          description: "Catálogos profissionais com botão de WhatsApp que convertem clientes em minutos."
        },
        simplicityThatWorks: {
          title: "Simplicidade que Funciona",
          description: "Interface intuitiva, sem a complexidade dos ERPs tradicionais, feita para o seu dia a dia."
        },
        intelligentPlanning: {
          title: "Planejamento com Inteligência",
          description: "Previsões baseadas em dados reais para importar o que realmente vende, sem desperdício."
        }
      },
      testimonial: {
        quote: "Com o Lojix, organizei meu estoque e tripliquei minhas vendas no WhatsApp. É simples e poderoso!",
        author: "Ana Costa, Varejista de Eletrônicos, Foz do Iguaçu"
      },
      pricing: {
        title: "Escolha Seu Plano e Comece a Lucrar Hoje",
        subtitle: "Planos acessíveis com tudo o que você precisa para crescer.",
        monthly: "Mensal",
        annual: "Anual",
        popular: "Mais Popular",
        savings: "Economize 25%!",
        basic: {
          name: "Plano Básico",
          description: "Perfeito para começar a organizar suas vendas.",
          features: [
            "Gestão de Inventário Básico",
            "Catálogo Virtual",
            "PDV Essencial",
            "CRM Básico",
            "Suporte por Email"
          ],
          cta: "Assinar Básico"
        },
        advanced: {
          name: "Plano Avançado",
          description: "Controle total para maximizar seus lucros.",
          features: [
            "Tudo do Plano Básico",
            "Inventário Serializado Avançado",
            "Preço de Compra Variável",
            "Previsão de Demanda",
            "Relatórios Detalhados",
            "Suporte Prioritário",
            "Integração WhatsApp Business"
          ],
          cta: "Assinar Avançado"
        }
      },
      finalCta: {
        title: "Não Perca Tempo: Transforme Seu Negócio Agora!",
        subtitle: "Experimente grátis por 7 dias ou fale com nossa equipe pelo WhatsApp.",
        primary: "Comece Grátis Hoje",
        secondary: "Fale com a Gente"
      },
      footer: {
        tagline: "Transforme sua gestão, multiplique seus lucros.",
        links: "Links Úteis",
        about: "Sobre Nós",
        features: "Funcionalidades",
        pricing: "Planos",
        privacy: "Política de Privacidade",
        contact: "Contato",
        rights: "Todos os direitos reservados."
      }
    }
  },
  es: {
    translation: {
      nav: {
        features: "Funcionalidades",
        pricing: "Planes",
        contact: "Contacto",
        tryFree: "Prueba Gratis"
      },
      hero: {
        title: "¡Di Adiós a las Hojas de Cálculo y Multiplica tus Ganancias!",
        subtitle: "Lojix App es el mini ERP que organiza tu inventario, potencia tus ventas y simplifica tu gestión.",
        description: "Controla cada producto, vende más rápido con catálogos increíbles y planifica tus importaciones con inteligencia. ¡Todo en minutos!",
        cta: {
          primary: "Comienza Gratis Ahora",
          secondary: "Ve Lojix en Acción"
        },
        image: {
          alt: "Dashboard de Lojix App mostrando gestión de inventario"
        },
        badge: "Prueba Gratis por 7 Días",
        liveNow: "En Línea Ahora"
      },
      painPoints: {
        title: "Acaba con el Desorden y Vende Más",
        subtitle: "Resuelve los problemas de tu negocio con herramientas hechas para ti.",
        disorganized: {
          problem: "¿Inventario Desorganizado?",
          solution: "Registra cada producto con número de serie y precio de compra único. Monitorea todo en tiempo real con alertas automáticas."
        },
        slowSales: {
          problem: "¿Ventas Lentas?",
          solution: "Crea catálogos virtuales con enlaces personalizados y cierra ventas por WhatsApp en minutos."
        },
        complexManagement: {
          problem: "¿Gestión Complicada?",
          solution: "Usa nuestro PDV intuitivo para registrar ventas, emitir recibos estilo DANFE y gestionar clientes en segundos."
        },
        blindImports: {
          problem: "¿Importaciones a Ciegas?",
          solution: "Planifica tus compras con previsiones basadas en ventas reales y estacionalidad, como Black Friday y Navidad."
        }
      },
      differentials: {
        title: "¿Por Qué Lojix App es tu Mejor Elección?",
        subtitle: "Diferenciales que transforman tu negocio de importación en una máquina de ganancias.",
        realProfit: {
          title: "Ganancia en la Palma de tu Mano",
          description: "Sabe exactamente cuánto ganas por producto, con seguimiento de precios variables por unidad."
        },
        impressiveSales: {
          title: "Ventas que Impresionan",
          description: "Catálogos profesionales con botón de WhatsApp que convierten clientes en minutos."
        },
        simplicityThatWorks: {
          title: "Simplicidad que Funciona",
          description: "Interfaz intuitiva, sin la complejidad de los ERPs tradicionales, hecha para tu día a día."
        },
        intelligentPlanning: {
          title: "Planificación con Inteligencia",
          description: "Previsiones basadas en datos reales para importar lo que realmente se vende, sin desperdicios."
        }
      },
      testimonial: {
        quote: "Con Lojix, organicé mi inventario y tripliqué mis ventas en WhatsApp. ¡Es simple y poderoso!",
        author: "Ana Costa, Comerciante de Electrónicos, Foz do Iguaçu"
      },
      pricing: {
        title: "Elige tu Plan y Comienza a Ganar Hoy",
        subtitle: "Planes accesibles con todo lo que necesitas para crecer.",
        monthly: "Mensual",
        annual: "Anual",
        popular: "Más Popular",
        savings: "¡Ahorra 25%!",
        basic: {
          name: "Plan Básico",
          description: "Perfecto para comenzar a organizar tus ventas.",
          features: [
            "Gestión de Inventario Básico",
            "Catálogo Virtual",
            "PDV Esencial",
            "CRM Básico",
            "Soporte por Email"
          ],
          cta: "Suscribir Básico"
        },
        advanced: {
          name: "Plan Avanzado",
          description: "Control total para maximizar tus ganancias.",
          features: [
            "Todo del Plan Básico",
            "Inventario Serializado Avanzado",
            "Precio de Compra Variable",
            "Previsión de Demanda",
            "Reportes Detallados",
            "Soporte Prioritario",
            "Integración WhatsApp Business"
          ],
          cta: "Suscribir Avanzado"
        }
      },
      finalCta: {
        title: "¡No Pierdas Tiempo: Transforma tu Negocio Ahora!",
        subtitle: "Prueba gratis por 7 días o habla con nuestro equipo por WhatsApp.",
        primary: "Comienza Gratis Hoy",
        secondary: "Habla con Nosotros"
      },
      footer: {
        tagline: "Transforma tu gestión, multiplica tus ganancias.",
        links: "Enlaces Útiles",
        about: "Sobre Nosotros",
        features: "Funcionalidades",
        pricing: "Planes",
        privacy: "Política de Privacidad",
        contact: "Contacto",
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
