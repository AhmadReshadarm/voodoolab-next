import { useEffect } from 'react';
import styled from 'styled-components';

const Tabak = () => {
  useEffect(() => {
    const e: any = document.querySelector('.tabak');
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
      <div className="tabak">
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Добрые</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#щербет</div>
                  <div className="tagItem">#лесные ягоды</div>
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
                    data-src="/assets/images/map/tabak/boshki/boshki-salt-kubanskie-bottle.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/boshki-salt-kubanskie-bottle.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Кубанские</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#щербет</div>
                  <div className="tagItem">#виноград</div>
                  <div className="tagItem">#черника</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_11.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_11.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Сахарные</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#малиновое варенье</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_10.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_10.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Добрые on Ice</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#щербет</div>
                  <div className="tagItem">#лесные ягоды</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_8.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_8.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Neon</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#арбуз</div>
                  <div className="tagItem">#черника</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_3.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_3.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Зимние</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#ананас</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_7.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_7.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Exotic</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#манго</div>
                  <div className="tagItem">#дыня</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_9.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_9.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Садовые</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#клубника</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_6.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_6.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Original</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem color">#еловые шишки</div>
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
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem color">#травяной чай</div>
                  <div className="tagItem">#мёд</div>
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
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#смородина</div>
                  <div className="tagItem">#лимонад</div>
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
                    data-src="/assets/images/map/tabak/boshki/boshki-salt-bodrye-bottle.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/boshki-salt-bodrye-bottle.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Бодрые</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#энергетик</div>
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
                    data-src="/assets/images/map/tabak/boshki/label-effects_kopia_4.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki/label-effects_kopia_4.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Чёрные</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#кока-кола</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Boshki on Ice</div>
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
                    data-src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-cs.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-cs.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CS</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#кола</div>
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
                    data-src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-yagodki.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-yagodki.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Ягодки</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#лесные ягоды</div>
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
                    data-src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-doktorskie.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-doktorskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Докторские</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#доктор пеппер</div>
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
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#груша</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#лимонад</div>
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
                    data-src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-sochnye.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-sochnye.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Сочные</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#яблоко</div>
                  <div className="tagItem">#апельсин</div>
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
                    data-src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-tropicheskie.png"
                    alt="map"
                    src="/assets/images/map/tabak/boshki_one_ice/boshki-on_ice-tropicheskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Тропические</div>
                <div className="tagsBox">
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#манго</div>
                  <div className="tagItem">#мандарин</div>
                  <div className="tagItem">#лёд</div>
                </div>
              </div>
            </div>
          </div>

          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">husky malasian</div>
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
                    data-src="/assets/images/map/tabak/husky_malasian/Ice-woody.png"
                    alt="map"
                    src="/assets/images/map/tabak/husky_malasian/Ice-woody.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Ice Woody</div>
                <div className="tagsBox">
                  <div className="tagItem">#кора</div>
                  <div className="tagItem color">#древесный</div>
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
  .tabak {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .tabak .wrapper {
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

  .tabak .wrapper:active {
    cursor: pointer;
  }

  .tabak .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .tabak .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .tabak .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .tabak .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .tabak .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .tabak .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .tabak .wrapper .groupItem .itemsBox .item .itemName {
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

  .tabak .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .tabak .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .tabak .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .tabak .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .tabak .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .tabak .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .tabak .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .tabak .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .tabak .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .tabak .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .tabak .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .tabak .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .tabak .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .tabak .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .tabak .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .tabak .wrapper .groupItem .itemsBox .item .itemName {
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

    .tabak .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .tabak .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .tabak .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .tabak .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .tabak .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .tabak {
      margin: 20px auto;
    }

    .tabak .owl-dots {
      display: none;
    }
  }
`;

export default Tabak;
