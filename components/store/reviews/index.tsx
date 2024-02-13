import TitleBlock from 'UI-Kit/titleBlock';
import FirstBlock from './firstBlock';
import Video from './video';

const ReviewsComponent = () => {
  return (
    <>
      <FirstBlock />
      <TitleBlock title={`обзоры`} />
      <Video />
    </>
  );
};

export default ReviewsComponent;
