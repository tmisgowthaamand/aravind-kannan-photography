import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';

const bridalImages = [
  { id: 1, src: portfolioBridal, alt: 'Bridal portrait', aspectRatio: 'portrait' },
  { id: 2, src: portfolioBridal, alt: 'Couple portrait', aspectRatio: 'portrait' },
  { id: 3, src: portfolioBridal, alt: 'Pre-wedding shoot', aspectRatio: 'portrait' },
  { id: 4, src: portfolioBridal, alt: 'Bridal details', aspectRatio: 'portrait' },
  { id: 5, src: portfolioBridal, alt: 'Engagement session', aspectRatio: 'portrait' },
  { id: 6, src: portfolioBridal, alt: 'Couple moment', aspectRatio: 'portrait' },
];

const PortfolioBridal = () => {
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
              Bridal & Couple
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Intimate portraits that celebrate the beauty of love and connection. 
              Pre-wedding sessions, engagement shoots, and bridal portraiture.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bridalImages.map((image, index) => (
              <div 
                key={image.id}
                className="image-reveal aspect-[3/4] rounded-sm overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
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
              to="/portfolio/weddings" 
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={20} />
              <div className="text-left">
                <p className="text-caption text-muted-foreground">Previous</p>
                <p className="font-serif text-lg">Weddings</p>
              </div>
            </Link>
            
            <Link 
              to="/portfolio/fashion" 
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <div className="text-right">
                <p className="text-caption text-muted-foreground">Next</p>
                <p className="font-serif text-lg">Fashion & Editorial</p>
              </div>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioBridal;
