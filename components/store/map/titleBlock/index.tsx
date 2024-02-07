import styled from 'styled-components';

const TitleBlock = ({ title }) => {
  return (
    <Wrapper>
      <div className="titleBlock">
        <span>{title}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .titleBlock {
    min-height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 36px;
    border: solid 1px #fff;
    max-width: 1920px;
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default TitleBlock;
