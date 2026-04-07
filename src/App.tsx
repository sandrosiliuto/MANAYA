/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Clock, 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  ShoppingBag, 
  Heart,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Colección', href: '#coleccion' },
    { name: 'Inspírate', href: '#inspirate' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Visítanos', href: '#visitanos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex-1 hidden md:flex gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <a key={link.name} href={link.href} className={`text-[10px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
              {link.name}
            </a>
          ))}
        </div>

        <a href="/" className={`text-2xl font-serif tracking-[0.3em] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
          MANAYA
        </a>

        <div className="flex-1 flex justify-end items-center gap-8">
          <div className="hidden md:flex gap-8">
            {navLinks.slice(2).map((link) => (
              <a key={link.name} href={link.href} className={`text-[10px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity ${isScrolled ? 'text-black' : 'text-white'}`}>
                {link.name}
              </a>
            ))}
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={isScrolled ? 'text-black' : 'text-white'} /> : <Menu className={isScrolled ? 'text-black' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-black border-b border-neutral-50 pb-4"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920" 
          alt="Fashion Lifestyle" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.5em] mb-4"
        >
          Tenerife • El Médano
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-[0.2em] mb-8"
        >
          MANAYA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-lg editorial-text mb-12 max-w-xl mx-auto"
        >
          Moda que inspira en El Médano. Una selección exclusiva para la mujer moderna y consciente.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="#coleccion" className="btn-primary bg-white text-black hover:bg-neutral-200">
            Explorar colección
          </a>
          <a href="#visitanos" className="btn-outline border-white text-white hover:bg-white hover:text-black">
            Visítanos
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50"
      >
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </motion.div>
    </section>
  );
};

const EditorialSection = () => {
  return (
    <section id="coleccion" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000" 
            alt="Summer Drop" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2">
            <p className="text-[10px] uppercase tracking-widest font-medium">Summer Drop '24</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-6xl leading-tight">
            La esencia del <br />
            <span className="editorial-text">verano eterno</span>
          </h2>
          <p className="text-neutral-500 leading-relaxed max-w-md">
            Nuestra nueva colección captura la luz y la brisa de El Médano. Tejidos naturales, cortes fluidos y una paleta inspirada en la arena y el mar.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="text-xs uppercase tracking-widest font-semibold border-b border-black pb-1">Ver campaña</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Lookbook = () => {
  const looks = [
    { id: 1, img: 'https://images.unsplash.com/photo-1539109132314-34a9c615129c?auto=format&fit=crop&q=80&w=600', title: 'Boho Chic', items: 'Vestido Lino + Sandalias' },
    { id: 2, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600', title: 'Beach Ready', items: 'Bikini Coral + Pareo' },
    { id: 3, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600', title: 'Sunset Dinner', items: 'Top Seda + Pantalón Palazzo' },
  ];

  return (
    <section id="inspirate" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Inspírate</h2>
          <p className="editorial-text text-neutral-500">Looks seleccionados para cada momento en la isla</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {looks.map((look) => (
            <motion.div 
              key={look.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                <img 
                  src={look.img} 
                  alt={look.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl mb-1">{look.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400">{look.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const cats = [
    { name: 'Vestidos', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bikinis', img: 'https://images.unsplash.com/photo-1502301103665-0b95cc738def?auto=format&fit=crop&q=80&w=400' },
    { name: 'Tops', img: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80&w=400' },
    { name: 'Accesorios', img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bolsos', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section id="categorias" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl">Categorías</h2>
        <a href="#" className="text-[10px] uppercase tracking-widest border-b border-black pb-1">Ver todo</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cats.map((cat) => (
          <div key={cat.name} className="group cursor-pointer relative aspect-[3/4] overflow-hidden">
            <img 
              src={cat.img} 
              alt={cat.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs uppercase tracking-widest font-medium">{cat.name}</span>
            </div>
            <div className="absolute bottom-4 left-4 md:hidden">
               <span className="text-white text-[10px] uppercase tracking-widest bg-black/40 px-2 py-1 backdrop-blur-sm">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TrendingNow = () => {
  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-6 text-neutral-400">Trending Now</p>
          <h2 className="text-5xl md:text-7xl mb-8">El Lino es <br /><span className="editorial-text italic text-sand">el Rey</span></h2>
          <p className="text-neutral-400 mb-12 max-w-md leading-relaxed">
            Descubre por qué nuestras prendas de lino 100% natural son las favoritas de esta temporada. Frescura, elegancia y durabilidad.
          </p>
          <button className="btn-primary bg-white text-black">Ver selección</button>
        </div>
        <div className="flex-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1545291730-f1860d74f6f4?auto=format&fit=crop&q=80&w=400" alt="Linen 1" className="aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=400" alt="Linen 2" className="aspect-[3/4] object-cover mt-8" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-sand/20 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest rotate-12">
            New In
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1529139572765-39730b0ef1e1?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=300',
    'https://images.unsplash.com/photo-1475184414782-596563478482?auto=format&fit=crop&q=80&w=300',
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram className="w-5 h-5" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold">@manaya_medano</span>
        </div>
        <h2 className="text-4xl">Síguenos en Instagram</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {images.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden group cursor-pointer">
            <img 
              src={img} 
              alt={`Instagram ${i}`} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const TrustSection = () => {
  const reasons = [
    { icon: <ShoppingBag className="w-6 h-6" />, title: 'Moda Seleccionada', desc: 'Prendas elegidas con estilo y mimo.' },
    { icon: <Heart className="w-6 h-6" />, title: 'Atención Cercana', desc: 'Te asesoramos para encontrar tu look ideal.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Ubicación Única', desc: 'En el corazón de El Médano, frente al mar.' },
  ];

  return (
    <section className="py-24 bg-sand border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {reasons.map((reason) => (
          <div key={reason.title} className="text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm">
              {reason.icon}
            </div>
            <h3 className="text-xl">{reason.title}</h3>
            <p className="text-sm text-neutral-500 max-w-[250px]">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="visitanos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl">Visítanos en <br /><span className="editorial-text">El Médano</span></h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1">Dirección</p>
                <p className="text-neutral-500">Av. José Miguel Galván Bello, <br />38612 El Médano, Tenerife</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1">Horario</p>
                <p className="text-neutral-500">Lunes – Sábado: <br />10:00 – 13:30 / 17:00 – 20:30</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-neutral-400 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold mb-1">Contacto</p>
                <p className="text-neutral-500">+34 922 00 00 00</p>
              </div>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Av.+José+Miguel+Galván+Bello,+El+Médano" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-fit"
          >
            Cómo llegar
          </a>
        </div>

        <div className="h-[450px] bg-neutral-100 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.848524458515!2d-16.5385!3d28.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAyJzQyLjAiTiAxNsKwMzInMTguNiJX!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Manaya Medano Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  const message = encodeURIComponent("Hola! Estoy interesada en vuestra ropa 😊");
  const whatsappUrl = `https://wa.me/34000000000?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-white text-black text-[10px] uppercase tracking-widest px-3 py-2 rounded shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        ¿Te ayudamos?
      </span>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-3xl font-serif tracking-[0.2em] mb-6">MANAYA</h2>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Boutique de moda femenina en El Médano, Tenerife. Seleccionamos las mejores prendas para que te sientas única y especial.
            </p>
          </div>
          
          <div>
            <p className="text-[10px] uppercase tracking-widest font-semibold mb-6">Explorar</p>
            <ul className="flex flex-col gap-4 text-sm text-neutral-500">
              <li><a href="#coleccion" className="hover:text-black transition-colors">Colección</a></li>
              <li><a href="#inspirate" className="hover:text-black transition-colors">Inspírate</a></li>
              <li><a href="#categorias" className="hover:text-black transition-colors">Categorías</a></li>
              <li><a href="#visitanos" className="hover:text-black transition-colors">Visítanos</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest font-semibold mb-6">Síguenos</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/manaya_medano/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/manayamedano/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">
            © {new Date().getFullYear()} Manaya Medano. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-neutral-400">
            <a href="#" className="hover:text-black">Privacidad</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <EditorialSection />
      
      {/* CTA Block 1 */}
      <div className="bg-sand py-16 text-center">
        <p className="editorial-text text-2xl mb-6">"La moda es la armadura para sobrevivir a la realidad del día a día."</p>
        <a href="#categorias" className="text-[10px] uppercase tracking-widest border-b border-black pb-1">Ver categorías</a>
      </div>

      <Lookbook />
      <Categories />

      {/* CTA Block 2 */}
      <div className="bg-neutral-50 py-24 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl mb-8">¿Buscas algo especial?</h2>
        <p className="text-neutral-500 mb-8 max-w-md">Escríbenos por WhatsApp y te ayudaremos a encontrar el outfit perfecto o resolveremos tus dudas sobre tallas y disponibilidad.</p>
        <a 
          href="https://wa.me/34000000000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          Consultar por WhatsApp
        </a>
      </div>

      <TrendingNow />
      
      {/* Scarcity Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="text-2xl uppercase tracking-widest">Últimas unidades</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                <img 
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=400`} 
                  alt="Product" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 text-[8px] uppercase tracking-widest font-bold text-red-500">
                  Low Stock
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest mb-1">Vestido Floral Limited</p>
              <p className="text-sm font-medium">49,90€</p>
            </div>
          ))}
        </div>
      </section>

      <InstagramGallery />
      <TrustSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
