import styled from 'styled-components';

const HuskyComponent = () => {
  return (
    <Wrapper>
      <div className="husky">
        <div className="container">
          <div className="first_layout">
            <div className="info">
              <div className="line_logo">
                <img
                  style={{ width: '70%' }}
                  src="/assets/images/devices/logo-bely-Husky-AirMax.png"
                  alt="deviceLogo"
                />
              </div>
              <div className="line_name">
                <b>
                  husky <span> airmax </span>
                </b>
              </div>
              <div className="line_info">
                <p
                  className="dynamicText"
                  data-title="airmax.firstBlock.subtitle.1"
                >
                  Новый формат от компании Voodoolab
                </p>
                <p
                  className="dynamicText"
                  data-title="airmax.firstBlock.subtitle.2"
                >
                  Одноразовые устройства HUSKY AIRMAX{' '}
                </p>
                <div className="bgshadow"></div>
                <p
                  className="dynamicText"
                  data-title="airmax.firstBlock.subtitle.3"
                >
                  8000 затяжек и мощный аккумулятор позволяет использовать
                  устройство в течении ≈ 14 дней <br /> А также 20 ярких,
                  насыщенных и морозных вкусов Любимые Husky всегда под рукой и
                  будут радовать своего хозяина в каждом вдохе
                </p>
              </div>
            </div>

            <div className="leftImgBox">
              <img src="/assets/images/devices/komp1.png" alt="leftBg" />
            </div>
            <div className="rightImgBox">
              <img src="/assets/images/devices/komp2.png" alt="leftBg" />
            </div>
          </div>
          <div className="contentPage">
            <div className="items_box_three_items">
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/animal-jam.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">ANIMAL JAM</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.animalJam.title"
                  >
                    {' '}
                    Cо вкусом малинового джема, лесных ягод и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/Juicy-Grapes.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">JUICY GRAPES</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.juicyGrapes.title"
                  >
                    Cо вкусом винограда, мяты и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/berry-hunter.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">BERRY HUNTER</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.berryHunter.title"
                  >
                    Со вкусом лесных ягод, мяты и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/big-ball.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">BIG BALL</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.bigBall.title"
                  >
                    Со вкусом арбуза, дыни, клубники и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/chilly-kiwi.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">CHILLY KIWI</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.chillyKiwi.title"
                  >
                    Со вкусом киви и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/miami-snow.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">MIAMI SNOW</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.miamiSnow.title"
                  >
                    Со вкусом личи, ананаса, банана и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/gum-wolf.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">GUM WOLF</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.gumWolf.title"
                  >
                    Со вкусом арбузной мятной жвачки со льдом
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/frosty-palm.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">FROSTY PALM</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.frostyPalm.title"
                  >
                    Cо вкусом апельсина, банана, ананаса, яблока и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/green-land.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">GREEN LAND</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.greenLand.title"
                  >
                    Cо вкусом зелёного яблока и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/mint-wind.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">MINT WIND</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.mintWind.title"
                  >
                    Cо вкусом мятной жвачки и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/red-garden.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">RED GARDEN</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.redGarden.title"
                  >
                    Cо вкусом клубники, мяты и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/red-warg.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">RED WARG</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.redWarg.title"
                  >
                    Cо вкусом клубники, малины и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/shake-pears.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">SHAKE PEARS</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.shakePears.title"
                  >
                    Cо вкусом груши, личи, персика и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/tropic-dew.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">TROPIC DEW</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.tropicDew.title"
                  >
                    Cо вкусом ананаса, кокоса и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/sour-beast.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">SOUR BEAST</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.sourBeast.title"
                  >
                    Cо вкусом клубники, киви, мяты и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/siberian-black.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">SIBERIAN BLACK</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.siberianBlack.title"
                  >
                    Cо вкусом малины, ежевики и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/winter-river.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">WINTER RIVER</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.winterRiver.title"
                  >
                    Cо вкусом колы и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/wolfberry.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">WOLFBERRY</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.wolfBerry.title"
                  >
                    Cо вкусом энергетика и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/tropic-hunter.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">TROPIC HUNTER</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.tropicHunter.title"
                  >
                    Cо вкусом ананаса, дыни, манго и льда
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/devices/elements/Arctic-Strike.png"
                    alt="img_element"
                  />
                  <div className="itemLine">Husky airmax</div>
                  <div className="itemName">ARCTIC STRIKE</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="airmax.line.arcticStrike.title"
                  >
                    Cо вкусом спелого манго и льда
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @-webkit-keyframes wave {
    from {
      -webkit-mask-position: 150%;
      mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
      mask-position: -50%;
    }
  }

  @-webkit-keyframes showLeft {
    0% {
      left: -100%;
    }

    100% {
      left: 0;
    }
  }

  @-webkit-keyframes animate {
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

  @keyframes animate {
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

  @-webkit-keyframes animateRightBG {
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

  @keyframes animateRightBG {
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

  @-webkit-keyframes animateMobil {
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

  @keyframes animateMobil {
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

  .first_layout {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 700px;
    margin-bottom: 400px;
  }

  .first_layout .info {
    margin: 70px auto;
    max-width: 700px;
    position: relative;
    z-index: 2;
    align-self: center;
    display: grid;
    grid-template-rows: auto auto auto;
    align-items: center;
    justify-content: center;
  }

  .first_layout .info .line_logo {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .first_layout .info .line_logo img {
    margin: 0 15px 20px;
    width: 90%;
  }

  .first_layout .info .line_name {
    margin-top: 30px;
    font-size: 44px;
    padding: 10px 15px;
    transition: ease-in-out all 1.3s;
    position: relative;
    -webkit-animation: showLeft 1s ease-in-out 0.5s both;
    animation: showLeft 1s ease-in-out 0.5s both;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .first_layout .info .line_name b {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    mask-size: 200%;
    -webkit-animation: wave 3s infinite;
    animation: wave 3s infinite;
    text-transform: uppercase;
    font-family: BebasNeue, sans-serif;
    text-align: start;
  }

  .first_layout .info .line_name b span {
    white-space: nowrap;
  }

  .first_layout .info .bgshadow {
    width: 40%;
    margin: 0 auto;
    height: 0;
    box-shadow: 0 82px 135px 116px #000;
  }

  .first_layout .info .line_info {
    padding: 15px;
    text-align: center;
  }

  .first_layout .info .line_info p {
    position: relative;
    font-size: 18px;
    font-family: Montserrat, sans-serif;
    line-height: 1.4;
  }

  .first_layout .info .line_info p:first-child {
    -webkit-animation: showLeft 1.5s ease-in-out 0.5s both;
    animation: showLeft 1.5s ease-in-out 0.5s both;
  }

  .first_layout .info .line_info p:nth-child(2) {
    -webkit-animation: showLeft 1.8s ease-in-out 0.5s both;
    animation: showLeft 1.8s ease-in-out 0.5s both;
  }

  .first_layout .info .line_info p:last-child {
    margin: 0 auto;
    max-width: 490px;
    -webkit-animation: showLeft 2.1s ease-in-out 0.5s both;
    animation: showLeft 2.1s ease-in-out 0.5s both;
  }

  .first_layout .leftImgBox {
    position: absolute;
    top: 0;
    left: -20%;
    bottom: 0;
    max-width: 960px;
    width: 80%;
    -webkit-animation-name: animate;
    animation-name: animate;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .leftImgBox img {
    width: 100%;
  }

  .first_layout .rightImgBox {
    position: absolute;
    top: 0;
    right: -25%;
    bottom: 0;
    max-width: 960px;
    width: 80%;
    -webkit-animation-name: animate;
    animation-name: animate;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .rightImgBox img {
    width: 100%;
  }

  .items_box_three_items {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .items_box_three_items .item_content_box {
    font-size: 50px;
    width: calc(33.3333333333vw - 12px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .items_box_three_items .item_content_box .item_content {
    margin: 50px auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .items_box_three_items .item_content_box .item_content img {
    display: block;
    margin: 0 auto;
    width: 90%;
  }

  .items_box_three_items .item_content_box .item_content .itemLine {
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .items_box_three_items .item_content_box .item_content .itemName {
    margin-top: 10px;
    font-size: 24px;
    text-transform: uppercase;
  }

  .items_box_three_items .item_content_box .item_content .itemInfo {
    margin-top: 10px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 300;
    padding: 0 50px;
  }

  .husky {
    padding-top: 80px;
    position: relative;
    color: #fff;
    overflow: hidden;
  }

  .husky .container {
    max-width: 1200px;
    margin: 0 auto 50px;
  }

  .husky .container .contentPage {
    margin-top: 4vw;
  }

  @media (min-width: 1200px) {
    .items_box_three_items .item_content_box {
      width: 388px;
    }
  }

  @media screen and (max-width: 1200px) {
    .first_layout .leftImgBox {
      left: calc(-20% - (1200px - 100vw) / 2);
    }

    .first_layout .rightImgBox {
      right: calc(-25% - (1200px - 100vw) / 3.6);
    }
  }

  @media (max-width: 1200px) {
    .first_layout {
      margin-bottom: calc(400px - (1200px - 100vw) / 1);
    }
  }

  @media (max-width: 991px) {
    .first_layout {
      margin-bottom: 50px;
      grid-template-columns: 1fr;
    }

    .first_layout .info .line_logo {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    .first_layout .info .line_logo img {
      width: 60%;
    }

    .first_layout .info .line_logo picture {
      display: flex;
      justify-content: center;
    }

    .first_layout .info .line_name {
      display: flex;
      justify-content: center;
      padding: 10px 15px !important;
    }

    .first_layout .info .line_name b {
      text-align: center;
    }

    .first_layout .info .line_info {
      margin: 0 auto;
      max-width: 700px;
      text-align: center;
    }

    .first_layout .info .line_info p {
      font-size: 20px;
    }
  }

  @media (max-width: 990px) {
    .items_box_three_items .item_content_box {
      width: calc(50vw - 18px);
    }
  }

  @media screen and (max-width: 840px) {
    .first_layout .leftImgBox {
      left: -42%;
    }
  }

  @media (max-width: 840px) {
    .husky {
      padding-top: 50px;
    }
  }

  @media (max-width: 768px) {
    .first_layout .info {
      padding-top: 30px;
    }

    .first_layout .info .line_info {
      margin: 0 auto;
      max-width: 700px;
      text-align: center;
    }

    .first_layout .info .line_info p {
      font-size: 20px;
    }

    .first_layout .info .line_info p:last-child {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 680px) {
    .first_layout .leftImgBox {
      display: none;
    }

    .first_layout .rightImgBox {
      right: -46%;
    }

    .first_layout .rightImgBox img {
      margin-top: calc((680px - 100vw) / 2);
    }

    .first_layout .rightImgBox {
      display: none;
    }
  }

  @media (max-width: 676px) {
    .items_box_three_items .item_content_box {
      width: calc(100vw - 18px);
    }
  }

  @media (max-width: 520px) {
    .first_layout .info .line_info p {
      font-size: 16px;
    }
  }
`;

export default HuskyComponent;
