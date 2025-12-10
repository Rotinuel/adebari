"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Building2, Users2, Award, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/blurry.png"
          alt="Construction Background"
          fill
          className="object-cover brightness-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Our Company</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Building strong foundations—structurally and relationally—for over a decade.
          </p>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 md:px-16 lg:px-28 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 2012, our construction firm has grown from a small local contractor
              into one of the region’s most trusted engineering and development partners.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Over the years, we have delivered hundreds of successful residential,
              commercial, and industrial projects, with a strong commitment to safety,
              precision, and client satisfaction.
            </p>
            <p className="text-lg leading-relaxed">
              From concept to completion, our processes are built to ensure efficiency,
              transparency, and top-tier craftsmanship on every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/helmet.png"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-16 lg:px-28">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Handshake className="w-10 h-10 text-primary" />,
              title: "Integrity & Transparency",
              desc: "We build with honesty and maintain open communication with clients every step of the way."
            },
            {
              icon: <Building2 className="w-10 h-10 text-primary" />,
              title: "Quality Craftsmanship",
              desc: "Our attention to detail ensures that every structure is durable and built to perfection."
            },
            {
              icon: <Award className="w-10 h-10 text-primary" />,
              title: "Excellence & Innovation",
              desc: "We adopt modern construction technologies to deliver efficient and sustainable projects."
            }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-lg bg-white"
            >
              <div className="mb-4">{val.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-16 lg:px-28 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To deliver exceptional construction solutions that combine innovation,
              sustainability, and long-lasting quality—while maintaining safety and
              exceeding client expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To become a globally recognized construction firm shaping modern cities,
              empowering communities, and redefining excellence in the built environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-16 lg:px-28">
        <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Leadership</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Engr. Michael Adeyemi", role: "Chief Executive Officer", img: "https://pin.it/zQBBgUMKw" },
            { name: "Sarah Johnson", role: "Head of Operations", img: "https://pin.it/zQBBgUMKw" },
            { name: "Engr. David Okafor", role: "Lead Structural Engineer", img: "https://pin.it/zQBBgUMKw" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md mb-5">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
