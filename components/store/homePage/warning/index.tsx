const Warning = () => {
  return (
    <div className="warning">
      <div className="warning__main">
        <div className="linksBlock">
          <div className="socialLinks">
            <a
              href="https://vk.com/voodoolab_ru"
              target="_blank"
              className="socialNetworkLink"
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3333 0H6.66667C2.985 0 0 2.985 0 6.66667V33.3333C0 37.015 2.985 40 6.66667 40H33.3333C37.015 40 40 37.015 40 33.3333V6.66667C40 2.985 37.015 0 33.3333 0ZM28.6025 29.1667C27.5867 25.9967 25.055 23.5442 21.7067 23.2108V29.1667H21.19C12.08 29.1667 6.88333 22.91 6.66667 12.5H11.2308C11.3808 20.1408 14.745 23.3775 17.41 24.045V12.5H21.7075V19.09C24.3392 18.8067 27.1042 15.8033 28.0367 12.5H32.3342C31.6183 16.5708 28.62 19.5733 26.4875 20.8083C28.6192 21.8092 32.0342 24.4283 33.3333 29.1667H28.6025Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/voodoolab_ru_boshki"
              target="_blank"
              className="socialNetworkLink"
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8182 0C5.3 0 0 5.3 0 11.8182V28.1818C0 34.7 5.3 40 11.8182 40H28.1818C34.7 40 40 34.7 40 28.1818V11.8182C40 5.3 34.7 0 28.1818 0H11.8182ZM30.9091 7.27273C31.9091 7.27273 32.7273 8.09091 32.7273 9.09091C32.7273 10.0909 31.9091 10.9091 30.9091 10.9091C29.9091 10.9091 29.0909 10.0909 29.0909 9.09091C29.0909 8.09091 29.9091 7.27273 30.9091 7.27273ZM20 10C25.5182 10 30 14.4818 30 20C30 25.5182 25.5182 30 20 30C14.4818 30 10 25.5182 10 20C10 14.4818 14.4818 10 20 10ZM20 11.8182C15.4909 11.8182 11.8182 15.4909 11.8182 20C11.8182 24.5091 15.4909 28.1818 20 28.1818C24.5091 28.1818 28.1818 24.5091 28.1818 20C28.1818 15.4909 24.5091 11.8182 20 11.8182Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="copyright">© husky 2022</div>
        </div>
        <div className="warning__content">
          <div className="content__age">+18</div>
          <div className="content__main">
            <div className="content__main_textBox">
              <p className="dynamicText" data-title="home.warning.firstText">
                Информация представленная на сайте компании VoodooLab носит
                исключительно ознакомительный характер
              </p>
              <p className="dynamicText" data-title="home.warning.secondText">
                Материалы на сайте не являются предложениями о прямой покупке
                или продаже продукции компании Husky
              </p>
            </div>
            <div className="content__main_securityBox">
              <p className="dynamicText" data-title="home.warning.securityText">
                политика по обработке и защите персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
