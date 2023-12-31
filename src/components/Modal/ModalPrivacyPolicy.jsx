import styles from "./ModalPrivacyPolicy.module.sass";

const ModalPrivacyPolicy = ({ onClose }) => {
  return (
    <div className={styles.modalPrivacyPolicy} onClick={onClose}>
      <div className={styles.modalContainer}  onClick={e => e.stopPropagation()}>
        <div className={styles.modalContent}>
            <h1>Политика конфедициальности</h1>
            <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую администрация сайте может получить о Пользователе во время использования сайта Компании. Политика конфиденциальности устанавливает обязательства Администрации сайта Компании по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет на сайте.</p>
            <h2>1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
            <p>1.1. Действующая редакция Политики конфиденциальности является публичным документом и доступна любому пользователю при посещении страницы сайта Компании;</p>
            <p>1.2. Использование Пользователем сайта Компании означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя;</p>
            <p>1.3. Обработка Информации осуществляется Компанией с целью предоставления Пользователям сервисов и услуг. Согласно статье 6 Федерального закона от 27.07.2006 года № 152-ФЗ «О персональных данных», отдельное согласие Пользователя на обработку информации о нем для указанной цели, в том числе его персональных данных, не требуется.</p>
            <h2>2. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</h2>
            <p>2.1. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователям сервисов и услуг, и включают в себя следующую информацию: фамилию, имя, отчество Пользователя, номер телефона, адрес электронной почты, дату и место рождения, а также любую иную информацию о Пользователе, размещаемую им на cайте Компании;</p>
            <h2>3. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ</h2>
            <p>3.1. Персональные данные Пользователя Администрация сайта Компании может использовать в целях:</p>
            <p>3.1.1. Идентификации Пользователя, обратившегося на сайт Компании, для оформления получения устной консультации;</p>
            <p>3.1.2. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования Сайта Компании, оказания услуг, обработка запросов и заявок от Пользователя.</p>
            <h2>4. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ</h2>
            <p>4.1. Компания осуществляет обработку Информации путем ее сбора, записи, систематизации, накопления, хранения, уточнения (обновления, изменения), извлечения, использования, передачи (предоставления), обезличивания, блокирования, удаления, уничтожения;</p>
            <p>4.2. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств;</p>
            <p>4.3. Информация хранится исключительно на электронных носителях и обрабатывается с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка необходима в связи с требованиями законодательства;</p>
            <p>4.4. Пользователь соглашается с тем, что Администрация сайта вправе передавать персональные данные третьим лицам, в частности, курьерским службам, организациями почтовой связи, операторам электросвязи и другим, исключительно в целях предоставления Пользователю сервисов и услуг;</p>
            <p>4.5. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации;</p>
            <p>4.6. Администрация сайта принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
            <p>4.7. Администратор может использовать персональные данные, полученные от Пользователя в маркетинговых, рекламных и информационных целях, а также для предоставления ему сервисов и услуг.</p>
            <h2>5. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2>
            <p>5.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.</p>
            <p>5.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности</p>
        </div>
        <div className={styles.buttonCloce} onClick={onClose}>
          <p>ЗАКРЫТЬ</p>
        </div>
      </div>
    </div>
  );
};

export default ModalPrivacyPolicy;
