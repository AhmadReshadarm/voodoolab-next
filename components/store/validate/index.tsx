import styled from 'styled-components';
import InvaliedValidate from './invaliedValidate';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchBarcode } from 'redux/slicers/store/barcodeSlicer';
import { useEffect, useState } from 'react';
import { TBarcodeState } from 'redux/types';

const ValidateComponent = () => {
  // after 11 time check the page changes to ivalied validate and will never revert
  const { error } = useAppSelector<TBarcodeState>((state) => state.barcode);
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  const handleBarcodeCheck = (code: string) => {
    dispatch(fetchBarcode({ code }));
  };
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <Wrapper>
      <div className="ValidatePage_ValidatePage__3OAyc">
        <div className="ValidatePage_container__2UMcj">
          <div className="Validate_Validate__3vIsc Validate_active__cljkI">
            <div className="Validate_logo__17Wjb">
              <img src="/static/media/husky-logo.5e653688.png" alt="logoImg" />
            </div>
            <div
              // onSubmit={(evt) => evt.preventDefault()}
              className="Validate_form__23dZX"
            >
              <div className="Validate_inputBox__MHizk">
                <input
                  type="text"
                  placeholder="Введите код с упаковки"
                  maxLength={11}
                  value={input}
                  onChange={(evt) => setInput(evt.target.value)}
                />
              </div>
              <div className="Validate_responseText__32b_A">
                {/*  <span className="Validate_validate__3_cQv">Вы купили оригинальную жидкость</span> this is the success response */}
                {/* <span className="Validate_used__2pIPc">Данный код уже проверяли</span> the repeat response */}
                <span style={{ color: 'red' }}>{error}</span>
              </div>
              <button
                onClick={() => handleBarcodeCheck(input)}
                className="Validate_validateBtn__c9Bcc Validate_disable__2vcgc"
              >
                <span>Проверить</span>
              </button>
            </div>
            <div className="Validate_footer__3apOM">
              <button
                onClick={() => handleBarcodeCheck(input)}
                style={{ backgroundColor: 'red' }}
              >
                <span style={{ color: 'white' }}>Проверить</span>
              </button>
              {/* <div class="Validate_feedBack__ZkslP"><span class="">Если ваш код не проходит валидацию, пожалуйста, сообщите это нам в </span><span class="Validate_feedBackBtn__12orc"> форме обратной связи. </span></div> this is the repeat resonse part */}
              <div className="Validate_hint__21gEh">
                <span>Каждый код можно проверить один раз</span>
              </div>
              <div className="Validate_backBtnBox__2uC_u">
                <a href="/" className="Validate_backBtn__2KGF6">
                  {' '}
                  Перейти на сайт{' '}
                </a>
              </div>
            </div>
          </div>
          {/* --------------------- failuer form ----------------------- */}
          {/* <InvaliedValidate /> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* latin-ext */
  @font-face {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wdhyzbi.woff2)
      format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Bebas';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw0aXpsog.woff2)
      format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw9aXpsog.woff2)
      format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw2aXpsog.woff2)
      format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw3aXpsog.woff2)
      format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  .ValidatePage_ValidatePage__3OAyc {
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.37), #131313),
      url(/static/media/validateBg.35163756.jpg);
    background-size: cover;
    background-position: 50% 50%;
    mix-blend-mode: normal;
  }

  .ValidatePage_ValidatePage__3OAyc .ValidatePage_container__2UMcj {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Validate_Validate__3vIsc {
    opacity: 0;
    position: absolute;
    margin: 5px;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    max-width: 340px;
    pointer-events: none;
    transition: all 0s linear 0s;
  }

  .Validate_Validate__3vIsc.Validate_active__cljkI {
    position: relative;
    pointer-events: all;
    opacity: 1;
    transition: all 0.5s linear 0s;
  }

  .Validate_Validate__3vIsc .Validate_logo__17Wjb {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    height: 120px;
  }

  .Validate_Validate__3vIsc .Validate_logo__17Wjb img {
    width: 80%;
    object-fit: contain;
  }

  .Validate_Validate__3vIsc .Validate_logo__17Wjb svg {
    fill-rule: evenodd;
  }

  .Validate_Validate__3vIsc .Validate_logo__17Wjb svg path,
  .Validate_Validate__3vIsc .Validate_logo__17Wjb svg path:first-child {
    fill: #e7e7e7;
  }

  .Validate_Validate__3vIsc .Validate_form__23dZX {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Validate_Validate__3vIsc .Validate_form__23dZX .Validate_inputBox__MHizk {
    height: 40px;
    max-width: 270px;
    width: 100%;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_inputBox__MHizk
    input {
    padding-top: 2px;
    height: 100%;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    color: #444;
    font-family: bebas, sans-serif !important;
    letter-spacing: 2px;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_inputBox__MHizk
    input::placeholder {
    font-family: bebas, sans-serif !important;
    letter-spacing: 0;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_responseText__32b_A {
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 5px;
    text-align: center;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_responseText__32b_A
    .Validate_validate__3_cQv {
    color: #00ff38;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_responseText__32b_A
    .Validate_used__2pIPc {
    color: #fff500;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_responseText__32b_A
    .Validate_error__3TJ1B,
  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_responseText__32b_A
    .Validate_fake__18wax {
    color: #ff1f00;
  }

  .Validate_Validate__3vIsc .Validate_form__23dZX .Validate_validateBtn__c9Bcc {
    font-family: montserrat, sans-serif !important;
    height: 50px;
    max-width: 140px;
    width: 100%;
    background: linear-gradient(177.1deg, #ef7e58 4.45%, #993a2f 92.66%);
    mix-blend-mode: normal;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_validateBtn__c9Bcc
    span {
    color: #fff;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_validateBtn__c9Bcc.Validate_disable__2vcgc {
    pointer-events: none;
    background: linear-gradient(177.1deg, #d5d5d5 4.45%, #6e6e6e 92.66%);
    opacity: 0.8;
  }

  .Validate_Validate__3vIsc .Validate_footer__3apOM {
    position: relative;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    color: #a4a4a4;
  }

  .Validate_Validate__3vIsc .Validate_footer__3apOM .Validate_feedBack__ZkslP {
    position: absolute;
    top: 0;
    margin-top: 20px;
  }

  .Validate_Validate__3vIsc
    .Validate_footer__3apOM
    .Validate_feedBack__ZkslP
    .Validate_feedBackBtn__12orc {
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding-bottom: 1px;
    background: linear-gradient(270deg, #fff, #fff);
    background-position: 0 100%;
    background-size: 100% 1px;
    background-repeat: repeat-x;
  }

  .Validate_Validate__3vIsc .Validate_footer__3apOM .Validate_hint__21gEh {
    padding-top: 100px;
    font-size: 14px;
  }

  .Validate_Validate__3vIsc
    .Validate_footer__3apOM
    .Validate_backBtnBox__2uC_u {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .Validate_Validate__3vIsc
    .Validate_footer__3apOM
    .Validate_backBtnBox__2uC_u
    .Validate_backBtn__2KGF6 {
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding-bottom: 1px;
    background: linear-gradient(270deg, #fff, #fff);
    background-position: 0 100%;
    background-size: 100% 1px;
    background-repeat: repeat-x;
  }

  .FeedBack_FeedBack__3g_lX {
    opacity: 0;
    position: absolute;
    margin: 5px;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    max-width: 340px;
    pointer-events: none;
    transition: all 0s linear 0s;
    overflow: hidden;
  }

  .FeedBack_FeedBack__3g_lX.FeedBack_active__23Mwq {
    position: relative;
    pointer-events: all;
    opacity: 1;
    transition: all 0.5s linear 0s;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_used__292fX {
    font-size: 20px;
    font-weight: 700;
    color: #fff500;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_fake__1vOUF {
    color: #ff1f00;
    font-size: 20px;
    font-weight: 700;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_logo__30-6v {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_logo__30-6v img {
    width: 80%;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_title__bYdTc {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_code__2tiHq {
    max-width: 270px;
    width: 100%;
    height: 46px;
    background: hsla(0, 0%, 90.2%, 0.63);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: bebas, sans-serif !important;
    letter-spacing: 2px;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_code__2tiHq span {
    color: #8a1f12;
    font-size: 28px;
    font-weight: 700;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_formTitle__3q-3i {
    margin-top: 40px;
    color: #d3d3d3;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_city__2nQ3-,
  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_store__ebmrV {
    margin-top: 20px;
    height: 36px;
    max-width: 270px;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 18px;
    color: #444;
    font-family: bebas, sans-serif !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_store__ebmrV input {
    text-align: center;
    width: 100%;
    height: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 18px;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_store__ebmrV
    input:focus {
    text-align: start;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_phone__2EGVM {
    position: relative;
    margin-top: 20px;
    height: 36px;
    max-width: 270px;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 18px;
    color: #444;
    font-family: bebas, sans-serif !important;
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_phone__2EGVM
    .FeedBack_phoneBox__1VMXD {
    display: flex;
    overflow: hidden;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_phone__2EGVM
    .FeedBack_phoneBox__1VMXD
    .FeedBack_phoneMask__3QCy0 {
    height: 100%;
    width: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 7px;
    color: #6c6c6c;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_phone__2EGVM
    .FeedBack_phoneBox__1VMXD
    input {
    width: 100%;
    text-align: center;
    flex: 1 1;
    height: 100%;
    background: #e6e6e6;
    font-size: 18px;
    margin: 0;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_inputBox__207C0 {
    z-index: 1;
    height: 40px;
    max-width: 270px;
    width: 100%;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_inputBox__207C0
    input {
    padding-top: 2px;
    height: 100%;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    color: #181818;
    font-family: bebas, sans-serif !important;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_inputBox__207C0
    .FeedBack_notCountry__1Qrz4 {
    color: red;
    cursor: default;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_responseText__cAdv7 {
    font-family: bebas, sans-serif !important;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 5px;
    text-align: center;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_responseText__cAdv7
    .FeedBack_validate__1L9XL {
    color: #00ff38;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_responseText__cAdv7
    .FeedBack_used__292fX {
    color: #fff500;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_responseText__cAdv7
    .FeedBack_error__KS_Qs,
  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_responseText__cAdv7
    .FeedBack_fake__1vOUF {
    color: #ff1f00;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_form__2Srd4 .FeedBack_validateBtn__2iy3W {
    height: 50px;
    max-width: 140px;
    width: 100%;
    background: linear-gradient(177.1deg, #ef7e58 4.45%, #993a2f 92.66%);
    mix-blend-mode: normal;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_validateBtn__2iy3W
    span {
    color: #fff;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_footer__2UfhK {
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    color: #a4a4a4;
  }

  .FeedBack_FeedBack__3g_lX .FeedBack_footer__2UfhK .FeedBack_feedBack__yPg28 {
    margin-top: 29px;
    margin-bottom: 20px;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_footer__2UfhK
    .FeedBack_feedBack__yPg28
    .FeedBack_feedBackBtn__1XBgJ {
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding-bottom: 1px;
    background: linear-gradient(270deg, #fff, #fff);
    background-position: 0 100%;
    background-size: 100% 1px;
    background-repeat: repeat-x;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_footer__2UfhK
    .FeedBack_backBtnBox__1JYpP {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .FeedBack_FeedBack__3g_lX
    .FeedBack_footer__2UfhK
    .FeedBack_backBtnBox__1JYpP
    .FeedBack_backBtn__2go4j {
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding-bottom: 1px;
    background: linear-gradient(270deg, #fff, #fff);
    background-position: 0 100%;
    background-size: 100% 1px;
    background-repeat: repeat-x;
  }

  .FeedBack_CountryChecked__3-jDl {
    z-index: 2;
    position: relative;
    margin-top: 20px;
    height: 36px;
    max-width: 270px;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 18px;
    color: #444;
    font-family: bebas, sans-serif !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FeedBack_CountryChecked__3-jDl .FeedBack_backPlace__2llJf {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(19, 19, 19, 0.56);
    pointer-events: none;
  }

  .FeedBack_CountryChecked__3-jDl .FeedBack_listCountry__3NjZp {
    position: absolute;
    z-index: 2;
    width: 270px;
    top: 40px;
    overflow: hidden;
    border-radius: 10px;
    background: #e6e6e6;
    display: flex;
    box-shadow: 1px 1px 4px #000;
  }

  .FeedBack_CountryChecked__3-jDl
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(100% + 20px);
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .FeedBack_CountryChecked__3-jDl
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb {
    min-height: 40px;
    cursor: pointer;
  }

  .FeedBack_CountryChecked__3-jDl
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb
    .FeedBack_inputCountryText__BWrp5 {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .FeedBack_CountryChecked__3-jDl
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb
    .FeedBack_inputCountrySubText__1Gsav {
    height: 20px;
    width: 100%;
    white-space: nowrap;
    font-size: 12px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FeedBack_CountryChecked__3-jDl
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb:hover
    .FeedBack_inputCountryText__BWrp5 {
    background-color: #cbcbcb;
  }

  .FeedBack_CityChecked__PiMd_ {
    z-index: 1;
    position: relative;
    margin-top: 22px;
    height: 36px;
    max-width: 270px;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 18px;
    color: #444;
    font-family: bebas, sans-serif !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FeedBack_CityChecked__PiMd_ .FeedBack_backPlace__2llJf {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(19, 19, 19, 0.56);
    pointer-events: none;
  }

  .FeedBack_CityChecked__PiMd_ .FeedBack_listCountry__3NjZp {
    position: absolute;
    z-index: 2;
    width: 270px;
    top: 40px;
    overflow: hidden;
    border-radius: 10px;
    background: #e6e6e6;
    display: flex;
    box-shadow: 1px 1px 4px #000;
  }

  .FeedBack_CityChecked__PiMd_
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(100% + 20px);
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .FeedBack_CityChecked__PiMd_
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb {
    min-height: 40px;
    cursor: pointer;
  }

  .FeedBack_CityChecked__PiMd_
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb
    .FeedBack_inputCountryText__BWrp5 {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .FeedBack_CityChecked__PiMd_
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb
    .FeedBack_inputCountrySubText__1Gsav {
    height: 20px;
    width: 100%;
    white-space: nowrap;
    font-size: 12px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FeedBack_CityChecked__PiMd_
    .FeedBack_listCountry__3NjZp
    .FeedBack_listCountryContent__16ixv
    .FeedBack_countryItem__2ofFb:hover
    .FeedBack_inputCountryText__BWrp5 {
    background-color: #cbcbcb;
  }
`;

export default ValidateComponent;
