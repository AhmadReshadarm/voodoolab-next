import { useEffect } from 'react';
import styled from 'styled-components';

const Fruits = () => {
  useEffect(() => {
    const e: any = document.querySelector('.fruits');
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
      <div className="fruits">
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
                    data-src="/assets/images/map/fruits/boshki/neon.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki/neon.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Neon</div>
                <div className="tagsBox">
                  <div className="tagItem">#арбуз</div>
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
                    data-src="/assets/images/map/fruits/boshki/winter.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki/winter.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Зимние</div>
                <div className="tagsBox">
                  <div className="tagItem">#ананас</div>
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
                    data-src="/assets/images/map/fruits/boshki/exotic.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki/exotic.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Exotic</div>
                <div className="tagsBox">
                  <div className="tagItem">#манго</div>
                  <div className="tagItem color">#дыня</div>
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
                    data-src="/assets/images/map/fruits/boshki/kubanskie.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki/kubanskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Кубанские</div>
                <div className="tagsBox">
                  <div className="tagItem">#виноград</div>
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#щербет</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Boshki On Ice</div>
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
                    data-src="/assets/images/map/fruits/boshki_one_ice/dachnye.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki_one_ice/dachnye.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Дачные</div>
                <div className="tagsBox">
                  <div className="tagItem">#груша</div>
                  <div className="tagItem">#клубника</div>
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
                    data-src="/assets/images/map/fruits/boshki_one_ice/tropicheskie.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki_one_ice/tropicheskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Тропические</div>
                <div className="tagsBox">
                  <div className="tagItem">#манго</div>
                  <div className="tagItem color">#мандарин</div>
                  <div className="tagItem">#лёд</div>
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
                    data-src="/assets/images/map/fruits/boshki_one_ice/sochnye.png"
                    alt="map"
                    src="/assets/images/map/fruits/boshki_one_ice/sochnye.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Сочные</div>
                <div className="tagsBox">
                  <div className="tagItem">#яблоко</div>
                  <div className="tagItem color">#апельсин</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
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
                    data-src="/assets/images/map/fruits/husky_malasian/sour-beast.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_malasian/sour-beast.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SOUR BEAST</div>
                <div className="tagsBox">
                  <div className="tagItem">#киви</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#мята</div>
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
                    data-src="/assets/images/map/fruits/husky_malasian/gum-wolf.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_malasian/gum-wolf.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Gum wolf</div>
                <div className="tagsBox">
                  <div className="tagItem">#арбуз</div>
                  <div className="tagItem">#жвачка</div>
                  <div className="tagItem">#лёд</div>
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
                    data-src="/assets/images/map/fruits/husky_malasian/tropic-hunter.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_malasian/tropic-hunter.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Tropic Hunter</div>
                <div className="tagsBox">
                  <div className="tagItem">#ананас</div>
                  <div className="tagItem color">#дыня</div>
                  <div className="tagItem color">#манго</div>
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
                    data-src="/assets/images/map/fruits/husky_malasian/shake-pears.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_malasian/shake-pears.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SHAKE PEARS</div>
                <div className="tagsBox">
                  <div className="tagItem">#персик</div>
                  <div className="tagItem color">#груша</div>
                  <div className="tagItem">#личи</div>
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
                    data-src="/assets/images/map/fruits/husky_malasian/lemon-flock.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_malasian/lemon-flock.png"
                    className="load"
                  />
                </div>
                <div className="itemName">LEMON FLOCK</div>
                <div className="tagsBox">
                  <div className="tagItem">#апельсин</div>
                  <div className="tagItem color">#лимон</div>
                  <div className="tagItem color">#грейпфрут</div>
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
                    data-src="/assets/images/map/fruits/husky_malasian/jungle-hunter.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_malasian/jungle-hunter.png"
                    className="load"
                  />
                </div>
                <div className="itemName">JUNGLE HUNTER</div>
                <div className="tagsBox">
                  <div className="tagItem">#манго</div>
                  <div className="tagItem color">#цитрус</div>
                  <div className="tagItem">#лёд</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">husky double ice</div>
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
                    data-src="/assets/images/map/fruits/husky_double_ice/arctic-strike.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_double_ice/arctic-strike.png"
                    className="load"
                  />
                </div>
                <div className="itemName">ARCTIC STRIKE</div>
                <div className="tagsBox">
                  <div className="tagItem">#манго</div>
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
                    data-src="/assets/images/map/fruits/husky_double_ice/frosty-palm.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_double_ice/frosty-palm.png"
                    className="load"
                  />
                </div>
                <div className="itemName">FROSTY PALM</div>
                <div className="tagsBox">
                  <div className="tagItem">#апельсин</div>
                  <div className="tagItem color">#банан</div>
                  <div className="tagItem color">#яблоко</div>
                  <div className="tagItem color">#ананас</div>
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
                    data-src="/assets/images/map/fruits/husky_double_ice/chilly-kiwi.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_double_ice/chilly-kiwi.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CHILY KIWI</div>
                <div className="tagsBox">
                  <div className="tagItem">#киви</div>
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
                    data-src="/assets/images/map/fruits/husky_double_ice/north-sweet.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_double_ice/north-sweet.png"
                    className="load"
                  />
                </div>
                <div className="itemName">NORTH SWEET</div>
                <div className="tagsBox">
                  <div className="tagItem">#дыня</div>
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
                    data-src="/assets/images/map/fruits/husky_double_ice/explosive-bait.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_double_ice/explosive-bait.png"
                    className="load"
                  />
                </div>
                <div className="itemName">EXPLOSIVE BITE</div>
                <div className="tagsBox">
                  <div className="tagItem">#гранат</div>
                  <div className="tagItem">#двойной лёд</div>
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
                    data-src="/assets/images/map/fruits/husky_premium/arbuz.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_premium/arbuz.png"
                    className="load"
                  />
                </div>
                <div className="itemName">big ball</div>
                <div className="tagsBox">
                  <div className="tagItem">#дыня</div>
                  <div className="tagItem color">#арбуз</div>
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
                    data-src="/assets/images/map/fruits/husky_premium/banan.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_premium/banan.png"
                    className="load"
                  />
                </div>
                <div className="itemName">miami snow</div>
                <div className="tagsBox">
                  <div className="tagItem">#ананас</div>
                  <div className="tagItem color">#банан</div>
                  <div className="tagItem">#личи</div>
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
                    data-src="/assets/images/map/fruits/husky_premium/guava.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_premium/guava.png"
                    className="load"
                  />
                </div>
                <div className="itemName">dark flesh</div>
                <div className="tagsBox">
                  <div className="tagItem">#гуава</div>
                  <div className="tagItem">#черника</div>
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
                    data-src="/assets/images/map/fruits/husky_premium/kivi.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_premium/kivi.png"
                    className="load"
                  />
                </div>
                <div className="itemName">green land</div>
                <div className="tagsBox">
                  <div className="tagItem">#киви</div>
                  <div className="tagItem color">#лимон</div>
                  <div className="tagItem">#клюква</div>
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
                    data-src="/assets/images/map/fruits/husky_premium/persik.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_premium/persik.png"
                    className="load"
                  />
                </div>
                <div className="itemName">yogi doggy</div>
                <div className="tagsBox">
                  <div className="tagItem">#персик</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#йогурт</div>
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
                    data-src="/assets/images/map/fruits/husky_premium/dynya.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_premium/dynya.png"
                    className="load"
                  />
                </div>
                <div className="itemName">yellow king</div>
                <div className="tagsBox">
                  <div className="tagItem">#дыня</div>
                  <div className="tagItem color">#медовая дыня</div>
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#алое</div>
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
                    data-src="/assets/images/map/fruits/husky_white/chew-peack.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_white/chew-peack.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CHEW PEAK</div>
                <div className="tagsBox">
                  <div className="tagItem">#манго</div>
                  <div className="tagItem">#жвачка</div>
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
                    data-src="/assets/images/map/fruits/husky_white/cold-passion.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_white/cold-passion.png"
                    className="load"
                  />
                </div>
                <div className="itemName">COLD PASSION</div>
                <div className="tagsBox">
                  <div className="tagItem">#маракуя</div>
                  <div className="tagItem">#смузи</div>
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
                    data-src="/assets/images/map/fruits/husky_white/green-land.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_white/green-land.png"
                    className="load"
                  />
                </div>
                <div className="itemName">GREEN LAND</div>
                <div className="tagsBox">
                  <div className="tagItem">#зелёное яблоко</div>
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
                    data-src="/assets/images/map/fruits/husky_white/polar-energy.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_white/polar-energy.png"
                    className="load"
                  />
                </div>
                <div className="itemName">POLAR ENERGY</div>
                <div className="tagsBox">
                  <div className="tagItem">#киви</div>
                  <div className="tagItem color">#фейхоа</div>
                  <div className="tagItem">#энергетик</div>
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
                    data-src="/assets/images/map/fruits/husky_mint_series/water-place.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_mint_series/water-place.png"
                    className="load"
                  />
                </div>
                <div className="itemName">WATER PLACE</div>
                <div className="tagsBox">
                  <div className="tagItem">#арбуз</div>
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
                    data-src="/assets/images/map/fruits/husky_mint_series/juicy-grapes.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_mint_series/juicy-grapes.png"
                    className="load"
                  />
                </div>
                <div className="itemName">JUICY GRAPES</div>
                <div className="tagsBox">
                  <div className="tagItem">#виноград</div>
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
                    data-src="/assets/images/map/fruits/husky_mint_series/citrus-days.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_mint_series/citrus-days.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CITRUS DAYS</div>
                <div className="tagsBox">
                  <div className="tagItem">#цитрус</div>
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
                    data-src="/assets/images/map/fruits/husky_mint_series/sweet-buckshot.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_mint_series/sweet-buckshot.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SWEET BUCKSHOT</div>
                <div className="tagsBox">
                  <div className="tagItem">#гранат</div>
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
                    data-src="/assets/images/map/fruits/husky_mint_series/sakura-forest.png"
                    alt="map"
                    src="/assets/images/map/fruits/husky_mint_series/sakura-forest.png"
                    className="load"
                  />
                </div>
                <div className="itemName">sakura forest</div>
                <div className="tagsBox">
                  <div className="tagItem">#вишня</div>
                  <div className="tagItem">#мята</div>
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
  .fruits {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .fruits .wrapper {
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

  .fruits .wrapper:active {
    cursor: pointer;
  }

  .fruits .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .fruits .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .fruits .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .fruits .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .fruits .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .fruits .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .fruits .wrapper .groupItem .itemsBox .item .itemName {
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

  .fruits .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .fruits .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .fruits .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .fruits .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .fruits .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .fruits .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .fruits .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .fruits .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .fruits .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .fruits .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .fruits .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .fruits .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .fruits .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .fruits .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .fruits .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .fruits .wrapper .groupItem .itemsBox .item .itemName {
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

    .fruits .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .fruits .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .fruits .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .fruits .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .fruits .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .fruits {
      margin: 20px auto;
    }

    .fruits .owl-dots {
      display: none;
    }
  }
`;

export default Fruits;
