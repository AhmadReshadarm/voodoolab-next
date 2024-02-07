import styled from 'styled-components';

const FirstBlock = () => {
  return (
    <Wrapper>
      <div className="firstBlock">
        <div className="videoBg">
          <img
            src="/assets/images/home/firstBlock/cliff.png"
            alt="Фон - горы"
          />
          <div className="backgroundFilter"></div>
        </div>
        <div className="main">
          <div className="content">
            <div className="title">
              <div className="bigText">Карта</div>
              <div className="smallText">вкусов</div>
            </div>
            <div className="description">
              <span> ягодные, </span>
              <span> фруктовые, </span>
              <span> десертные/конфетные, </span>
              <span> хвойные/травяные, </span>
              <span> лимонады/кола/напитки, </span>
              <span> мятные, </span>
              <span> ледяные </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .firstBlock {
    padding-top: 80px;
    position: relative;
    color: #fff;
    margin: 0 auto;
    max-width: 1920px;
    width: 100%;
    max-height: 1000px;
    height: calc(100vh - 80px);
    min-height: 600px;
    overflow: hidden;
  }

  .firstBlock .videoBg {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }

  .firstBlock .videoBg video {
    position: absolute;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .firstBlock .videoBg img {
    position: absolute;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .firstBlock .videoBg .backgroundFilter {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.42);
  }

  .firstBlock .main {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .firstBlock .main .content {
    padding: 0 15px;
  }

  .firstBlock .main .content .title {
    position: relative;
    top: -25%;
    align-self: end;
    font-weight: 700;
    line-height: 1;
    text-align: left;
  }

  .firstBlock .main .content .title .bigText {
    font-size: 92px;
  }

  .firstBlock .main .content .title .smallText {
    font-size: 62px !important;
    margin-top: 0 !important;
  }

  .firstBlock .main .content .description {
    position: relative;
    top: -25%;
    margin-top: 40px;
    max-width: 400px;
    align-self: end;
    display: flex;
    flex-wrap: wrap;
    font-size: 34px;
    -moz-column-gap: 10px;
    column-gap: 10px;
  }

  @media screen and (max-width: 991px) {
    .firstBlock .main {
      justify-content: center;
    }

    .firstBlock .main .content .title {
      text-align: center;
    }

    .firstBlock .main .content .description {
      justify-content: center;
      max-width: none;
    }
  }

  @media (max-width: 767px) {
    .firstBlock {
      padding-top: 50px;
      height: calc(100vh - 50px);
      max-height: 600px;
    }
  }

  @media screen and (max-width: 767px) {
    .firstBlock .main .content .title .bigText {
      font-size: 72px;
    }

    .firstBlock .main .content .title .smallText {
      font-size: 42px;
    }
  }
`;

export default FirstBlock;
