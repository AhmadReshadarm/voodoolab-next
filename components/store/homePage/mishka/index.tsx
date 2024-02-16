const Mishka = () => {
  return (
    <div className="Mishka">
      <div className="imgBox">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          webkit-playinginline
          playsInline
        >
          <source
            src="/assets/video/mishka.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </div>
      <div className="main">
        <div className="newLineDropInner">
          <div className="innerSubTitle">new collaboration</div>
          <div className="innerTitle">MISHKA X HUSKY</div>
          <div className="innerText">
            Mishka &amp; Husky - два самых известных маскота, VoodooLab &amp;
            PrideVape - два крупнейших производителя в вейп-индустрии, тщательно
            изучив вкусовые предпочтения в кисло- сладких миксах, объединились и
            создали девять поистине крутых и летних вкусов!
          </div>
        </div>
        <div className="button">
          <div className="getPriceBtn">Получить прайс</div>
        </div>
      </div>
    </div>
  );
};

export default Mishka;
