import styled from 'styled-components';

const PreLoadedImg = () => {
  return (
    <Wrapper>
      <div className="preloadedImg">
        <img src="/assets/images/map/load.gif" alt="load" />
        <img src="/assets/images/map/30ml_b.png" alt="map" />
        <img src="/assets/images/map/load.gif" alt="load" />
        <img src="/assets/images/map/100ml_b.png" alt="map" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PreLoadedImg;
