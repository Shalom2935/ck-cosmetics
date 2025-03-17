'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import 'swiper/css';

const products = [
  {
    id: 1,
    name: 'Crème Visage',
    description: 'Une crème hydratante luxueuse pour une peau éclatante',
    price: '89,00 €',
    image: '/creme-visage.png'
  },
  {
    id: 2,
    name: 'Gommage',
    description: 'Un gommage doux et efficace pour une peau parfaite',
    price: '65,00 €',
    image: '/gommage.png'
  },
  {
    id: 3,
    name: 'Crème Corporel',
    description: 'Une crème nourrissante pour le corps',
    price: '75,00 €',
    image: '/creme-corporel.png'
  },
  {
    id: 4,
    name: 'Lotion',
    description: 'Une lotion tonifiante pour une peau revitalisée',
    price: '55,00 €',
    image: '/lotion.png'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sophie L.',
    text: 'Les produits CK Cosmetics ont transformé ma routine beauté. Ma peau n\'a jamais été aussi belle !',
    rating: 5
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
    <main>
      <nav className="fixed w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-8">
            <a href="#about" className="nav-link">À propos</a>
            <a href="#products" className="nav-link">Produits</a>
            <a href="#testimonials" className="nav-link">Témoignages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container mx-auto px-6 text-center">
          <motion.img
            src="/logo.svg"
            alt="CK Cosmetics"
            className="w-64 mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl text-white font-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Naturellement vous,<br />intensément beau
          </motion.h1>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light">L'excellence au service de votre beauté</h2>
              <p className="text-gray-600">
                CK Cosmetics incarne l'alliance parfaite entre luxe et efficacité. 
                Nos produits, formulés avec les ingrédients les plus nobles, 
                subliment votre beauté naturelle.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Add your beauty model images here */}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-12">Nos Produits</h2>
          
          {!showGrid ? (
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product-card">
                    <img src={product.image} alt={product.name} className="w-full h-auto" />
                    <div className="product-info">
                      <h3 className="text-xl mb-2">{product.name}</h3>
                      <p className="text-sm mb-2">{product.description}</p>
                      <p className="text-gold">{product.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="w-full h-auto" />
                  <div className="product-info">
                    <h3 className="text-xl mb-2">{product.name}</h3>
                    <p className="text-sm mb-2">{product.description}</p>
                    <p className="text-gold">{product.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          
          <div className="text-center mt-8">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gold transition-colors"
            >
              {showGrid ? 'Vue Carrousel' : 'Voir Tout'}
            </button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-12">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <span className="text-gold">{testimonial.name}</span>
                  <div className="ml-auto">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-12">Suivez-nous</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="social-icon text-3xl">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon text-3xl">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon text-3xl">
              <FaTiktok />
            </a>
            <a href="#" className="social-icon text-3xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}