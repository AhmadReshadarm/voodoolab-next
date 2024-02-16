import { useEffect, useState } from 'react';

const VideoMerch = () => {
  useEffect(() => {
    const e: any = document.querySelectorAll('.getPriceBtn'),
      t: any = document.querySelector('.getPriceMain'),
      o: any = document.querySelector('.closeGetPrice');
    for (let n = 0; n < e.length; n++)
      e[n].addEventListener('click', (e) => {
        t &&
          (e.preventDefault(),
          t.parentElement.classList.add('active'),
          (document.body.style.overflow = 'hidden'));
      }),
        t &&
          (t.addEventListener('pointerdown', (e) => {
            e.stopPropagation();
          }),
          t.addEventListener('touchstart', (e) => {
            e.stopPropagation();
          }),
          t.parentElement.addEventListener('pointerdown', (e) => {
            e.target.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          }),
          t.parentElement.addEventListener('touchstart', (e) => {
            e.target.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          })),
        o &&
          t &&
          (o.addEventListener('pointerdown', (e) => {
            t.parentElement.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          }),
          o.addEventListener('touchstart', (e) => {
            t.parentElement.classList.remove('active'),
              (document.body.style.overflow = 'auto');
          }));
  }, []);

  return (
    <>
      {' '}
      <div className="VideoMerch">
        <video
          poster="/assets/video/merch/poster_homePage.png"
          preload="auto"
          autoPlay
          loop
          muted
          webkit-playinginline
          playsInline
        >
          <source
            src="/assets/video/merch/merch_homePage.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
        <div className="backgroundFilter"></div>
      </div>
      <div className="titleBlock borderNon">
        <div>
          <span> новые вкусы </span>
          <span className="boldText"> husky premium </span>
        </div>
      </div>
      <div className="NewLine">
        <video
          poster="/assets/images/video/home_poster_1.png"
          preload="auto"
          autoPlay
          loop
          muted
          webkit-playinginline
          playsInline
        >
          <source
            src="/assets/video/husky_prem_new.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
        <div className="backgroundFilter"></div>
        <div className="main">
          <div className="buttons">
            <a href="/husky_premium" className="button">
              подробнее
            </a>
            <div className="button getPriceBtn">прайс</div>
          </div>
        </div>
      </div>
      <div className="NewLineDrop">
        <div className="imgBox">
          <img
            src="/assets/images/home/glavnaya-blok-s-khaski-vayt.png"
            alt="khaski-vayt"
          />
        </div>
        <div className="main">
          <div className="newLineDropTitle">new drop!</div>
          <div className="newLineDropInner">
            <div className="innerSubTitle">Новые вкусы</div>
            <div className="innerTitle">HUSKY WHITE</div>
            <div className="innerText">
              яркие, насыщенные и уникальные вкусы, уже во всех вейпшопах страны
            </div>
          </div>
          <div className="button">
            <a href="/husky_white" className="button">
              подробнее
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoMerch;
