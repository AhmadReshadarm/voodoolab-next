import { useEffect } from 'react';
import styled from 'styled-components';

const Drink = () => {
  useEffect(() => {
    const e: any = document.querySelector('.drink');
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
      <div className="drink">
        <div className="wrapper">
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">boshki</div>
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
                    data-src="/assets/images/map/drink/boshki/boshki-salt-bodrye-bottle.png"
                    alt="map"
                    src="/assets/images/map/drink/boshki/boshki-salt-bodrye-bottle.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Бодрые</div>
                <div className="tagsBox">
                  <div className="tagItem">#энергетик</div>
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
                    data-src="/assets/images/map/drink/boshki/label-effects_kopia_4.png"
                    alt="map"
                    src="/assets/images/map/drink/boshki/label-effects_kopia_4.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Чёрные</div>
                <div className="tagsBox">
                  <div className="tagItem">#кока-кола</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_5.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_5.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Целебные</div>
                <div className="tagsBox">
                  <div className="tagItem">#травяной чай</div>
                  <div className="tagItem">#мёд</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_2.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_2.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Злые</div>
                <div className="tagsBox">
                  <div className="tagItem">#лимонад</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#смородина</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Boshki on ice</div>
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
                    data-src="/assets/images/map/drink/boshki_one_ice/boshki-on_ice-cs.png"
                    alt="map"
                    src="/assets/images/map/drink/boshki_one_ice/boshki-on_ice-cs.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CS</div>
                <div className="tagsBox">
                  <div className="tagItem">#кола</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#клубника #лёд</div>
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
                    data-src="/assets/images/map/drink/boshki_one_ice/boshki-on_ice-doktorskie.png"
                    alt="map"
                    src="/assets/images/map/drink/boshki_one_ice/boshki-on_ice-doktorskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Докторские</div>
                <div className="tagsBox">
                  <div className="tagItem">#доктор пеппер</div>
                  <div className="tagItem">#хвоя</div>
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
                    data-src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-dachnye.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-dachnye.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Дачные</div>
                <div className="tagsBox">
                  <div className="tagItem">#лимонад</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#груша</div>
                  <div className="tagItem">#клубника</div>
                </div>
              </div>
            </div>
          </div>

          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Husky Double Ice</div>
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
                    data-src="/assets/images/map/drink/husky_double_ice/Winter-River.png"
                    alt="map"
                    src="/assets/images/map/drink/husky_double_ice/Winter-River.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Winter River</div>
                <div className="tagsBox">
                  <div className="tagItem">#кола</div>
                  <div className="tagItem">#двойной лёд</div>
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
                    data-src="/assets/images/map/drink/husky_double_ice/Tropic-Dew.png"
                    alt="map"
                    src="/assets/images/map/drink/husky_double_ice/Tropic-Dew.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Tropic Dew</div>
                <div className="tagsBox">
                  <div className="tagItem">#пинаколада</div>
                  <div className="tagItem">#двойной лёд</div>
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
                    data-src="/assets/images/map/drink/husky_white/cold-passion.png"
                    alt="map"
                    src="/assets/images/map/drink/husky_white/cold-passion.png"
                    className="load"
                  />
                </div>
                <div className="itemName">COLD PASSION</div>
                <div className="tagsBox">
                  <div className="tagItem">#смузи</div>
                  <div className="tagItem">#маракуя</div>
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
                    data-src="/assets/images/map/drink/husky_white/polar-energy.png"
                    alt="map"
                    src="/assets/images/map/drink/husky_white/polar-energy.png"
                    className="load"
                  />
                </div>
                <div className="itemName">POLAR ENERGY</div>
                <div className="tagsBox">
                  <div className="tagItem">#энергетик</div>
                  <div className="tagItem">#киви</div>
                  <div className="tagItem">#фейхоа</div>
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
  .drink {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .drink .wrapper {
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

  .drink .wrapper:active {
    cursor: pointer;
  }

  .drink .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .drink .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .drink .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .drink .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .drink .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .drink .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .drink .wrapper .groupItem .itemsBox .item .itemName {
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

  .drink .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .drink .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .drink .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .drink .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .drink .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .drink .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .drink .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .drink .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .drink .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .drink .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .drink .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .drink .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .drink .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .drink .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .drink .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .drink .wrapper .groupItem .itemsBox .item .itemName {
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

    .drink .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .drink .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .drink .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .drink .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .drink .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .drink {
      margin: 20px auto;
    }

    .drink .owl-dots {
      display: none;
    }
  }
`;

export default Drink;
