'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import 'swiper/css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Crème Visage',
    description: 'Une crème hydratante luxueuse pour une peau éclatante',
    price: '89,00 €',
    image: '/images/products/Crème-Visage.png'
  },
  {
    id: 2,
    name: 'Gommage',
    description: 'Un gommage doux et efficace pour une peau parfaite',
    price: '65,00 €',
    image: '/images/products/gommage.png'
  },
  {
    id: 3,
    name: 'Crème Corporel',
    description: 'Une crème nourrissante pour le corps',
    price: '75,00 €',
    image: '/images/products/Lait-corporel.png'
  },
  {
    id: 4,
    name: 'Lotion',
    description: 'Une lotion tonifiante pour une peau revitalisée',
    price: '55,00 €',
    image: '/images/products/Lotions.png'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sophie L.',
    text: 'Les produits CK Cosmetics ont transformé ma routine beauté. Ma peau n\'a jamais été aussi belle !',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marie D.',
    text: 'Une qualité exceptionnelle, des résultats visibles. Je recommande vivement.',
    rating: 5
  },
  {
    id: 3,
    name: 'Claire B.',
    text: 'Le luxe à l\'état pur. Ces produits valent vraiment leur prix.',
    rating: 5
  }
];

export default function Home() {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <main className="bg-black text-white">
      <section className="hero">
        {/* Hero section remains unchanged - already dark */}
        <div className="container mx-auto px-6">
          <nav className="py-4 mb-12">
            <div className="flex items-center justify-center space-x-8">
              <a href="#about" className="nav-link">À propos</a>
              <a href="#products" className="nav-link">Produits</a>
              <a href="#testimonials" className="nav-link">Témoignages</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </nav>
          
          <div className="text-center">
            <motion.img
              src="/logo.svg"
              alt="CK Cosmetics"
              className="w-96 mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h1
              className="text-2xl md:text-2xl text-white font-light mb-8 font-bodoni tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              NATURELLEMENT VOUS, INTENSEMENT BEAU
            </motion.h1>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-black">
        {/* About section remains unchanged - already dark */}
        <div className="w-full">
          <div className="relative h-[500px] flex">
            <motion.div 
              className="w-1/3 h-full relative border-r border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/models/model1.jpeg" alt="Beauty Model 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="w-1/3 h-full relative border-r border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/models/model2.jpeg" alt="Beauty Model 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="w-1/3 h-full relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/models/model3.jpeg" alt="Beauty Model 3" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8 bg-black bg-opacity-40 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <h2 className="text-5xl font-light mb-6 font-bodoni tracking-wide">
                  L'excellence au service de votre beauté
                </h2>
                <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-lg font-latienne leading-relaxed">
                  CK Cosmetics incarne l'alliance parfaite entre luxe et efficacité. 
                  Nos produits, formulés avec les ingrédients les plus nobles, 
                  subliment votre beauté naturelle.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-28 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light mb-4 font-latienne tracking-wide text-white">Nos Produits</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg font-latienne text-gray-300">
              Des formules uniques, conçues pour révéler votre beauté naturelle
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {products.map((product) => (
              <motion.div 
                key={product.id} 
                className="product-card overflow-hidden shadow-md group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-500"></div>
                </div>
                <div className="bg-gray-800 p-8 text-center">
                  <h3 className="text-2xl mb-3 font-latienne text-white">{product.name}</h3>
                  <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
                  <p className="text-gray-300 mb-4 font-latienne">{product.description}</p>
                  <p className="text-gold text-xl font-latienne">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-12 font-bodoni text-white">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="testimonial-card relative p-8 bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 left-4 text-gold opacity-25">
                  <FaQuoteLeft className="text-6xl" />
                </div>
                <div className="flex flex-col items-center justify-center h-full p-5">
                  <p className="mb-6 text-lg text-center font-latienne italic text-gray-200">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gold mb-2">
                      {testimonial.name}
                    </h4>
                    <div className="flex justify-center gap-1 text-gold">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-12 font-bodoni">Suivez-nous</h2>
          <div className="flex justify-center space-x-8">
            <motion.a 
              href="#" 
              className="social-icon text-3xl"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon text-3xl"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              transition={{ duration: 0.3 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon text-3xl"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              transition={{ duration: 0.3 }}
            >
              <FaTiktok />
            </motion.a>
            <motion.a 
              href="#" 
              className="social-icon text-3xl"
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              transition={{ duration: 0.3 }}
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}