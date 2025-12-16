import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 20,
    minutes: 30,
    seconds: 41,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-24 gradient-animated relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 lg:h-20 rotate-180">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="flex flex-col gap-4 md:gap-8 items-center mb-4 md:mb-8">
            <div className="text-white text-center">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-6">
                BLACK FRIDAY FASUL:
                <br />
                COMPRE UMA PÓS E LEVE <span className="text-accent">+3 GRÁTIS</span>.
              </h2>
            </div>

            <div className="text-center">
              <p className="text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4 text-white/80">ACABA EM:</p>
              <div className="inline-flex gap-1 md:gap-3 bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase text-white/70">DIAS</div>
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white flex items-center">:</div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase text-white/70">HRS</div>
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white flex items-center">:</div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase text-white/70">MIN</div>
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white flex items-center">:</div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase text-white/70">SEGS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center px-2">
            <a href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-sm md:text-xl px-6 md:px-12 py-5 md:py-8 rounded-full shadow-2xl animate-pulse-cta mb-4 md:mb-8 w-full md:w-auto max-w-full whitespace-normal"
              >
                QUERO ACELERAR MINHA CARREIRA AGORA!{" "}
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
              </Button>
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-white mt-4 md:mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
                <span>Sem mensalidades caras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
                <span>Pagamento flexível para seu bolso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
