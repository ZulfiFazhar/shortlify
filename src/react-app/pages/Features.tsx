import { Link } from "react-router-dom";
import {
  Link2,
  BarChart3,
  QrCode,
  Timer,
  ListChecks,
  Shield,
  Zap,
  Globe2,
  Users,
  Smartphone,
  TrendingUp,
  Lock,
} from "lucide-react";
import { Button } from "@react/components/ui/button";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Link2,
      title: "Custom Short Links",
      desc: "Branded, memorable links that build trust and drive clicks.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      desc: "Track clicks, referrers, geo and device data instantly.",
    },
    {
      icon: QrCode,
      title: "QR Codes",
      desc: "Generate and download QR codes for any short link.",
    },
    {
      icon: ListChecks,
      title: "Bulk Shortening",
      desc: "Import CSV to create and manage links at scale.",
    },
    {
      icon: Timer,
      title: "Link Controls",
      desc: "Expiration, max-clicks, and password protection.",
    },
    {
      icon: Shield,
      title: "Security & Reliability",
      desc: "Enterprise-grade security with 99.9% uptime.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Global CDN ensures your links redirect in milliseconds, no matter where your audience is.",
    },
    {
      icon: TrendingUp,
      title: "Boost Engagement",
      desc: "Short, clean links get 34% more clicks than long URLs. Make every share count.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      desc: "Your data stays yours. No selling, no tracking beyond what you need for analytics.",
    },
    {
      icon: Globe2,
      title: "Global Infrastructure",
      desc: "Edge servers in 200+ cities worldwide ensure fast, reliable redirects everywhere.",
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "Marketing Teams",
      desc: "Track campaign performance across channels with UTM parameters and custom domains.",
    },
    {
      icon: Smartphone,
      title: "Social Media",
      desc: "Share clean links on Twitter, Instagram, and LinkedIn. Track which platform drives results.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      desc: "Export detailed reports, integrate with your tools, and make data-driven decisions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful features, simple workflow
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Everything you need to shorten, brand, track and manage links in one
            place.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" asChild>
              <Link to="/">Start Free Trial</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Core Features
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreFeatures.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose Shortlify?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Built for speed, designed for results. Here's what sets us apart.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex gap-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From solo creators to enterprise teams, Shortlify scales with you.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {useCases.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card border rounded-lg p-6"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-card border rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to amplify your links?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of users who trust Shortlify for their link
            management.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link to="/">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
