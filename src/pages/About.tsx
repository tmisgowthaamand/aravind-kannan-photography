import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import StackedList from '../components/uselayouts/StackedList';

// Assets
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
              <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-semibold tracking-[0.3em] uppercase bg-secondary rounded-full">
                The Story
              </span>
              <h1 className="text-display mb-8">Capturing the human experience.</h1>
              <div className="space-y-6 text-xl font-serif text-muted-foreground leading-relaxed">
                <p>
                  For over fifteen years, I have been telling visual stories through the lens.
                  What began as a fascination with light and shadow has evolved into a lifelong
                  pursuit of capturing authentic human moments.
                </p>
                <p>
                  Based in Chennai, my work has taken me across India and beyond—from intimate
                  destination weddings to high-fashion editorial shoots.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img
                  src={photographerPortrait}
                  alt="Aravind Kannan - Photographer"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats - Modern Grid */}
      <section className="py-24 bg-foreground text-background">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-6xl md:text-7xl font-serif italic">15</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Years</p>
            </div>
            <div className="space-y-2">
              <p className="text-6xl md:text-7xl font-serif italic">500</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Weddings</p>
            </div>
            <div className="space-y-2">
              <p className="text-6xl md:text-7xl font-serif italic">50</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Brands</p>
            </div>
            <div className="space-y-2">
              <p className="text-6xl md:text-7xl font-serif italic">12</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Collaborators Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">Network</span>
              <h2 className="text-5xl font-serif mt-4">The Creative Collective</h2>
              <p className="text-body text-muted-foreground mt-6">
                Behind every great photograph is a team of dedicated professionals.
                We collaborate with the best stylists, makeup artists, and coordinators
                to ensure your vision is realized to perfection.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-px bg-border mb-4" />
              <p className="text-sm font-medium tracking-tighter">EST. 2010</p>
            </div>
          </div>

          <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-sm border border-border/50">
            <StackedList />
          </div>
        </div>
      </section>

      {/* Approach Deep Dive */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">Philosophy</span>
          <h2 className="text-6xl font-serif mt-6 italic">Artistry in the everyday.</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that every subject—whether a nervous bride, a confident model,
              or a luxury product—has a story waiting to be told. Our role is to find
              that story and preserve it with intention.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether working with natural light at golden hour or crafting dramatic
              studio setups, our approach remains consistent: observe carefully,
              compose thoughtfully, and capture authentically.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="text-headline mb-6">Let's create something beautiful.</h2>
          <p className="text-body text-muted-foreground mb-10">
            Every conversation is an opportunity for a new creative journey.
            We look forward to hearing yours.
          </p>
          <Link to="/contact" className="px-12 py-5 bg-foreground text-background rounded-full font-medium inline-flex items-center group transition-all">
            Get in Touch
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
