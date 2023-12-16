

// "use client";

// import { forwardRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import styles from "./ServicesSection.module.sass";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Parallax, Pagination, Navigation } from "swiper/modules";

// const ServicesSection = forwardRef((props, ref) => {
//   return (
//     <>
//       <div  className="">Услуги</div>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         ref={ref}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Parallax, Pagination, Navigation]}
//         rewind={true}
//         className={styles.mySwiper}
//       >
//         <SwiperSlide
//           className={[styles.swiperSlide, styles.swiperSlideOne].join(" ")}
//         >
//           <div>
//             <div className={styles.title} data-swiper-parallax="-300">
//               Строительно-монтажные работы
//             </div>
//             <div className={styles.subtitle} data-swiper-parallax="-200">
//               Описание услуги
//             </div>
//             <div className={styles.text} data-swiper-parallax="-100">
//               <p>
//                 Строительно-монтажные работы охватывают все работы, выполняемые
//                 при возведении здания или сооружения непосредственно на месте
//                 строительства. Работы принято называть строительными или
//                 монтажными в зависимости от того, какой процесс преобладает. К
//                 монтажным относятся главным образом работы, выполняемые с
//                 применением готовых деталей, например, монтаж железобетонных
//                 конструкций, осветительной или силовой электропроводки,
//                 вентиляции, лифтов и т. д. Все работы на стройках разделяют на
//                 общестроительные, специальные, транспортные и
//                 погрузочно-разгрузочные. К общестроительным относят работы,
//                 сооружений. Общестроительные работы подразделяются по виду
//                 перерабатываемых материалов на земляные, каменные, бетонные и
//                 др., по возводимым конструктивным элементам — на кровельные,
//                 штукатурные и др.
//               </p>
//             </div>
//           </div>
//           <div className={styles.textBlock}>
//             <h3>Виды работ</h3>
//             <p>1. Земляные работы</p>
//             <p>2. Каменные работы</p>
//             <p>3. Бетонные работы</p>
//             <p>4. Свайные работы</p>
//             <p>5. Штукатурные работы</p>
//             <p>6. Кровельные работы</p>
//             <p>7. Отделочные работы</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide
//           className={[styles.swiperSlide, styles.swiperSlideTwo].join(" ")}
//         >
//           <div className="">
//             <div className={styles.title} data-swiper-parallax="-300">
//               Благоустройство территорий
//             </div>
//             <div className={styles.subtitle} data-swiper-parallax="-200">
//               Описание услуги
//             </div>
//             <div className={styles.text} data-swiper-parallax="-100">
//               <p>
//                 Компания «ТриоГрупп» выполняет работы по благоустройству
//                 городских, коммерческих, частных территорий. Мы помогаем
//                 улучшить их внешний вид, сделать их удобными, безопасными,
//                 функциональными: так, чтобы пользоваться ими было комфортно,
//                 приятно. Все работы на стройках разделяют на общестроительные,
//                 специальные, транспортные и погрузочно-разгрузочные. К
//                 общестроительным относят работы, связанные с возведением
//                 строительных конструкций зданий и сооружений. Общестроительные
//                 работы подразделяются по виду перерабатываемых материалов на
//                 земляные, каменные, бетонные и др., по возводимым конструктивным
//                 элементам — на кровельные, штукатурные и др.
//               </p>
//             </div>
//           </div>
//           <div className={styles.textBlock}>
//             <h3>Виды работ</h3>
//             <p>1. Земляные работы</p>
//             <p>2. Установка элементов малой архитектуры</p>
//             <p>3. Озеленение</p>
//             <p>4. Устройство дорожек и площадок</p>
//             <p>5. Установка освещения</p>
//             <p>6. Устройство ирригационных систем</p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide
//           className={[styles.swiperSlide, styles.swiperSlideFree].join(" ")}
//         >
//           <div>
//             <div className={styles.title} data-swiper-parallax="-300">
//               Электромонтажные работы
//             </div>
//             <div className={styles.subtitle} data-swiper-parallax="-200">
//               Описание услуги
//             </div>
//             <div className={styles.text} data-swiper-parallax="-100">
//               <p>
//                 Электромонтажные услуги включают широкий спектр работ, начиная
//                 от проектирования и прокладки электрических сетей до установки и
//                 настройки различных электрических устройств и систем. Это
//                 охватывает монтаж осветительных систем, розеток, выключателей,
//                 щитов управления и систем безопасности, включая пожарную и
//                 охранную сигнализацию. Также к услугам относится интеграция
//                 умных технологий для автоматизации зданий. Важным элементом
//                 является тщательное тестирование и обеспечение соответствия всей
//                 установленной аппаратуры строгим нормам безопасности и
//                 эффективности. Помимо этого, предоставляется консультация по
//                 энергоэффективности и оптимизации электропотребления, а также
//                 обслуживание и ремонт существующих электрических систем.
//               </p>
//             </div>
//           </div>
//           <div className={styles.textBlock}>
//             <h3>Виды работ</h3>
//             <p>1. Кабельные линии</p>
//             <p>2. Электроустановки</p>
//             <p>3. Молния и заземление</p>
//             <p>4. Распределительные щиты, шкафы и распределительные щиты</p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// });

// ServicesSection.displayName = "ServicesSection";

// export default ServicesSection;