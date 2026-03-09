/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactPlayer from 'react-player';
import { 
  Instagram, 
  Youtube, 
  Music2, 
  Mic2, 
  Calendar, 
  Users, 
  Play, 
  ArrowRight,
  Star,
  Zap,
  Disc,
  Headphones
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Player = ReactPlayer as any;

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'back.out(1.7)'
      });

      // Scroll Reveal Animations
      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: 'Seguidores', value: '+1.8 MILHÕES', icon: <Users className="w-5 h-5" /> },
    { label: 'Ouvintes Mensais', value: '+162 MIL', icon: <Headphones className="w-5 h-5" /> },
    { label: 'Total Streams', value: '+30 MILHÕES', icon: <Disc className="w-5 h-5" /> },
  ];

  const socialLinks = [
    { icon: <Instagram />, url: 'https://www.instagram.com/djdannyal/', label: 'Instagram' },
    { icon: <Music2 />, url: 'https://open.spotify.com/intl-pt/artist/3GYCBfQpevAfvIoZbOvW8r?si=VHaLMJIXTBiKEKUKC9xtZA', label: 'Spotify' },
    { icon: <Youtube />, url: 'https://www.youtube.com/@DjDannyAl', label: 'Youtube' },
    { icon: <Zap />, url: 'https://www.tiktok.com/@djdannyalbuquerque', label: 'TikTok' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tighter">
            DANNY <span className="text-brand-primary">ALBUQUERQUE</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-brand-primary transition-colors">Início</a>
            <a href="#lancamento" className="hover:text-brand-primary transition-colors">Lançamento</a>
            <a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-brand-primary transition-colors">Contato</a>
          </nav>

          <a 
            href="https://wa.me/5531971073848" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-primary text-black px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-tighter hover:bg-brand-secondary transition-all hover:scale-105 active:scale-95"
          >
            Contratar Show
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://instagram.fcpq7-1.fna.fbcdn.net/v/t51.82787-15/640398016_18567407398003337_1066093886114620909_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzgzNjMwOTYzNjIxNTgwOTA2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNjZ4MTA2Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=XewWUJOQYzkQ7kNvwGLwhzk&_nc_oc=AdmeAhI2mogp6WBxiPKeIhYei6OWXfJ6vMA8chpEpEDql-EEI3HP1SVNUIRKRv4mTGw&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fcpq7-1.fna&_nc_gid=Uk2wouNCaZO5pkYBE6xq-A&_nc_ss=8&oh=00_AfxD152OH79x423HkGdl651fCS11Rd5Ow0t2hMWVi5X-lA&oe=69B4CE1E" 
            alt="DJ Danny Albuquerque Hero"
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]"></div>
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          <h2 className="hero-title text-[10px] sm:text-xs md:text-base font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-primary mb-4 break-words">
            A Força Feminina na Música Urbana
          </h2>
          <h1 className="hero-title text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-[0.9] mb-8 break-words">
            DANNY <br className="hidden sm:block" /> <span className="whitespace-nowrap">ALBUQUERQUE</span>
          </h1>
          <p className="hero-title text-base md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed px-4">
            DJ, Produtora, Cantora e Compositora. Transformando palcos com energia autêntica e produções que dominam o funk brasileiro.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5531971073848"
              className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-primary transition-all"
            >
              AGENDA DE SHOWS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-brand-primary hover:border-brand-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Authority Marquee */}
      <div className="py-12 bg-white/5 border-y border-white/10 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content flex items-center gap-20 pr-20">
            {[...stats, ...stats].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-brand-primary">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lançamento Recente */}
      <section id="lancamento" className="py-24 px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">Último Lançamento</h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">ASSISTA AO CLIPE</h2>
            </div>
            <a 
              href="https://www.youtube.com/@DjDannyAl" 
              target="_blank"
              className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-brand-primary transition-colors"
            >
              Ver Canal Completo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="aspect-video w-full rounded-3xl overflow-hidden glass shadow-2xl shadow-pink-500/10">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/GmeB1Gy6gMM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Diferenciais - Bento Grid */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">Diferenciais</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">O SHOW QUE DOMINA A CENA</h2>
          </div>

          <div className="bento-grid">
            {/* Card 1 */}
            <div className="col-span-1 md:col-span-2 glass p-8 rounded-3xl flex flex-col items-center text-center md:items-start md:text-left md:justify-end relative overflow-hidden group">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                <Mic2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">Artista Completa</h4>
              <p className="text-white/60 leading-relaxed">
                DJ open format, produtora musical, cantora, compositora e dançarina. Danny assina suas próprias músicas da produção à voz.
              </p>
            </div>

            {/* Card 2 */}
            <div className="col-span-1 glass p-8 rounded-3xl flex flex-col justify-center items-center text-center group">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-bold mb-2">Performance</h4>
              <p className="text-sm text-white/50">Energia explosiva e presença de palco marcante.</p>
            </div>

            {/* Card 3 */}
            <div className="col-span-1 glass p-8 rounded-3xl flex flex-col justify-center items-center text-center group">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-bold mb-2">Identidade</h4>
              <p className="text-sm text-white/50">Estilo único que conquista espaço no funk brasileiro.</p>
            </div>

            {/* Card 4 */}
            <div className="col-span-1 glass p-8 rounded-3xl flex flex-col justify-center items-center text-center group">
               <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
               <h4 className="text-4xl font-display font-bold text-brand-primary mb-2">+1.8M</h4>
               <p className="text-sm uppercase tracking-widest font-bold">Fãs Engajados</p>
            </div>

            {/* Card 5 */}
            <div className="col-span-1 md:col-span-3 glass p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://yt3.googleusercontent.com/BgIzmjp5FFlOUO0h9USBqvMlrkYHSS9o8fIXv8NccraDmzLVvneDCeHveO8k46pAg6jcd5K3=s900-c-k-c0x00ffffff-no-rj" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Danny Albuquerque Profile"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-display font-bold mb-4">Produções de Sucesso</h4>
                <p className="text-white/60 leading-relaxed">
                  Com composições criativas e produções autorais, Danny vem conquistando reconhecimento nacional e parcerias de peso na cena urbana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / Serviços */}
      <section id="sobre" className="py-24 px-6 bg-white/5 reveal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://instagram.fcpq7-1.fna.fbcdn.net/v/t51.82787-15/640398016_18567407398003337_1066093886114620909_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzgzNjMwOTYzNjIxNTgwOTA2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwNjZ4MTA2Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=XewWUJOQYzkQ7kNvwGLwhzk&_nc_oc=AdmeAhI2mogp6WBxiPKeIhYei6OWXfJ6vMA8chpEpEDql-EEI3HP1SVNUIRKRv4mTGw&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fcpq7-1.fna&_nc_gid=Uk2wouNCaZO5pkYBE6xq-A&_nc_ss=8&oh=00_AfxD152OH79x423HkGdl651fCS11Rd5Ow0t2hMWVi5X-lA&oe=69B4CE1E" 
                alt="Danny Albuquerque"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-black">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Agenda Aberta</div>
                  <div className="font-bold">Temporada 2026</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">A Artista</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-none">REPRESENTANDO A FORÇA FEMININA</h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Representando a força feminina na música urbana, Danny Albuquerque se destaca entre as DJs do cenário nacional. Mineira, a artista é DJ open format, produtora musical, cantora, compositora e dançarina.
              </p>
              <p>
                Com identidade autêntica, Danny combina produções autorais a performances marcantes, onde música, presença e dança se encontram. Seu estilo único e energia no palco fazem com que deixe sua marca por onde passa.
              </p>
              <p>
                Com composições criativas e produções de sucesso, a artista vem conquistando cada vez mais espaço e reconhecimento na cena do funk brasileiro.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-display font-bold text-white mb-1">Open Format</div>
                <div className="text-xs uppercase tracking-widest text-brand-primary font-bold">Estilo Musical</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white mb-1">BH / Brasil</div>
                <div className="text-xs uppercase tracking-widest text-brand-primary font-bold">Base / Atuação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos / Prova Social */}
      <section className="py-24 px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">Feedback</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">O QUE DIZEM OS CONTRATANTES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass p-8 rounded-3xl relative">
                <div className="flex gap-1 text-brand-primary mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/70 italic mb-8">
                  "A energia da Danny no palco é surreal. O público não parou um segundo. Profissionalismo impecável do início ao fim."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10"></div>
                  <div>
                    <div className="font-bold">Produtor de Eventos</div>
                    <div className="text-xs text-white/40">Festival Nacional</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 px-6 reveal">
        <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 to-rose-500/10 -z-10"></div>
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-8">LEVE A DANNY PARA O SEU EVENTO</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Garanta uma performance inesquecível com a DJ que é referência em música urbana e presença de palco.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://wa.me/5531971073848"
              className="bg-brand-primary text-black px-12 py-6 rounded-full font-black text-xl hover:bg-brand-secondary transition-all hover:scale-105 active:scale-95 shadow-xl shadow-pink-500/20"
            >
              FALAR COM A PRODUÇÃO
            </a>
            <div className="text-white/40 font-medium tracking-widest uppercase text-sm">
              Contato Direto: (31) 97107-3848
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-display font-bold tracking-tighter">
            DANNY <span className="text-brand-primary">ALBUQUERQUE</span>
          </div>
          
          <div className="flex items-center gap-6">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand-primary transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-white/30 text-xs uppercase tracking-widest">
            Copyright 2026 - DJ Danny Albuquerque
          </div>
        </div>
      </footer>
    </div>
  );
}
