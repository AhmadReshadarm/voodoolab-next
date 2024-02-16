import { useEffect } from 'react';
import styled from 'styled-components';

const Tikobar12000_slider = () => {
  useEffect(() => {
    const e: any = document.querySelector('.tikobar12000_slider');
    let t: any = 0,
      n = (e.firstElementChild.scrollWidth, e.firstElementChild.clientWidth, 0),
      l: any = null,
      i: any = null,
      s: any = null;
    function o(l) {
      l.preventDefault(),
        (e.firstElementChild.scrollLeft -= t - (n - l.clientX)),
        (t = n - l.clientX);
    }
    function r() {
      if (((e.firstElementChild.scrollLeft += s), (s /= 1.04), Math.abs(s) < 1))
        return !1;
      setTimeout(r, 16);
    }
    e.addEventListener('mousedown', (t) => {
      (l = Date.now()),
        (n = t.clientX),
        (s = 0),
        e.addEventListener('mousemove', o);
    }),
      e.addEventListener('mouseup', (u) => {
        t = 0;
        let d = Date.now() - l,
          m = n - u.clientX;
        (i = Math.abs(m / d)),
          (s = (m / d) * 15),
          r(),
          e.removeEventListener('mousemove', o);
      }),
      e.addEventListener('mouseleave', (t) => {
        e.removeEventListener('mousemove', o);
      });
  }, []);

  return (
    <Wrapper>
      <div className="tikobar12000_slider">
        <div className="wrapper">
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Blueberry-Sour-Raspberry.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Cherry-Cola.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Cranberry-Mint.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Grape-Energy-Drink.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Kiwi-Cactus-lime.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Lemon-Mint.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Lemon-Peach-Passion-Fruit.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Mango-Melon.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Mint-Mojito.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Mr-Blue.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Peach%20Raspberry.ai.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Raspberry-Ginger-Lemonade.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Sour-Candies.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Sour-Fizzy-Cherry.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Sour-Jelly-Bears.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Strawberr-Kiwi-Bubble-Gum.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Strawberry-Mojito.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Tangerine-Passion-Fruit.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/watermelon-bubble-gum.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
          <div className="imgItem">
            <img
              src="/assets/images/devices/siberia-tikobar-12000/flavors/Wildberries.png"
              alt="Вкус TIKOBAR Сибирь"
            />
          </div>
        </div>
        <div className="leftOpacity"></div>
        <div className="rightOpacity"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default Tikobar12000_slider;
