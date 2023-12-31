import { useState } from "react";
import styles from "./Phone.module.sass";
import MainSectionPhone from "./mainSectionPhone/MainSectionPhone";
import AboutSectionPhone from "./aboutSectionPhone/AboutSectionPhone";
import ServicesSection from "../ServicesSection/ServicesSection";
import HeaderSectionPhone from "./headerSectionPhone/HeaderSectionPhone";
import ConcultationSection from "../ConcultationSection/Concultation";
import ModalNav from "./modal/ModalNav";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Garrery";
import AsphaltSection from "../Asphalt/AsphaltSection";

function Phone({ onClickAdd, onClickModalPolicy, sectionRefs, onNavigate }) {
  const [modalNavOn, setModalNavOn] = useState(false);

  return (
    <div className={styles.phone}>
      <div className={styles.phoneContainer}>
        <div className={styles.phoneContent}>
          <div
            className={styles.phoneSections}
            onClick={() => {
              setModalNavOn(false);
            }}
          >
            <HeaderSectionPhone />
            <MainSectionPhone
              ref={sectionRefs.section6}
              onClickAdd={onClickAdd}
            />
            <AboutSectionPhone ref={sectionRefs.section7} />
            <AsphaltSection />
            <ServicesSection
              onClickAdd={onClickAdd}
              ref={sectionRefs.section8}
            />
            <ConcultationSection
              ref={sectionRefs.section9}
              onClickAdd={onClickAdd}
              sectionPhone={true}
            />
            <Gallery ref={sectionRefs.section10} />
            <Footer
              onNavigate={onNavigate}
              onClickModalPolicy={onClickModalPolicy}
              onClickAdd={onClickAdd}
              footerPhone={true}
            />

            <div
              onClick={(e) => {
                e.stopPropagation();
                setModalNavOn(!modalNavOn);
              }}
              className={styles.headerPhoneButtonModal}
            >
              <div className={styles.headerButton}></div>
              <div className={styles.headerButton}></div>
              <div className={styles.headerButton}></div>
            </div>
            <ModalNav
              onNavigate={onNavigate}
              onClickAdd={onClickAdd}
              modalNavOn={modalNavOn}
              addModalNav={() => {
                setModalNavOn(!modalNavOn);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
