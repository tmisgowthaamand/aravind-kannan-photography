import { useState, useMemo } from 'react';
import { MapPin, Mail, Phone, Send, ChevronRight, ChevronLeft, Check, CalendarIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import useMeasure from '@/hooks/use-measure';
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SHOOT_TYPES = [
  { label: "Wedding Photography", value: "wedding" },
  { label: "Bridal Portrait", value: "bridal" },
  { label: "Fashion Editorial", value: "fashion" },
  { label: "Commercial / Brand", value: "commercial" },
  { label: "Portraits", value: "portraits" },
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [ref, bounds] = useMeasure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shootType: '',
    date: undefined as Date | undefined,
    location: '',
    message: '',
    mood: '',
  });

  const stepTitles = [
    {
      title: "Basic Information",
      description: "Let's start with who you are and how we can reach you.",
    },
    {
      title: "Event Details",
      description: "Tell us about the celebration or project you're planning.",
    },
    {
      title: "The Vision",
      description: "Share your inspiration and any specific requirements.",
    },
  ];

  const nextStep = () => {
    if (currentStep === 2) {
      handleSubmit();
      return;
    }
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Enquiry sent successfully!", {
      description: "We'll get back to you within 24 hours."
    });
    setIsSubmitting(false);
    // Reset or redirect
    setCurrentStep(0);
  };

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 bg-background/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  type="email"
                  placeholder="hello@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 bg-background/50"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Type of Shoot</label>
              <Select
                value={formData.shootType}
                onValueChange={(val) => setFormData({ ...formData, shootType: val })}
              >
                <SelectTrigger className="h-12 bg-background/50">
                  <SelectValue placeholder="Select one..." />
                </SelectTrigger>
                <SelectContent>
                  {SHOOT_TYPES.map(type => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tentative Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal bg-background/50",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => setFormData({ ...formData, date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location / Venue</label>
                <Input
                  placeholder="Chennai, India"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="h-12 bg-background/50"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Inspiration / Message</label>
              <Textarea
                placeholder="Tell us more about your vision..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px] bg-background/50"
              />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-medium">How are you feeling about the shoot?</label>
              <div className="flex w-full border rounded-xl overflow-hidden divide-x bg-background/50">
                {[
                  { emoji: "✨", value: "inspired", label: "Inspired" },
                  { emoji: "💍", value: "excited", label: "Excited" },
                  { emoji: "📸", value: "ready", label: "Ready" },
                  { emoji: "🤔", value: "exploring", label: "Exploring" },
                ].map((option) => (
                  <button
                    key={option.value}
                    className={cn(
                      "flex-1 p-4 text-2xl transition-all hover:bg-secondary focus:outline-none",
                      formData.mood === option.value
                        ? "bg-primary/10 grayscale-0"
                        : "grayscale-[1] hover:grayscale-0"
                    )}
                    type="button"
                    onClick={() => setFormData({ ...formData, mood: option.value })}
                  >
                    {option.emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [currentStep, formData]);

  const variants = {
    initial: (dir: number) => ({ x: `${110 * dir}%`, opacity: 0 }),
    animate: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({ x: `${-110 * dir}%`, opacity: 0 }),
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/10">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground">Contact</span>
            <h1 className="text-display mt-4 mb-6">Let's start a conversation.</h1>
            <p className="text-subheadline text-muted-foreground">
              Whether you're planning a wedding, a fashion shoot, or a commercial project,
              we're here to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-0 -mt-12">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Info Column */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8 p-10 bg-background rounded-[2rem] border border-border/50 shadow-sm">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Us</p>
                  <p className="text-lg">hello@aravindkannan.com</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Call Us</p>
                  <p className="text-lg">+91 98765 43210</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Studio</p>
                  <p className="text-lg">Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="p-10 bg-foreground text-background rounded-[2rem] shadow-xl">
                <h3 className="text-2xl font-serif mb-4">Response Time</h3>
                <p className="opacity-70 leading-relaxed">
                  We typically respond to inquiries within 24 hours. For weekend shoots,
                  it might take slightly longer. We look forward to connecting with you!
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="bg-background rounded-[3rem] border border-border shadow-2xl overflow-hidden p-8 md:p-12">
                <div className="flex items-center justify-between mb-12">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif">{stepTitles[currentStep].title}</h2>
                    <p className="text-muted-foreground">{stepTitles[currentStep].description}</p>
                  </div>
                  <div className="flex gap-2">
                    {stepTitles.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500",
                          currentStep === i ? "w-8 bg-foreground" : "w-1.5 bg-border"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
                  <motion.div
                    animate={{ height: bounds.height > 0 ? bounds.height : "auto" }}
                    className="relative overflow-hidden"
                  >
                    <div ref={ref}>
                      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                        <motion.div
                          key={currentStep}
                          variants={variants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          custom={direction}
                        >
                          {content}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </MotionConfig>

                <div className="mt-12 pt-8 border-t flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="rounded-full px-6"
                  >
                    <ChevronLeft size={16} className="mr-2" /> Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 h-12"
                  >
                    {currentStep === 2 ? (
                      isSubmitting ? "Sending..." : "Submit Inquiry"
                    ) : (
                      <>Continue <ChevronRight size={16} className="ml-2" /></>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
