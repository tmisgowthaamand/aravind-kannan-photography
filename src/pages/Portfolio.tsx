import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';
import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioCommercial from '@/assets/portfolio-commercial.jpg';

const categories = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Stories of love, told through light and emotion',
    image: portfolioWedding,
    link: '/portfolio/weddings',
  },
  {
    id: 'bridal',
    title: 'Bridal & Couple',
    description: 'Intimate portraits celebrating connection',
    image: portfolioBridal,
    link: '/portfolio/bridal',
  },
  {
    id: 'fashion',
    title: 'Fashion & Editorial',
    description: 'Where vision meets creative expression',
    image: portfolioFashion,
    link: '/portfolio/fashion',
  },
  {
    id: 'portraits',
    title: 'Portraits',
    description: 'Authentic character in every frame',
    image: portfolioPortrait,
    link: '/portfolio/portraits',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Elevating brands through visual storytelling',
    image: portfolioCommercial,
    link: '/portfolio/commercial',
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="text-caption text-muted-foreground mb-4 opacity-0 animate-fade-in">
              Portfolio
            </p>
            <h1 className="text-display mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              The Work
            </h1>
            <p className="text-subheadline text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A curated collection spanning weddings, portraits, fashion, and commercial photography
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="space-y-24 md:space-y-32">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={category.link}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="image-reveal aspect-[4/3] rounded-sm overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''} space-y-4`}>
                  <p className="text-caption text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="text-headline group-hover:text-muted-foreground transition-colors duration-300">
                    {category.title}
                  </h2>
                  <p className="text-body text-muted-foreground max-w-md">
                    {category.description}
                  </p>
                  <div className="pt-4">
                    <span className="btn-minimal">
                      View Gallery <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="text-headline mb-6">Interested in working together?</h2>
          <p className="text-body text-muted-foreground mb-10">
            Every project is a collaboration. Let's discuss how we can bring your vision to life.
          </p>
          <Link to="/contact" className="btn-minimal">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
