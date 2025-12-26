import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import portfolioCommercial from '@/assets/portfolio-commercial.jpg';

const commercialImages = [
  { id: 1, src: portfolioCommercial, alt: 'Product photography' },
  { id: 2, src: portfolioCommercial, alt: 'Brand campaign' },
  { id: 3, src: portfolioCommercial, alt: 'Commercial shoot' },
  { id: 4, src: portfolioCommercial, alt: 'Advertising photography' },
  { id: 5, src: portfolioCommercial, alt: 'Luxury brand' },
  { id: 6, src: portfolioCommercial, alt: 'Product styling' },
];

const PortfolioCommercial = () => {
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
              Commercial
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Brand photography that elevates products and services through visual storytelling. 
              From luxury goods to lifestyle campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {commercialImages.map((image, index) => (
              <div 
                key={image.id}
                className="image-reveal aspect-[4/3] rounded-sm overflow-hidden opacity-0 animate-fade-in-up"
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
              to="/portfolio/portraits" 
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={20} />
              <div className="text-left">
                <p className="text-caption text-muted-foreground">Previous</p>
                <p className="font-serif text-lg">Portraits</p>
              </div>
            </Link>
            
            <Link 
              to="/portfolio/weddings" 
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <div className="text-right">
                <p className="text-caption text-muted-foreground">Next</p>
                <p className="font-serif text-lg">Weddings</p>
              </div>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioCommercial;
