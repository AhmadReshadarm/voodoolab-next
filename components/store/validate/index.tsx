import styled from 'styled-components';
import InvaliedValidate from './invaliedValidate';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { clearError, fetchBarcode } from 'redux/slicers/store/barcodeSlicer';
import { useEffect, useState } from 'react';
import { TBarcodeState } from 'redux/types';

const ValidateComponent = () => {
  // after 11 time check the page changes to ivalied validate and will never revert unless page is refreshed
  const { error } = useAppSelector<TBarcodeState>((state) => state.barcode);
  const [input, setInput] = useState('');
  const [lengthError, setLenghtError] = useState(false);
  const dispatch = useAppDispatch();
  const handleBarcodeCheck = (code: string) => {
    dispatch(fetchBarcode({ code }));
  };

  const [isSecondForm, setSecondForm] = useState(false);
  useEffect(() => {
    if (error == 404) {
      setSecondForm(true);
    }
    if (error == 429) {
      setSecondForm(true);
    }
    if (error == null) {
      setSecondForm(false);
    }
  }, [error]);
  return (
    <Wrapper>
      <ValidatePage>
        <Container>
          <ValidationWrapper
            className={`${!isSecondForm ? 'Validate_active__cljkI' : ''}`}
          >
            <ValidateLogoWrapper>
              <img src="/static/media/husky-logo.5e653688.png" alt="logoImg" />
            </ValidateLogoWrapper>
            <ValidateFormWrapper>
              <ValidateInputBoxWrapper>
                <input
                  type="text"
                  placeholder="Введите код с упаковки"
                  // maxLength={11}
                  value={input}
                  onChange={(evt) => {
                    dispatch(clearError());
                    setInput(evt.target.value.slice(0, 11).toUpperCase());
                    if (evt.target.value.length >= 12) {
                      setLenghtError(true);
                    } else {
                      setLenghtError(false);
                    }
                  }}
                />
              </ValidateInputBoxWrapper>
              <ValidateResponseTextWrapper>
                {error == 200 || error == 203 ? (
                  <span className="Validate_validate__3_cQv">
                    Вы купили оригинальную жидкость
                  </span>
                ) : (
                  ''
                )}
                {error == 403 && !lengthError && input.length != 0 ? (
                  <span className="Validate_used__2pIPc">
                    Данный код уже проверяли
                  </span>
                ) : (
                  ''
                )}
                {lengthError ? (
                  <span className="Validate_error__3TJ1B">
                    Код не может быть более 11 символов
                  </span>
                ) : (
                  ''
                )}
              </ValidateResponseTextWrapper>
              <ValidateValidateBtnWrapper
                onClick={() => handleBarcodeCheck(input)}
                className={`${
                  input.length < 11 ? 'Validate_disable__2vcgc' : ''
                }`}
                disabled={input.length < 11 ? true : false}
              >
                <span>Проверить</span>
              </ValidateValidateBtnWrapper>
            </ValidateFormWrapper>

            <ValidateFooterWrapper>
              {/* -------------- this part apears when the code is orignal and already used ----------*/}
              {error == 403 ? (
                <ValidateFeedBackWrapper>
                  <span>
                    Если ваш код не проходит валидацию, пожалуйста, сообщите это
                    нам в
                  </span>
                  <ValidateFeedBackBtnWrapper
                    onClick={() => setSecondForm(true)}
                  >
                    форме обратной связи.
                  </ValidateFeedBackBtnWrapper>
                </ValidateFeedBackWrapper>
              ) : (
                ''
              )}
              {/* ------------- this is the repeat resonse part end ----------------- */}
              <ValidateHintWrapper>
                <span>Каждый код можно проверить один раз</span>
              </ValidateHintWrapper>
              <ValidateBackBtnBoxWrapper>
                <ValidateBackBtnWrapper href="/">
                  Перейти на сайт
                </ValidateBackBtnWrapper>
              </ValidateBackBtnBoxWrapper>
            </ValidateFooterWrapper>
          </ValidationWrapper>
          {/* --------------------- failuer form ----------------------- */}
          <InvaliedValidate isSecondForm={isSecondForm} inputCode={input} />
        </Container>
      </ValidatePage>
    </Wrapper>
  );
};

const ValidatePage = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.37), #131313),
    url(/static/media/validateBg.35163756.jpg);
  background-size: cover;
  background-position: 50% 50%;
  mix-blend-mode: normal;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ValidationWrapper = styled.div`
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
`;

const ValidateLogoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  height: 120px;
  img {
    width: 80%;
    object-fit: contain;
  }
  svg {
    fill-rule: evenodd;
  }
  svg path,
  svg path:first-child {
    fill: #e7e7e7;
  }
`;

const ValidateFormWrapper = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Validate_disable__2vcgc {
    pointer-events: none;
    background: linear-gradient(177.1deg, #d5d5d5 4.45%, #6e6e6e 92.66%);
    opacity: 0.8;
  }
`;

const ValidateInputBoxWrapper = styled.div`
  height: 40px;
  max-width: 270px;
  width: 100%;
  input {
    padding-top: 2px;
    height: 100%;
    width: 100%;
    background: #e6e6e6;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    color: #444;
    font-family: BebasSpecial, sans-serif;
    letter-spacing: 2px;
  }
  input::placeholder {
    font-family: BebasSpecial, sans-serif;
    letter-spacing: 0;
  }
`;

const ValidateResponseTextWrapper = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 5px;
  text-align: center;
  .Validate_validate__3_cQv {
    color: #00ff38;
  }
  .Validate_used__2pIPc {
    color: #fff500;
  }
  .Validate_fake__18wax {
    color: #ff1f00;
  }
  .Validate_error__3TJ1B {
    color: #ff1f00;
  }
`;

const ValidateValidateBtnWrapper = styled.button`
  font-family: montserrat, sans-serif;
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
  span {
    color: #fff;
  }
`;

const ValidateFeedBackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 12%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 75%;
`;

const ValidateFeedBackBtnWrapper = styled.span`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding-bottom: 1px;
  background: linear-gradient(270deg, #fff, #fff);
  background-position: 0 100%;
  background-size: 100% 1px;
  background-repeat: repeat-x;
`;

const ValidateFooterWrapper = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  color: #a4a4a4;
`;

const ValidateHintWrapper = styled.div`
  padding-top: 100px;
  font-size: 14px;
`;

const ValidateBackBtnBoxWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ValidateBackBtnWrapper = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #fff;
  padding-bottom: 1px;
  background: linear-gradient(270deg, #fff, #fff);
  background-position: 0 100%;
  background-size: 100% 1px;
  background-repeat: repeat-x;
`;
const Wrapper = styled.div`
  font-family: BebasSpecial, sans-serif;
  button,
  input,
  textarea {
    font-family: inherit;
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

  .Validate_active__cljkI {
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
    font-family: BebasSpecial, sans-serif;
    letter-spacing: 2px;
  }

  .Validate_Validate__3vIsc
    .Validate_form__23dZX
    .Validate_inputBox__MHizk
    input::placeholder {
    font-family: BebasSpecial, sans-serif;
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
    font-family: montserrat, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
    font-family: BebasSpecial, sans-serif;
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
  .FeedBack_FeedBack__3g_lX
    .FeedBack_form__2Srd4
    .FeedBack_phone__2EGVM
    .FeedBack_phoneBox__1VMXD
    input {
    border: none;
  }
`;

export default ValidateComponent;
