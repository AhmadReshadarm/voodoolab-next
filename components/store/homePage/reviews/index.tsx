import { useEffect } from 'react';
import $ from 'jquery';
const Reviews = () => {
  useEffect(() => {
    let e: any;
    window.addEventListener('load', () => {
      document.fonts.ready.then((t) => {
        setTimeout(() => {
          e = $('.owl-carousel.owl-carousel-reviews').owlCarousel({
            loop: !0,
            autoWidth: !0,
            center: !0,
            dots: !1,
            onInitialize: function (e) {},
            onDrag: function (e) {},
            onDragged: function (e) {},
            onTranslate: function (e) {},
            onTranslated: function (e) {},
          });
        }, 100);
      });
    }),
      document.addEventListener('DOMContentLoaded', function () {
        for (
          var e: any = document.getElementsByClassName('youtube-player'), t = 0;
          t < e.length;
          t++
        ) {
          var n = e[t].dataset.id,
            a = document.createElement('div');
          a.setAttribute('data-id', n);
          var o = document.createElement('img');
          (o.src = '//i.ytimg.com/vi/ID/maxresdefault.jpg'.replace('ID', n)),
            a.appendChild(o);
          var d = document.createElement('div');
          d.setAttribute('class', 'play'),
            a.appendChild(d),
            (a.onclick = function () {}),
            e[t].appendChild(a);
        }
      });
  }, []);
  return (
    <>
      <div className="titleBlock">
        <span>обзоры</span>
      </div>
      <div className="reviews">
        <div className="owl-carousel owl-theme owl-carousel-reviews owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transition: 'all 0s ease 0s',
                width: '4604px',
                transform: 'translate3d(-773px, 0px, 0px)',
              }}
            >
              <div className="owl-item cloned" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_double_ice">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="zzE043UzWa0">
                      <div data-id="zzE043UzWa0">
                        <img
                          src="https://i.ytimg.com/vi/zzE043UzWa0/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">husky double ice</div>
                  </div>
                </a>
              </div>
              <div className="owl-item cloned" style={{ width: 'auto' }}>
                <a href="/reviews/#boshkiReviews">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="r3OyVQTkWyU">
                      <div data-id="r3OyVQTkWyU">
                        <img
                          src="https://i.ytimg.com/vi/r3OyVQTkWyU/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">boshki</div>
                  </div>
                </a>
              </div>
              <div className="owl-item cloned active" style={{ width: 'auto' }}>
                <a href="/reviews/#husky white">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="KNCWv904JK4">
                      <div data-id="KNCWv904JK4">
                        <img
                          src="https://i.ytimg.com/vi/KNCWv904JK4/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">husky white</div>
                  </div>
                </a>
              </div>
              <div className="owl-item active center" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_premium">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="CEhuHsHTdhU">
                      <div data-id="CEhuHsHTdhU">
                        <img
                          src="https://i.ytimg.com/vi/CEhuHsHTdhU/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">HUSKY PREMIUM</div>
                  </div>
                </a>
              </div>
              <div className="owl-item active" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_premium&amp;husky_white">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="4LnWiWMeF38">
                      <div data-id="4LnWiWMeF38">
                        <img
                          src="https://i.ytimg.com/vi/4LnWiWMeF38/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">
                      Husky Premium &amp; Husky White
                    </div>
                  </div>
                </a>
              </div>
              <div className="owl-item active" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_double_ice">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="zzE043UzWa0">
                      <div data-id="zzE043UzWa0">
                        <img
                          src="https://i.ytimg.com/vi/zzE043UzWa0/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">husky double ice</div>
                  </div>
                </a>
              </div>
              <div className="owl-item" style={{ width: 'auto' }}>
                <a href="/reviews/#boshkiReviews">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="r3OyVQTkWyU">
                      <div data-id="r3OyVQTkWyU">
                        <img
                          src="https://i.ytimg.com/vi/r3OyVQTkWyU/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">boshki</div>
                  </div>
                </a>
              </div>
              <div className="owl-item" style={{ width: 'auto' }}>
                <a href="/reviews/#husky white">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="KNCWv904JK4">
                      <div data-id="KNCWv904JK4">
                        <img
                          src="https://i.ytimg.com/vi/KNCWv904JK4/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">husky white</div>
                  </div>
                </a>
              </div>
              <div className="owl-item cloned" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_premium">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="CEhuHsHTdhU">
                      <div data-id="CEhuHsHTdhU">
                        <img
                          src="https://i.ytimg.com/vi/CEhuHsHTdhU/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">HUSKY PREMIUM</div>
                  </div>
                </a>
              </div>
              <div className="owl-item cloned" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_premium&amp;husky_white">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="4LnWiWMeF38">
                      <div data-id="4LnWiWMeF38">
                        <img
                          src="https://i.ytimg.com/vi/4LnWiWMeF38/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">
                      Husky Premium &amp; Husky White
                    </div>
                  </div>
                </a>
              </div>
              <div className="owl-item cloned" style={{ width: 'auto' }}>
                <a href="/reviews/#husky_double_ice">
                  <div className="videoItem">
                    <div className="youtube-player" data-id="zzE043UzWa0">
                      <div data-id="zzE043UzWa0">
                        <img
                          src="https://i.ytimg.com/vi/zzE043UzWa0/maxresdefault.jpg"
                          style={{ opacity: '1' }}
                        />
                        <div className="play"></div>
                      </div>
                    </div>
                    <div className="videoTitle">husky double ice</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
