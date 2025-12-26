import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I will get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="text-caption text-muted-foreground mb-4 opacity-0 animate-fade-in">
              Contact
            </p>
            <h1 className="text-display mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Get in Touch
            </h1>
            <p className="text-subheadline text-muted-foreground opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Every project begins with a conversation. I look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding pt-0">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-serif text-2xl mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm tracking-wide">
                      Name <span className="text-muted-foreground">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-border focus:border-foreground transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm tracking-wide">
                      Email <span className="text-muted-foreground">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-border focus:border-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm tracking-wide">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-transparent border-border focus:border-foreground transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm tracking-wide">
                      Subject <span className="text-muted-foreground">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-transparent border-border focus:border-foreground transition-colors"
                      placeholder="Wedding Photography"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm tracking-wide">
                    Message <span className="text-muted-foreground">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border-border focus:border-foreground transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-6 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:hello@aravindkannan.com" 
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      hello@aravindkannan.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Phone</p>
                    <a 
                      href="tel:+919876543210" 
                      className="text-lg hover:text-muted-foreground transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-caption text-muted-foreground mb-1">Studio</p>
                    <p className="text-lg">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="mt-12 p-6 bg-secondary/50 rounded-sm">
                <p className="text-caption text-muted-foreground mb-2">Response Time</p>
                <p className="text-body">
                  I typically respond to enquiries within 24-48 hours. 
                  For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
