const Cyber = () => {
  return (
    <div className="Cyber">
      <div className="imgBox">
        <img
          src="/assets/images/devices/cyber/home_left.png"
          alt="khaski-vayt"
        />
      </div>
      <div className="CyberMain">
        <div className="CyberDropInner">
          <div className="avatar">
            <img
              src="/assets/images/devices/cyber/logo-bely-Husky-AirMax.png"
              alt=""
            />
          </div>
          <div className="innerTitle">
            <b>
              husky <span> cyber </span>
            </b>
          </div>
          <div className="innerMainText">
            <p
              className="dynamicText"
              data-title="home.cyber.firstP"
              style={{ maxWidth: '320px' }}
            >
              Новая линейка одноразовых устройств от компании Voodoolab
            </p>
            <p className="dynamicText" data-title="home.cyber.secondP">
              Одноразовые устройства HUSKY CYBER
            </p>
            <p
              className="dynamicText"
              data-title="home.cyber.thirdP"
              style={{ maxWidth: '460px' }}
            >
              20 новых устройств удобной формы с необычным дизайном в стиле
              "Cyber Synthwave" - спектр ярких цветов в сочетании с неоновыми
              раскатами не оставит никого равнодушным
            </p>
            <p className="dynamicText" data-title="home.cyber.fourthP">
              8000 затяжек / 20 холодных ярких вкусов
            </p>
          </div>
        </div>
        <div className="button">
          <a
            href="/cyber"
            className="dynamicText"
            data-title="home.cyber.moreLink"
          >
            ПОДРОБНЕЕ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
