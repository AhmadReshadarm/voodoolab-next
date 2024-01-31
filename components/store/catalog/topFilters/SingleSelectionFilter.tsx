import variants from 'components/store/lib/variants';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { FilterOption } from '../../../../ui-kit/FilterCheckbox/types';
import {
  Filter,
  FilterBody,
  FilterTitle,
  TopFilter,
  TopFilterBody,
  TopFilterTitle,
} from '../common';
import color from 'components/store/lib/ui.colors';
import { devices } from 'components/store/lib/Devices';
type Props = {
  title: string;
  options?: FilterOption[];
  onChange: (selectedOption: FilterOption) => void;
};

const SingleSelectionFilter: React.FC<Props> = ({
  title,
  options,
  onChange,
}) => {
  const [stateOptions, setStateOptions] = useState(options);

  useEffect(() => {
    setStateOptions(options);
  }, [options]);

  const handleChange = (id: string) => () => {
    const options = [...stateOptions!];
    const activeOption = options?.find((option) => option.checked);

    if (activeOption) {
      activeOption!.checked = false;
    }

    const curOption = options?.find((option) => option.id === id);
    curOption!.checked = true;

    setStateOptions(options);
    onChange(curOption!);
  };

  return (
    <TopFilter>
      <TopFilterTitle
        custom={0.05}
        initial="init"
        animate="animate"
        exit={{ y: -80, opacity: 0, transition: { delay: 0.05 } }}
        variants={variants.fadInSlideUp}
      >
        {title}
      </TopFilterTitle>
      <TopFilterBody
        custom={0.1}
        initial="init"
        animate="animate"
        exit={{ y: -80, opacity: 0, transition: { delay: 0.1 } }}
        variants={variants.fadInSlideUp}
      >
        {stateOptions?.map((option) => (
          <Selection
            key={`filter-selection-${option.id}`}
            selected={!!option.checked}
            onClick={handleChange(option.id)}
          >
            <span>{option.name}</span>
          </Selection>
        ))}
      </TopFilterBody>
    </TopFilter>
  );
};

const Selection = styled.div<{
  selected: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 30px;
  cursor: pointer;
  transition: 200ms;
  border: 1px solid #949494;
  box-shadow: 3px 13px 25px 0px #00000012;
  transition: 250ms;

  ${(props) => {
    if (props.selected) {
      return css`
        border: 1px solid #c1ab93;
        background-color: #e8d9ca;
      `;
    }
  }}
  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    padding: 8px;
    font-size: 1rem;
    text-align: center;
  }
  @media ${devices.laptopS} {
    span {
      white-space: nowrap;
    }
  }
  @media ${devices.tabletL} {
    span {
      white-space: nowrap;
    }
  }
  @media ${devices.tabletS} {
    span {
      white-space: nowrap;
    }
  }
  @media ${devices.mobileL} {
    span {
      white-space: nowrap;
    }
  }
  @media ${devices.mobileM} {
    span {
      white-space: nowrap;
    }
  }
  @media ${devices.mobileS} {
    span {
      white-space: nowrap;
    }
  }
`;

//  ${(props) => {
//     if (props.selected) {
//       return css`
//         box-shadow: 0px 5px 10px 0px ${color.boxShadowBtn};
//       `;
//     }
//   }}

// ${(props) => {
//   if (props.selected) {
//     return css`
//       background: ${color.selected};
//       color: ${color.btnPrimary};
//       text-align: center;
//     `;
//   }
// }}

export default SingleSelectionFilter;
