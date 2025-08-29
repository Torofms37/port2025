import foto from "./assets/logo.jpg";
import upn from "./assets/upn.png";
import itson from "./assets/itson.png";
import unir from "./assets/u.png";
import uveg from "./assets/uveg.png";

const App = () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Parallax effect para los orbs flotantes
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelector(".floating-orbs");
    if (orbs) {
      orbs.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });

  // Intersection Observer para animaciones suaves
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Aplicar animación a elementos glass
  document.querySelectorAll('[class*="glass"]').forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(element);
  });

  return (
    <body class="text-white font-sans relative overflow-x-hidden">
      <div class="floating-orbs fixed inset-0 pointer-events-none"></div>

      <header class="relative py-20 px-6">
        <div class="container mx-auto text-center relative z-10">
          <div class="mb-6">
            <div class="w-70 h-70 mx-auto p-2 rounded-full glass glow-blue flex items-center justify-center text-5xl">
              <img src={foto} className="rounded-full shadow-xl" />
            </div>
          </div>

          <h1 class="text-5xl font-extralight mb-4 tracking-wide">
            Rubén Aragón
          </h1>
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span class="glass px-4 py-2 rounded-full text-sm text-electric-blue">
              Estudiante de Doctorado en Sistemas y <br /> Ambientes Educativos
            </span>
            <span class="glass flex items-center px-4 py-2 rounded-full text-sm text-neon-orange">
              Ingeniera en Desarrollo de Software
            </span>
          </div>
          <p class="text-lg max-w-2xl mx-auto opacity-80 font-light leading-relaxed text-justify">
            Educador con 6 años de experiencia como docente y director en
            primaria, especializado en talleres para niños y adultos. Además,
            cuento con experiencia en Desarrollo Web y Software, con habilidades
            intermedias en Front-End y básicas en Back-End. Comunica eficazmente
            en español (nativo) e inglés (B1), integrando formación pedagógica
            con competencias digitales emergentes.
          </p>

          <div class="flex justify-center space-x-4 mt-12">
            <a
              href="mailto:ana.gonzalez@email.com"
              class="glass hover-glow w-12 h-12 rounded-full flex items-center justify-center hover:glow-blue transition-all"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ruben-aragong/"
              target="_blank"
              class="glass hover-glow w-12 h-12 rounded-full flex items-center justify-center hover:glow-blue transition-all"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/torofms37"
              target="_blank"
              class="glass hover-glow w-12 h-12 rounded-full flex items-center justify-center hover:glow-orange transition-all"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/bleiks"
              target="_blank"
              class="glass hover-glow w-12 h-12 rounded-full flex items-center justify-center hover:glow-red transition-all"
            >
              <i class="fab fa-x"></i>
            </a>
          </div>
        </div>
      </header>

      <nav class="glass sticky top-0 z-50 mx-6 rounded-2xl mb-8">
        <div class="container mx-auto px-6">
          <div class="flex justify-center space-x-12 py-4">
            <a
              href="#educacion"
              class="text-white/70 hover:text-electric-blue font-light transition-colors"
            >
              Educación
            </a>
            <a
              href="#experiencia"
              class="text-white/70 hover:text-neon-orange font-light transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#contacto"
              class="text-white/70 hover:text-neon-red font-light transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <section id="educacion" class="py-16 px-6">
        <div class="container mx-auto">
          <h2 class="text-3xl font-normal text-center mb-16 tracking-wide">
            Formación Académica
          </h2>

          <div class="max-w-4xl mx-auto space-y-6">
            <div class="glass-blue hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 glass rounded-2xl flex items-center justify-center text-electric-blue font-bold">
                    <img src={itson} className="rounded-2xl shadow-xl" />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-light mb-2">
                    Doctorado en Ciencias Sociales
                  </h3>
                  <p class="text-electric-blue font-light mb-2">
                    Instituto Tecnológico de Sonora
                  </p>
                  <p class="text-white/60 text-sm mb-3">2023 - 2026</p>
                  <p class="text-white/80 text-sm font-light">
                    Proyectos de investigación, con enfoque prospectivo,
                    relativos a Sistemas y Ambientes Educativos, con alto
                    impacto social.
                  </p>
                </div>
              </div>
            </div>

            <div class="glass-orange hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 glass rounded-2xl flex items-center justify-center text-neon-orange font-bold">
                    <img src={uveg} className="rounded-2xl shadow-xl" />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-light mb-2">
                    Ingeniería en Desarrollo de Software
                  </h3>
                  <p class="text-neon-orange font-light mb-2">
                    Universidad Virtual del Estado de Guanajuato
                  </p>
                  <p class="text-white/60 text-sm mb-3">2025 - 2028</p>
                  <p class="text-white/80 text-sm font-light">
                    Habilidades avanzadas para desarrollar soluciones basadas en
                    software, utilizando tecnologías de vanguardia.
                  </p>
                </div>
              </div>
            </div>
            <div class="glass-red hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 glass rounded-2xl flex items-center justify-center text-neon-red font-bold">
                    <img src={unir} className="rounded-2xl shadow-xl" />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-light mb-2">
                    Maestría en Tecnología Educativa y Competencias Digitales
                  </h3>
                  <p class="text-neon-red font-light mb-2">
                    Universidad de la Rioja en México
                  </p>
                  <p class="text-white/60 text-sm mb-3">2020 - 2022</p>
                  <p class="text-white/80 text-sm font-light">
                    Maestría en Tecnología Educativa: innovación,
                    neuroeducación, gamificación y robótica, sé un líder en
                    educación digital.
                  </p>
                </div>
              </div>
            </div>
            <div class="glass-green hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 glass rounded-2xl flex items-center justify-center text-neon-red font-bold">
                    <img src={upn} className="rounded-2xl shadow-xl" />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-light mb-2">
                    Licenciatura en Intervención Educativa
                  </h3>
                  <p class="text-green-500 font-light mb-2">
                    Universidad Pedagógica Nacional
                  </p>
                  <p class="text-white/60 text-sm mb-3">2013 - 2017</p>
                  <p class="text-white/80 text-sm font-light">
                    Profundización en campos delimitados, que les permita
                    desempeñarse e intervenir con mayores elementos
                    conceptuales, metodológicos y técnico-instrumentales, en un
                    campo problemático específico de la educación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" class="py-16 px-6">
        <div class="container mx-auto">
          <h2 class="text-3xl font-light text-center mb-16 tracking-wide">
            Experiencia Profesional
          </h2>

          <div class="max-w-4xl mx-auto space-y-6">
            <div class="glass hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 glass-blue rounded-2xl flex items-center justify-center text-xl">
                    🏛️
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-light mb-1">Investigadora Senior</h3>
                  <p class="text-electric-blue font-light mb-2 text-sm">
                    Instituto de Políticas Públicas Digitales
                  </p>
                  <p class="text-white/60 text-xs mb-3">2022 - Presente</p>
                  <p class="text-white/80 text-sm font-light">
                    Liderazgo en transformación digital gubernamental y análisis
                    de datos sociales
                  </p>
                </div>
              </div>
            </div>

            <div class="glass hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 glass-orange rounded-2xl flex items-center justify-center text-xl">
                    💻
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-light mb-1">
                    Desarrolladora Full-Stack
                  </h3>
                  <p class="text-neon-orange font-light mb-2 text-sm">
                    TechSocial Solutions
                  </p>
                  <p class="text-white/60 text-xs mb-3">2020 - 2022</p>
                  <p class="text-white/80 text-sm font-light">
                    Desarrollo con React, Node.js y Python para visualización de
                    datos sociales
                  </p>
                </div>
              </div>
            </div>

            <div class="glass hover-glow p-8 rounded-3xl">
              <div class="flex items-start space-x-6">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 glass-red rounded-2xl flex items-center justify-center text-xl">
                    🎓
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg font-light mb-1">Profesora Asociada</h3>
                  <p class="text-neon-red font-light mb-2 text-sm">
                    Universidad Autónoma de Madrid
                  </p>
                  <p class="text-white/60 text-xs mb-3">2021 - Presente</p>
                  <p class="text-white/80 text-sm font-light">
                    Metodologías Digitales de Investigación Social y Sociología
                    Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" class="py-16 px-6">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-light mb-8 tracking-wide">Conectemos</h2>
          <p class="text-lg mb-12 opacity-80 max-w-2xl mx-auto font-light">
            Abierta a colaboraciones en investigación y desarrollo tecnológico
            con impacto social
          </p>

          <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div class="glass-blue hover-glow p-6 rounded-3xl">
              <i class="fas fa-envelope text-2xl mb-3 text-electric-blue"></i>
              <h3 class="font-light mb-2">Email</h3>
              <p class="opacity-70 text-sm">ana.gonzalez@email.com</p>
            </div>
            <div class="glass-orange hover-glow p-6 rounded-3xl">
              <i class="fab fa-linkedin text-2xl mb-3 text-neon-orange"></i>
              <h3 class="font-light mb-2">LinkedIn</h3>
              <p class="opacity-70 text-sm">linkedin.com/in/anagonzalez</p>
            </div>
            <div class="glass-red hover-glow p-6 rounded-3xl">
              <i class="fas fa-phone text-2xl mb-3 text-neon-red"></i>
              <h3 class="font-light mb-2">Teléfono</h3>
              <p class="opacity-70 text-sm">+34 123 456 789</p>
            </div>
          </div>
        </div>
      </section>
      <div class="py-8 px-6">
        <div class="container mx-auto text-center">
          <div class="glass rounded-2xl p-4">
            <p class="text-white/60 text-sm font-light">
              &copy; 2024 Dr. Ana María González
            </p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
