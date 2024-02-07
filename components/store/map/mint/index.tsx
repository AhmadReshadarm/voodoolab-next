import { useEffect } from 'react';
import styled from 'styled-components';

const Mint = () => {
  useEffect(() => {
    const e: any = document.querySelector('.mint');
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
      <div className="mint">
        <div className="wrapper">
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
                    data-src="/assets/images/map/mint/husky_malasian/gum-wolf.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_malasian/gum-wolf.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Gum wolf</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#жвачка</div>
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
                    data-src="/assets/images/map/mint/husky_malasian/sour-beast.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_malasian/sour-beast.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SOUR BEAST</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#киви</div>
                  <div className="tagItem">#лёд</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/water-place.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/water-place.png"
                    className="load"
                  />
                </div>
                <div className="itemName">WATER PLACE</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#арбуз</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/juicy-grapes.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/juicy-grapes.png"
                    className="load"
                  />
                </div>
                <div className="itemName">JUICY GRAPES</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#виноград</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/citrus-days.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/citrus-days.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CITRUS DAYS</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#цитрус</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/sweet-buckshot.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/sweet-buckshot.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SWEET BUCKSHOT</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#гранат</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/sakura-forest.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/sakura-forest.png"
                    className="load"
                  />
                </div>
                <div className="itemName">sakura forest</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#вишня</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/red-garden.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/red-garden.png"
                    className="load"
                  />
                </div>
                <div className="itemName">RED GARDEN</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/blue-up.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/blue-up.png"
                    className="load"
                  />
                </div>
                <div className="itemName">BLUE UP</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
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
                    data-src="/assets/images/map/mint/husky_mint_series/berry-hunter.png"
                    alt="map"
                    src="/assets/images/map/mint/husky_mint_series/berry-hunter.png"
                    className="load"
                  />
                </div>
                <div className="itemName">BERRY HUNTER</div>
                <div className="tagsBox">
                  <div className="tagItem">#мята</div>
                  <div className="tagItem">#лесные ягоды</div>
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
  .mint {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .mint .wrapper {
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

  .mint .wrapper:active {
    cursor: pointer;
  }

  .mint .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .mint .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .mint .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .mint .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .mint .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .mint .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .mint .wrapper .groupItem .itemsBox .item .itemName {
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

  .mint .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .mint .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .mint .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .mint .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .mint .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .mint .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .mint .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .mint .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .mint .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .mint .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .mint .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .mint .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .mint .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .mint .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .mint .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .mint .wrapper .groupItem .itemsBox .item .itemName {
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

    .mint .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .mint .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .mint .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .mint .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .mint .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .mint {
      margin: 20px auto;
    }

    .mint .owl-dots {
      display: none;
    }
  }
`;

export default Mint;
