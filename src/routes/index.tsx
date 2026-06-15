import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Globe, GraduationCap, Play, CheckCircle, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { platformBenefits, platformFeatures } from "@/lib/seo-content";
import { getCommunityStats } from "@/lib/stats.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edusanna - Free Online Learning Platform | African Education" },
      { name: "description", content: "Create a free Edusanna account and study 70+ certificate and diploma courses A-Z. Learn free, track your progress, and only pay when you're ready for an official credential." },
      { property: "og:title", content: "Edusanna - Learn Anything. Completely Free." },
      { property: "og:description", content: "Africa's leading free online learning platform with certificate and diploma programs." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: <Award className="w-8 h-8" />, title: "Dual Certification System", description: "Choose Certificate or Diploma level for any course you complete." },
  { icon: <Users className="w-8 h-8" />, title: "Global Community", description: "Connect with learners from Africa and around the world." },
  { icon: <GraduationCap className="w-8 h-8" />, title: "Stackable Credentials", description: "Start with a Certificate, upgrade to a Diploma with a discount." },
  { icon: <Globe className="w-8 h-8" />, title: "Accessible Anywhere", description: "Mobile-first design for learning on any device." },
];

const stats = [
  { number: "70+", label: "Courses (A-Z)", emoji: "📚" },
  { number: "2 Levels", label: "Certificate & Diploma", emoji: "🎓" },
  { number: "FREE", label: "Learning", emoji: "💰" },
  { number: "24/7", label: "Support", emoji: "🎧" },
];

const testimonials = [
  {
    name: "Tariro M.",
    badge: "+57%",
    quote: "Edusanna took me from lost to confident. I learned for free, studied at my own pace and earned my Certificate without breaking the bank.",
  },
  {
    name: "Bongani K.",
    badge: "Top 5%",
    quote: "Clear, practical, job-ready lessons. I studied free and only paid $18 for a Diploma that employers actually respect.",
  },
  {
    name: "Aisha R.",
    badge: "Distinction",
    quote: "Lessons, quizzes and progress tracking all in one place. Edusanna helped me pass with a distinction - worth every minute.",
  },
];

function Index() {
  const { data: community } = useQuery({
    queryKey: ["community-stats"],
    queryFn: () => getCommunityStats(),
    initialData: { totalUsers: 6428 },
    staleTime: 30_000,
  });
  const userCount = community.totalUsers.toLocaleString("en-US");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SiteNavbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-md bg-[rgba(99,102,241,0.12)] text-indigo-200 text-sm font-semibold shadow-sm mb-8 border border-[rgba(139,124,255,0.3)]"
          >
            Free Learning · Certificate &amp; Diploma Programs A-Z
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
          >
            <span className="text-white">Learn Anything.</span>
            <br />
            <span className="text-sky-300">Completely Free.</span>
          </motion.h1>

          <p className="text-lg md:text-2xl text-blue-800 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Create a free account and access all courses instantly. Learn at your own pace, track your progress and
            only pay when you're ready for an official Certificate ($12) or Diploma ($18).
          </p>

          {/* Social proof bar */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-5 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200 shadow-sm">
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </span>
              <span className="text-sm font-bold text-blue-900">4.9 / 5</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-bold text-blue-900">{userCount}</span>
              <span className="text-sm text-blue-600">users preparing now</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-bold">Join the race</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/courses">
              <Button className="premium-button text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Browse All Courses
              </Button>
            </Link>
            <Link to="/auth" search={{ mode: "signup" }}>
              <Button className="premium-button-outline text-lg px-8 py-3.5">Get Started Free</Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="icon-badge-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{stat.emoji}</span>
                </div>
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-blue-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What students say */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold gradient-text mb-4">What users say</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Real learners. Real results. Join {userCount} people preparing right now.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-blue-900">{t.name}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                    {t.badge}
                  </span>
                </div>
                <span className="flex text-amber-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </span>
                <p className="text-blue-800 leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold gradient-text mb-4">Edusanna Benefits for Everyone</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Whether you're a student, professional, teacher or entrepreneur, Edusanna empowers you to succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformBenefits.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose EDUSANNA?</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">Africa's leading online learning platform with proven excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="course-card text-center border-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">{feature.title}</h3>
                  <p className="text-blue-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platformFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-medium text-blue-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center hero-gradient-premium rounded-3xl p-12 shadow-2xl">
          <ShieldCheck className="w-14 h-14 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Start learning today - it's free</h2>
          <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
            Join Edusanna and unlock 70+ courses. Pay only when you're ready for your official credential.
          </p>
          <Link to="/auth" search={{ mode: "signup" }}>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 text-lg font-bold px-8 py-4 rounded-xl shadow-lg">
              Create your free account
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
