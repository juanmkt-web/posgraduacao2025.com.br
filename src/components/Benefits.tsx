import { Zap, Clock, Calendar, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const benefits = [{
  icon: Zap,
  title: "Se torne um Especialista em até",
  highlight: "3 meses"
}, {
  icon: Clock,
  title: "Certificado emitido em até",
  highlight: "48 horas"
}, {
  icon: Calendar,
  title: "Praticidade",
  highlight: "do EAD para estudar no seu ritmo"
}, {
  icon: GraduationCap,
  title: "Sem necessidade",
  highlight: "de TCC!"
}];
const Benefits = () => {
  return <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-[#1e2842]">
          
          <div className="px-4 py-8 md:px-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - Main Title */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-3 md:mb-6 leading-tight">
              A PÓS{" "}
              <span className="text-cyan-light">MAIS RÁPIDA</span>
              <br />
              DO MERCADO!
            </h2>
            <p className="text-sm md:text-lg text-white/80 leading-relaxed">
              Se torne um <strong className="text-white">Especialista em até 3 meses</strong>, além de receber o{" "}
              <strong className="text-white">Certificado em apenas 48 horas</strong> após a conclusão do Curso! 
              Além de ter a praticidade do EAD e curso sem necessidade de TCC!
            </p>
          </div>

          {/* Right side - Benefits List */}
          <div className="space-y-3 md:space-y-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 md:gap-4 animate-fade-in" style={{
            animationDelay: `${0.3 + index * 0.1}s`
          }}>
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-light/30 bg-cyan-light">
                  <benefit.icon className="h-5 w-5 md:h-6 md:w-6 text-cyan-light-foreground" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm md:text-lg">
                    {benefit.title}{" "}
                    <strong className="font-bold">{benefit.highlight}</strong>
                  </p>
                </div>
              </div>)}

            <div className="pt-4 md:pt-8">
              <a href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full lg:w-auto bg-cyan-light hover:bg-cyan-light/90 text-cyan-light-foreground font-bold text-sm md:text-lg px-6 md:px-12 py-4 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  COMECE SUA PÓS AGORA!
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </a>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;