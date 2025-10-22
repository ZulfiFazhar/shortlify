import { Users, Globe2, Shield, Target, Heart, Zap } from "lucide-react";
import { Button } from "@react/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPage() {
  const highlights = [
    {
      icon: Users,
      title: "Customer-first",
      desc: "We design for clarity, speed, and real outcomes.",
    },
    {
      icon: Globe2,
      title: "Global by default",
      desc: "Fast redirects worldwide with edge-first infra.",
    },
    {
      icon: Shield,
      title: "Secure & private",
      desc: "Security baked in at every layer of the stack.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Simplicity",
      desc: "Complex tech, simple UX. We hide the hard parts so you can focus on what matters.",
    },
    {
      icon: Zap,
      title: "Speed",
      desc: "Every millisecond counts. We obsess over performance so your links are lightning fast.",
    },
    {
      icon: Heart,
      title: "Trust",
      desc: "Your data is sacred. We'll never sell it, leak it, or misuse it. Period.",
    },
  ];

  const stats = [
    { value: "10M+", label: "Links shortened" },
    { value: "50K+", label: "Active users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "200+", label: "Countries served" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Shortlify
          </h1>
          <p className="text-lg text-muted-foreground">
            We're building a modern link platform that's fast, reliable, and
            easy to use. Built by developers, for everyone.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              To make link sharing effortless, transparent, and powerful for
              everyone—from solo creators to global enterprises.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                className="bg-card border rounded-lg p-6"
              >
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
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

      {/* Values */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">Our Values</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              These principles guide every decision we make, from product
              features to customer support.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-8"
          >
            {values.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 10 }}
                className="flex gap-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <Icon className="w-7 h-7 text-primary" />
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

      {/* Story */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="space-y-4 text-muted-foreground"
          >
            {[
              "Shortlify started in 2024 when a small team of engineers got frustrated with clunky, slow link shorteners that tracked everything and explained nothing.",
              "We built Shortlify to be different: fast redirects powered by a global edge network, transparent analytics you can actually understand, and zero dark patterns.",
              "Today, we're a small, focused team obsessed with making link sharing simple and powerful. We iterate fast, listen carefully, and sweat the details so you can share links with confidence.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join us on this journey</h2>
          <p className="text-muted-foreground mb-8">
            Whether you're a solo creator or part of a global team, we'd love to
            have you on board.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link to="/">Get Started Free</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">Explore Features</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
