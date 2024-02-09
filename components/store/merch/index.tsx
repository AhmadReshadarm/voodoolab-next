import TitleBlock from 'UI-Kit/titleBlock';
import FirstBlock from './firstBlock';
import Tunic from './tunic';
import { useEffect } from 'react';
import Caps from './caps';
import PhoneWrapper from './phoneWrapper';

const MerchComponent = () => {
  useEffect(() => {
    const dataArray: any = [
        {
          classNameBlock: 'phoneWrapper',
          timesAnimate: [4, 4, 4, 4],
          startSlide: 1,
          daleyStart: [4, 4, 4, 4],
        },
        {
          classNameBlock: 'caps',
          timesAnimate: [4, 4, 4],
          startSlide: 1,
          daleyStart: [4, 4, 4],
        },
        {
          classNameBlock: 'tunic',
          timesAnimate: [4, 4, 4, 4, 4, 4, 4],
          startSlide: 1,
          daleyStart: [4, 4, 4, 4, 4, 4, 4],
        },
      ],
      e: any = (t, s, l = 4, a) => {
        if (s.length < 2) return;
        const n = s.length - 2;
        (a = a === n ? 0 : a + 1),
          (() => {
            for (let t = 0; t < s.length; t++) s[t].classList.remove('show');
          })(),
          s[a].classList.add('show'),
          setTimeout(() => {
            e(t, s, l, a);
          }, 1e3 * l);
      };
    const s: any = (t, s, l, a, n) => {
      let c: any = [];
      for (let e = 0; e < t.length; e++) {
        const s = t[e];
        c = [...c, ...s.children];
      }
      c = c.map((t) => t.firstElementChild);
      for (let t = 0; t < c.length; t++)
        setTimeout(() => {
          const s = c[t];
          e(a, s.children, l[t], n - 1);
        }, 1e3 * s[t]);
    };
    for (let e = 0; e < dataArray.length; e++) {
      const l = dataArray[e];
      s(
        document.querySelector(`.${l.classNameBlock}`)!.children,
        l.daleyStart,
        l.timesAnimate,
        l.classNameBlock,
        l.startSlide,
      );
    }
  }, []);
  return (
    <>
      <FirstBlock />
      <TitleBlock title={`футболки`} />
      <Tunic />
      <TitleBlock title={`кепки`} />
      <Caps />
      <TitleBlock title={`чехлы`} />
      <PhoneWrapper />
    </>
  );
};

export default MerchComponent;
