"use client";

import { useEffect, useState, useRef } from "react";
import ModalCall from "@/components/Modal/ModalCall";
import ModalPrivacyPolicy from "@/components/Modal/ModalPrivacyPolicy";
import styles from "./page.module.sass";
import Main from "@/components/MainSection/MainSection";
import About from "@/components/AboutSection/AboutSection";
import Head from "next/head";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Concultation from "@/components/ConcultationSection/Concultation";
import Reviews from "@/components/ReviewsSection/ReviewsSection";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Garrery";
import Phone from "@/components/PhoneComponents/Phone";
import AsphaltSection from "@/components/Asphalt/AsphaltSection";

// git config --global core.autocrlf true

export default function Home() {
  const [isModalCallOpen, setIsModalCallOpen] = useState(false);
  const [isModalPolicyOpen, setIsModalPolicyOpen] = useState(false);

  const toggleModalCall = () => {
    setIsModalCallOpen(!isModalCallOpen);
  };

  const toggleModalPolicy = () => {
    setIsModalPolicyOpen(!isModalPolicyOpen);
  };

  useEffect(() => {
    if (isModalCallOpen || isModalPolicyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalCallOpen, isModalPolicyOpen]);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    const section = sectionRefs[sectionName].current;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const top = sectionTop + offset;
      const windowHeight = window.innerHeight;
      const scrollTo = top - windowHeight / 2 + section.offsetHeight / 2;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.main}>
        <div className={styles.versionDisktop}>
          <Main
            ref={sectionRefs.section1}
            onNavigate={scrollToSection}
            onClickAdd={toggleModalCall}
          />
          <About ref={sectionRefs.section2} onClickAdd={toggleModalCall} />
          <AsphaltSection />
          <ServicesSection onClickAdd={toggleModalCall} ref={sectionRefs.section3} />
          <Concultation
            ref={sectionRefs.section4}
            onClickAdd={toggleModalCall}
          />
          <Gallery ref={sectionRefs.section5} />
          <Reviews />
          <Footer
            onClickModalPolicy={toggleModalPolicy}
            onNavigate={scrollToSection}
            onClickAdd={toggleModalCall}
          />
        </div>
        <div className={styles.versionPhone}>
          <Phone sectionRefs={sectionRefs} onClickModalPolicy={toggleModalPolicy} onNavigate={scrollToSection} onClickAdd={toggleModalCall} />
        </div>
        {isModalCallOpen && (
          <ModalCall toggleModalPolicy={toggleModalPolicy} onClose={toggleModalCall}/>
        )}
        {isModalPolicyOpen && (
          <ModalPrivacyPolicy onClose={toggleModalPolicy} />
        )}
      </div>
    </>
  );
}
