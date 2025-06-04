"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Wrench,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "work", "team", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Development",
      description:
        "Full-stack web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and scalability.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetic appeal with intuitive functionality to maximize user engagement.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Maintenance & Support",
      description:
        "Ongoing technical support, updates, and optimization to ensure your applications remain secure and performant.",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced inventory management and payment processing.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      results: "300% increase in conversion rate",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management platform with real-time scheduling and telemedicine features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
      results: "50% reduction in administrative overhead",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for investment portfolio management and market analysis.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Python", "Redis", "Chart.js"],
      results: "40% faster decision-making process",
    },
    {
      title: "Social Learning Platform",
      description: "Interactive educational platform with video streaming and collaborative learning tools.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "AWS", "Socket.io"],
      results: "85% user engagement increase",
    },
    {
      title: "Restaurant Management App",
      description: "Complete restaurant operations system with POS integration and delivery tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Flutter", "Django", "PostgreSQL", "Redis"],
      results: "60% improvement in order accuracy",
    },
    {
      title: "IoT Monitoring Dashboard",
      description: "Real-time monitoring system for industrial IoT devices with predictive analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Angular", "Python", "InfluxDB", "MQTT"],
      results: "35% reduction in downtime",
    },
  ]

  const team = [
    {
      name: "John Doe",
      role: "Lead Front-End Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate front-end architect with 8+ years of experience crafting exceptional user interfaces. Specializes in React ecosystem and modern CSS frameworks.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
      linkedin: "#",
      github: "#",
    },
    {
      name: "Jane Smith",
      role: "Full-Stack Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Versatile full-stack developer with expertise in both front-end and back-end technologies. Loves solving complex problems with elegant solutions.",
      skills: ["Python", "Node.js", "PostgreSQL", "AWS", "Docker"],
      linkedin: "#",
      github: "#",
    },
    {
      name: "Alex Chen",
      role: "UI/UX Designer & Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative designer-developer hybrid who bridges the gap between beautiful design and functional code. Advocates for accessibility and inclusive design.",
      skills: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "User Research"],
      linkedin: "#",
      github: "#",
    },
  ]

  const testimonials = [
    {
      quote:
        "The team delivered an exceptional e-commerce platform that exceeded our expectations. Our sales increased by 300% within the first quarter.",
      client: "Sarah Johnson",
      company: "TechStyle Boutique, CEO",
    },
    {
      quote:
        "Professional, responsive, and incredibly skilled. They transformed our complex requirements into an intuitive healthcare management system.",
      client: "Dr. Michael Rodriguez",
      company: "MedCare Clinic, Director",
    },
    {
      quote:
        "Outstanding work on our financial dashboard. The real-time analytics have revolutionized how we make investment decisions.",
      client: "David Kim",
      company: "InvestPro Capital, CTO",
    },
  ]

  const techStack = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Go", "HTML5", "CSS3"],
    "Frontend Frameworks": ["React", "Next.js", "Vue.js", "Angular", "Svelte"],
    "Backend Technologies": ["Node.js", "Django", "Flask", "Express.js", "FastAPI"],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
    "Cloud Platforms": ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify"],
    "Tools & Software": ["Docker", "Git", "Figma", "VS Code", "Webpack"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevTeam
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "services", "work", "team", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {["home", "services", "work", "team", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 w-full text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Your Vision, Our Code:
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Building Exceptional Web & App Experiences
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                We're a passionate team of three developers who transform innovative ideas into powerful, scalable web
                applications and mobile solutions that drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("work")}
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get a Quote
              </Button>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Team collaboration workspace"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive web and mobile development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing our best projects that demonstrate our expertise and deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Star className="h-4 w-4 mr-1" />
                      {project.results}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl text-slate-600 mb-6">
                We're a passionate trio of developers who came together with a shared vision: to create exceptional
                digital experiences that make a real difference for our clients.
              </p>
              <p className="text-lg text-slate-500">
                Our diverse backgrounds in front-end development, full-stack engineering, and UI/UX design allow us to
                approach every project with a comprehensive perspective, ensuring both technical excellence and
                outstanding user experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-100"
                    />
                  </div>
                  <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold mb-4">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{member.bio}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Link href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href={member.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our comprehensive technology stack enables us to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-slate-600 italic">"{testimonial.quote}"</blockquote>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.client}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Get in touch and let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white text-slate-900">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company (Optional)
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project, timeline, and budget..." rows={4} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-slate-300">hello@devteam.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-slate-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-slate-300">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-slate-300 hover:text-slate-100 transition-colors">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                <div className="text-slate-300 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DevTeam
                </span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Transforming innovative ideas into powerful, scalable web applications and mobile solutions that drive
                business growth.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-slate-200 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevTeam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
