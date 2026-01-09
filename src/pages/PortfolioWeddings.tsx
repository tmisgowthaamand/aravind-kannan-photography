import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import portfolioWedding from '@/assets/portfolio-wedding.webp';
import heroWedding from '@/assets/hero-wedding.webp';

const weddingImages = [
  { id: 1, src: heroWedding, alt: 'Wedding ceremony', aspectRatio: 'landscape' },
  { id: 2, src: portfolioWedding, alt: 'Couple portrait', aspectRatio: 'landscape' },
  { id: 3, src: heroWedding, alt: 'Reception moment', aspectRatio: 'landscape' },
  { id: 4, src: portfolioWedding, alt: 'Wedding details', aspectRatio: 'landscape' },
  { id: 5, src: heroWedding, alt: 'First dance', aspectRatio: 'landscape' },
  { id: 6, src: portfolioWedding, alt: 'Candid moment', aspectRatio: 'landscape' },
];

const PortfolioWeddings = () => {
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
              Weddings
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Each wedding is a unique story of love, tradition, and celebration.
              I document these moments with reverence and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {weddingImages.map((image, index) => (
              <div
                key={image.id}
                className="image-reveal aspect-[3/2] rounded-sm overflow-hidden opacity-0 animate-fade-in-up"
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
              to="/portfolio/commercial"
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={20} />
              <div className="text-left">
                <p className="text-caption text-muted-foreground">Previous</p>
                <p className="font-serif text-lg">Commercial</p>
              </div>
            </Link>

            <Link
              to="/portfolio/bridal"
              className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
            >
              <div className="text-right">
                <p className="text-caption text-muted-foreground">Next</p>
                <p className="font-serif text-lg">Bridal & Couple</p>
              </div>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioWeddings;
