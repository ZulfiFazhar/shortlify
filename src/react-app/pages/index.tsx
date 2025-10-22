import { Button } from "@react/components/ui/button";
import {
  Link2,
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  CheckCircle2,
  Globe2,
  Users,
  TrendingUp,
} from "lucide-react";
import { Input } from "@react/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@react/components/ui/avatar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  const features = [
    {
      icon: Link2,
      title: "Custom Branded Links",
      desc: "Create memorable, trustworthy short links that reflect your brand identity.",
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      desc: "Track every click with detailed insights on location, device, and referrer data.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "Bank-level encryption and 99.9% uptime guarantee for all your links.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Global CDN ensures instant redirects anywhere in the world.",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Paste Your URL",
      desc: "Drop any long URL into our shortener.",
    },
    {
      step: "2",
      title: "Customize & Brand",
      desc: "Choose a custom alias or let us generate one.",
    },
    {
      step: "3",
      title: "Share & Track",
      desc: "Share your short link and watch the analytics roll in.",
    },
  ];

  const stats = [
    { value: "10M+", label: "Links Created" },
    { value: "500M+", label: "Clicks Tracked" },
    { value: "50K+", label: "Happy Users" },
    { value: "99.9%", label: "Uptime" },
  ];

  const testimonials = [
    {
      quote:
        "Shortlify transformed how we track our marketing campaigns. The analytics are incredibly detailed and easy to understand.",
      author: "Sarah Johnson",
      role: "Marketing Director",
    },
    {
      quote:
        "Fast, reliable, and the custom domains feature is a game-changer for our brand presence.",
      author: "Michael Chen",
      role: "Startup Founder",
    },
    {
      quote:
        "The best URL shortener I've used. Clean interface, powerful features, and excellent support.",
      author: "Emma Williams",
      role: "Social Media Manager",
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
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Link2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Simplify Your Links</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Shorten URLs,
            <br />
            <span className="text-primary">Amplify Your Reach</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Transform long, complicated URLs into short, memorable links. Track
            clicks, analyze performance, and share with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card border rounded-lg p-6 shadow-lg max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <Input
                type="url"
                placeholder="Enter your long URL here..."
                className="flex-1 px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="lg">Shorten URL</Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you manage, track, and optimize
              every link you share.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/features">
                View All Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Shortlify Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in seconds. Three simple steps to transform your
              links.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 items-center"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-card border rounded-lg p-8 text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by thousands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our users have to say about Shortlify.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for every use case
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a marketer, creator, or business owner, Shortlify
              has you covered.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Globe2,
                title: "Marketing Teams",
                items: ["Campaign tracking", "A/B testing", "ROI analytics"],
              },
              {
                icon: Users,
                title: "Content Creators",
                items: [
                  "Bio link management",
                  "QR codes",
                  "Engagement metrics",
                ],
              },
              {
                icon: TrendingUp,
                title: "Businesses",
                items: [
                  "Team workspaces",
                  "SSO integration",
                  "Priority support",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-card border rounded-lg p-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <useCase.icon className="w-12 h-12 text-primary mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {index === 0 &&
                    "Track campaign performance across all channels with UTM parameters and custom domains."}
                  {index === 1 &&
                    "Share clean links on social media and track which platforms drive the most engagement."}
                  {index === 2 &&
                    "Enterprise-grade features with team collaboration and advanced security controls."}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {useCase.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Shortlify for their link
              management. Start free, upgrade anytime.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free forever plan available
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
