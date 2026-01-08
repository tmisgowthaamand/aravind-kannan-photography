import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import AnimatedCollection from '../components/uselayouts/AnimatedCollection';

import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';
import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioCommercial from '@/assets/portfolio-commercial.jpg';

const categories = [
  {
    id: '1',
    title: 'Weddings',
    description: 'Stories of love, told through light and emotion',
    image: portfolioWedding,
    link: '/portfolio/weddings',
  },
  {
    id: '2',
    title: 'Bridal & Couple',
    description: 'Intimate portraits celebrating connection',
    image: portfolioBridal,
    link: '/portfolio/bridal',
  },
  {
    id: '3',
    title: 'Fashion & Editorial',
    description: 'Where vision meets creative expression',
    image: portfolioFashion,
    link: '/portfolio/fashion',
  },
  {
    id: '4',
    title: 'Portraits',
    description: 'Authentic character in every frame',
    image: portfolioPortrait,
    link: '/portfolio/portraits',
  },
  {
    id: '5',
    title: 'Commercial',
    description: 'Elevating brands through visual storytelling',
    image: portfolioCommercial,
    link: '/portfolio/commercial',
  },
];

const Portfolio = () => {
  // Transform categories for AnimatedCollection
  const collectionItems = categories.map(cat => ({
    id: cat.id,
    title: cat.title,
    subtitle: cat.description,
    image: cat.image,
    link: cat.link
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">Portfolio</span>
            <h1 className="text-display mt-4 mb-6 italic">The Art of Storytelling.</h1>
            <p className="text-subheadline text-muted-foreground">
              A curated collection spanning weddings, portraits, fashion, and commercial photography.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Collection */}
      <section className="pb-32">
        <div className="container-editorial">
          <div className="bg-secondary/10 rounded-[3rem] p-4 md:p-8">
            <AnimatedCollection
              initialItems={collectionItems}
              title="Photography Categories"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background rounded-t-[4rem]">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="text-5xl font-serif mb-6 italic">Ready to tell your story?</h2>
          <p className="text-lg opacity-70 mb-10">
            Every project is a unique collaboration. Let's discuss how we can bring your vision to life.
          </p>
          <Link to="/contact" className="px-12 py-5 bg-background text-foreground rounded-full font-medium inline-flex items-center group transition-all hover:scale-105">
            Start a Collaboration <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;

