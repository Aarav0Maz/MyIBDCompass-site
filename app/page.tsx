"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  LayoutDashboard,
  Radar,
  Wand2,
  MousePointer2,
  Zap,
  Sliders,
  Handshake,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Apple,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { PhoneMockupSlideshow } from "@/components/phone-mockup-slideshow"
import { AnimatedStats } from "@/components/animated-stats"
import { KineticText } from "@/components/kinetic-text"
import { AnimatedSymptomChart } from "@/components/animated-symptom-chart"

function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featuresAnimation = useScrollAnimation()
  const insightsAnimation = useScrollAnimation()
  const faqAnimation = useScrollAnimation()
  const ctaAnimation = useScrollAnimation()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-full blur-3xl animate-mesh-1" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/5 via-transparent to-transparent rounded-full blur-3xl animate-mesh-2" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-float" />
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-morphism">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 group">
            <div className="flex h-14 w-14 items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Image 
                src="/ibd-logo.png"
                alt="MYIBDCompass Logo"
                width={56}
                height={56}
                style={{ width: '100%', height: '100%' }}
                priority
              />
            </div>
            <span className="font-sans text-xl font-semibold text-foreground">MYIBDCompass</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-semibold text-foreground/80 transition-all hover:text-foreground hover:scale-105 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#insights"
              className="text-sm font-semibold text-foreground/80 transition-all hover:text-foreground hover:scale-105 relative group"
            >
              Insights
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold text-foreground/80 transition-all hover:text-foreground hover:scale-105 relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#resources"
              className="text-sm font-semibold text-foreground/80 transition-all hover:text-foreground hover:scale-105 relative group"
            >
              Resources
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden items-center gap-2 rounded-lg glass-button px-4 py-2 text-sm font-semibold transition-all hover:scale-105 lg:flex"
            >
              <Apple className="h-5 w-5 text-foreground" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium text-foreground/70">Download on the</span>
                <span className="text-sm font-bold text-foreground">App Store</span>
              </div>
            </a>
            <a
              href="#"
              className="hidden items-center gap-2 rounded-lg glass-button px-4 py-2 text-sm font-semibold transition-all hover:scale-105 lg:flex"
            >
              <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium text-foreground/70">GET IT ON</span>
                <span className="text-sm font-bold text-foreground">Google Play</span>
              </div>
            </a>
            <button
              className="lg:hidden transition-transform hover:scale-110 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border glass-morphism lg:hidden">
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </a>
              <a
                href="#insights"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Insights
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </a>
              <a
                href="#resources"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Resources
              </a>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                >
                  <Apple className="h-5 w-5" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] opacity-90">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] opacity-90">GET IT ON</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <section className="container mx-auto px-4 py-12 md:px-6 md:py-20 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-badge animate-pulse-glow">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Your IBD Nutrition Partner</span>
              </div>
              <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
                <div className="whitespace-nowrap">
                  <KineticText text="Take Control of" delay={0} />
                </div>
                <div className="whitespace-nowrap">
                  <span className="text-accent">
                    <KineticText text="your IBD Journey" delay={1} />
                  </span>
                </div>
              </h1>
              <p className="text-lg text-foreground/70 text-pretty md:text-xl leading-relaxed font-medium">
                The first nutrition app specifically designed for adults managing inflammatory bowel disease, combining
                easy food tracking with expert dietary guidance.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 rounded-xl glass-button-primary px-6 py-4 text-base font-semibold transition-all hover:scale-105 hover:shadow-glow"
              >
                <Apple className="h-7 w-7 transition-transform group-hover:scale-110" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xs font-medium opacity-80">Download on the</span>
                  <span className="text-lg font-bold">App Store</span>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 rounded-xl glass-button-primary px-6 py-4 text-base font-semibold transition-all hover:scale-105 hover:shadow-glow"
              >
                <svg
                  className="h-7 w-7 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-xs font-medium opacity-80">GET IT ON</span>
                  <span className="text-lg font-bold">Google Play</span>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="text-sm text-foreground/60 flex items-center gap-2 font-medium">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for iOS 14+ and Android 8.0+
            </p>
          </div>
          <div
            className="relative flex items-center justify-center animate-scale-in lg:justify-end"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <PhoneMockupSlideshow />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <AnimatedStats />

      <section
        id="features"
        ref={featuresAnimation.ref}
        className="border-t border-border/40 bg-muted/30 py-20 md:py-32 relative overflow-hidden"
      >
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-accent/5 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-accent/5 blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2
              className={`font-sans text-4xl font-bold text-foreground text-balance md:text-5xl transition-all duration-1000 ${
                featuresAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Your Personal <span className="text-gradient">IBD Nutrition Assistant</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: LayoutDashboard,
                title: "Smart Food Tracking",
                description:
                  "Easily log meals and track symptoms with our intuitive interface designed specifically for IBD management.",
                delay: 200,
              },
              {
                icon: Radar,
                title: "Evidence Based",
                description:
                  "Access scientifically-backed dietary guidelines and personalized recommendations for your IBD journey.",
                delay: 400,
              },
              {
                icon: Wand2,
                title: "Comprehensive Food Database",
                description:
                  "Explore our extensive database of IBD-friendly foods and recipes, updated regularly with new options.",
                delay: 600,
              },
              {
                icon: MousePointer2,
                title: "Pattern Recognition",
                description:
                  "Identify connections between foods and symptoms with advanced analytics that help you understand your unique triggers.",
                delay: 800,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  featuresAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <Card className="h-full glass-card border-border/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="p-6 relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="mb-2 font-sans text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" ref={insightsAnimation.ref} className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute right-1/4 top-1/3 h-96 w-96 animate-float rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className={`relative flex items-center justify-center order-2 lg:order-1 transition-opacity duration-1000 ${
                insightsAnimation.isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl glass-card shadow-2xl">
                <AnimatedSymptomChart />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2
                  className={`font-sans text-4xl font-bold text-foreground text-balance md:text-5xl transition-all duration-1000 ${
                    insightsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  Data at your <span className="text-gradient">fingertips</span>
                </h2>
                <p
                  className={`text-lg text-muted-foreground text-pretty transition-all duration-1000 ${
                    insightsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  Real-time insights for faster decisions
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Trend Analysis",
                    description:
                      "Track patterns and correlations between symptoms and diet in real-time for better health management.",
                    delay: 400,
                  },
                  {
                    icon: Sliders,
                    title: "Real-Time Monitoring",
                    description:
                      "Get instant feedback on your dietary choices and their potential impact on your IBD symptoms.",
                    delay: 600,
                  },
                  {
                    icon: Handshake,
                    title: "Data-Driven Insights",
                    description:
                      "Make informed decisions backed by personalized analytics and historical tracking data.",
                    delay: 800,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group flex gap-4 cursor-pointer transform transition-all duration-1000 ${
                      insightsAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass-icon transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <item.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110 relative z-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-sans text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        ref={faqAnimation.ref}
        className="border-t border-border/40 bg-muted/30 py-20 md:py-32 relative overflow-hidden"
      >
        <div className="absolute left-1/3 top-1/2 h-96 w-96 animate-float rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto max-w-3xl px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2
              className={`font-sans text-4xl font-bold text-foreground text-balance md:text-5xl transition-all duration-1000 ${
                faqAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-gradient">FAQs</span>
            </h2>
            <p
              className={`mt-4 text-lg text-muted-foreground transition-all duration-1000 ${
                faqAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Answers to questions you might have about MYIBDCompass
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: "How does MYIBDCompass help manage IBD symptoms?",
                answer:
                  "MYIBDCompass helps you track your meals, identify trigger foods, and understand patterns between your diet and symptoms. Our evidence-based recommendations and personalized insights empower you to make informed dietary choices that support your IBD management.",
                delay: 400,
              },
              {
                question: "Is the dietary advice medically validated?",
                answer:
                  "Yes, all dietary guidelines and recommendations in MYIBDCompass are based on current scientific research and evidence-based practices for IBD management. However, always consult with your healthcare provider before making significant dietary changes.",
                delay: 500,
              },
              {
                question: "Can I use MYIBDCompass alongside my current treatment plan?",
                answer:
                  "MYIBDCompass is designed to complement your existing treatment plan. It provides valuable insights that you can share with your healthcare team to optimize your overall IBD management strategy.",
                delay: 600,
              },
              {
                question: "Is my health data secure?",
                answer:
                  "Your privacy and data security are our top priorities. We use industry-standard encryption and security measures to protect your personal health information. Your data is never shared with third parties without your explicit consent.",
                delay: 700,
              },
              {
                question: "Can I export my data to share with my doctor?",
                answer:
                  "Yes! MYIBDCompass allows you to export comprehensive reports of your food logs, symptom tracking, and insights. You can easily share these reports with your healthcare provider to facilitate more informed discussions about your treatment.",
                delay: 800,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  faqAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="group rounded-xl border border-border/40 glass-card px-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <AccordionTrigger className="text-left font-sans text-lg font-semibold text-card-foreground hover:no-underline hover:text-accent transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="resources" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute right-1/3 top-1/4 h-96 w-96 animate-float rounded-full bg-accent/5 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="font-sans text-4xl font-bold text-foreground text-balance md:text-5xl">
              Helpful <span className="text-gradient">Resources</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Learn more about IBD management and nutrition
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                title: "IBD Nutrition Guide",
                description:
                  "Comprehensive guide to understanding how nutrition impacts IBD symptoms and management strategies.",
                icon: "📚",
                link: "#",
              },
              {
                title: "Recipe Collection",
                description:
                  "Delicious, IBD-friendly recipes curated by nutritionists and approved by gastroenterologists.",
                icon: "🍽️",
                link: "#",
              },
              {
                title: "Research & Studies",
                description:
                  "Latest scientific research and clinical studies on IBD nutrition and dietary interventions.",
                icon: "🔬",
                link: "#",
              },
              {
                title: "Community Forum",
                description: "Connect with others managing IBD, share experiences, and get support from our community.",
                icon: "💬",
                link: "#",
              },
              {
                title: "Expert Webinars",
                description: "Monthly webinars featuring gastroenterologists, dietitians, and IBD specialists.",
                icon: "🎥",
                link: "#",
              },
              {
                title: "Support Resources",
                description:
                  "Access mental health resources, support groups, and wellness tools for holistic IBD care.",
                icon: "🤝",
                link: "#",
              },
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <Card className="h-full glass-card border-border/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="p-6 relative z-10">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl glass-icon text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {resource.icon}
                    </div>
                    <h3 className="mb-3 font-sans text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{resource.description}</p>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaAnimation.ref} className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`relative overflow-hidden rounded-3xl glass-cta px-8 py-16 text-center shadow-2xl md:px-16 md:py-24 transform transition-all duration-1000 ${
              ctaAnimation.isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <h2
                className={`font-sans text-4xl font-bold text-white text-balance md:text-5xl transition-all duration-1000 ${
                  ctaAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                Ready to take control of your IBD Journe <span className="text-white/90">IBD journey?</span>
              </h2>
              <p
                className={`text-lg text-white/95 text-pretty md:text-xl font-medium transition-all duration-1000 ${
                  ctaAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Download MYIBDCompass today
              </p>
              <div
                className={`flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row transition-all duration-1000 ${
                  ctaAnimation.isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl glass-button-inverse px-6 py-4 text-base font-semibold transition-all hover:scale-105 hover:shadow-glow"
                >
                  <Apple className="h-7 w-7 transition-transform group-hover:scale-110" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs font-medium opacity-80">Download on the</span>
                    <span className="text-lg font-bold">App Store</span>
                  </div>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl glass-button-inverse px-6 py-4 text-base font-semibold transition-all hover:scale-105 hover:shadow-glow"
                >
                  <svg
                    className="h-7 w-7 transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs font-medium opacity-80">GET IT ON</span>
                    <span className="text-lg font-bold">Google Play</span>
                  </div>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
            <div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 glass-morphism py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center">
                  <Image 
                    src="/ibd-logo.png"
                    alt="MYIBDCompass Logo"
                    width={56}
                    height={56}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className="font-sans text-lg font-semibold text-foreground">MYIBDCompass</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted companion for managing IBD through nutrition.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold text-foreground">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 MYIBDCompass. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
