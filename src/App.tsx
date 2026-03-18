import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Menu, Armchair, History, Layers, ArrowRight, Quote, MapPin, Phone, Mail, Share2, Instagram, Globe } from 'lucide-react';

const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-background-dark text-slate-100 min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background-dark/90 backdrop-blur-md border-b border-primary/20">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
          <div className="text-primary flex size-10 shrink-0 items-center">
            <Hammer className="w-8 h-8" />
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 ml-2">Marcenaria</h2>
          <div className="flex items-center justify-end">
            <button aria-label="Abrir menu" className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-transparent text-white hover:bg-white/10 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="flex min-h-[75vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-16 relative overflow-hidden" 
            style={{ backgroundImage: "linear-gradient(rgba(33, 24, 17, 0.4) 0%, rgba(33, 24, 17, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgbnsUDZDEkakETlmJUUfAZSlmb--DpXzByFtY7nimwpp7PvXcekHiZnf2xkbZbqy81MrehPmpA13nrWxXUzQtUPRrTvxK7NWaj4TKICoVVOtn1iF5iT65eqjqgVLpBl41ZZFMAIicmeBNyyGJWjT8OKSvTMzBHxLo-PAZbSOeQ7fHDc2eEMCJyNhYfIT2VVNWA_DWmoegvx0Uasb-LK5q3Fg--6cn8cDwq0Hfr0l5loz0SzSsFlarXlZpnYoiUihaFnKxQzA2OdM8')" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4 max-w-2xl"
            >
              <span className="inline-block w-fit px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded">Excelência em Madeira</span>
              <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl">
                Transformando Madeira em Arte
              </h1>
              <h2 className="text-slate-300 text-lg font-normal leading-relaxed md:text-xl">
                Serviços especializados de marcenaria para sua casa e escritório. Peças exclusivas com acabamento impecável.
              </h2>
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="space-y-6">
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">O Artesão</h2>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-primary">Paixão pelos detalhes, compromisso com a qualidade</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Com mais de 20 anos de experiência em marcenaria fina, combinamos técnicas tradicionais de montagem manual com o que há de mais moderno em design e acabamentos. Cada peça é tratada como uma obra de arte única, construída para durar por gerações.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-2xl font-bold text-white">500+</span>
                  <span className="text-slate-500 text-sm">Projetos Entregues</span>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <span className="block text-2xl font-bold text-white">100%</span>
                  <span className="text-slate-500 text-sm">Madeira Certificada</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-2xl border border-primary/10 group">
              <img 
                alt="Ferramentas de marcenaria sobre uma mesa de madeira" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_gdn5E1w3o7LVCNdNikjsa-7eE4G6_ieaTIHHtSDN0IKuaZY9ZldGi30QWgxq2CZBIdRAfRk63iT6DLIP9saHYvY0m0lRG6HKJTm8R7OLOatoquq1WbXDz8b95k2TXsUw0Kld1q1Y7GNhUpwQArBVb4eUG777ZI4miwDPgqoOT8z10dc-_81QOBkLpEvMXq3zbb_LQH1F6t659E-ESlVBW0lOR-glRX6jHSBllTGON71KqXS4_ol3HVpGWZu5bhqSVXjpV_PVApNw"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background-dark/50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Especialidades</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Nossos Serviços</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <Reveal delay={0.1} className="bg-background-dark border border-primary/10 p-8 rounded-2xl hover:border-primary transition-all group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Armchair className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Móveis Planejados</h4>
                <p className="text-slate-400">Design sob medida para cozinhas, quartos e escritórios, otimizando seu espaço com elegância.</p>
              </Reveal>
              
              <Reveal delay={0.2} className="bg-background-dark border border-primary/10 p-8 rounded-2xl hover:border-primary transition-all group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <History className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Restauração</h4>
                <p className="text-slate-400">Devolvemos a vida e o brilho original a móveis antigos e peças de valor sentimental.</p>
              </Reveal>
              
              <Reveal delay={0.3} className="bg-background-dark border border-primary/10 p-8 rounded-2xl hover:border-primary transition-all group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Layers className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Estruturas de Madeira</h4>
                <p className="text-slate-400">Construção de decks, pergolados e telhados com a melhor madeira do mercado.</p>
              </Reveal>

            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Galeria</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Portfólio de Projetos</h3>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:underline cursor-pointer">
              Ver todos os projetos <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Reveal delay={0.1} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                alt="Armários Modernos" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                src="https://azim.hostlin.com/Craftmax/assets/images/project/project-1.jpg" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <h5 className="text-white font-bold text-lg">Armários Modernos</h5>
                <p className="text-slate-300 text-sm">Marcenaria Premium</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                alt="Cozinha Minimalista" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtkW6vQMzgxdELFIr574ZDsqGoAlQYfRu_KUAfy9bpxqwVzm0sHGqDB1mVJIBLo6ovg_LHw_zMLPybOl5Bm9qb9VA4JMFQxY_e9GhWTrPS4zR3oXdlScCAsSo1TNW_CHroxvG2CUFf-qo5GyygtB8nDkubmTQT6zGYEU3O_tMwuIfIAeHCDWVjtAmDYfWFvwrDYFT97zMml6qwTGvXJJMnDbwV-3VtcBwmelzJMXunnhOTVaiS0wCgQm4mIOL9VSHTZM8O0NK3d5fe" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <h5 className="text-white font-bold text-lg">Cozinha Minimalista</h5>
                <p className="text-slate-300 text-sm">Carvalho Americano</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                alt="Escritório Executivo" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfSBw_r5d70DC04dtg851eXlwTkSarWtjETD3IAB373Dzo7J50ZNARfmMiGf4M2RrtINDTm3DVuhv54qvoVibuJbp_Bsm6LkCRSlW7_aaRI5QBhI2QggYSdi7QsFv6IDk-jXGs00o2V7PnqYWwKOQ9Qun9LvbCBxFyqwiZfRQdnBolN3ORgZyQDZTawbZGL9h_KZluVxNYk7rcCPOf15lpGp7LsM_irWZmiVF9PJMRwUy3tIub9OmzDpfZTLIQgX4E-aKBFgpAh4K" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <h5 className="text-white font-bold text-lg">Escritório Executivo</h5>
                <p className="text-slate-300 text-sm">Nogueira Maciça</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img 
                alt="Mesa Rústica" 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Q2GiIHyMk-5M_oxR1jHlThPW3uvkqKwuFFUSUg10_BY9o-DTvNlbPeWdC_hSilJeTL_mEv4zXRG0fO4ESjSV5YQJZ1ChkjxRFEs_OVcXdpqaFIV6Ciiztc6y382cAodJw_V6RIczCIjNrD8K1VQ1zRRPdnVM74sHzz_5KPbX0TncXEZ7HaYaorMvvrj9ZtRQzRO5hUgOSfbanDkrvmNVfm9twwZOrJlmnW6gLt8ruHVMTkF1FGbo0PF9gawx_tzHKednL6qLm7g0" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <h5 className="text-white font-bold text-lg">Mesa Rústica</h5>
                <p className="text-slate-300 text-sm">Madeira de Demolição</p>
              </div>
            </Reveal>
            
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background-dark px-6">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-12">Depoimentos</h2>
            <div className="flex flex-col items-center">
              <Quote className="text-primary w-12 h-12 mb-6" />
              <p className="text-xl md:text-2xl text-slate-200 italic mb-8">
                "O trabalho da marcenaria superou todas as minhas expectativas. O armário planejado ficou perfeito e a atenção aos detalhes no acabamento é visível de longe. Profissionalismo exemplar!"
              </p>
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">RM</div>
                <div>
                  <h6 className="text-white font-bold">Ricardo Mendes</h6>
                  <p className="text-slate-500 text-sm">Arquiteto</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Contato</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12">Vamos iniciar o seu projeto?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="flex flex-col items-center gap-4 p-6 bg-background-dark/30 border border-primary/10 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-2">Endereço</h5>
                    <p className="text-slate-400 text-sm">Av. da Madeira, 1234 - Distrito Industrial, São Paulo, SP</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-6 bg-background-dark/30 border border-primary/10 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-2">Telefone / WhatsApp</h5>
                    <p className="text-slate-400 text-sm">+55 (11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-6 bg-background-dark/30 border border-primary/10 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-2">E-mail</h5>
                    <p className="text-slate-400 text-sm">contato@marcenaria.com.br</p>
                  </div>
                </div>
                
              </div>
            </Reveal>
          </div>
        </section>

        {/* Additional Gallery */}
        <section className="py-12 px-6 bg-background-dark/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Reveal delay={0.1} className="rounded-2xl overflow-hidden aspect-video shadow-lg border border-primary/5">
              <img 
                src="https://azim.hostlin.com/Craftmax/assets/images/project/project-2.jpg" 
                alt="Projeto 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Reveal>
            
            <Reveal delay={0.2} className="rounded-2xl overflow-hidden aspect-video shadow-lg border border-primary/5">
              <img 
                src="https://azim.hostlin.com/Craftmax/assets/images/project/project-5.jpg" 
                alt="Projeto 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Reveal>
            
            <Reveal delay={0.3} className="rounded-2xl overflow-hidden aspect-video shadow-lg border border-primary/5">
              <img 
                src="https://azim.hostlin.com/Craftmax/assets/images/project/project-3.jpg" 
                alt="Projeto 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Reveal>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark border-t border-primary/20 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Hammer className="text-primary w-8 h-8" />
                <h2 className="text-white text-2xl font-bold">Marcenaria</h2>
              </div>
              <p className="text-slate-500 text-sm">Artesanato em madeira com qualidade Premium. Criando ambientes únicos através do talento manual.</p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Links Rápidos</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a className="hover:text-primary transition-colors" href="#">Sobre Nós</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Nossos Serviços</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Galeria de Fotos</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Orçamentos</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Siga-nos</h5>
              <div className="flex gap-4">
                <a aria-label="Compartilhar" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <Share2 className="w-5 h-5" />
                </a>
                <a aria-label="Instagram" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <Instagram className="w-5 h-5" />
                </a>
                <a aria-label="Website" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-xs">
            <p>© 2026 Marcenaria Fina. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a className="hover:underline" href="#">Política de Privacidade</a>
              <a className="hover:underline" href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
