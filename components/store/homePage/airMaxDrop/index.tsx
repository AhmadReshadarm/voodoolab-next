const AirMaxDrop = () => {
  return (
    <div className="AirMaxDrop">
      <div className="imgBox">
        <img src="/assets/images/home/blok.png" alt="husky" />
      </div>
      <div className="imgBox imgBoxTwo">
        <img src="/assets/images/home/husky-Text.png" alt="husky" />
        <div className="button">
          <a href="/husky" className="button">
            подробнее
          </a>
        </div>
      </div>
      <div className="dropInfo">
        <div className="dropInfoOne">
          <div className="dropInfoImg">
            <img src="/assets/images/home/airMaxLastBloc/lyod.png" alt="lyod" />
          </div>
          <div className="dropInfoCount">20</div>
          <div className="dropInfoText">
            <p>Насыщенных, ярких и </p>
            <p>морозных вкусов</p>
          </div>
        </div>
        <div className="dropInfoTwo">
          <div className="dropInfoImg height">
            <img
              src="/assets/images/home/airMaxLastBloc/batareyka.png"
              alt="batareyka"
            />
          </div>
          <div className="dropInfoCount">14</div>
          <div className="dropInfoText">
            <p>Дней пользования</p>
            <p className="small">
              мощный аккумулятор позволяет использовать устройство в <br />{' '}
              течении&nbsp;≈ 14 дней
            </p>
          </div>
        </div>
        <div className="dropInfoThree">
          <div className="dropInfoImg">
            <img src="/assets/images/home/airMaxLastBloc/dym.png" alt="dym" />
          </div>
          <div className="dropInfoCount">8000</div>
          <div className="dropInfoText">
            <p>Затяжек</p>
            <p className="fake">fake</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirMaxDrop;
