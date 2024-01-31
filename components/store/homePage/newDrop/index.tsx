import { useEffect } from 'react';

const NewDrop = () => {
  useEffect(() => {
    const e: any = document.querySelectorAll('.newDropImg'),
      s = e.length - 1;
    let t = 0;
    const o = () => {
      e.length &&
        ((t = t === s ? 0 : t + 1),
        0 === t
          ? e[e.length - 1].classList.remove('show')
          : e[t].previousElementSibling.classList.remove('show'),
        e[t].classList.add('show'),
        setTimeout(() => {
          o();
        }, 4e3));
    };
    setTimeout(() => {
      o();
    }, 4e3);
  }, []);
  return (
    <div className="NewDrop">
      <div className="topMarqueeLine">
        <div className="marquee-container">
          <p className="marquee">
            new collection merch &nbsp;&nbsp;&nbsp; new collection merch
            &nbsp;&nbsp;&nbsp; new collection merch &nbsp;&nbsp;&nbsp; new
            collection merch &nbsp;&nbsp;&nbsp; new collection merch
            &nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div className="bottomMarqueeLine">
        <div className="marquee-container">
          <p className="marquee">
            new collection merch &nbsp;&nbsp;&nbsp; new collection merch
            &nbsp;&nbsp;&nbsp; new collection merch &nbsp;&nbsp;&nbsp; new
            collection merch &nbsp;&nbsp;&nbsp; new collection merch
            &nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
      <div className="main">
        <div className="imgBox">
          <img
            className="newDropImg"
            src="/assets/images/merch/tunic/1_Boshki_PP_black.jpg"
            alt="merch"
          />

          <img
            className="newDropImg"
            src="/assets/images/merch/phone_wrapper/1_Boshki_original.jpg"
            alt="merch"
          />
          <img
            className="newDropImg show"
            src="/assets/images/merch/tunic/2_Boshki_PP_White.jpg"
            alt="merch"
          />

          <img
            className="newDropImg"
            src="/assets/images/merch/phone_wrapper/2_Boshki_original.jpg"
            alt="merch"
          />
          <img
            className="newDropImg"
            src="/assets/images/merch/tunic/3_Boshki_Original.jpg"
            alt="merch"
          />

          <img
            className="fake"
            src="/assets/images/merch/tunic/1_Boshki_PP_black.jpg"
            alt="merch"
          />
        </div>
        <div className="content">
          <div className="title">new drop!</div>
          <div className="merchName">
            <div className="merchTitle">merch collection</div>
          </div>
          <div className="description">
            <span> snapbacks, </span>
            <span> бейсболки, </span>
            <span> футболки, </span>
            <span> чехлы для смартфонов</span>
          </div>
          <div className="buttonBox">
            <a href="/merch" className="moreBtn">
              подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDrop;
