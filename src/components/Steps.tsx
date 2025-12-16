import { Search, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Escolha seu Curso",
    description: "Navegue por mais de 50 especializações e encontre a que combina com seus objetivos profissionais."
  },
  {
    icon: ClipboardCheck,
    title: "Faça sua Matrícula",
    description: "Processo simples e 100% online. Em poucos minutos você já tem acesso à plataforma de estudos."
  },
  {
    icon: Rocket,
    title: "Acelere seu Futuro",
    description: "Estude no seu ritmo, conclua seu curso e receba seu diploma reconhecido nacionalmente."
  }
];

const Steps = () => {
  return (
    <section id="sobre" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Transforme sua carreira em{" "}
            <span className="gradient-text">3 passos simples</span>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            O caminho para o sucesso profissional nunca foi tão acessível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4 md:mb-8">
                <div className="w-24 h-24 md:w-36 md:h-36 gradient-animated rounded-full flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300 relative z-10">
                  <step.icon className="h-10 w-10 md:h-16 md:w-16 text-white" strokeWidth={2.5} />
                  <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-10 h-10 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center text-foreground font-bold text-lg md:text-2xl border-2 md:border-4 border-white shadow-xl z-10">
                    {index + 1}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0"></div>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
