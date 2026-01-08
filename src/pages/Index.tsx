import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { AuroraBackground } from '../components/creative/AuroraBackground';

// Uselyout Components
import FeatureCarousel from '../components/uselayouts/FeatureCarousel';

import FluidExpandingGrid from '../components/uselayouts/FluidExpandingGrid';
import VerticalTabs from '../components/uselayouts/VerticalTabs';
import ShakeTestimonial from '../components/uselayouts/ShakeTestimonial';

// Assets
import heroWedding from '@/assets/hero-wedding.jpg';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioFashion from '@/assets/portfolio-fashion.jpg';
import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioCommercial from '@/assets/portfolio-commercial.jpg';

const Index = () => {
  const portfolioItems = [
    {
      id: 'weddings',
      title: 'Weddings',
      subtitle: 'Timeless celebrations of love',
      image: portfolioWedding,
      color: '#e2d1c3',
    },
    {
      id: 'bridal',
      title: 'Bridal',
      subtitle: 'Intimate and elegant portraits',
      image: portfolioBridal,
      color: '#f5f5f5',
    },
    {
      id: 'fashion',
      title: 'Fashion',
      subtitle: 'Artistic vision and style',
      image: portfolioFashion,
      color: '#1a1a1a',
    },
    {
      id: 'commercial',
      title: 'Commercial',
      subtitle: 'Elevating brands through vision',
      image: portfolioCommercial,
      color: '#d4af37',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <AuroraBackground className="h-auto min-h-[80vh] py-24 overflow-hidden">
        <div className="container-editorial relative z-10 px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase bg-secondary/80 backdrop-blur-sm rounded-full">
              Photography Studio
            </span>
            <h1 className="text-display mb-6">Aravind Kannan</h1>
            <p className="text-subheadline text-muted-foreground max-w-2xl mx-auto">
              Capturing the extraordinary in every moment with timeless artistry and authentic connection.
            </p>
          </div>
          <FeatureCarousel />
        </div>
      </AuroraBackground>

      {/* Portfolio Grid Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-editorial">
          <div className="flex items-center justify-between mb-16">
            <div>
              <p className="text-caption text-muted-foreground mb-2">Portfolio</p>
              <h2 className="text-headline">The Curated Gallery</h2>
            </div>
            <Link to="/portfolio" className="btn-minimal hidden md:inline-flex group">
              View All Work
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="min-h-[600px]">
            <FluidExpandingGrid items={portfolioItems} id="home-portfolio-grid" />
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio" className="btn-minimal">
              View All Work <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="text-center mb-16">
              <p className="text-caption text-muted-foreground mb-2">Our Philosophy</p>
              <h2 className="text-headline">Where artistry meets authenticity</h2>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto mt-4">
                Photography is more than documentation—it is interpretation. Our work seeks the quiet moments,
                the unguarded expressions, the light that tells its own story.
              </p>
            </div>
            <VerticalTabs />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background border-y border-border">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <p className="text-caption text-muted-foreground mb-4 font-medium uppercase tracking-widest">Feedback</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Trusted by incredible people</h2>
              <p className="text-body text-muted-foreground mt-6">
                Hear from those who've entrusted us with their most precious moments.
                Our connection with clients is the heart of every project.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <ShakeTestimonial />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={heroWedding} alt="" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container-editorial relative z-10 text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 italic">Let's create together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Every project begins with a conversation. We would love to hear about the
            moments you want to preserve for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
              Start Your Journey
            </Link>
            <Link to="/portfolio" className="btn-minimal text-lg group">
              Browse Our Work
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
