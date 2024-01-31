import { motion } from 'framer-motion';
import styled from 'styled-components';
import color from 'components/store/lib/ui.colors';
import variants from 'components/store/lib/variants';
import { styleProps } from 'components/store/lib/types';
import InfoDropdown from './DropDownsParrent';
import { devices } from 'components/store/lib/Devices';
import { ParameterProduct } from 'swagger/services';
import { useAppSelector } from 'redux/hooks';
import { TProductInfoState } from 'redux/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  parameterProducts?: ParameterProduct[];
};

const DropDowns: React.FC<Props> = ({ parameterProducts }) => {
  const { product, loading }: TProductInfoState = useAppSelector(
    (state) => state.productInfo,
  );
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty(),
  // );

  // useEffect(() => {
  //   if (!loading && product?.desc!.length !== 0) {
  //     setEditorState(
  //       EditorState.createWithContent(
  //         convertFromRaw(JSON.parse(product?.desc!)),
  //       ),
  //     );
  //   }
  // }, [description]);

  // _________________________ preview converter _______________________
  // const [convertedContent, setConvertedContent] = useState(null);
  // useEffect(() => {
  //   const rawContentState = convertToRaw(editorState.getCurrentContent());
  //   const htmlOutput = draftToHtml(rawContentState);
  //   setConvertedContent(htmlOutput);
  // }, [editorState]);

  // function createMarkup(html) {
  //   if (typeof window !== 'undefined') {
  //     const domPurify = DOMPurify(window);
  //     return {
  //       __html: domPurify.sanitize(html),
  //     };
  //   }
  // }
  console.log(product?.desc?.split('|')[1]);

  return (
    <InfoContainer
      key="info-product-page"
      custom={0.3}
      initial="init"
      whileInView="animate"
      exit={{ y: -20, opacity: 0, transition: { delay: 0.2 } }}
      viewport={{ once: true }}
      variants={variants.fadInSlideUp}
    >
      <InfoDropdown title="Описание">
        <p>
          {!loading
            ? product?.desc?.includes('|')
              ? product?.desc?.split('|')[1]
              : product?.desc
            : ''}
        </p>
      </InfoDropdown>
      <InfoDropdown title="Характеристики">
        <SpecsContainer>
          <SpecsKeyValueWrapper>
            {parameterProducts?.map((item, index) => {
              return (
                <>
                  {item.value == '_' ||
                  item.value == '-' ||
                  item.value == '' ? (
                    ''
                  ) : (
                    <li
                      className="wrapper-key-vlaue"
                      key={`parameter-product-label-${index}`}
                    >
                      <span className="key-wrapper">
                        {item.parameter?.name}:{' '}
                      </span>
                      <span>{item.value}</span>
                    </li>
                  )}
                </>
              );
            })}
          </SpecsKeyValueWrapper>
        </SpecsContainer>
      </InfoDropdown>
      <InfoDropdown title="Подробнее о доставке" borderBottom="none">
        <h3>КАКОВА СТОИМОСТЬ И ВАРИАНТЫ ДОСТАВКИ?</h3>

        <Contents>
          Минимальная сумма заказа - от 70.000 рублей. Доставка в любую
          транспортную компанию и по Москве бесплатная.
        </Contents>
        <Contents>
          По дополнительным вопросам обращаться по номеру телефона:{' '}
          <Link href="tel:89268999954">
            <span>8-926-899-99-54</span>
          </Link>{' '}
          . Дополнительная скидка рассчитывается индивидуально и зависит от
          количества заказанного товара.
        </Contents>
      </InfoDropdown>
    </InfoContainer>
  );
};

const InfoContainer = styled(motion.div)`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: flex-start;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${color.textPrimary};
  margin-top: ${(P: styleProps) => P.margintop};
  user-select: none;
`;

const SpecsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const SpecsKeyValueWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  .wrapper-key-vlaue {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    // border-bottom: 1px solid;
    padding-bottom: 15px;
    .key-wrapper {
      white-space: nowrap;
    }
  }
`;

const Contents = styled.span`
  width: 80%;
  text-align: start;
  line-height: 1.5rem;
  font-size: 1rem;
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export default DropDowns;
