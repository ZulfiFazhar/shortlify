import { Link } from "react-router-dom";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@react/components/ui/button";
import { motion } from "framer-motion";

export default function PricingPage() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      note: "Forever",
      cta: { label: "Get Started", to: "/" },
      features: [
        "Unlimited short links",
        "Basic analytics",
        "QR code generation",
        "7 days data retention",
      ],
      notIncluded: ["Custom domains", "Advanced analytics", "Team workspaces"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "/mo",
      note: "For professionals",
      cta: { label: "Start Pro Trial", to: "/" },
      features: [
        "Everything in Free",
        "Custom domains (3)",
        "Advanced analytics",
        "Link expiration & password",
        "90 days data retention",
        "Priority email support",
      ],
      notIncluded: ["Team workspaces", "SAML SSO"],
      highlight: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/mo",
      note: "For teams",
      cta: { label: "Contact Sales", to: "/about" },
      features: [
        "Everything in Pro",
        "Unlimited custom domains",
        "Workspaces & roles",
        "Unlimited data retention",
        "SAML SSO",
        "Priority support & SLA",
        "Dedicated account manager",
      ],
      notIncluded: [],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "Can I change plans anytime?",
      a: "Yes! Upgrade or downgrade at any time. Changes take effect immediately.",
    },
    {
      q: "What happens to my links if I downgrade?",
      a: "All your links continue to work. You may lose access to premium features like custom domains.",
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 14-day money-back guarantee on all paid plans, no questions asked.",
    },
    {
      q: "Is there a setup fee?",
      a: "No setup fees, ever. Pay only for the plan you choose.",
    },
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
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade anytime, cancel
            anytime.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {tiers.map((t, index) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: t.highlight ? -10 : -5,
                transition: { duration: 0.3 },
              }}
              className={`bg-card border rounded-lg p-6 flex flex-col ${
                t.highlight ? "ring-2 ring-primary shadow-lg scale-105" : ""
              }`}
            >
              {t.highlight && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs font-semibold text-primary mb-2"
                >
                  MOST POPULAR
                </motion.div>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 mb-1">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                  className="text-4xl font-bold inline-block"
                >
                  {t.price}
                </motion.span>
                {t.period && (
                  <span className="text-base text-muted-foreground">
                    {t.period}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{t.note}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {t.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + i * 0.05 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </motion.li>
                ))}
                {t.notIncluded.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.15 + (t.features.length + i) * 0.05,
                    }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant={t.highlight ? "default" : "outline"}
                  size="lg"
                >
                  <Link to={t.cta.to}>{t.cta.label}</Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers.
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
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="space-y-6"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 10 }}
                className="bg-card border rounded-lg p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Still not sure?</h2>
          <p className="text-muted-foreground mb-8">
            Start with our free plan and upgrade when you're ready. No credit
            card required.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild>
              <Link to="/">Try Shortlify Free</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
