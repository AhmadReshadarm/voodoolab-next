import { useEffect } from 'react';
import styled from 'styled-components';

const Desert = () => {
  useEffect(() => {
    const e: any = document.querySelector('.desert');
    let t: any = 0,
      n: any =
        (e.firstElementChild.scrollWidth, e.firstElementChild.clientWidth, 0),
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
        let m = Date.now() - l,
          d = n - u.clientX;
        (i = Math.abs(d / m)),
          (s = (d / m) * 15),
          r(),
          e.removeEventListener('mousemove', o);
      }),
      e.addEventListener('mouseleave', (t) => {
        e.removeEventListener('mousemove', o);
      });
  }, []);
  return (
    <Wrapper>
      <div className="desert">
        <div className="wrapper">
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Boshki</div>
            <div className="itemsBox">
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/boshki/label-effects_kopia.png"
                    alt="map"
                    src="/assets/images/map/desert/boshki/label-effects_kopia.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Добрые</div>
                <div className="tagsBox">
                  <div className="tagItem">#щербет</div>
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#хвоя</div>
                </div>
              </div>
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/boshki/boshki-salt-kubanskie-bottle.png"
                    alt="map"
                    src="/assets/images/map/desert/boshki/boshki-salt-kubanskie-bottle.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Кубанские</div>
                <div className="tagsBox">
                  <div className="tagItem">#щербет</div>
                  <div className="tagItem">#виноград</div>
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#хвоя</div>
                </div>
              </div>
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/boshki/label-effects_kopia_11.png"
                    alt="map"
                    src="/assets/images/map/desert/boshki/label-effects_kopia_11.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Сахарные</div>
                <div className="tagsBox">
                  <div className="tagItem">#малиновое варенье</div>
                  <div className="tagItem">#хвоя</div>
                </div>
              </div>
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/boshki/label-effects_kopia_10.png"
                    alt="map"
                    src="/assets/images/map/desert/boshki/label-effects_kopia_10.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Добрые on Ice</div>
                <div className="tagsBox">
                  <div className="tagItem">#щербет</div>
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#лёд</div>
                </div>
              </div>
            </div>
          </div>

          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">HUSKY MALASIAN</div>
            <div className="itemsBox">
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/husky_malasian/gum-wolf.png"
                    alt="map"
                    src="/assets/images/map/desert/husky_malasian/gum-wolf.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Gum wolf</div>
                <div className="tagsBox">
                  <div className="tagItem">#жвачка</div>
                  <div className="tagItem">#арбуз</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#мята</div>
                </div>
              </div>
            </div>
          </div>

          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Husky White</div>
            <div className="itemsBox">
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/husky_white/chew-peack.png"
                    alt="map"
                    src="/assets/images/map/desert/husky_white/chew-peack.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CHEW PEAK</div>
                <div className="tagsBox">
                  <div className="tagItem">#жвачка</div>
                  <div className="tagItem">#манго</div>
                  <div className="tagItem">#лёд</div>
                </div>
              </div>
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/husky_white/sweet-vale.png"
                    alt="map"
                    src="/assets/images/map/desert/husky_white/sweet-vale.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SWEET VALE</div>
                <div className="tagsBox">
                  <div className="tagItem">#конфета</div>
                  <div className="tagItem">#личи</div>
                  <div className="tagItem">#лёд</div>
                </div>
              </div>
            </div>
          </div>

          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Husky Premium</div>
            <div className="itemsBox">
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/husky_premium/yogi_doggy.png"
                    alt="map"
                    src="/assets/images/map/desert/husky_premium/yogi_doggy.png"
                    className="load"
                  />
                </div>
                <div className="itemName">yogi doggy</div>
                <div className="tagsBox">
                  <div className="tagItem">#йогурт</div>
                  <div className="tagItem">#персик</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#лёд</div>
                </div>
              </div>
              <div className="item">
                <div className="imgBox">
                  <img
                    src="/assets/images/map/load.gif"
                    alt="load"
                    className="load"
                  />
                  <img
                    src="/assets/images/map/30ml_b.png"
                    alt="map"
                    className="load"
                  />
                  <img
                    data-src="/assets/images/map/desert/husky_premium/animal_jam.png"
                    alt="map"
                    src="/assets/images/map/desert/husky_premium/animal_jam.png"
                    className="load"
                  />
                </div>
                <div className="itemName">animal jam</div>
                <div className="tagsBox">
                  <div className="tagItem">#джем</div>
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#малина</div>
                  <div className="tagItem">#лёд</div>
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
  .desert {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .desert .wrapper {
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

  .desert .wrapper:active {
    cursor: pointer;
  }

  .desert .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .desert .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .desert .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .desert .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .desert .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .desert .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .desert .wrapper .groupItem .itemsBox .item .itemName {
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

  .desert .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .desert .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .desert .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .desert .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .desert .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .desert .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .desert .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .desert .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .desert .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .desert .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .desert .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .desert .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .desert .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .desert .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .desert .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .desert .wrapper .groupItem .itemsBox .item .itemName {
      margin: 10px auto 0;
      height: 60px;
      font-size: 20px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      width: 80px;
      text-align: center;
      line-height: 1;
    }

    .desert .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .desert .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .desert .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .desert .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .desert .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .desert {
      margin: 20px auto;
    }

    .desert .owl-dots {
      display: none;
    }
  }
`;

export default Desert;
