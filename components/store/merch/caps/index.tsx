import styled from 'styled-components';

const Caps = () => {
  return (
    <Wrapper>
      <div className="caps">
        <div className="merchBlockOneItems">
          <div className="merchItemBox">
            <div className="imgBox">
              <img
                className="imgItem"
                src="/assets/images/merch/cap/1_cap_hasky_prem.jpg"
                alt="hasky"
              />
              <img
                className="imgItem show"
                src="/assets/images/merch/cap/2_cap_hasky_prem.jpg"
                alt="hasky"
              />
              <img
                className="imgItem"
                src="/assets/images/merch/cap/3_cap_hasky_prem.jpg"
                alt="hasky"
              />
              <img
                className="fake"
                src="/assets/images/merch/cap/1_cap_hasky_prem.jpg"
                alt="hasky"
              />
            </div>
            <div className="itemMain">
              <div className="lineTitle">husky premium</div>
              <div className="lineColor">цвет: чёрный</div>
              <div className="lineSize">
                <div className="sizeItem sizeTextItem">Universal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .caps {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .caps .merchItemBox {
    margin: 30px auto;
    max-width: 580px;
  }

  .caps .merchItemBox .imgBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .caps .merchItemBox .imgBox img {
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

  .caps .merchItemBox .imgBox img.fake {
    position: relative;
  }

  .caps .merchItemBox .imgBox img.show {
    opacity: 1;
    transition: opacity 0.8s linear 0.3s;
  }

  .caps .merchItemBox .itemMain .lineTitle {
    margin-top: 20px;
    font-weight: 700;
    font-size: 54px;
  }

  .caps .merchItemBox .itemMain .lineColor {
    font-size: 44px;
    font-weight: 500;
  }

  .caps .merchItemBox .itemMain .lineSize {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 24px;
  }

  .caps .merchItemBox .itemMain .lineSize .sizeItem {
    height: 50px;
    min-width: 70px;
    border: #fff solid 1px;
    font-size: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .caps .merchItemBox .itemMain .lineSize .sizeItem.sizeTextItem {
    padding: 0 15px;
  }

  .caps .merchItemBox .itemMain .lineDescription {
    margin: 20px auto 0 0;
    max-width: 85%;
    font-size: 24px;
  }

  .caps .merchBlockTwoItems {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    justify-content: center;
    color: #fff;
  }

  .caps .merchBlockOneItems {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    color: #fff;
  }

  @media (max-width: 1200px) {
    .caps .merchItemBox {
      max-width: calc(50vw - 22px);
    }
  }

  @media (max-width: 991px) {
    .caps .merchItemBox .itemMain .lineTitle {
      margin-top: 20px;
      font-weight: 700;
      font-size: 44px;
    }

    .caps .merchItemBox .itemMain .lineColor {
      font-size: 34px;
      font-weight: 500;
    }

    .caps .merchItemBox .itemMain .lineSize {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 16px;
    }

    .caps .merchItemBox .itemMain .lineSize .sizeItem {
      height: 22px;
      min-width: 30px;
      border: #fff solid 1px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .caps .merchItemBox .itemMain .lineSize .sizeItem.sizeTextItem {
      padding: 0 15px;
    }

    .caps .merchItemBox .itemMain .lineDescription {
      margin: 20px auto 0 0;
      max-width: 85%;
      font-size: 20px;
    }
  }

  @media (max-width: 767px) {
    .caps .merchItemBox {
      max-width: none;
      margin: 30px 5vw;
    }

    .caps .merchBlockTwoItems {
      grid-template-columns: 1fr;
    }
  }
`;

export default Caps;
