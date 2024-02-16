import styled from 'styled-components';

const Container = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="first_layout">
          <div className="imgBox">
            <div className="logoBox">
              <img
                className="logoSiberia"
                src="/assets/images/devices/siberia-tikobar-12000/siberia-logo.png"
                alt="Логотип Siberia"
              />
              <img
                className="first"
                src="/assets/images/devices/siberia-tikobar-12000/elements/1.png"
                alt="Siberia Element"
              />
              <img
                className="second"
                src="/assets/images/devices/siberia-tikobar-12000/elements/2.png"
                alt="Siberia Element"
              />
              <img
                className="third"
                src="/assets/images/devices/siberia-tikobar-12000/elements/3.png"
                alt="Siberia Element"
              />
            </div>
          </div>
          <div className="contentBox">
            <div className="logoWrapper">
              <img
                src="/assets/images/devices/siberia-tikobar-12000/husky-tikobar-logo.png"
                alt="Логотип Husky Tikobar"
              />
            </div>
            <h1 className="title">TIKOBAR HUSKY СИБИРЬ</h1>
            <p className="subtitle">
              12000 затяжек/20 ярких вкусов <br /> Мощное, стильное и компактное
              одноразовое <br /> устройство оснащенное:
            </p>
            <ul className="featuresList">
              <li className="featuresItem">12000 затяжками /12,8ml</li>
              <li className="featuresItem">
                2ХMesh Coil позволяющим быстро передавать <br /> насыщенный вкус
              </li>
              <li className="featuresItem">Мощным аккумулятором на 600mAh</li>
              <li className="featuresItem">Индикатором батареи</li>
              <li className="featuresItem">Индикатором количества жидкости</li>
              <li className="featuresItem">Кнопкой включения (ON/OFF)</li>
              <li className="featuresItem">
                Переключателем режимов (Power Mode/Normal Mode)
              </li>
              <li className="featuresItem">Разъемом зарядки Type-C</li>
            </ul>
            <div className="button">
              <a
                href="/siberia-tikobar-12000"
                className="dynamicText"
                data-title="home.cyber.moreLink"
              >
                ПОДРОБНЕЕ
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .first_layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 40px 0;
    font-size: clamp(14px, 1.5vw, 18px);
  }

  .first_layout .imgBox {
    position: relative;
    transform: translateY(1.7em);
  }

  .first_layout .imgBox .logoBox {
    position: absolute;
    right: -8em;
    top: 50%;
    transform: translateY(-50%);
    max-width: 20em;
  }

  @-webkit-keyframes moveElement {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes moveElement {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .first_layout .imgBox .logoBox .logoSiberia {
    width: 100%;
    min-width: 280px;
    z-index: 4;
    -webkit-animation-name: moveElement;
    animation-name: moveElement;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .imgBox .logoBox .first {
    position: absolute;
    left: -11.5em;
    top: -8em;
    max-width: 21em;
    z-index: -1;
    -webkit-animation-name: moveElement;
    animation-name: moveElement;
    -webkit-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .imgBox .logoBox .second {
    position: absolute;
    bottom: 3.5em;
    right: -3em;
    max-width: 17em;
    z-index: -2;
    -webkit-animation-name: moveElement;
    animation-name: moveElement;
    -webkit-animation-duration: 7s;
    animation-duration: 7s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .imgBox .logoBox .third {
    position: absolute;
    bottom: 6em;
    left: -6.5em;
    max-width: 17em;
    z-index: -3;
    -webkit-animation-name: moveElement;
    animation-name: moveElement;
    -webkit-animation-duration: 10s;
    animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .contentBox {
    text-align: right;
  }

  .first_layout .contentBox .logoWrapper {
    transform: rotate(-10deg);
    max-width: 17em;
    width: 100%;
    margin-left: auto;
  }

  .first_layout .contentBox .logoWrapper img {
    width: 100%;
    height: 100%;
  }

  .first_layout .contentBox .title {
    margin: 0;
    padding: 20px 0 30px;
    font-size: 2.7em;
    color: #fff;
  }

  .first_layout .contentBox .featuresList,
  .first_layout .contentBox .subtitle {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-size: 1em;
    color: #868686;
  }

  .first_layout .contentBox .subtitle {
    padding: 0 0 25px;
  }

  .first_layout .contentBox .featuresList {
    text-decoration: none;
    list-style: none;
    text-align: right;
  }

  .first_layout .contentBox .featuresList .featuresItem {
    position: relative;
    padding: 2px 0 2px 10px;
    margin-left: auto;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    white-space: nowrap;
  }

  .first_layout .contentBox .featuresList .featuresItem:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 3px;
    height: 3px;
    background-color: #868686;
  }

  .first_layout .contentBox .button {
    margin: 30px 0 0;
    align-self: start;
    display: flex;
    justify-content: flex-end;
  }

  .first_layout .contentBox .button a {
    font-family: BebasNeue, sans-serif;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
    max-width: 250px;
    height: 70px;
    color: #fff;
    text-decoration: none;
    border: #fff solid 1px;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .first_layout .contentBox .button a:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  .tikobar12000_slider {
    position: relative;
    margin: 30px auto;
    max-width: 1200px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .tikobar12000_slider .wrapper {
    padding: 0 10px 10px;
    position: relative;
    width: calc(100% - 20px);
    top: 4px;
    display: flex;
    align-items: stretch;
    gap: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .tikobar12000_slider .wrapper:active {
    cursor: pointer;
  }

  .tikobar12000_slider .wrapper .imgItem {
    z-index: 1;
    min-width: 240px;
    max-width: 240px;
  }

  .tikobar12000_slider .wrapper .imgItem img {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .tikobar12000_slider .wrapper .imgItem:first-child {
    margin-left: 100px;
  }

  .tikobar12000_slider .wrapper .imgItem:last-child {
    margin-right: 100px;
  }

  .tikobar12000_slider .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .tikobar12000_slider .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .tikobar12000_slider .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item
    .imgBox
    img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item
    .imgBox
    img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item
    .imgBox
    img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item
    .imgBox
    img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item .itemName {
    margin: 10px auto 0;
    height: 60px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100px;
    text-align: center;
    line-height: 1;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item
    .tagsBox
    .tagItem:first-child {
    color: #ff0072;
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item
    .tagsBox
    .tagItem.color {
    color: #ff0072;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .tikobar12000_slider
    .wrapper
    .groupItem
    .itemsBox
    .item.small
    .imgBox
    img:nth-child(1) {
    width: 35px;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .tikobar12000_slider .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  .tikobar12000_slider .leftOpacity {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: calc((100vw - 1520px) / 2);
    width: 200px;
    height: 100%;
    background: #000;
    background: linear-gradient(90deg, #000 0, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }

  .tikobar12000_slider .rightOpacity {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    background: #000;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0, #000 100%);
    pointer-events: none;
  }

  @media screen and (min-width: 1200px) {
    .tikobar12000_slider .wrapper .imgItem {
      z-index: 1;
      min-width: 240px;
      max-width: 240px;
    }

    .tikobar12000_slider .wrapper .imgItem img {
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .tikobar12000_slider .wrapper .imgItem:first-child {
      margin-left: 1vw;
    }

    .tikobar12000_slider .wrapper .imgItem:last-child {
      margin-right: 1vw;
    }
  }

  @media (max-width: 800px) {
    .first_layout {
      grid-template-columns: 1fr;
    }

    .first_layout .contentBox {
      text-align: center;
    }

    .first_layout .contentBox .logoWrapper {
      margin: 0 auto;
      transform: rotate(0);
    }

    .first_layout .contentBox .title {
      padding: 30px 0 20px;
    }

    .first_layout .contentBox .featuresList {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      text-align: center;
    }

    .first_layout .contentBox .featuresList .featuresItem {
      margin-left: 0;
      white-space: normal;
    }

    .first_layout .contentBox .featuresList .featuresItem:after {
      display: none;
    }

    .first_layout .contentBox .button {
      justify-content: center;
    }

    .first_layout .imgBox {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .tikobar12000_slider .wrapper .imgItem {
      z-index: 1;
      min-width: 240px;
      max-width: 240px;
    }

    .tikobar12000_slider .wrapper .imgItem img {
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .tikobar12000_slider .wrapper .imgItem:first-child {
      margin-left: 1vw;
    }

    .tikobar12000_slider .wrapper .imgItem:last-child {
      margin-right: 1vw;
    }
  }

  @media screen and (max-width: 500px) {
    .tikobar12000_slider {
      margin: 20px auto;
    }

    .tikobar12000_slider .owl-dots {
      display: none;
    }

    .tikobar12000_slider .wrapper .imgItem {
      z-index: 1;
      min-width: 200px;
      max-width: 200px;
    }

    .tikobar12000_slider .wrapper .imgItem img {
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .tikobar12000_slider .wrapper .imgItem:first-child {
      margin-left: 2vw;
    }

    .tikobar12000_slider .wrapper .imgItem:last-child {
      margin-right: 2vw;
    }
  }
`;

export default Container;
