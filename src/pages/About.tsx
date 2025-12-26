import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import photographerPortrait from '@/assets/photographer-portrait.jpg';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-caption text-muted-foreground mb-4 opacity-0 animate-fade-in">
                About
              </p>
              <h1 className="text-display mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                The Story
              </h1>
              <div className="space-y-6 text-body text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p>
                  For over fifteen years, I have been telling visual stories through the lens. 
                  What began as a fascination with light and shadow has evolved into a lifelong 
                  pursuit of capturing authentic human moments.
                </p>
                <p>
                  Based in Chennai, my work has taken me across India and beyond—from intimate 
                  destination weddings to high-fashion editorial shoots, from quiet portrait 
                  sessions to dynamic commercial campaigns.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="image-reveal aspect-square rounded-sm overflow-hidden">
                <img
                  src={photographerPortrait}
                  alt="Aravind Kannan - Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-caption text-muted-foreground mb-6">Philosophy</p>
            <h2 className="text-headline mb-8">
              Photography is the art of seeing what others overlook
            </h2>
            <p className="text-xl font-serif text-muted-foreground leading-relaxed">
              I believe that every subject—whether a nervous bride, a confident model, 
              or a luxury product—has a story waiting to be told. My role is to find 
              that story and preserve it with intention and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <p className="text-caption text-muted-foreground mb-4">Approach</p>
                <h2 className="text-headline mb-6">Where craft meets connection</h2>
              </div>
              
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  Technical excellence is the foundation, but connection is what makes 
                  a photograph memorable. I take time to understand each client—their 
                  story, their vision, their comfort.
                </p>
                <p>
                  Whether working with natural light at golden hour or crafting dramatic 
                  studio setups, my approach remains consistent: observe carefully, 
                  compose thoughtfully, and capture authentically.
                </p>
                <p>
                  The result is imagery that feels both timeless and true—photographs 
                  that my clients return to, year after year, with the same emotion 
                  they felt in the moment.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="image-reveal aspect-[3/4] rounded-sm overflow-hidden">
                <img
                  src={portfolioWedding}
                  alt="Wedding photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="image-reveal aspect-[3/4] rounded-sm overflow-hidden translate-y-12">
                <img
                  src={portfolioFashion}
                  alt="Fashion photography"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-secondary/30">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <p className="text-display text-4xl md:text-5xl">15+</p>
              <p className="text-caption text-muted-foreground">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-display text-4xl md:text-5xl">500+</p>
              <p className="text-caption text-muted-foreground">Weddings Captured</p>
            </div>
            <div className="space-y-2">
              <p className="text-display text-4xl md:text-5xl">50+</p>
              <p className="text-caption text-muted-foreground">Brand Collaborations</p>
            </div>
            <div className="space-y-2">
              <p className="text-display text-4xl md:text-5xl">12</p>
              <p className="text-caption text-muted-foreground">Countries Visited</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="text-headline mb-6">Ready to create something beautiful?</h2>
          <p className="text-body text-muted-foreground mb-10">
            I would love to hear about your project and discuss how we can work together.
          </p>
          <Link to="/contact" className="btn-minimal">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
