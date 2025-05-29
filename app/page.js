import React, { useState } from 'react';
import { X, Menu, ExternalLink } from 'lucide-react';

// Logo Studio 404 Component (SVG adapté en gris métallisé)
const Studio404Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" className="text-slate-600">
    <g fill="currentColor">
      <path d="M16 2L20 6H24L28 10V14L32 18L28 22V26L24 30H20L16 32L12 30H8L4 26V22L0 18L4 14V10L8 6H12L16 2Z" opacity="0.8"/>
      <path d="M16 8L18 10H20L22 12V14L24 16L22 18V20L20 22H18L16 24L14 22H12L10 20V18L8 16L10 14V12L12 10H14L16 8Z" opacity="0.6"/>
      <circle cx="16" cy="16" r="4" opacity="0.4"/>
    </g>
  </svg>
);

// Main Component
const Studio404MVP = () => {
  const [showConcept, setShowConcept] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Current Drop Data
  const currentDrop = {
    title: "Géométrie Émotionnelle",
    artist: "Maya Dubois",
    description: "Une fusion audacieuse entre abstraction géométrique et expressionnisme digital. L'œil central interroge notre rapport à la surveillance numérique.",
    price: "20 €",
    imageUrl: "/images/oeuvre-principale.jpg",
    isVideo: false
  };

  const ConceptModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 animate-in fade-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light text-slate-800">Concept Studio 404</h2>
          <button 
            onClick={() => setShowConcept(false)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-slate-600"/>
          </button>
        </div>
        <div className="text-slate-600 leading-relaxed space-y-4">
          <p>Studio 404 révèle l'art numérique d'exception, une œuvre à la fois, accessible à tous.</p>
          <p>Chaque drop présente une création unique d'artistes émergents, authentifiée sur blockchain et proposée à prix démocratique.</p>
        </div>
      </div>
    </div>
  );

  const LegalModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 animate-in fade-in duration-300 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light text-slate-800">Mentions Légales & CGV</h2>
          <button 
            onClick={() => setShowLegal(false)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-slate-600"/>
          </button>
        </div>
        <div className="text-slate-600 leading-relaxed space-y-4 text-sm">
          <p><strong>Conditions Générales de Vente - À compléter</strong></p>
          <p><strong>Mentions Légales - À compléter</strong></p>
          <p><strong>Politique de Confidentialité - À compléter</strong></p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Studio404Logo />
              <span className="text-xl font-light text-slate-800 tracking-wide">Studio 404</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#drop" className="text-slate-600 hover:text-slate-800 transition-colors font-light">
                Le Drop
              </a>
              <button 
                onClick={() => setShowConcept(true)}
                className="text-slate-600 hover:text-slate-800 transition-colors font-light"
              >
                Concept
              </button>
              <button 
                onClick={() => setShowLegal(true)}
                className="text-slate-600 hover:text-slate-800 transition-colors font-light"
              >
                CGV
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} className="text-slate-600"/>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-1">
              <a href="#drop" className="block py-2 text-slate-600 hover:text-slate-800 transition-colors font-light">
                Le Drop
              </a>
              <button 
                onClick={() => { setShowConcept(true); setIsMenuOpen(false); }}
                className="block py-2 text-slate-600 hover:text-slate-800 transition-colors font-light w-full text-left"
              >
                Concept
              </button>
              <button 
                onClick={() => { setShowLegal(true); setIsMenuOpen(false); }}
                className="block py-2 text-slate-600 hover:text-slate-800 transition-colors font-light w-full text-left"
              >
                CGV
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div id="drop" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Artwork Section */}
          <div className="relative group">
            <div className="aspect-square bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
              {currentDrop.isVideo ? (
                <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={currentDrop.imageUrl} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={currentDrop.imageUrl}
                  alt={currentDrop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-6 left-6">
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-200/50">
                <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700 tracking-wide">NFT</span>
              </div>
            </div>
          </div>

          {/* Information & Purchase Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-slate-800 mb-4 leading-tight">
                  {currentDrop.title}
                </h1>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full"></div>
                  <span className="text-lg text-slate-600 font-light">{currentDrop.artist}</span>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                {currentDrop.description}
              </p>
              
              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-light text-slate-800">{currentDrop.price}</span>
                <span className="text-slate-500 font-light">Prix fixe</span>
              </div>
            </div>

            {/* Purchase Section */}
            <div className="space-y-6">
              <div 
                className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-4 rounded-2xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => {
                  // Integration Crossmint sera ici
                  console.log('Crossmint integration with API key: sk_staging_23uBE...');
                }}
              >
                <div className="text-center">
                  <div className="text-lg font-medium mb-1">Acheter l'œuvre</div>
                  <div className="text-slate-200 text-sm font-light">20€ • Paiement sécurisé</div>
                </div>
              </div>
              
              <div className="text-center text-sm text-slate-500 font-light leading-relaxed">
                Paiement sécurisé par Carte Bancaire & Crypto<br/>
                NFT livré par email via Crossmint
              </div>
            </div>
          </div>
        </div>

        {/* Featured Works Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center">
            Œuvres Précédentes
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/50 group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={`https://images.unsplash.com/photo-${1541961017774 + i}?w=400&h=400&fit=crop&crop=center`}
                    alt={`Œuvre ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-sm font-medium text-slate-700">Fragment #{i}</div>
                  <div className="text-xs text-slate-500 font-light">Vendu</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Studio404Logo />
              <span className="text-lg font-light text-slate-600">Studio 404</span>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
              <span>© 2025 Studio 404</span>
              <button 
                onClick={() => setShowLegal(true)}
                className="hover:text-slate-700 transition-colors"
              >
                CGV
              </button>
              <button 
                onClick={() => setShowConcept(true)}
                className="hover:text-slate-700 transition-colors"
              >
                Concept
              </button>
              <a href="mailto:contact@studio404.art" className="hover:text-slate-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showConcept && <ConceptModal />}
      {showLegal && <LegalModal />}
    </div>
  );
};

export default Studio404MVP;