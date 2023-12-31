import styles from "./HeaderSectionPhone.module.sass";
import { LuMail } from "react-icons/lu";

export default function HeaderSectionPhone() {
  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div className={styles.headerPhone}>
      <div className={styles.headerPhoneContainer}>
        <div className={styles.headerPhoneContent}>
          <div className={styles.headerPhoneLogo}>
            <img src="/headerImg/logosecond.svg" alt="#" width={55} />
            <p>СТРОИТЕЛЬНАЯ КОМПАНИЯ</p>
          </div>
          <div className={styles.headerPhoneEmail}>
            <div className={styles.headerPhoneEmailImg}>
              <LuMail width={55} />
            </div>
            <div className={styles.headerPhoneEmailText}>
              <p>Email:</p>
              <p>grupp.trio@bk.ru</p>
            </div>
          </div>
          <div className={styles.headerPhoneCall}>
            <img src="/headerImg/phonesecond.svg" alt="#" />
            <div className={styles.headerPhoneCallText}>
              <a href="tel:+79189255217">+7 (918) 925-52-17</a>
              {/* <a href="tel:+7900000000">+7(000) 000-00-00</a> */}
            </div>
          </div>
          <div className={styles.headerPhoneMasseges}>
            <div className={styles.bottomSocBox}>
              <a href={whatsAppChannelUrl}>
                <div className={styles.bottomImg}>
                  <img
                    className={styles.img}
                    src="/headerImg/SocialMedia/Whatsapp2.svg"
                    alt="#"
                  />
                </div>
              </a>
            </div>
            <div className={styles.bottomSocBox}>
              <a href={telegramChannelUrl}>
                <div className={styles.bottomImg}>
                  <img
                    className={styles.img}
                    src="/headerImg/SocialMedia/Telegram2.svg"
                    alt="#"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
