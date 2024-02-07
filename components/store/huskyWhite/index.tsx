import styled from 'styled-components';

const HuskyWhiteComponent = () => {
  return (
    <Wrapper>
      <div className="husky_white">
        <div className="container">
          <div className="first_layout">
            <div className="info">
              <div className="line_logo">
                <img
                  style={{ width: '70%' }}
                  src="/assets/images/husky_white/lineLogo.png"
                  alt="lineLogo"
                />
              </div>
              <div className="line_name">
                <b
                  className="dynamicText"
                  data-title="HuskyWhite.firstBlock.title"
                >
                  линейка <span> husky white</span>
                </b>
              </div>
              <div className="line_info">
                <p
                  className="dynamicText"
                  data-title="HuskyWhite.firstBlock.subtitle.1"
                >
                  Линейка холодных и сладких вкусов всеми любимых Хаски
                </p>
                <p
                  className="dynamicText"
                  data-title="HuskyWhite.firstBlock.subtitle.2"
                >
                  Смузи, конфеты, жвачка в сочетании с экзотическими фруктами и
                  мн.др
                </p>
                <p
                  className="dynamicText"
                  data-title="HuskyWhite.firstBlock.subtitle.3"
                >
                  Выпускается в обьеме 30ml SALT
                </p>
              </div>
            </div>
            <div className="images">
              <img
                className="bg-right"
                src="/assets/images/husky_white/bg-right.png"
                alt="rightBG"
              />
              <img
                className="position_bg"
                src="/assets/images/husky_white/position_bg.png"
                alt="position_bg"
              />
              <img
                className="imgSize"
                src="/assets/images/husky_white/svedenie.png"
                alt="svedenie"
              />
            </div>
          </div>
          <div className="contentPage">
            <div className="items_box_three_items">
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/fangerine.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">fangerine</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.Fangerine.title"
                  >
                    Со вкусом сладкой мандариновой фанты со льдом
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/steep-slope.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">steep slope</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.SteepSlope.title"
                  >
                    Со вкусом холодного персика и клубники
                  </div>
                </div>
              </div>
            </div>
            <div className="items_box_three_items">
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/sweet-vale.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">sweet vale</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.SweetVale.title"
                  >
                    Со вкусом сладкой ледяной конфеты из горного личи
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/cold-passion.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">cold passion</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.ColdPassion.title"
                  >
                    Со вкусом холодного смузи из маракуи
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/green-land.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">Green land</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.GreenLand.title"
                  >
                    Со вкусом замороженного зелёного яблока
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/polar-energy.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">polar energy</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.PolarEnergy.title"
                  >
                    Со вкусом зеленого энергетика из киви и фейхоа
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/chew-peak.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">chew peack</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.ChewPeach.title"
                  >
                    Со вкусом леденящей жвачки с манго
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/husky_white/elements/mint-wind.png"
                    alt="img_element"
                  />
                  <div className="itemLine">husky white</div>
                  <div className="itemName">mint wind</div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="HuskyWhite.line.MintWind.title"
                  >
                    Со вкусом холодной мятной жвачки
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
    grid-template-columns: 420px 1fr;
    min-height: 700px;
  }

  .first_layout .info {
    position: relative;
    z-index: 2;
    align-self: center;
    display: grid;
    grid-template-rows: auto auto auto;
    align-items: center;
    margin-bottom: 6vw;
  }

  .first_layout .info .line_logo img {
    margin: 0 15px 20px;
    width: 90%;
  }

  .first_layout .info .line_name {
    font-size: 44px;
    padding: 10px 15px;
    transition: ease-in-out all 1.3s;
    position: relative;
    -webkit-animation: showLeft 1s ease-in-out 0.5s both;
    animation: showLeft 1s ease-in-out 0.5s both;
    display: flex;
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

  .first_layout .info .line_info {
    padding: 0 15px;
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
    -webkit-animation: showLeft 2.1s ease-in-out 0.5s both;
    animation: showLeft 2.1s ease-in-out 0.5s both;
  }

  .first_layout .images {
    position: relative;
    display: flex;
    align-items: center;
    -webkit-animation-name: animate;
    animation-name: animate;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .images img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
  }

  .first_layout .images .bg-right {
    min-width: 780px;
  }

  .first_layout .images .position_bg {
    min-width: 780px;
    -webkit-animation-name: animate;
    animation-name: animate;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .first_layout .images .imgSize {
    display: none;
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

  .husky_white {
    padding-top: 80px;
    position: relative;
    background-image: url(/assets/images/husky_white/fons/1920x2260.jpg);
    background-size: cover;
    background-position: top center;
    color: #035f84;
    overflow: hidden;
  }

  .husky_white .container {
    max-width: 1200px;
    margin: 0 auto 50px;
  }

  .husky_white .container .contentPage {
    margin-top: 4vw;
  }

  @media (min-width: 1200px) {
    .items_box_three_items .item_content_box {
      width: 388px;
    }
  }

  @media (max-width: 1100px) {
    .first_layout .images .bg-right {
      min-width: 70vw;
    }

    .first_layout .images .position_bg {
      min-width: 70vw;
    }
  }

  @media (max-width: 991px) {
    .first_layout {
      grid-template-columns: 1fr;
    }

    .first_layout .info {
      padding-top: 50px;
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

    .first_layout .images img {
      position: relative;
    }

    .first_layout .images .bg-right,
    .first_layout .images .position_bg {
      display: none;
    }

    .first_layout .images .imgSize {
      display: block;
    }

    .husky_white {
      background-image: url(/assets/images/husky_white/fons/991x3930.jpg);
    }
  }

  @media (max-width: 990px) {
    .items_box_three_items .item_content_box {
      width: calc(50vw - 18px);
    }
  }

  @media (max-width: 840px) {
    .husky_white {
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

  @media (max-width: 676px) {
    .items_box_three_items .item_content_box {
      width: calc(100vw - 18px);
    }

    .husky_white {
      background-image: url(/assets/images/husky_white/fons/676x6760.jpg);
    }
  }

  @media (max-width: 520px) {
    .first_layout .info .line_info p {
      font-size: 16px;
    }
  }
`;

export default HuskyWhiteComponent;
