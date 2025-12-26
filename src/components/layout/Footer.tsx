import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 section-padding">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">Aravind Kannan</h3>
            <p className="text-body text-muted-foreground max-w-xs">
              Photography that captures the extraordinary in every moment.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-caption text-muted-foreground">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-body hover:text-muted-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-body hover:text-muted-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-body hover:text-muted-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body hover:text-muted-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-caption text-muted-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-body">
              <li>
                <a 
                  href="mailto:hello@aravindkannan.com" 
                  className="hover:text-muted-foreground transition-colors"
                >
                  hello@aravindkannan.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-muted-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="text-muted-foreground">
                Chennai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aravind Kannan Photography. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Capturing moments since 2010
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
