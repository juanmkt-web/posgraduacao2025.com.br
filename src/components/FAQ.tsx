import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração das Pós-Graduações?",
    answer:
      "Nossos Cursos são flexíveis, com duração de 3 a 12 meses e carga horária entre 360h e 720h. O formato 100% online permite que você estude no seu próprio ritmo.",
  },
  {
    question: "O Certificado de Pós-Graduação é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. O Certificado tem a mesma validade de Cursos presenciais, é reconhecido em todo o território nacional e valorizado por grandes empresas.",
  },
  {
    question: "Preciso saber programar para fazer a Pós em Dados ou IA?",
    answer:
      "Não é um pré-requisito obrigatório. Nossa metodologia ensina desde os fundamentos. Você aprenderá a lógica e as ferramentas essenciais com foco prático, ideal tanto para quem é de TI quanto para quem está migrando de área.",
  },
  {
    question: "Quais são as principais áreas de atuação para esse Especialista?",
    answer:
      "O Profissional pode atuar como Cientista de Dados, Analista de BI, Engenheiro de Machine Learning, Consultor de Big Data ou Gestor de Inovação. São as carreiras com maior demanda e os salários mais altos da atualidade.",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "Temos planos super acessíveis a partir de 18x de R$ 86,00. O valor é fixo. Aceitamos diversas formas de pagamento para facilitar seu investimento na carreira.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-4 pb-10 md:pt-8 md:pb-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-10 md:mb-12 text-center">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              PERGUNTAS <span className="gradient-text">FREQUENTES</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-base md:text-lg px-2">
              Tire suas dúvidas sobre as Pós-Graduações da FASUL
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-4 sm:px-5 md:px-6 data-[state=open]:border-cyan-500 data-[state=open]:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:no-underline py-4 sm:py-5 md:py-6 hover:text-cyan-600 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs sm:text-sm md:text-base pb-4 sm:pb-5 md:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
