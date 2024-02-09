import styled from 'styled-components';

const PhoneWrapper = () => {
  return (
    <Wrapper>
      <div className="phoneWrapper">
        <div className="merchBlockTwoItems">
          <div className="merchItemBox">
            <div className="imgBox">
              <img
                className="imgItem"
                src="/assets/images/merch/ARK06964.jpg"
                alt="hasky"
              />
              <img
                className="imgItem"
                src="/assets/images/merch/ARK06975.jpg"
                alt="hasky"
              />
              <img
                className="imgItem show"
                src="/assets/images/merch/ARK06992.jpg"
                alt="hasky"
              />
              <img
                className="fake"
                src="/assets/images/merch/ARK06964.jpg"
                alt="hasky"
              />
            </div>
            <div className="itemMain">
              <div className="lineTitle">Husky Premium</div>
              <div className="lineColor">цвет: чёрный</div>
              <div className="lineSize">
                <div className=" sizeItem sizeTextItem">10</div>
                <div className=" sizeItem sizeTextItem">11</div>
                <div className=" sizeItem sizeTextItem">11 pro</div>
                <div className=" sizeItem sizeTextItem">11 pro max</div>
                <div className=" sizeItem sizeTextItem">12</div>
                <div className=" sizeItem sizeTextItem">12 pro</div>
                <div className=" sizeItem sizeTextItem">12 pro max</div>
                <div className=" sizeItem sizeTextItem">13</div>
                <div className=" sizeItem sizeTextItem">13 pro</div>
                <div className=" sizeItem sizeTextItem">13 pro max</div>
              </div>
            </div>
          </div>
          <div className="merchItemBox">
            <div className="imgBox">
              <img
                className="imgItem"
                src="/assets/images/merch/ARK06969.jpg"
                alt="Boshki"
              />
              <img
                className="imgItem"
                src="/assets/images/merch/ARK06972.jpg"
                alt="Boshki"
              />
              <img
                className="imgItem show"
                src="/assets/images/merch/ARK06989.jpg"
                alt="Boshki"
              />
              <img
                className="fake"
                src="/assets/images/merch/ARK06969.jpg"
                alt="Boshki"
              />
            </div>
            <div className="itemMain">
              <div className="lineTitle">Boshki PP</div>
              <div className="lineColor">цвет: чёрный</div>
              <div className="lineSize">
                <div className=" sizeItem sizeTextItem">10</div>
                <div className=" sizeItem sizeTextItem">11</div>
                <div className=" sizeItem sizeTextItem">11 pro</div>
                <div className=" sizeItem sizeTextItem">11 pro max</div>
                <div className=" sizeItem sizeTextItem">12</div>
                <div className=" sizeItem sizeTextItem">12 pro</div>
                <div className=" sizeItem sizeTextItem">12 pro max</div>
                <div className=" sizeItem sizeTextItem">13</div>
                <div className=" sizeItem sizeTextItem">13 pro</div>
                <div className=" sizeItem sizeTextItem">13 pro max</div>
              </div>
            </div>
          </div>
        </div>
        <div className="merchBlockTwoItems">
          <div className="merchItemBox">
            <div className="imgBox">
              <img
                className="imgItem"
                src="/assets/images/merch/phone_wrapper/1_Boshki_PP_white.jpg"
                alt="Boshki"
              />
              <img
                className="imgItem"
                src="/assets/images/merch/phone_wrapper/2_Boshki_PP_white.jpg"
                alt="Boshki"
              />
              <img
                className="imgItem show"
                src="/assets/images/merch/phone_wrapper/3_Boshki_PP_white.jpg"
                alt="Boshki"
              />
              <img
                className="fake"
                src="/assets/images/merch/phone_wrapper/1_Boshki_PP_white.jpg"
                alt="Boshki"
              />
            </div>
            <div className="itemMain">
              <div className="lineTitle">Boshki PP</div>
              <div className="lineColor">цвет: белый</div>
              <div className="lineSize">
                <div className=" sizeItem sizeTextItem">10</div>
                <div className=" sizeItem sizeTextItem">11</div>
                <div className=" sizeItem sizeTextItem">11 pro</div>
                <div className=" sizeItem sizeTextItem">11 pro max</div>
                <div className=" sizeItem sizeTextItem">12</div>
                <div className=" sizeItem sizeTextItem">12 pro</div>
                <div className=" sizeItem sizeTextItem">12 pro max</div>
                <div className=" sizeItem sizeTextItem">13</div>
                <div className=" sizeItem sizeTextItem">13 pro</div>
                <div className=" sizeItem sizeTextItem">13 pro max</div>
              </div>
            </div>
          </div>
          <div className="merchItemBox">
            <div className="imgBox">
              <img
                className="imgItem"
                src="/assets/images/merch/phone_wrapper/1_Boshki_original.jpg"
                alt="Boshki"
              />
              <img
                className="imgItem"
                src="/assets/images/merch/phone_wrapper/2_Boshki_original.jpg"
                alt="Boshki"
              />
              <img
                className="imgItem show"
                src="/assets/images/merch/phone_wrapper/3_Boshki_original.jpg"
                alt="Boshki"
              />
              <img
                className="fake"
                src="/assets/images/merch/phone_wrapper/1_Boshki_original.jpg"
                alt="Boshki"
              />
            </div>
            <div className="itemMain">
              <div className="lineTitle">Boshki Original</div>
              <div className="lineColor">цвет: чёрный</div>
              <div className="lineSize">
                <div className=" sizeItem sizeTextItem">10</div>
                <div className=" sizeItem sizeTextItem">11</div>
                <div className=" sizeItem sizeTextItem">11 pro</div>
                <div className=" sizeItem sizeTextItem">11 pro max</div>
                <div className=" sizeItem sizeTextItem">12</div>
                <div className=" sizeItem sizeTextItem">12 pro</div>
                <div className=" sizeItem sizeTextItem">12 pro max</div>
                <div className=" sizeItem sizeTextItem">13</div>
                <div className=" sizeItem sizeTextItem">13 pro</div>
                <div className=" sizeItem sizeTextItem">13 pro max</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .phoneWrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px;
  }

  .phoneWrapper .merchItemBox {
    margin: 30px auto;
    max-width: 580px;
  }

  .phoneWrapper .merchItemBox .imgBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .phoneWrapper .merchItemBox .imgBox img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    opacity: 0;
    transition: opacity 0.3s linear 0s;
  }

  .phoneWrapper .merchItemBox .imgBox img.fake {
    position: relative;
  }

  .phoneWrapper .merchItemBox .imgBox img.show {
    opacity: 1;
    transition: opacity 0.8s linear 0.3s;
  }

  .phoneWrapper .merchItemBox .itemMain .lineTitle {
    margin-top: 20px;
    font-weight: 700;
    font-size: 54px;
  }

  .phoneWrapper .merchItemBox .itemMain .lineColor {
    font-size: 44px;
    font-weight: 500;
  }

  .phoneWrapper .merchItemBox .itemMain .lineSize {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }

  .phoneWrapper .merchItemBox .itemMain .lineSize .sizeItem {
    height: 40px;
    min-width: 30px;
    border: #fff solid 1px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .phoneWrapper .merchItemBox .itemMain .lineSize .sizeItem.sizeTextItem {
    padding: 0 15px;
  }

  .phoneWrapper .merchItemBox .itemMain .lineDescription {
    margin: 20px auto 0 0;
    max-width: 85%;
    font-size: 24px;
  }

  .phoneWrapper .merchBlockTwoItems {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    justify-content: center;
    color: #fff;
  }

  .phoneWrapper .merchBlockOneItems {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    color: #fff;
  }

  @media (max-width: 1200px) {
    .phoneWrapper .merchItemBox {
      max-width: calc(50vw - 22px);
    }
  }

  @media (max-width: 991px) {
    .phoneWrapper .merchItemBox .itemMain .lineTitle {
      margin-top: 20px;
      font-weight: 700;
      font-size: 44px;
    }

    .phoneWrapper .merchItemBox .itemMain .lineColor {
      font-size: 34px;
      font-weight: 500;
    }

    .phoneWrapper .merchItemBox .itemMain .lineSize {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 16px;
    }

    .phoneWrapper .merchItemBox .itemMain .lineSize .sizeItem {
      height: 22px;
      min-width: 30px;
      border: #fff solid 1px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .phoneWrapper .merchItemBox .itemMain .lineSize .sizeItem.sizeTextItem {
      padding: 0 15px;
    }

    .phoneWrapper .merchItemBox .itemMain .lineDescription {
      margin: 20px auto 0 0;
      max-width: 85%;
      font-size: 20px;
    }
  }

  @media (max-width: 767px) {
    .phoneWrapper .merchItemBox {
      max-width: none;
      margin: 30px 5vw;
    }

    .phoneWrapper .merchBlockTwoItems {
      grid-template-columns: 1fr;
    }
  }
`;

export default PhoneWrapper;
