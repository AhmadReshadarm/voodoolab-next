import { useEffect } from 'react';
import styled from 'styled-components';

const Berry = () => {
  useEffect(() => {
    const e: any = document.querySelector('.berry');
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
      <div className="berry">
        <div className="wrapper">
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">boshki one ice</div>
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
                    src="/assets/images/map/berry/boshki_one_ice/boshki-on_ice-cs.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">cs</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#кола</div>
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
                    src="/assets/images/map/berry/boshki_one_ice/boshki-on_ice-yagodki.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">ягодки</div>
                <div className="tagsBox">
                  <div className="tagItem">#лесные ягоды</div>
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
                    src="/assets/images/map/berry/boshki_one_ice/boshki-on_ice-dachnye.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">Дачные</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#груша</div>
                  <div className="tagItem">#лимонад</div>
                  <div className="tagItem">#хвоя</div>
                </div>
              </div>
            </div>
          </div>
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
                    src="/assets/images/map/berry/boshki/neon.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">neon</div>
                <div className="tagsBox">
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#арбуз</div>
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
                    src="/assets/images/map/berry/boshki/sad.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">Садовые</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
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
                    src="/assets/images/map/berry/boshki/hugar.png"
                    alt="map"
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
                    src="/assets/images/map/berry/boshki/happy.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">Добрые</div>
                <div className="tagsBox">
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#щербет</div>
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
                    src="/assets/images/map/berry/boshki/hangry.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">Злые</div>
                <div className="tagsBox">
                  <div className="tagItem">#смородина</div>
                  <div className="tagItem">#лимонад</div>
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
                    src="/assets/images/map/berry/boshki/kubanskie.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">Кубанские</div>
                <div className="tagsBox">
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#виноград</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#щербет</div>
                </div>
              </div>
            </div>
          </div>

          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Husky Malasian</div>
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
                    src="/assets/images/map/berry/husky_malasian/sour-beast.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">SOUR BEAST</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#киви</div>
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
                    src="/assets/images/map/berry/husky_malasian/wolfberry.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">WOLFBERRY</div>
                <div className="tagsBox">
                  <div className="tagItem">#волчья ягода</div>
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
                    src="/assets/images/map/berry/husky_malasian/red-warg.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">RED WARG</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem color">#малина</div>
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
                    src="/assets/images/map/berry/husky_malasian/Shake-Pears.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">SHAKE PEARS</div>
                <div className="tagsBox">
                  <div className="tagItem">#личи</div>
                  <div className="tagItem">#персик</div>
                  <div className="tagItem">#груша</div>
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
                    src="/assets/images/map/berry/husky_malasian/Berserk.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">BERSERK</div>
                <div className="tagsBox">
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#лёд</div>
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
                    src="/assets/images/map/berry/husky_white/sweet-vale.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">SWEET VALE</div>
                <div className="tagsBox">
                  <div className="tagItem">#личи</div>
                  <div className="tagItem">#конфета</div>
                  <div className="tagItem">#лёд</div>
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
                    src="/assets/images/map/berry/husky_double_ice/siberian-black.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">SIBERIAN BLACK</div>
                <div className="tagsBox">
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#двойной лёд</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Husky Mint Series</div>
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
                    src="/assets/images/map/berry/husky_mint_series/red_garden.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">RED GARDEN</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#мята</div>
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
                    src="/assets/images/map/berry/husky_mint_series/blue_up_main.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">BLUE UP</div>
                <div className="tagsBox">
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#мята</div>
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
                    src="/assets/images/map/berry/husky_mint_series/berry_hunter.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">BERRY HUNTER</div>
                <div className="tagsBox">
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#мята</div>
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
                    src="/assets/images/map/berry/husky_premium/arbuz.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">big ball</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#дыня</div>
                  <div className="tagItem">#арбуз</div>
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
                    src="/assets/images/map/berry/husky_premium/banan.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">miami snow</div>
                <div className="tagsBox">
                  <div className="tagItem">#личи</div>
                  <div className="tagItem">#ананас</div>
                  <div className="tagItem">#банан</div>
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
                    src="/assets/images/map/berry/husky_premium/brusnika.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">animal jam</div>
                <div className="tagsBox">
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem color">#малина</div>
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
                    src="/assets/images/map/berry/husky_premium/guava.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">dark flesh</div>
                <div className="tagsBox">
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#гуава</div>
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
                    src="/assets/images/map/berry/husky_premium/kivi.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">green land</div>
                <div className="tagsBox">
                  <div className="tagItem">#клюква</div>
                  <div className="tagItem">#киви</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#лимон</div>
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
                    src="/assets/images/map/berry/husky_premium/persik.png"
                    alt="map"
                    className="load"
                  />
                </div>
                <div className="itemName">yogi doggy</div>
                <div className="tagsBox">
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#персик</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#йогурт</div>
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
  .berry {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .berry .wrapper {
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

  .berry .wrapper:active {
    cursor: pointer;
  }

  .berry .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .berry .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .berry .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .berry .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .berry .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .berry .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .berry .wrapper .groupItem .itemsBox .item .itemName {
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

  .berry .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .berry .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .berry .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .berry .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .berry .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .berry .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .berry .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .berry .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .berry .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .berry .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .berry .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .berry .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .berry .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .berry .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .berry .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .berry .wrapper .groupItem .itemsBox .item .itemName {
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

    .berry .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .berry .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .berry .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .berry .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .berry .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .berry {
      margin: 20px auto;
    }

    .berry .owl-dots {
      display: none;
    }
  }
`;

export default Berry;
