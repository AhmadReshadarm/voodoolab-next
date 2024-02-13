import { useState } from 'react';
import styled from 'styled-components';

const Video = () => {
  const [firstVid, setFirstVid] = useState(false);
  const [secondVid, setSecondVid] = useState(false);
  const [thirdVid, setThirdVid] = useState(false);
  const [fourthVid, setFourthVid] = useState(false);
  return (
    <Wrapper>
      <div className="video">
        <div className="twoVideoBlock">
          <div className="videoItem" id="husky_premium">
            <div className="youtube-player" data-id="CEhuHsHTdhU">
              {!firstVid ? (
                <div data-id="CEhuHsHTdhU" onClick={() => setFirstVid(true)}>
                  <img src="//i.ytimg.com/vi/CEhuHsHTdhU/maxresdefault.jpg" />
                  <div className="play"></div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/CEhuHsHTdhU?rel=0&autoplay=1&fs=1&controls=2&modestbranding=1&showinfo=0"
                  allowFullScreen
                  autoFocus
                ></iframe>
              )}
            </div>

            <div className="videoTitle">HUSKY PREMIUM</div>
          </div>
          <div className="videoItem" id="husky_white">
            <div className="youtube-player" data-id="4LnWiWMeF38">
              {!secondVid ? (
                <div data-id="4LnWiWMeF38" onClick={() => setSecondVid(true)}>
                  <img src="//i.ytimg.com/vi/4LnWiWMeF38/maxresdefault.jpg" />
                  <div className="play"></div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/4LnWiWMeF38?rel=0&autoplay=1&fs=1&controls=2&modestbranding=1&showinfo=0"
                  allowFullScreen
                  autoFocus
                ></iframe>
              )}
            </div>
            <div className="videoTitle">Husky Premium &amp; Husky White</div>
          </div>
          <div className="videoItem" id="boshkiReviews">
            <div className="youtube-player" data-id="r3OyVQTkWyU">
              {!thirdVid ? (
                <div data-id="r3OyVQTkWyU" onClick={() => setThirdVid(true)}>
                  <img src="//i.ytimg.com/vi/r3OyVQTkWyU/maxresdefault.jpg" />
                  <div className="play"></div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/r3OyVQTkWyU?rel=0&autoplay=1&fs=1&controls=2&modestbranding=1&showinfo=0"
                  allowFullScreen
                  autoFocus
                ></iframe>
              )}
            </div>
            <div className="videoTitle">boshki</div>
          </div>

          <div className="videoItem" id="husky">
            <div className="youtube-player" data-id="KNCWv904JK4">
              {!fourthVid ? (
                <div data-id="KNCWv904JK4" onClick={() => setFourthVid(true)}>
                  <img src="//i.ytimg.com/vi/KNCWv904JK4/maxresdefault.jpg" />
                  <div className="play"></div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/KNCWv904JK4?rel=0&autoplay=1&fs=1&controls=2&modestbranding=1&showinfo=0"
                  allowFullScreen
                  autoFocus
                ></iframe>
              )}
            </div>
            <div className="videoTitle">husky white</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @charset "UTF-8";
  .video {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 60px;
  }

  .video .videoItem {
    margin: 30px auto 0;
    width: 100%;
  }

  .video .videoItem .youtube-player iframe {
    position: relative;
    z-index: 1;
    width: calc(100% - 1px);
    height: 27vw;
  }

  .video .videoItem .videoTitle {
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    font-size: 36px;
    text-align: center;
    font-weight: 700;
  }

  .video .videoItem .youtube-player {
    position: relative;
    display: block;
    width: 100%;
    min-height: 200px;
  }

  .video .videoItem .youtube-player div:first-child {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .video .videoItem .youtube-player img {
    display: block;
    width: 100%;
    min-height: 200px;
    cursor: pointer;
  }

  .video .videoItem .youtube-player img:hover {
    -webkit-filter: brightness(75%);
  }

  .video .twoVideoBlock {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
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
    pointer-events: none;
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

  @media screen and (min-width: 1200px) {
    .video .videoItem .youtube-player iframe {
      height: 330px;
      width: calc(100% - 1px);
    }

    .video .videoItem .youtube-player {
      height: 330px;
    }
  }

  @media screen and (max-width: 767px) {
    .video .videoItem {
      width: calc(100% - 10vw);
      padding: 0 5vw;
    }

    .video .videoItem .youtube-player iframe {
      height: 50vw;
      min-height: 200px;
    }

    .video .videoItem .videoTitle {
      font-size: 26px;
    }

    .video .videoItem .youtube-player img {
      height: calc(50vw + 4px);
    }

    .video .twoVideoBlock {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 400px) {
    .video .videoItem {
      width: calc(100% - 4vw);
      padding: 0 2vw;
    }
  }
`;

export default Video;
