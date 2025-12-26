import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <p className="text-caption text-muted-foreground mb-4">404</p>
          <h1 className="text-display mb-6">Page Not Found</h1>
          <p className="text-body text-muted-foreground mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn-minimal">
            <ArrowLeft size={16} /> Return Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
