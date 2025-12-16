import { useEffect } from "react";
import logoRodape from "@/assets/logorodape.png";
import qrCodeMec from "@/assets/qrcodemec.webp";
import facebookIcon from "@/assets/facebook.webp";
import instagramIcon from "@/assets/instagram.webp";
import youtubeIcon from "@/assets/youtube.webp";
import linkedinIcon from "@/assets/linkedin.webp";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.83626 17.8644C7.31899 18.7447 8.73448 19.2719 10.6065 19.2728C15.4262 19.2728 19.3525 15.3501 19.3551 10.5277C19.3569 5.69559 15.4492 1.77821 10.6136 1.77644C5.79025 1.77644 1.86668 5.69913 1.86491 10.5207C1.86403 12.4891 2.44084 13.963 3.40957 15.505L2.52577 18.7323L5.83626 17.8644ZM15.4059 12.7235C15.6695 12.8553 15.8447 12.9208 15.9102 13.0305C15.9765 13.1402 15.9765 13.6666 15.7571 14.2814C15.5377 14.8954 14.4876 15.4563 13.9824 15.5315C13.5295 15.5987 12.9562 15.6271 12.3263 15.4271C11.945 15.3059 11.4549 15.144 10.8276 14.8733C8.1904 13.7347 6.46881 11.0789 6.33699 10.9037L6.33387 10.8996C6.19182 10.7096 5.26387 9.46868 5.26387 8.18421C5.26387 6.88992 5.9433 6.25471 6.18394 5.99108C6.42457 5.72744 6.70944 5.66198 6.88461 5.66198L7.38888 5.67082C7.54989 5.67878 7.76664 5.60978 7.98073 6.12201C8.19925 6.6484 8.72475 7.94269 8.7911 8.07362C8.85745 8.20544 8.9008 8.35938 8.81322 8.53454C8.72475 8.7106 8.6814 8.8203 8.54781 8.97246C8.416 9.1264 8.27179 9.31572 8.15324 9.43338C8.02231 9.56432 7.88519 9.70675 8.03824 9.9695C8.19129 10.2331 8.71944 11.0939 9.50062 11.7911C10.5047 12.6872 11.3523 12.9642 11.615 13.096C11.8778 13.2278 12.0317 13.2057 12.1847 13.0305C12.3378 12.8553 12.8421 12.2626 13.0172 11.9998C13.1933 11.7362 13.3685 11.7804 13.6091 11.868C13.8506 11.9556 15.1431 12.5917 15.4059 12.7235Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1.49246 15.7801L0 21.2324L5.57793 19.7691C7.11463 20.6078 8.84949 21.0493 10.61 21.0502C16.4091 21.0502 21.1289 16.3304 21.1316 10.5295C21.1324 7.71798 20.039 5.07455 18.0529 3.08578C16.0659 1.09701 13.4242 0.000884684 10.61 0C4.81091 0 0.0911224 4.71979 0.0884684 10.5198C0.0875837 12.375 0.571506 14.1841 1.49246 15.7801ZM10.6065 19.2728C8.73448 19.2719 7.31899 18.7447 5.83626 17.8644L2.52577 18.7323L3.40957 15.505C2.44084 13.963 1.86403 12.4891 1.86491 10.5207C1.86668 5.69913 5.79025 1.77644 10.6136 1.77644C15.4492 1.77821 19.3569 5.69559 19.3551 10.5277C19.3525 15.3501 15.4262 19.2728 10.6065 19.2728Z" fill="currentColor"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
    <path d="M7.38 3.75H4.12A.62.62 0 0 0 3.5 4.37c0 7.71 6.26 13.97 13.97 13.97a.62.62 0 0 0 .62-.62v-3.27a.62.62 0 0 0-.62-.62c-.95 0-1.88-.16-2.78-.45a.63.63 0 0 0-.62.16l-1.98 1.98c-2.34-1.21-4.26-3.13-5.47-5.47l1.98-1.98a.62.62 0 0 0 .16-.62 9.96 9.96 0 0 1-.45-2.78.62.62 0 0 0-.62-.62Z" fill="#0ac25c"/>
  </svg>
);

const CallIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_rodape_call" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_rodape_call)">
      <path d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="white"/>
    </g>
  </svg>
);

const Footer = () => {
  useEffect(() => {
    // Clear existing content to prevent duplicates
    const reputationContainer = document.getElementById("reputation-ra");
    const verifiedContainer = document.getElementById("ra-verified-seal");
    
    // Remove any existing scripts first
    const existingRepScript = document.getElementById("ra-embed-reputation");
    const existingVerScript = document.getElementById("ra-embed-verified-seal");
    if (existingRepScript) existingRepScript.remove();
    if (existingVerScript) existingVerScript.remove();
    
    // Clear containers
    if (reputationContainer) {
      // Keep the ra-verified-seal div, clear everything else
      const verifiedDiv = reputationContainer.querySelector("#ra-verified-seal");
      reputationContainer.innerHTML = "";
      if (verifiedDiv) reputationContainer.appendChild(verifiedDiv);
    }
    if (verifiedContainer) verifiedContainer.innerHTML = "";

    // Load Reclame Aqui reputation script
    const reputationScript = document.createElement("script");
    reputationScript.src = "https://s3.amazonaws.com/raichu-beta/selos/bundle.js";
    reputationScript.defer = true;
    reputationScript.id = "ra-embed-reputation";
    reputationScript.setAttribute("data-id", "cDd6eDZOQ09hVFdfM0pjcDpmYXN1bG1nLWZhY3VsZGFkZS1zdWxtaW5laXJh");
    reputationScript.setAttribute("data-target", "reputation-ra");
    reputationScript.setAttribute("data-model", "2");
    document.body.appendChild(reputationScript);
    
    // Load Reclame Aqui verified seal script
    const verifiedScript = document.createElement("script");
    verifiedScript.src = "https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js";
    verifiedScript.defer = true;
    verifiedScript.id = "ra-embed-verified-seal";
    verifiedScript.setAttribute("data-id", "cDd6eDZOQ09hVFdfM0pjcDpmYXN1bG1nLWZhY3VsZGFkZS1zdWxtaW5laXJh");
    verifiedScript.setAttribute("data-target", "ra-verified-seal");
    verifiedScript.setAttribute("data-model", "2");
    document.body.appendChild(verifiedScript);

    return () => {
      // Cleanup on unmount
      const repScript = document.getElementById("ra-embed-reputation");
      const verScript = document.getElementById("ra-embed-verified-seal");
      if (repScript) repScript.remove();
      if (verScript) verScript.remove();
    };
  }, []);

  const institucionalLinks = [
    { title: "Organização Administrativa", href: "https://www.fasuleducacional.edu.br/organizacao-administrativa", highlight: true },
    { title: "Corpo Docente", href: "https://www.fasuleducacional.edu.br/corpo-docente" },
    { title: "Quem Somos", href: "https://www.fasuleducacional.edu.br/quem-somos" },
    { title: "Modalidades de Ensino", href: "https://www.fasuleducacional.edu.br/modalidades-de-ensino" },
    { title: "Processos Seletivos", href: "https://www.fasuleducacional.edu.br/vestibularagendado" },
    { title: "Regimento Interno", href: "https://www.fasuleducacional.edu.br/docs/REGIMENTO-INTERNO-E MANUAL-DO-ALUNO.pdf", external: true },
    { title: "Formas de Ingresso", href: "https://www.fasuleducacional.edu.br/formas-de-ingresso" },
    { title: "Projetos e Pesquisas", href: "https://www.fasuleducacional.edu.br/projetos-e-pesquisas" },
    { title: "Extensão e Responsabilidade Social", href: "https://www.fasuleducacional.edu.br/extensao-e-responsabilidade-social" },
    { title: "Comissão Própria de Avaliação", href: "https://www.fasuleducacional.edu.br/designacao-cpa-atualizacao" },
    { title: "Egressos", href: "https://www.fasuleducacional.edu.br/egressos" },
    { title: "Formaturas", href: "https://www.fasuleducacional.edu.br/formatura" },
    { title: "Perguntas Frequentes", href: "https://www.fasuleducacional.edu.br/perguntas-frequentes" },
    { title: "Central de Empregos e Carreiras", href: "https://www.fasuleducacional.edu.br/portal-empregabilidade" },
    { title: "Cadastro do Egresso", href: "https://www.fasuleducacional.edu.br/cadastro-egresso" },
    { title: "Bibliotecas", href: "https://www.fasuleducacional.edu.br/bibliotecas" },
    { title: "Desenvolvimento Artístico e Cultural", href: "https://www.fasuleducacional.edu.br/desenvolvimento-artistico-cultural" },
    { title: "Revista Científica FASUL", href: "https://www.fasuleducacional.edu.br/revista" },
    { title: "Plano de Desenvolvimento Institucional - (PDI)", href: "https://www.fasuleducacional.edu.br/docs/Plano-de-Desenvolvimento-Institucional.pdf", external: true },
  ];

  const grupoLinks = [
    { title: "O GRUPO", href: "https://www.fasuleducacional.edu.br/quem-somos" },
    { title: "SEJA POLO FASUL", href: "https://www.fasuleducacional.edu.br/polos-fasul-educacional" },
    { title: "TRABALHE CONOSCO", href: "https://www.fasuleducacional.edu.br/trabalhe-conosco" },
    { title: "ASSESSORIA DE IMPRENSA", href: "https://www.fasuleducacional.edu.br/assessoria-imprensa" },
    { title: "TERMOS DE USO", href: "https://www.fasuleducacional.edu.br/termos-de-uso" },
    { title: "OUVIDORIA", href: "https://www.fasuleducacional.edu.br/ouvidoria" },
  ];

  return (
    <footer className="footer-main rodapePadd">
      {/* Main Footer Content */}
      <div className="white-background">
        <div className="footer-container white-background">
          <div className="footer-row">
            {/* First Column - Logo and Social */}
            <div className="w-full lg:w-1/4 p-0 text-left">
            <a href="https://www.fasuleducacional.edu.br/" title="Faculdade FASUL">
                <img loading="lazy" width="222" height="87" src={logoRodape} className="max-w-full h-auto mb-4" alt="FASUL LOGO" />
              </a>
              <a href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjE3NTc=" title="QR Code MEC" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" width="211" height="104" src={qrCodeMec} className="mb-4" alt="QR Code MEC" />
              </a>
              <ul className="p-0 text-left">
                {grupoLinks.map((link) => (
                  <li key={link.title} className="lirodape">
                    <a className="atxtrodape" href={link.href} title={link.title}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <div className="text-left p-0 mt-4">
                <a href="https://www.facebook.com/fasuleducacionalead/" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <img loading="lazy" width="32" height="32" src={facebookIcon} alt="Facebook" className="max-w-full h-auto m-1 inline-block" />
                </a>
                <a href="https://www.instagram.com/fasulead/" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <img loading="lazy" width="29" height="30" src={instagramIcon} alt="Instagram" className="max-w-full h-auto m-1 inline-block" />
                </a>
                <a href="https://www.youtube.com/channel/UCXFGu7TVBJPX5LuHtWu2OHQ" target="_blank" rel="noopener noreferrer" title="Youtube">
                  <img loading="lazy" width="33" height="27" src={youtubeIcon} alt="Youtube" className="max-w-full h-auto m-1 inline-block" />
                </a>
                <a href="https://www.linkedin.com/company/fasul-educacional/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                  <img loading="lazy" width="29" height="29" src={linkedinIcon} alt="Linkedin" className="max-w-full h-auto m-1 inline-block" />
                </a>
              </div>
              <br />
              <span className="porttxt">PORTARIA DE CREDENCIAMENTO EAD:</span>
              <br />
              <span className="txtrodape">A FACULDADE FASUL EDUCACIONAL EAD FOI CREDENCIADA DE ACORDO COM A PORTARIA Nº499 DE 08/07/2021, CONFORME PUBLICAÇÃO NO D.O.U. EM 09/07/2021.</span>
            </div>

            {/* Second Column - Institucional */}
            <div className="w-full lg:w-1/4 p-0">
              <h2 className="tituloRodape">Institucional</h2>
              <ul className="p-0 text-left">
                {institucionalLinks.map((link) => (
                  <li key={link.title} className="lirodape">
                    <a 
                      className={`atxtrodape ${link.highlight ? 'text-red-600' : ''}`}
                      href={link.href} 
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column - Educação a Distância */}
            <div className="w-full lg:w-1/4 p-0">
              <h2 className="tituloRodape">Educação a Distância</h2>
              <ul className="p-0 text-left">
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-ead" title="Graduação EAD">Graduação EAD</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" title="Pós-Graduação EAD">Pós-Graduação EAD</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasulextensaouniversitaria.com.br/" target="_blank" rel="noopener noreferrer" title="Extensão Universitária EAD">Extensão Universitária EAD</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/posgraduacao/categoria/mba" title="MBA EAD">MBA EAD</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasulcursosonline.com.br/" target="_blank" rel="noopener noreferrer" title="Cursos Profissionalizantes EAD">Cursos Profissionalizantes EAD</a></li>
              </ul>

              <h2 className="tituloRodape mt-6">Educação Presencial<br />Semipresencial</h2>
              <ul className="p-0 text-left">
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-presencial" title="Graduação">Graduação</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-pos-graduacao-presencial" title="Pós-Graduação">Pós-Graduação</a></li>
              </ul>

              <h2 className="tituloRodape mt-6">Manuais</h2>
              <ul className="p-0 text-left">
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/manual-geral-do-aluno-fasul-2025.pdf" target="_blank" rel="noopener noreferrer" title="Manual do Aluno">Manual do Aluno</a></li>
              </ul>

              <h2 className="tituloRodape mt-6">Acadêmico</h2>
              <ul className="p-0 text-left">
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma" title="Registro de Diplomas">Registro de Diplomas</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma-historico" title="Registro de Históricos">Registro de Históricos</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/tcc-repositorio" title="Repositórios de TCC">Repositórios de TCC</a></li>
              </ul>
            </div>

            {/* Fourth Column - Bolsas e Regulamentos */}
            <div className="w-full lg:w-1/4 p-0">
              <h2 className="tituloRodape">Bolsas e Financiamentos</h2>
              <ul className="p-0 text-left">
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/concursodebolsas" title="Programa de Bolsas">Programa de Bolsas</a></li>
              </ul>

              <h2 className="tituloRodape mt-6">Regulamentos</h2>
              <ul className="p-0 text-left">
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-enade.pdf" target="_blank" rel="noopener noreferrer" title="Regulamento Enade">Regulamento e Termo de Compromisso Enade</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/regulamentos-atividades-complementares" title="Regulamentos de Atividades Complementares">Regulamento de Atividades Complementares</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/Regulamento-das-Atividades-de-Extensao.pdf" target="_blank" rel="noopener noreferrer" title="Regulamento de Atividades de Extensão">Regulamento de Atividades de Extensão</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/Regulamento-do-Programa-de-Iniciacao-Cientifica.pdf" target="_blank" rel="noopener noreferrer" title="Regulamento do Programa de Iniciação Científica e Tecnológica">Regulamento do Programa de Iniciação Científica e Tecnológica - PICT</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/regulamentos-campanhas-promocionais" title="Regulamentos de Campanhas Promocionais">Regulamentos de Campanhas Promocionais</a></li>
                <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-certificacao-intermediaria.pdf" target="_blank" rel="noopener noreferrer" title="Regulamento Certificação Intermediária">Regulamento Certificação Intermediária</a></li>
              </ul>

              <h2 className="tituloRodape mt-6 pt-2">Reclame Aqui</h2>
              <div id="reputation-ra" className="pb-4 flex gap-1 mt-2">
                <div id="ra-verified-seal"></div>
              </div>

              <div className="mt-5">
                <p className="text-footer-acreditamos m-0">Nós Acreditamos em Deus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="footer-contact" aria-labelledby="footer-contact-title">
        <div className="footer-contact__container">
          <div className="footer-contact__intro">
            <span className="footer-contact__intro-title">Fale Conosco</span>
            <span className="footer-contact__intro-subtitle" id="footer-contact-title">Qual canal gostaria de falar?</span>
          </div>
          <div className="footer-contact__cards">
            {/* Call Card */}
            <div className="contact-channel-card contact-channel-card--call">
              <div className="contact-channel-card__label">
                <span className="contact-channel-card__label-icon">
                  <CallIcon />
                </span>
                LIGAÇÃO
              </div>
              <div className="contact-channel-card__list">
                <div className="contact-channel-card__item contact-channel-card__item--call">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">1. FAÇA SUA MATRÍCULA AGORA</div>
                    <div className="contact-channel-card__promo-banner">
                      <div className="contact-channel-card__promo-content">
                        <span className="contact-channel-card__promo-text contact-channel-card__promo-text--cyan">GANHE 3 PÓS-GRADUAÇÕES</span>
                        <span className="contact-channel-card__promo-text contact-channel-card__promo-text--pink">+ 10 CURSOS DE IA</span>
                      </div>
                      <div className="contact-channel-card__promo-badge">VAGAS<br />LIMITADAS</div>
                    </div>
                    <p className="contact-channel-card__item-text">Tire suas dúvidas sobre Cursos de Graduação e Pós-graduação e <a href="https://wa.me/5511947966982?text=Ol%C3%A1,%20estou%20no%20site%20da%20FASUL%20e%20quero%20realizar%20meu%20sonho%20com%20voc%C3%AAs." target="_blank" rel="noopener noreferrer">Realize seu Sonho com a Fasul.</a></p>
                    <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                      <PhoneIcon />
                      (35) 2888-0007
                    </div>
                    <a className="flex contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-link" href="https://wa.me/5531987885883?text=Ol%C3%A1,%20estou%20no%20site%20da%20FASUL%20e%20quero%20falar%20com%20o%20setor%20de%20matr%C3%ADculas." aria-label="Falar com setor de Matrículas por Whatsapp" target="_blank" rel="noopener noreferrer">
                      <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                        <WhatsAppIcon className="text-[#0ac25c]" />
                        (31) 98788-5883
                      </div>
                    </a>
                  </div>
                </div>
                <div className="contact-channel-card__item contact-channel-card__item--call">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">2. CONVERSE CONOSCO</div>
                    <p className="contact-channel-card__item-text">Estamos prontos para tirar suas dúvidas e te dar o suporte certo para qualquer necessidade sua.</p>
                    <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                      <PhoneIcon />
                      (35) 2038-0560
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-channel-card contact-channel-card--whatsapp">
              <div className="contact-channel-card__label">
                <span className="contact-channel-card__label-icon">
                  <WhatsAppIcon className="text-white" />
                </span>
                WHATSAPP
              </div>
              <div className="contact-channel-card__list">
                <div className="contact-channel-card__item">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">3. ATENDIMENTO SECRETARIA</div>
                    <p className="contact-channel-card__item-text">Pendências de Documentos, Histórico, Declarações e Requerimentos.</p>
                  </div>
                  <a className="contact-channel-card__cta" href="https://wa.me/5521991586516?text=Ol%C3%A1,%20estou%20no%20site%20da%20FASUL%20e%20preciso%20de%20ajuda%20com%20matr%C3%ADcula%20e%20documentos." target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp para tratar de matrícula e documentos">
                    <WhatsAppIcon className="text-white" />
                  </a>
                </div>
                <div className="contact-channel-card__item">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">4. TUTORIA (APOIO AO ALUNO)</div>
                    <p className="contact-channel-card__item-text">Dúvidas sobre o Conteúdo das Aulas e Suporte para seu Sucesso Acadêmico.</p>
                  </div>
                  <a className="contact-channel-card__cta" href="https://wa.me/5511991401940?text=Ol%C3%A1,%20estou%20no%20site%20da%20FASUL%20e%20preciso%20de%20suporte%20acad%C3%AAmico." target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp para apoio e sucesso acadêmico">
                    <WhatsAppIcon className="text-white" />
                  </a>
                </div>
                <div className="contact-channel-card__item">
                  <div className="contact-channel-card__item-content">
                    <div className="contact-channel-card__item-title">5. FINANCEIRO E ACORDO FÁCIL</div>
                    <p className="contact-channel-card__item-text">Pague sem dor de cabeça! 2ª via de Boletos, Mensalidades, Negociação.</p>
                  </div>
                  <a className="contact-channel-card__cta" href="https://wa.me/5531984088941?text=Ol%C3%A1,%20estou%20no%20site%20da%20FASUL%20e%20preciso%20falar%20sobre%20boletos%20e%20acordos." target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp para falar sobre boletos e acordos">
                    <WhatsAppIcon className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Bar */}
      <div className="blue-background">
        <div className="footer-container flex flex-col sm:flex-row justify-between items-end">
          <span className="txtDir">COPYRIGHT © 1997-2025 - FASUL. TODOS OS DIREITOS RESERVADOS.</span>
          <a className="txtPol" href="https://www.fasuleducacional.edu.br/termos-de-uso" title="Política de privacidade">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
