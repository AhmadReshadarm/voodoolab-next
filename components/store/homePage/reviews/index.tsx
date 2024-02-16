import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import variants from 'components/store/lib/variants';
const Reviews = () => {
  const [widthOrHeight, setWidthOrHeight] = useState(0);
  const widthOrHeightRef = useRef<any>();

  useEffect(() => {
    console.log(widthOrHeight);
  }, [widthOrHeight]);

  useEffect(() => {
    setWidthOrHeight(
      widthOrHeightRef.current.scrollWidth -
        widthOrHeightRef.current.offsetWidth,
    );
  }, []);

  return (
    <Wrapper>
      <div className="titleBlock">
        <span>обзоры</span>
      </div>
      <div className="reviews">
        <div className="owl-carousel owl-theme owl-carousel-reviews owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <Carousel
              ref={widthOrHeightRef}
              drag={'x'}
              dragConstraints={{
                left: -widthOrHeight,
                right: 0,
              }}
              draggable
              animate="animate"
              variants={variants.sliderX}
              className="owl-stage"
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
                <a href="/reviews/#husky_white">
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
                <a href="/reviews/#husky_white">
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
                <a href="/reviews/#husky_white">
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
                <a href="/reviews/#husky_white">
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
            </Carousel>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .reviews {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto 30px;
  }

  .reviews a {
    color: #fff;
    text-decoration: none;
  }

  .reviews .videoItem {
    margin: 50px 30px 0;
  }

  .reviews .videoItem .videoTitle {
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    font-size: 36px;
    text-align: center;
    font-weight: 700;
  }

  .reviews .videoItem .youtube-player {
    position: relative;
  }

  .reviews .videoItem .youtube-player img {
    display: block;
    -o-object-fit: contain;
    object-fit: contain;
    width: 100%;
    min-height: 170px;
    cursor: pointer;
    max-height: 200px;
  }

  .reviews .videoItem .youtube-player img:hover {
    -webkit-filter: brightness(75%);
  }

  .youtube-player {
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  .youtube-player .play {
    background: url(/assets/images/common/youtube-play-btn.png) no-repeat;
    background-position: 0 -50px;
    background-size: 100% auto;
    position: absolute;
    height: 50px;
    width: 69px;
    transition: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .youtube-player:hover .play {
    background-position: 0 0;
  }

  @media screen and (max-width: 767px) {
    .reviews .videoItem .videoTitle {
      font-size: 26px;
    }

    .reviews .videoItem .youtube-player img {
      height: calc(50vw + 4px);
      max-height: none;
    }
  }

  @media screen and (max-width: 400px) {
    .reviews .videoItem {
      padding: 0 2vw;
    }
  }
`;

const Carousel = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-conten: space-between;
  align-items: flex-start;
  gap: 20px;
  cursor: grab;
  .owl-item {
    a {
      .videoItem {
        .youtube-player {
          div {
            img {
              min-width: 350px;
            }
          }
        }
      }
    }
  }
`;

export default Reviews;
