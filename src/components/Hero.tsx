import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden gradient-animated pt-[72px] pb-8 md:pt-[112px] md:pb-16">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-white animate-fade-in">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              A PÓS-GRADUAÇÃO IDEAL <span className="text-accent"> PARA MUDAR</span> A SUA CARREIRA.
            </h1>

            <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8">
              Chega de adiar seus sonhos. Uma metodologia de ensino que se encaixa na sua rotina e abre as portas para
              novas conquistas.
            </p>

            <div className="mb-6 sm:mb-8">
              <a
                href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-pulse-cta"
                >
                  MUDAR MINHA VIDA AGORA <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Diploma Reconhecido MEC</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">+ 10 mil Alunos Formados</span>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{
              animationDelay: "0.2s",
            }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 max-w-lg mx-auto animate-float">
              <div className="text-center mb-4 sm:mb-6">
                <span className="inline-block bg-accent text-accent-foreground font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full uppercase tracking-wide">
                  Condição Especial
                </span>
              </div>

              <div className="text-center mb-4 sm:mb-6">
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">A partir de 12x de</p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">R$66</p>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">mensais*</p>
              </div>

              <div className="space-y-4 text-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Ganhe mais 3 Pós-Graduações como bônus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Conclusão a partir de 3 meses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Pós-Graduação 100% EAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
