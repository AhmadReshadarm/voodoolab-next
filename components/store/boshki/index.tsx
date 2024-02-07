import styled from 'styled-components';

const BoshkiComponent = () => {
  return (
    <Wrapper>
      <div className="boshki">
        <div className="container">
          <div className="first_layout">
            <div className="info">
              <div className="line_logo">
                <img
                  style={{ width: '70%' }}
                  src="/assets/images/boshki/lineLogo.png"
                  alt="lineLogo"
                />
              </div>
              <div className="line_name">
                <b className="dynamicText" data-title="boshki.firstBlock.title">
                  линейка <span> boshki</span>
                </b>
              </div>
              <div className="line_info">
                <p
                  className="dynamicText"
                  data-title="boshki.firstBlock.subtitle.1"
                >
                  Культовая линейка супер хвойных вкусов в необычных сочетаниях
                </p>
                <p
                  className="dynamicText"
                  data-title="boshki.firstBlock.subtitle.2"
                >
                  В ней можно встретить не только оригинальные еловые шишки, но
                  и сок тропических фруктов, щербеты и мн.др
                </p>
                <p
                  className="dynamicText"
                  data-title="boshki.firstBlock.subtitle.3"
                >
                  Выпускается в обьему 30ml SALT &amp; 100ml
                </p>
              </div>
            </div>
            <div className="images">
              <img
                className="bg-right"
                src="/assets/images/boshki/bg-right.png"
                alt="rightBG"
              />
              <img
                className="position_bg"
                src="/assets/images/boshki/position_bg.png"
                alt="position_bg"
              />
              <img
                className="imgSize"
                src="/assets/images/boshki/svedenie.png"
                alt="svedenie"
              />
            </div>
          </div>
          <div className="contentPage">
            <div className="items_box_three_items">
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/kuban.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>line
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Cuban.name"
                  >
                    кубанские
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Cuban.title"
                  >
                    Со вкусом хвойного щербета с виноградом и черникой
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/fresh.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Brisk.name"
                  >
                    бодрые
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Brisk.title"
                  >
                    Со вкусом холодного хвойного энергетика
                  </div>
                </div>
              </div>
            </div>
            <div className="items_box_three_items">
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/kind.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Kind.name"
                  >
                    добрые
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Kind.title"
                  >
                    Со вкусом сладкого хвойного щербета с лесными ягодами
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/engry.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Evil.name"
                  >
                    Злые
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Evil.title"
                  >
                    Со вкусом хвойного лимонада со смородиновым соком
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/sadovie.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Garden.name"
                  >
                    садовые
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Garden.title"
                  >
                    Со вкусом сочной клубники приправленной хвоей
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/celebnii.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Herbal.name"
                  >
                    Целебные
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Herbal.title"
                  >
                    Со вкусом травяного чая с мёдом и хвоей
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/shugar.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Sugar.name"
                  >
                    сахарные
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Sugar.title"
                  >
                    Со вкусом нежного малинового варенья с хвоей
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/exotic.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Exotic.name"
                  >
                    exotic
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Exotic.title"
                  >
                    Со вкусом коктейля из манго с мякотью дыни в сочетании с
                    хвоей
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/neon.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Neon.name"
                  >
                    Neon
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Neon.title"
                  >
                    Со вкусом микса арбуза и черники с хвоей
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/original.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Original.name"
                  >
                    Original
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Original.title"
                  >
                    Со вкусом хвойных терпких шишек
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/black.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.black.name"
                  >
                    Чёрные
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.black.title"
                  >
                    Со вкусом хвойной кока колы
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/kind_one_ice.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.kindOnIce.name"
                  >
                    добрые On Ice
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.kindOnIce.title"
                  >
                    Со вкусом сладкого хвойного щербета с морозными лесными
                    ягодами
                  </div>
                </div>
              </div>
              <div className="item_content_box">
                <div className="item_content">
                  <img
                    src="/assets/images/boshki/elements/snow.png"
                    alt="img_element"
                  />
                  <div className="itemLine">boshki</div>
                  <div
                    className="itemName dynamicText"
                    data-title="boshki.line.Winter.name"
                  >
                    зимние
                  </div>
                  <div
                    className="itemInfo dynamicText"
                    data-title="boshki.line.Winter.title"
                  >
                    Со вкусом холодного ананаса с хвоей
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

  .boshki {
    padding-top: 80px;
    position: relative;
    background-image: url(/assets/images/boshki/fons/1920x4100.jpg);
    background-size: cover;
    background-position: top center;
    color: #fff;
    overflow: hidden;
  }

  .boshki .container {
    max-width: 1200px;
    margin: 0 auto 50px;
  }

  .boshki .container .contentPage {
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

    .boshki {
      background-image: url(/assets/images/boshki/fons/991x6900.jpg);
    }
  }

  @media (max-width: 990px) {
    .items_box_three_items .item_content_box {
      width: calc(50vw - 18px);
    }
  }

  @media (max-width: 840px) {
    .boshki {
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

    .boshki {
      background-image: url(/assets/images/boshki/fons/676x13100.jpg);
    }
  }

  @media (max-width: 520px) {
    .first_layout .info .line_info p {
      font-size: 16px;
    }
  }
`;

export default BoshkiComponent;
