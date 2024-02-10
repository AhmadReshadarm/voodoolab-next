const InvaliedValidate = () => {
  return (
    <>
      <div className="FeedBack_FeedBack__3g_lX FeedBack_active__23Mwq">
        <div className="FeedBack_title__bYdTc">
          <div className="FeedBack_fake__1vOUF">Неоригинальный товар</div>
        </div>
        <form className="FeedBack_form__2Srd4">
          <div className="FeedBack_code__2tiHq">
            <span>SDFSDFSDDSF</span>
            {/*    ^ here is the checked code which will be replace with a variable */}
          </div>
          <div className="FeedBack_formTitle__3q-3i">Обратная связь</div>
          <div className="FeedBack_CountryChecked__3-jDl">
            {/* <div className="FeedBack_backPlace__2llJf"></div> */}
            <div id="CountryInputBox" className="FeedBack_inputBox__207C0">
              <input type="text" placeholder="Страна" value="" />
            </div>
            {/*   
                  <div id="CountryList" className="FeedBack_listCountry__3NjZp"><div className="FeedBack_listCountryContent__16ixv"><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Россия</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Украина</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Казахстан</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Азербайджан</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Беларусь</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Грузия</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Кыргызстан</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Узбекистан</div></div></div></div>
                  */}
          </div>
          <div className="FeedBack_CityChecked__PiMd_">
            {/* <div className="FeedBack_backPlace__2llJf"></div> */}
            <div id="CityInputBox" className="FeedBack_inputBox__207C0">
              <input
                className="FeedBack_notCountry__1Qrz4"
                type="text"
                placeholder="Город"
                value=""
              />
            </div>
            {/* <div id="CityList" className="FeedBack_listCountry__3NjZp"><div className="FeedBack_listCountryContent__16ixv"><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Виловатово</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Волжск</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Звенигово</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Знаменский</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Йошкар-Ола</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Кельмаксола</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Килемары</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Козьмодемьянск</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Красногорский (Республика Марий Эл)</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Краснооктябрьский</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Куженер</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Мари-Турек</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Медведево</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Морки</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Новый Торъял</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Оршанка</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Параньга</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Приволжский (Республика Марий Эл)</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Сернур</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Советский (Республика Марий Эл)</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Юрино</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Агрыз</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Азнакаево</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Айша</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Аксубаево</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Актаныш</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Актюбинский</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Алексеевское</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Альметьевск</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Апастово</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Арск</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Бавлы</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Базарные Матаки</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Балтаси</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Бетьки</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Богатые Сабы</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Болгар</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Большая Атня</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Большие Кайбицы</div></div><div className="FeedBack_countryItem__2ofFb"><div className="FeedBack_inputCountryText__BWrp5">Большие Тарханы</div></div></div></div> */}
          </div>
          <div className="FeedBack_store__ebmrV">
            <input type="text" maxLength={128} placeholder="Магазин" value="" />
          </div>
          <div className="FeedBack_phone__2EGVM">
            <div className="FeedBack_phoneBox__1VMXD"></div>
          </div>
          <div className="FeedBack_responseText__cAdv7"></div>
          <button className="FeedBack_validateBtn__2iy3W">
            <span>Отправить</span>
          </button>
        </form>
        <div className="FeedBack_footer__2UfhK">
          <div className="FeedBack_backBtnBox__1JYpP">
            <a href="https://voodoo-lab.ru" className="FeedBack_backBtn__2go4j">
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
