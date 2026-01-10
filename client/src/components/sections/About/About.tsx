import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { Card } from "@/components/ui/Card";
import {
  MapPin,
  Calendar,
  Award,
  Phone,
  GraduationCap,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 scroll-animate">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <div className="space-y-4">
                <div>
                  <ul className="text-muted-foreground leading-relaxed list-disc space-y-1">
                    <li>
                      Full Stack Developer passionate about efficient, scalable
                      solutions
                    </li>
                    <li>
                      Specialized in creating user-friendly digital experiences
                      that solve real problems
                    </li>
                    <li>
                      Committed to delivering solutions that make meaningful
                      impact on users' lives
                    </li>
                    <li>
                      Believe in clean code, thoughtful design, and continuous
                      learning
                    </li>
                    <li>
                      Driven by curiosity and the challenge of transforming
                      complex ideas into intuitive interfaces
                    </li>
                    <li>
                      Focus on writing maintainable code that stands the test of
                      time
                    </li>
                    <li>
                      Passionate about bridging the gap between technical
                      requirements and user needs
                    </li>
                    <li>
                      Always exploring new ways to improve performance and
                      enhance user satisfaction
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h4 className="text-2xl font-semibold mb-6">Personal Details</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-lg">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>


                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium text-lg">2+ Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Specialization
                    </p>
                    <p className="font-medium text-lg">
                      Full Stack Development
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-lg">
                      B.Tech in Computer Science
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Availability
                    </p>
                    <p className="font-medium text-lg">
                      Open for Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Why Work With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 lg:mb-8">
              Why Work With Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold">Fast & Efficient</h4>
                <p className="text-muted-foreground text-sm">
                  Deliver high-quality code with optimal performance and clean
                  architecture
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-semibold">Creative Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Innovative approaches to complex problems with user-centric
                  design
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold">Team Player</h4>
                <p className="text-muted-foreground text-sm">
                  Excellent communication skills and collaborative mindset
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
