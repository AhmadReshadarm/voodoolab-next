import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { TBarcodeState, TGlobalUIState } from 'redux/types';
import { countryData } from './helpers';
import { outsideClickListnerRedux } from 'components/store/storeLayout/helpers';
import {
  changeSearchDisplayState,
  changeSearchFormState,
} from 'redux/slicers/store/globalUISlicer';
import { PopupDisplay } from 'components/store/storeLayout/constants';
import InputMask from 'react-input-mask';
const InvaliedValidate = ({ isSecondForm, inputCode }) => {
  const { error } = useAppSelector<TBarcodeState>((state) => state.barcode);
  const [cities, setCities]: [any, any] = useState([]);
  const [country, setCountry]: [any, any] = useState([]);
  const [activateCounter, setActivateCountery] = useState(false);
  const [countryInput, setCounteryInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [activatecity, setActivateCity] = useState(false);
  const [seletedCountryIndex, setSeletedCountryIndex] = useState(null);
  useEffect(() => {
    setCountry(countryData);
  }, []);
  useEffect(() => {
    if (seletedCountryIndex !== null) {
      setCities(countryData[seletedCountryIndex].cities);
    }
  }, [seletedCountryIndex]);

  const [phone, setPhone] = useState('');
  const [clickedSubmit, setClickedSubmit] = useState(false);
  const [shop, setShop] = useState('');
  // ------------------------ UI hooks ---------------------------
  const { isSearchFormActive, searchDisplay } = useAppSelector<TGlobalUIState>(
    (state) => state.globalUI,
  );
  const dispatch = useAppDispatch();
  const [searchWrapperRef, setsearchWrapperRef] = useState(null);
  const [searchButtonRef, setSearchButtonRef] = useState(null);
  const [listening, setListening] = useState(false);
  const searchWrapperNode = useCallback((node: any) => {
    setsearchWrapperRef(node);
  }, []);
  const searchButtonWrapperNode = useCallback((node: any) => {
    setSearchButtonRef(node);
  }, []);

  useEffect(
    outsideClickListnerRedux(
      listening,
      setListening,
      searchWrapperRef,
      searchButtonRef,
      dispatch,
      changeSearchFormState,
      changeSearchDisplayState,
    ),
  );

  return (
    <>
      <div
        className={`${
          !isSecondForm
            ? 'FeedBack_FeedBack__3g_lX'
            : 'FeedBack_FeedBack__3g_lX FeedBack_active__23Mwq'
        }`}
      >
        <div className="FeedBack_title__bYdTc">
          {error == 404 ? (
            <div className="FeedBack_fake__1vOUF">Неоригинальный товар</div>
          ) : (
            ''
          )}
          {error == 403 || error == 429 ? (
            <div className="FeedBack_used__292fX">Данный код уже проверяли</div>
          ) : (
            ''
          )}
        </div>
        <form className="FeedBack_form__2Srd4">
          <div className="FeedBack_code__2tiHq">
            <span>{inputCode}</span>
          </div>
          <div className="FeedBack_formTitle__3q-3i">Обратная связь</div>
          <div className="FeedBack_CountryChecked__3-jDl">
            <div id="CountryInputBox" className="FeedBack_inputBox__207C0">
              <input
                ref={searchButtonWrapperNode}
                onClick={() => {
                  // setActivateCountery(!activateCounter)
                  dispatch(changeSearchFormState(true));
                  dispatch(changeSearchDisplayState(PopupDisplay.Flex));
                }}
                onChange={(evt) => {
                  setCounteryInput(evt.target.value);
                  evt.target.value == '' ? setSeletedCountryIndex(null) : '';
                  setCountry(
                    evt.target.value == ''
                      ? countryData
                      : [
                          !countryData.find((country) =>
                            country.country
                              .toLowerCase()
                              .match(evt.target.value.toLowerCase()),
                          )
                            ? { country: evt.target.value, error: true }
                            : countryData.find((country) =>
                                country.country
                                  .toLowerCase()
                                  .match(evt.target.value.toLowerCase()),
                              ),
                        ],
                  );
                }}
                type="text"
                placeholder="Страна"
                value={countryInput}
              />
            </div>

            <div
              ref={searchWrapperNode}
              id="CountryList"
              className="FeedBack_listCountry__3NjZp"
            >
              <div className="FeedBack_listCountryContent__16ixv">
                {isSearchFormActive
                  ? // activateCounter
                    !country[0].error
                    ? country.map((country, index) => {
                        return (
                          <>
                            <div
                              key={`${index}-${country.country}`}
                              onClick={() => {
                                setSeletedCountryIndex(index);
                                setCounteryInput(country.country);
                                // setActivateCountery(false);
                                dispatch(changeSearchFormState(false));
                                dispatch(
                                  changeSearchDisplayState(PopupDisplay.None),
                                );
                              }}
                              className="FeedBack_countryItem__2ofFb"
                            >
                              <div className="FeedBack_inputCountryText__BWrp5">
                                {country.country}
                              </div>
                            </div>
                          </>
                        );
                      })
                    : country.map((country, index) => {
                        return (
                          <>
                            <div
                              key={`${index}-${country.country}`}
                              className="FeedBack_countryItem__2ofFb"
                            >
                              <div className="FeedBack_inputCountrySubText__1Gsav">
                                {`(указать эту страну)`}
                              </div>
                              <div className="FeedBack_inputCountryText__BWrp5">
                                {country.country}
                              </div>
                            </div>
                          </>
                        );
                      })
                  : ''}
              </div>
            </div>
          </div>
          <div className="FeedBack_CityChecked__PiMd_">
            <div id="CityInputBox" className="FeedBack_inputBox__207C0">
              <input
                className={
                  seletedCountryIndex == null
                    ? 'FeedBack_notCountry__1Qrz4'
                    : ''
                }
                type="text"
                placeholder="Город"
                value={cityInput}
                onClick={() => {
                  if (seletedCountryIndex == null) {
                    setCityInput('Укажите страну');
                    setActivateCity(false);
                  }
                  if (seletedCountryIndex !== null) {
                    setActivateCity(!activatecity);
                  }
                }}
                onChange={(evt) => {
                  setCityInput(evt.target.value);
                  if (seletedCountryIndex !== null) {
                    setCities(
                      evt.target.value == ''
                        ? countryData[seletedCountryIndex].cities
                        : [
                            !countryData[seletedCountryIndex].cities.find(
                              (city) =>
                                city
                                  .toLowerCase()
                                  .match(evt.target.value.toLowerCase()),
                            )
                              ? 'not found'
                              : countryData[seletedCountryIndex].cities.find(
                                  (city) =>
                                    city
                                      .toLowerCase()
                                      .match(evt.target.value.toLowerCase()),
                                ),
                          ],
                    );
                  }
                }}
              />
            </div>
            <div id="CityList" className="FeedBack_listCountry__3NjZp">
              <div className="FeedBack_listCountryContent__16ixv">
                {activatecity && seletedCountryIndex !== null
                  ? cities[0] == 'not found'
                    ? cities.map((city, index) => {
                        return (
                          <>
                            <div
                              key={`${index}-${city}`}
                              className="FeedBack_countryItem__2ofFb"
                            >
                              <div className="FeedBack_inputCountrySubText__1Gsav">
                                {`(указать этот город)`}
                              </div>
                              <div className="FeedBack_inputCountryText__BWrp5">
                                {cityInput}
                              </div>
                            </div>
                          </>
                        );
                      })
                    : cities.map((city, index) => {
                        return (
                          <>
                            <div
                              key={`${index}-${city}`}
                              className="FeedBack_countryItem__2ofFb"
                              onClick={() => {
                                setCityInput(city);
                                setActivateCity(false);
                              }}
                            >
                              <div className="FeedBack_inputCountryText__BWrp5">
                                {city}
                              </div>
                            </div>
                          </>
                        );
                      })
                  : ''}
              </div>
            </div>
          </div>
          <div className="FeedBack_store__ebmrV">
            <input
              type="text"
              maxLength={128}
              placeholder="Магазин"
              value={shop}
              onChange={(evt) => setShop(evt.target.value)}
            />
          </div>
          <div className="FeedBack_phone__2EGVM">
            <div className="FeedBack_phoneBox__1VMXD">
              {/* <input type="text" value="+7 " /> */}
              <InputMask
                mask="+7 (999) 999 99 99"
                value={phone}
                disabled={false}
                maskChar=" "
                onChange={(evt) => setPhone(evt.target.value)}
                style={{ padding: '16.5px 14px' }}
              >
                {() => <input placeholder="номер телефона" type="text" />}
              </InputMask>
            </div>
          </div>
          <div className="FeedBack_responseText__cAdv7">
            {/* {
            countryInput == '' && clickedSubmit ? (
              <span className="FeedBack_error__KS_Qs">
                Не заполнено поле страна
              </span>
            ) : (
              ''
            )}
            {cityInput == '' && clickedSubmit ? (
              <span className="FeedBack_error__KS_Qs">
                Не заполнено поле город
              </span>
            ) : (
              ''
            )}
            {shop == '' && clickedSubmit ? (
              <span className="FeedBack_error__KS_Qs">
                Не заполнено поле магазин
              </span>
            ) : (
              ''
            )}
            {phone == '' && clickedSubmit ? (
              <span className="FeedBack_error__KS_Qs">
                Не заполнено поле телефон
              </span>
            ) : (
              ''
            )} */}
          </div>
          <button
            onClick={(evt) => {
              if (
                countryInput == '' ||
                cityInput == '' ||
                phone == '' ||
                shop == ''
              ) {
                evt.preventDefault();
                setClickedSubmit(true);
              }
            }}
            className="FeedBack_validateBtn__2iy3W"
            // disabled={
            //   countryInput == '' || cityInput == '' || phone == '' || shop == ''
            //     ? true
            //     : false
            // }
          >
            <span>Отправить</span>
          </button>
        </form>
        <div className="FeedBack_footer__2UfhK">
          <div className="FeedBack_backBtnBox__1JYpP">
            <a href="/" className="FeedBack_backBtn__2go4j">
              {' '}
              Перейти на сайт{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvaliedValidate;
