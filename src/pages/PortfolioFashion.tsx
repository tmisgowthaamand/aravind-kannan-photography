import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';

const fashionImages = [
  { id: 1, src: portfolioFashion, alt: 'Fashion editorial' },
  { id: 2, src: portfolioFashion, alt: 'Fashion portrait' },
  { id: 3, src: portfolioFashion, alt: 'Editorial shoot' },
  { id: 4, src: portfolioFashion, alt: 'Designer collection' },
  { id: 5, src: portfolioFashion, alt: 'Magazine editorial' },
  { id: 6, src: portfolioFashion, alt: 'Fashion campaign' },
];

const PortfolioFashion = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 section-padding">
        <div className="container-editorial">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          
          <div className="max-w-3xl">
            <p className="text-caption text-muted-foreground mb-4 opacity-0 animate-fade-in">
              Portfolio
            </p>
            <h1 className="text-display mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Fashion & Editorial
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Creative collaborations with designers, stylists, and publications. 
              Where artistic vision meets bold expression.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry style */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {fashionImages.map((image, index) => (
              <div 
                key={image.id}
                className="image-reveal rounded-sm overflow-hidden break-inside-avoid opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial">
          <div className="flex justify-between items-center">
            <Link 
              to="/portfolio/bridal" 
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={20} />
              <div className="text-left">
                <p className="text-caption text-muted-foreground">Previous</p>
                <p className="font-serif text-lg">Bridal & Couple</p>
              </div>
            </Link>
            
            <Link 
              to="/portfolio/portraits" 
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <div className="text-right">
                <p className="text-caption text-muted-foreground">Next</p>
                <p className="font-serif text-lg">Portraits</p>
              </div>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioFashion;
