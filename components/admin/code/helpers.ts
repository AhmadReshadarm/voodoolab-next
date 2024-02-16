import { navigateTo } from 'common/helpers';
import { NextRouter } from 'next/router';
import { AppDispatch } from 'redux/store';
import { Page } from 'routes/constants';
import { generateCode } from 'redux/slicers/store/barcodeSlicer';

const handleFormSubmit =
  (router: NextRouter, dispatch: AppDispatch) => async (form) => {
    const isSaved: any = await dispatch(
      generateCode({
        ...form,
      }),
    );

    if (!isSaved.error) {
      navigateTo(router, Page.ADMIN_CODE)();
    }
  };

export { handleFormSubmit };
