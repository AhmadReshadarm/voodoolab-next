import AdminLayout from 'components/admin/adminLayout/layout';
import { useAppSelector } from 'redux/hooks';
import ManageCodeForm from 'components/admin/code/ManageCodeForm';
import { TBarcodeState } from 'redux/types';

const CreateCode = () => {
  const title = 'Создание код';
  const { loading, saveLoading } = useAppSelector<TBarcodeState>(
    (state) => state.barcode,
  );

  return (
    <ManageCodeForm
      title={title}
      isLoading={loading}
      isSaveLoading={saveLoading}
    />
  );
};

CreateCode.PageLayout = AdminLayout;

export default CreateCode;
