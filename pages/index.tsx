import AirMaxDrop from 'components/store/homePage/airMaxDrop';
import Cyber from 'components/store/homePage/cyber';
import Mishka from 'components/store/homePage/mishka';
import MishkaSlider from 'components/store/homePage/mishkaSlider';
import NewDrop from 'components/store/homePage/newDrop';
import VideoMerch from 'components/store/homePage/videoMerch';
import Reveiws from 'components/store/homePage/reviews';
import StoreLayout from 'components/store/storeLayout/layouts';
import React, { useEffect, useRef, useState } from 'react';
import Warning from 'components/store/homePage/warning';
import Container from 'components/store/homePage/container';
import Tikobar12000_slider from 'components/store/homePage/tikobar12000_slider';

const IndexPage = (): JSX.Element => {
  useEffect(() => {
    const getPriceBtn = document.querySelectorAll('.getPriceBtn'),
      getPriceMain: any = document.querySelector('.getPriceMain'),
      closeGetPrice = document.querySelector('.closeGetPrice');
    for (let n = 0; n < getPriceBtn.length; n++)
      getPriceBtn[n].addEventListener('click', (e) => {
        getPriceMain &&
          (e.preventDefault(),
          getPriceMain.parentElement.classList.add('active'),
          (document.body.style.overflow = 'hidden'));
      }),
        getPriceMain &&
          (getPriceMain.addEventListener('pointerdown', (e) => {
            e.stopPropagation();
          }),
          getPriceMain.addEventListener('touchstart', (e) => {
            e.stopPropagation();
          }),
          getPriceMain.parentElement.addEventListener('pointerdown', (e) => {
            e.target.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          }),
          getPriceMain.parentElement.addEventListener('touchstart', (e) => {
            e.target.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          })),
        closeGetPrice &&
          getPriceMain &&
          (closeGetPrice.addEventListener('pointerdown', (e) => {
            getPriceMain.parentElement.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          }),
          closeGetPrice.addEventListener('touchstart', (e) => {
            getPriceMain.parentElement.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          }));
  }, []);
  const [transitionValue, setTransitionValue] = useState(1378);
  const [counter, setCounter] = useState(4);
  const parentRef = useRef(null);
  const [oneTime, setOneTime] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const namesAndLinks = [
    { name: 'boshki clone', link: '/boshki' },
    { name: 'boshki one ice clone', link: '/boshki_one_ice' },
    { name: 'husky double ice clone', link: '/husky_double_ice' },
    { name: 'husky mint series clone', link: '/husky_mint_series' },
    // ------
    { name: 'boshki', link: '/boshki' },
    { name: 'boshki one ice', link: '/boshki_one_ice' },
    { name: 'husky double ice', link: '/husky_double_ice' },
    { name: 'husky mint series', link: '/husky_mint_series' },
    { name: 'husky premium', link: '/husky_premium' },
    { name: 'husky white', link: '/husky_white' },
    { name: 'husky malasian', link: '/husky_malasian' },
    // ------
    { name: 'husky mint series clone', link: '/husky_mint_series' },
    { name: 'husky premium clone', link: '/husky_premium' },
    { name: 'husky white clone', link: '/husky_white' },
    { name: 'husky malasian clone', link: '/husky_malasian' },
  ];
  let owlItems;
  useEffect(() => {
    owlItems = document.querySelectorAll('.owl-item');
    if (!oneTime) {
      owlItems[counter].classList.add('center');
      setName(namesAndLinks[counter].name);
      setLink(namesAndLinks[counter].link);
      setCounter(counter + 1);
      setOneTime(true);
      setTimeout(() => {
        owlItems[counter].classList.remove('center');
      }, 5000);
    }
    let interval;

    interval = setInterval(() => {
      setTransitionValue(transitionValue > 4078 ? 1378 : transitionValue + 455);
      owlItems[counter].classList.add('center');
      setName(namesAndLinks[counter].name);
      setLink(namesAndLinks[counter].link);
      setTimeout(() => {
        owlItems[counter].classList.remove('center');
      }, 5000);
      if (counter >= 9) {
        setCounter(4);
      }
      if (counter <= 9) {
        setCounter(counter + 1);
      }
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  });

  return (
    <>
      <div className="firstBlock">
        <div className="videoBg">
          <img src="/assets/images/home/firstBlock/cliff.png" alt="Cliff" />

          <div className="backgroundFilter"></div>
        </div>
        <div className="loader">
          <img src="/assets/images/common/husky-logo.png" alt="Логотип Husky" />
          <div className="loader_mask"></div>
        </div>
        <div className="main">
          <div className="content">
            <div
              className="bigText dynamicText"
              data-title="home.firstBlock.bigText"
            >
              Ведущий производитель
            </div>
            <div
              className="mediumText dynamicText"
              data-title="home.firstBlock.mediumText"
            >
              Качественных жидкостей
            </div>
            <div className="smallText">
              <span
                className="dynamicText"
                data-title="home.firstBlock.smallTextFirst"
              >
                и одноразовых устройств
              </span>
            </div>
            <div className="getPriceBox">
              <div
                className="getPriceBtn dynamicText"
                data-title="home.firstBlock.priceListButton"
              >
                Получить прайс
              </div>
              <div className="linkBox">
                <span>Официальный международный сайт HUSKY:</span>
                <a href="https://husky-eliquid.com">husky-eliquid.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------- title start ----------------------------------- */}
      <div className="titleBlock">
        <span>линейки</span>
      </div>
      {/* -------------------------------------- title end -------------------------------- */}

      {/* -------------------------------- start of lines --------------------------------------- */}

      <div className="Lines">
        <div className="leftOpacity"></div>
        <div className="slider">
          <div className="owl-carousel owl-theme owl-carousel-lines owl-loaded">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                ref={parentRef}
                style={{
                  transition: 'all 1s ease 0s',
                  width: '6830px',
                  transform: `translate3d(-${transitionValue}px, 0px, 0px)`,
                }}
              >
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_mint_series"
                    // linename="husky mint series"
                    // customref="../../../pages/lines/husky_mint_series/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_mint_series/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_premium"
                    // linename="husky premium"
                    // customref="../../../pages/lines/husky_premium/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_premium/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_white"
                    // linename="husky white"
                    // customref="../../../pages/lines/husky_white/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_white/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_malasian"
                    // linename="husky malasian"
                    // customref="../../../pages/lines/husky_malasian/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_malasian/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/boshki"
                    // linename="boshki"
                    // customref="../../../pages/lines/boshki/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/boshki/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/boshki_one_ice"
                    // linename="boshki one ice"
                    // customref="../../../pages/lines/boshki_one_ice/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/boshki_one_ice/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_double_ice"
                    // linename="husky double ice"
                    // customref="../../../pages/lines/husky_double_ice/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_double_ice/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item " style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_mint_series"
                    // linename="husky mint series"
                    // customref="../../../pages/lines/husky_mint_series/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_mint_series/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item " style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_premium"
                    // linename="husky premium"
                    // customref="../../../pages/lines/husky_premium/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_premium/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_white"
                    // linename="husky white"
                    // customref="../../../pages/lines/husky_white/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_white/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_malasian"
                    // linename="husky malasian"
                    // customref="../../../pages/lines/husky_malasian/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_malasian/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/boshki"
                    // linename="boshki"
                    // customref="../../../pages/lines/boshki/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/boshki/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/boshki_one_ice"
                    // linename="boshki one ice"
                    // customref="../../../pages/lines/boshki_one_ice/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/boshki_one_ice/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_double_ice"
                    // linename="husky double ice"
                    // customref="../../../pages/lines/husky_double_ice/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_double_ice/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
                <div className="owl-item cloned" style={{ width: '455.333px' }}>
                  <a
                    className="item"
                    href="/husky_mint_series"
                    // linename="husky mint series"
                    // customref="../../../pages/lines/husky_mint_series/index.html"
                  >
                    <div className="lineImageBox">
                      <img
                        src="/assets/images/husky_mint_series/svedenie.png"
                        alt="element_image"
                      />
                      <div className="lineBorder"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
          <div className="twoBlockNav active">
            <div
              // onClick={() => {
              //   setIntract(true);
              //   setTransitionValue(
              //     transitionValue <= 1378 ? 1378 : transitionValue - 455,
              //   );
              //   owlItems[counter].classList.remove('center');
              //   setCounter(counter <= 4 ? 4 : counter - 1);
              //   setTimeout(() => {
              //     owlItems[counter].classList.add('center');
              //     setName(namesAndLinks[counter].name);
              //     setLink(namesAndLinks[counter].link);
              //   }, 100);
              // }}
              className="customPrevBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 386.258 386.258"
              >
                <polygon points="96.879,193.129 289.379,386.258 289.379,0 "></polygon>
              </svg>
            </div>
            <a href={link} className="activeItemName">
              {name}
            </a>
            <div
              // onClick={() => {
              //   setIntract(true);
              //   setTransitionValue(
              //     transitionValue >= 4078 ? 1378 : transitionValue + 455,
              //   );
              //   owlItems[counter].classList.remove('center');
              //   setCounter(counter >= 9 ? 4 : counter + 1);
              //   setTimeout(() => {
              //     owlItems[counter].classList.add('center');
              //     setName(namesAndLinks[counter].name);
              //     setLink(namesAndLinks[counter].link);
              //   }, 100);
              // }}
              className="customNextBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 386.258 386.258"
              >
                <polygon points="96.879,193.129 289.379,386.258 289.379,0 "></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div className="rightOpacity"></div>
      </div>
      {/* ---------------------------------------end of lines------------------------------------- */}
      {/* -------------------------- TIKOBAR ------------------------------------ */}

      <Container />
      <Tikobar12000_slider />

      {/*---------------------------------------- cyber ------------------------------------ */}
      <Cyber />
      {/* ----------------------------------- mishka ---------------------------------- */}
      <Mishka />
      {/* --------------------------------- mishka Slider -------------------------- */}
      <MishkaSlider />

      {/* ---------------------------------- Air Max Drop ------------------------------ */}

      <AirMaxDrop />

      {/* --------------------------------- New Drop ----------------------------- */}

      <NewDrop />
      {/* ---------------------------------- video merch ----------------------------- */}

      <VideoMerch />
      {/* ----------------------------------- Reviews --------------------------------------- */}

      <Reveiws />

      {/* ------------------------------------ Warnin -------------------------------- */}

      <Warning />
      {/* ---------------------------------- get price block start -------------------------- */}

      <div className="getPrice">
        <form className="getPriceMain" action="/" method="POST">
          <input
            name="whatever"
            value="Заказать жижи с экрана с описанием"
            type="hidden"
          />
          <div className="getPriceTitle">Получить прайс</div>
          <div className="getPriceCompany">
            <label htmlFor="getPriceCompanyInput">
              Название вашей компании
            </label>
            <input
              type="text"
              id="getPriceCompanyInput"
              placeholder="Название компании"
              name="name"
            />
          </div>
          <div className="getPriceEmail">
            <label htmlFor="getPriceEmailInput">Введите Ваш email</label>
            <input
              type="text"
              id="getPriceEmailInput"
              placeholder="Ваш email"
              name="tell"
            />
          </div>
          <button className="sendPriceBtn">Получить</button>
          <div className="getPricePersonalData">
            Нажимая кнопку "Получить" вы принимаете{' '}
            <a href="#">условия обработки</a> персональных данных
          </div>
          <div className="closeGetPrice">
            <span className="top"></span>
            <span className="bot"></span>
          </div>
        </form>
      </div>
      {/* ------------------------------ end of get price block ------------------------*/}
    </>
  );
};

IndexPage.PageLayout = StoreLayout;
export default IndexPage;
