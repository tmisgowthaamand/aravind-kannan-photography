import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import heroImage from '@/assets/hero-wedding.jpg';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';
import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioCommercial from '@/assets/portfolio-commercial.jpg';

const portfolioCategories = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Timeless celebrations',
    image: portfolioWedding,
    link: '/portfolio/weddings',
  },
  {
    id: 'bridal',
    title: 'Bridal & Couple',
    subtitle: 'Intimate portraits',
    image: portfolioBridal,
    link: '/portfolio/bridal',
  },
  {
    id: 'fashion',
    title: 'Fashion & Editorial',
    subtitle: 'Artistic vision',
    image: portfolioFashion,
    link: '/portfolio/fashion',
  },
  {
    id: 'portraits',
    title: 'Portraits',
    subtitle: 'Authentic moments',
    image: portfolioPortrait,
    link: '/portfolio/portraits',
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Brand storytelling',
    image: portfolioCommercial,
    link: '/portfolio/commercial',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Wedding photography by Aravind Kannan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p 
            className="text-caption text-primary-foreground/80 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Photography Studio
          </p>
          <h1 
            className="text-display text-primary-foreground mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Aravind Kannan
          </h1>
          <p 
            className="text-xl md:text-2xl font-serif text-primary-foreground/90 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Capturing the extraordinary in every moment
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-editorial max-w-3xl text-center">
          <p className="text-subheadline text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            For over a decade, I have dedicated myself to the art of visual storytelling. 
            Each frame is an invitation to pause, to feel, to remember.
          </p>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <h2 className="text-headline">Portfolio</h2>
            <Link to="/portfolio" className="btn-minimal hidden md:inline-flex">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioCategories.map((category, index) => (
              <Link
                key={category.id}
                to={category.link}
                className="group block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="image-reveal aspect-[3/4] mb-4 rounded-sm overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl group-hover:text-muted-foreground transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {category.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Link */}
          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio" className="btn-minimal">
              View All Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-caption text-muted-foreground">Approach</p>
              <h2 className="text-headline">
                Where artistry meets authenticity
              </h2>
              <div className="space-y-4 text-body text-muted-foreground">
                <p>
                  Photography is more than documentation—it is interpretation. 
                  My work seeks the quiet moments, the unguarded expressions, 
                  the light that tells its own story.
                </p>
                <p>
                  Whether capturing the grandeur of a wedding celebration or 
                  the subtle emotions of a portrait session, I bring the same 
                  dedication to craft and connection.
                </p>
              </div>
              <Link to="/about" className="btn-minimal mt-8 inline-flex">
                About the Studio <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="image-reveal aspect-[3/4] rounded-sm overflow-hidden translate-y-8">
                <img
                  src={portfolioBridal}
                  alt="Bridal portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="image-reveal aspect-[3/4] rounded-sm overflow-hidden -translate-y-8">
                <img
                  src={portfolioFashion}
                  alt="Fashion editorial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="text-headline mb-6">Let's create together</h2>
          <p className="text-body text-muted-foreground mb-10">
            Every project begins with a conversation. I would love to hear about 
            the moments you want to preserve.
          </p>
          <Link to="/contact" className="btn-minimal">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
