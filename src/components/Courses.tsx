import posGestao from "@/assets/pos-gestao.jpg";
import posMarketing from "@/assets/pos-marketing.jpg";
import posTecnologia from "@/assets/pos-tecnologia.jpg";
import posEducacao from "@/assets/pos-educacao.jpg";
import posDireito from "@/assets/pos-direito.jpg";
import posSaude from "@/assets/pos-saude.jpg";
import posEngenharia from "@/assets/pos-engenharia.jpg";
const areas = [
  {
    title: "PÓS EAD EM GESTÃO",
    image: posGestao,
  },
  {
    title: "PÓS EAD EM MARKETING E COMUNICAÇÃO",
    image: posMarketing,
  },
  {
    title: "PÓS EAD EM TECNOLOGIA",
    image: posTecnologia,
  },
  {
    title: "PÓS EAD EM EDUCAÇÃO",
    image: posEducacao,
  },
  {
    title: "PÓS EAD EM DIREITO",
    image: posDireito,
  },
  {
    title: "PÓS EAD EM SAÚDE",
    image: posSaude,
  },
  {
    title: "PÓS EAD EM ENGENHARIA",
    image: posEngenharia,
  },
];
const Courses = () => {
  return (
    <section id="cursos" className="pb-24 gradient-animated relative">
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="text-center mb-16 text-white animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">PÓS EAD POR ÁREAS</h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Encontre a especialização ideal explorando trilhas criadas para cada área de atuação. Conheça os cursos que
            combinam com os seus objetivos e avance de forma estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <a
              key={index}
              href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer animate-fade-in hover:scale-[1.02] transition-all duration-300 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-white/90 text-sm lg:text-base font-medium tracking-wide">
                  SEU CERTIFICADO A PARTIR DE 3 MESES
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1e2842"
          />
        </svg>
      </div>
    </section>
  );
};
export default Courses;
