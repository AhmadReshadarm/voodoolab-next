import { useEffect } from 'react';

const MishkaSlider = () => {
  useEffect(() => {
    const e: any = document.querySelector('.mishka_slider');
    let t = 0,
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
      e.addEventListener('mouseup', (m) => {
        t = 0;
        let u = Date.now() - l,
          d = n - m.clientX;
        (i = Math.abs(d / u)),
          (s = (d / u) * 15),
          r(),
          e.removeEventListener('mousemove', o);
      }),
      e.addEventListener('mouseleave', (t) => {
        e.removeEventListener('mousemove', o);
      });
  }, []);
  return (
    <div className="mishka_slider">
      <div className="wrapper">
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/арбуз-клубника.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/бошки-ягоды.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img src="/assets/images/home/mishka/киви-мята.png" alt="mishkaImg" />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/клюквенный-джем.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/манго-облепиха.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/сладкая-мята.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/смородина-мята.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/энергетик-кактус.png"
            alt="mishkaImg"
          />
        </div>
        <div className="imgItem">
          <img
            src="/assets/images/home/mishka/юдзу-и-маракуя.png"
            alt="mishkaImg"
          />
        </div>
      </div>
      <div className="leftOpacity"></div>
      <div className="rightOpacity"></div>
    </div>
  );
};

export default MishkaSlider;
