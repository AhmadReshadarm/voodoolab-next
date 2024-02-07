import { useEffect } from 'react';
import styled from 'styled-components';

const Froze = () => {
  useEffect(() => {
    const e: any = document.querySelector('.froze');
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
      <div className="froze">
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
                    data-src="/assets/images/map/froze/boshki/label-effects_kopia_10.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki/label-effects_kopia_10.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Добрые on Ice</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
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
                    data-src="/assets/images/map/froze/boshki/label-effects_kopia_3.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki/label-effects_kopia_3.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Зимние</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#ананас</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">Boshki On ice</div>
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
                    data-src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-cs.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-cs.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CS</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#кола</div>
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
                    data-src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-yagodki.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-yagodki.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Ягодки</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
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
                    data-src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-doktorskie.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-doktorskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Докторские</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#доктор пеппер</div>
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
                    data-src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-dachnye.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-dachnye.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Дачные</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
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
                    data-src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-sochnye.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-sochnye.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Сочные</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#яблоко</div>
                  <div className="tagItem">#апельсин</div>
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
                    data-src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-tropicheskie.png"
                    alt="map"
                    src="/assets/images/map/froze/boshki_one_ice/boshki-on_ice-tropicheskie.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Тропические</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#хвоя</div>
                  <div className="tagItem">#манго</div>
                  <div className="tagItem">#мандарин</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/sour-beast.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/sour-beast.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SOUR BEAST</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#киви</div>
                  <div className="tagItem">#клубника #мята</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/gum-wolf.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/gum-wolf.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Gum wolf</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#арбуз</div>
                  <div className="tagItem">#жвачка #мята</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/tropic-hunter.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/tropic-hunter.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Tropic Hunter</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#ананас</div>
                  <div className="tagItem">#дыня</div>
                  <div className="tagItem">#манго</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/shake-pears.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/shake-pears.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SHAKE PEARS</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#персик</div>
                  <div className="tagItem">#груша</div>
                  <div className="tagItem">#личи</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/lemon-flock.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/lemon-flock.png"
                    className="load"
                  />
                </div>
                <div className="itemName">LEMON FLOCK</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#апельсин</div>
                  <div className="tagItem">#лимон</div>
                  <div className="tagItem">#грейпфрут</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/Ice-woody.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/Ice-woody.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Ice Woody</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#кора</div>
                  <div className="tagItem">#древесный</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/wolfberry.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/wolfberry.png"
                    className="load"
                  />
                </div>
                <div className="itemName">WOLFBERRY</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#волчья ягода</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/red-warg.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/red-warg.png"
                    className="load"
                  />
                </div>
                <div className="itemName">RED WARG</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#малина</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/Berserk.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/Berserk.png"
                    className="load"
                  />
                </div>
                <div className="itemName">BERSERK</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
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
                    data-src="/assets/images/map/froze/husky_malasian/jungle-hunter.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_malasian/jungle-hunter.png"
                    className="load"
                  />
                </div>
                <div className="itemName">JUNGLE HUNTER</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#манго</div>
                  <div className="tagItem">#цитрус</div>
                </div>
              </div>
            </div>
          </div>
          <div className="groupItem">
            <div className="bgborger"></div>
            <div className="title">HUSKY DOUBLE ICE</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/Winter-River.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/Winter-River.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Winter River</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
                  <div className="tagItem">#кола</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/Tropic-Dew.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/Tropic-Dew.png"
                    className="load"
                  />
                </div>
                <div className="itemName">Tropic Dew</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
                  <div className="tagItem">#пинаколада</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/arctic-strike.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/arctic-strike.png"
                    className="load"
                  />
                </div>
                <div className="itemName">ARCTIC STRIKE</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
                  <div className="tagItem">#манго</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/frosty-palm.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/frosty-palm.png"
                    className="load"
                  />
                </div>
                <div className="itemName">FROSTY PALM</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
                  <div className="tagItem">#апельсин</div>
                  <div className="tagItem">#банан</div>
                  <div className="tagItem">#яблоко</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/chilly-kiwi.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/chilly-kiwi.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CHILY KIWI</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
                  <div className="tagItem">#киви</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/north-sweet.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/north-sweet.png"
                    className="load"
                  />
                </div>
                <div className="itemName">NORTH SWEET</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/explosive-bait.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/explosive-bait.png"
                    className="load"
                  />
                </div>
                <div className="itemName">EXPLOSIVE BITE</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
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
                    data-src="/assets/images/map/froze/husky_double_ice/siberian-black.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_double_ice/siberian-black.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SIBERIAN BLACK</div>
                <div className="tagsBox">
                  <div className="tagItem">#двойной лёд</div>
                  <div className="tagItem">#лесные ягоды</div>
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
                    data-src="/assets/images/map/froze/husky_white/cold-passion.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_white/cold-passion.png"
                    className="load"
                  />
                </div>
                <div className="itemName">COLD PASSION</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#смузи</div>
                  <div className="tagItem">#маракуя</div>
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
                    data-src="/assets/images/map/froze/husky_white/polar-energy.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_white/polar-energy.png"
                    className="load"
                  />
                </div>
                <div className="itemName">POLAR ENERGY</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#энергетик</div>
                  <div className="tagItem">#киви</div>
                  <div className="tagItem">#фейхоа</div>
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
                    data-src="/assets/images/map/froze/husky_white/chew-peack.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_white/chew-peack.png"
                    className="load"
                  />
                </div>
                <div className="itemName">CHEW PEAK</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#жвачка</div>
                  <div className="tagItem">#манго</div>
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
                    data-src="/assets/images/map/froze/husky_white/sweet-vale.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_white/sweet-vale.png"
                    className="load"
                  />
                </div>
                <div className="itemName">SWEET VALE</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#конфета</div>
                  <div className="tagItem">#личи</div>
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
                    data-src="/assets/images/map/froze/husky_white/green-land.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_white/green-land.png"
                    className="load"
                  />
                </div>
                <div className="itemName">GREEN LAND</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#зелёное яблоко</div>
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
                    data-src="/assets/images/map/froze/husky_premium/big_ball.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/big_ball.png"
                    className="load"
                  />
                </div>
                <div className="itemName">big ball</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#дыня</div>
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
                    data-src="/assets/images/map/froze/husky_premium/miami_snow.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/miami_snow.png"
                    className="load"
                  />
                </div>
                <div className="itemName">miami snow</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#личи</div>
                  <div className="tagItem">#ананас</div>
                  <div className="tagItem">#банан</div>
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
                    data-src="/assets/images/map/froze/husky_premium/animal_jam.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/animal_jam.png"
                    className="load"
                  />
                </div>
                <div className="itemName">animal jam</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#лесные ягоды</div>
                  <div className="tagItem">#малина</div>
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
                    data-src="/assets/images/map/froze/husky_premium/dark_flesh.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/dark_flesh.png"
                    className="load"
                  />
                </div>
                <div className="itemName">dark flesh</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#черника</div>
                  <div className="tagItem">#гуава</div>
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
                    data-src="/assets/images/map/froze/husky_premium/green_land.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/green_land.png"
                    className="load"
                  />
                </div>
                <div className="itemName">green land</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#лимон</div>
                  <div className="tagItem">#клюква</div>
                  <div className="tagItem">#киви</div>
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
                    data-src="/assets/images/map/froze/husky_premium/yogi_doggy.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/yogi_doggy.png"
                    className="load"
                  />
                </div>
                <div className="itemName">yogi doggy</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#йогурт</div>
                  <div className="tagItem">#клубника</div>
                  <div className="tagItem">#персик</div>
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
                    data-src="/assets/images/map/froze/husky_premium/yellow_king.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/yellow_king.png"
                    className="load"
                  />
                </div>
                <div className="itemName">yellow king</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#алое</div>
                  <div className="tagItem">#дыня</div>
                  <div className="tagItem">#медовая дыня</div>
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
                    data-src="/assets/images/map/froze/husky_premium/blood_boy.png"
                    alt="map"
                    src="/assets/images/map/froze/husky_premium/blood_boy.png"
                    className="load"
                  />
                </div>
                <div className="itemName">blood boy</div>
                <div className="tagsBox">
                  <div className="tagItem">#лёд</div>
                  <div className="tagItem">#сладкое манго</div>
                  <div className="tagItem">#двойное манго</div>
                  <div className="tagItem">#австралийское манго</div>
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
  .froze {
    margin: 30px auto;
    max-width: 1920px;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
  }

  .froze .wrapper {
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

  .froze .wrapper:active {
    cursor: pointer;
  }

  .froze .wrapper .groupItem {
    pointer-events: none;
    position: relative;
    border: solid 1px #fff;
    color: #fff;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .froze .wrapper .groupItem .bgborger {
    position: absolute;
    z-index: -1;
    top: 275px;
    left: 20px;
    right: 20px;
    border: solid 3px #fff;
    height: 125px;
  }

  .froze .wrapper .groupItem .title {
    margin: 0 10px;
    white-space: nowrap;
    font-size: 32px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
  }

  .froze .wrapper .groupItem .itemsBox {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .froze .wrapper .groupItem .itemsBox .item {
    margin: 0 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox {
    position: relative;
    width: 100px;
    height: 255px;
    margin: 0 auto;
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox img {
    display: block;
    margin: 0 auto;
    width: 90%;
    height: auto;
    opacity: 0;
    transition: opacity 0s linear 0s;
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox img.load {
    opacity: 1;
    transition: opacity 1s linear 0s;
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(1) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox img.load:nth-child(2) {
    transition: opacity 1s linear 0s;
    opacity: 0;
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(1) {
    position: absolute;
    z-index: 0;
    opacity: 1;
    transition: opacity 0s linear 0s;
    top: 50%;
    left: 50%;
    width: 50px;
    transform: translateX(-50%);
  }

  .froze .wrapper .groupItem .itemsBox .item .imgBox img:nth-child(2) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    opacity: 1;
    transition: opacity 0s linear 0s;
  }

  .froze .wrapper .groupItem .itemsBox .item .itemName {
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

  .froze .wrapper .groupItem .itemsBox .item .tagsBox {
    margin: 20px auto 0;
    width: 95px;
    text-align: center;
  }

  .froze .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
    margin-top: 5px;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .froze .wrapper .groupItem .itemsBox .item .tagsBox .tagItem:first-child {
    color: #ff0072;
  }

  .froze .wrapper .groupItem .itemsBox .item .tagsBox .tagItem.color {
    color: #ff0072;
  }

  .froze .wrapper .groupItem .itemsBox .item.small .imgBox {
    width: 58px;
    height: 315px;
  }

  .froze .wrapper .groupItem .itemsBox .item.small .imgBox img:nth-child(1) {
    width: 35px;
  }

  .froze .wrapper .groupItem .itemsBox .item.small .itemName {
    height: 0;
    width: 0;
  }

  .froze .wrapper .groupItem .itemsBox .item.small .tagsBox {
    width: 75px;
  }

  @media screen and (max-width: 767px) {
    .froze .wrapper .groupItem {
      border: solid 1px #fff;
      color: #fff;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .froze .wrapper .groupItem .bgborger {
      position: absolute;
      z-index: -1;
      top: 235px;
      left: 15px;
      right: 15px;
      border: solid 2px #fff;
      height: 100px;
    }

    .froze .wrapper .groupItem .title {
      font-size: 26px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-weight: 700;
    }

    .froze .wrapper .groupItem .itemsBox {
      display: flex;
      padding: 30px 20px;
    }

    .froze .wrapper .groupItem .itemsBox .item {
      margin: 0 auto;
      display: grid;
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 1fr;
    }

    .froze .wrapper .groupItem .itemsBox .item .imgBox {
      width: 80px;
      height: 205px;
      margin: 0 5px;
    }

    .froze .wrapper .groupItem .itemsBox .item .imgBox img {
      display: block;
      margin: 0 auto;
      width: 90%;
      height: auto;
    }

    .froze .wrapper .groupItem .itemsBox .item .itemName {
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

    .froze .wrapper .groupItem .itemsBox .item .tagsBox {
      margin: 0 auto;
      width: 80px;
      text-align: center;
    }

    .froze .wrapper .groupItem .itemsBox .item .tagsBox .tagItem {
      margin-top: 5px;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .froze .wrapper .groupItem .itemsBox .item.small .imgBox {
      width: 45px;
      height: 265px;
      margin: 0 auto;
    }

    .froze .wrapper .groupItem .itemsBox .item.small .itemName {
      height: 0;
      width: 0;
    }

    .froze .wrapper .groupItem .itemsBox .item.small .tagsBox {
      width: 75px;
    }
  }

  @media screen and (max-width: 500px) {
    .froze {
      margin: 20px auto;
    }

    .froze .owl-dots {
      display: none;
    }
  }
`;

export default Froze;
