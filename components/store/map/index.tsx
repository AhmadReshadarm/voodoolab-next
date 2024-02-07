import Berry from './berry';
import Desert from './desert';
import Drink from './drink';
import FirstBlock from './firstBlock';
import Froze from './froze';
import Fruits from './fruits';
import Mint from './mint';
import PreLoadedImg from './preloadedImg';
import Tabak from './tabak';
import TitleBlock from './titleBlock';

const MapComponent = () => {
  return (
    <>
      <FirstBlock />
      {/* <PreLoadedImg /> */}
      <TitleBlock title={'ягодные'} />
      <Berry />
      <TitleBlock title={'фруктовые'} />
      <Fruits />
      <TitleBlock title={'десертные/конфетные'} />
      <Desert />
      <TitleBlock title={'хвойные/травяные'} />
      <Tabak />
      <TitleBlock title={'лимонады/кола/напитки'} />
      <Drink />
      <TitleBlock title={'мятные'} />
      <Mint />
      <TitleBlock title={'ледяные'} />
      <Froze />
    </>
  );
};

export default MapComponent;
