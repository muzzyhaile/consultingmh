
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Leiter Business Unit",
    company: "Guiding Ventures",
    location: "Berlin",
    period: "01/2023 – heute",
    description: "Leitet datengetriebene MVP-Tests für Start-ups und entwickelte KI-gestützte Tools.",
    achievements: [
      "Validierte fünf Value-Propositions per Kundeninterviews & Lean Canvas",
      "Zwei MVPs nach < 4 Monaten entwickelt",
      "Organischen Traffic um 30% gesteigert",
      "100% Releases termingerecht durch Offshore-Team-Aufbau"
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "Leadership"
  },
  {
    title: "Senior Digital Consultant",
    company: "E.ON",
    location: "Essen & Remote",
    period: "08/2017 – 04/2024",
    description: "Steuerte den 5-Länder-Rollout digitaler Produkt-Bundles in nur vier Monaten.",
    achievements: [
      "Time-to-Market um 50% verkürzt durch Lean-Startup-Trainings",
      "Konzernweites Blueprint für Produkt-Bundles entwickelt",
      "A/B- und Multivariantentests implementiert",
      "KPI-Dashboards für C-Level Reporting erstellt"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    category: "Digital Transformation"
  },
  {
    title: "Senior Business Analyst",
    company: "HCL Digital & Analytics",
    location: "Paris",
    period: "04/2017 – 08/2017",
    description: "Beriet Fach- bis C-Level-Stakeholder und positionierte HCL als agilen Digitalpartner.",
    achievements: [
      "Website-Relaunch 2 Wochen vor Deadline geliefert",
      "PIM → DAM Migration erfolgreich durchgeführt",
      "KPIs & Reporting-Templates definiert",
      "Offshore-Team (5 MA) erfolgreich gesteuert"
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    category: "Business Analysis"
  },
  {
    title: "Creative Strategist",
    company: "Convidera",
    location: "Köln",
    period: "09/2015 – 01/2016",
    description: "Konzipierte preisgekrönte digitale Kampagnen und Customer-Journeys.",
    achievements: [
      "Vodafone #WeAreChristmas - 'Best Performing Content Strategy 2015'",
      "Kommunikationspläne für Invitech (Viessmann) entwickelt",
      "UX-Konzept für In-house-Produkt Realtrax erstellt",
      "Zwei Content-Kampagnen und Blogger-Event geplant"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    category: "Creative Strategy"
  },
  {
    title: "Website Producer",
    company: "The Walt Disney Company",
    location: "London",
    period: "03/2014 – 06/2014",
    description: "Verantwortlich für Launch eines europäischen Disney-Store-Webshops.",
    achievements: [
      "Vollständiges CMS-Set-up implementiert",
      "Usability-Tests und SEO-Best-Practices durchgeführt",
      "Conversion-Rates optimiert",
      "1 Mio. Facebook-Likes in 3 Stunden nach Launch"
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    category: "E-Commerce"
  },
  {
    title: "Digital Strategist",
    company: "Investis",
    location: "London",
    period: "06/2014 – 04/2015",
    description: "Gewann Pitches im Wert von jeweils rund 300.000 € als Strategy Owner.",
    achievements: [
      "Analytics- und Strategie-Präsentationen mit klaren Handlungsempfehlungen",
      "Content- und Social-Kampagnen für exzellentes ROI optimiert",
      "SEO-Beratung: technisches Audit, Linkbuilding, Content-Promotion",
      "Performance-Reporting implementiert"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Strategy"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Berufserfahrung
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            15+ Jahre Expertise in digitaler Transformation und Produktentwicklung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 overflow-hidden hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    {experience.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </div>
                </div>
                <p className="text-orange-400 font-medium mb-3">{experience.company}</p>
                <p className="text-gray-400 mb-4 leading-relaxed">{experience.description}</p>
                
                <div className="space-y-2">
                  {experience.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="text-green-400 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
