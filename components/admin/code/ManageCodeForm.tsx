import styled from 'styled-components';
import { Button, Form, Input, List, Select, Spin } from 'antd';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'redux/hooks';
import { handleFormSubmit } from './helpers';
import styles from './categories.module.scss';
import { ManageCodeFields } from './ManageCodeFields.enum';
import FormItem from '../generalComponents/FormItem';
import { navigateTo } from 'common/helpers/navigateTo.helper';
import { Page } from 'routes/constants';
type Props = {
  title: string;
  isLoading: boolean;
  isSaveLoading: boolean;
};
const ManageCodeForm = ({ title, isLoading, isSaveLoading }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [form] = Form.useForm();
  return (
    <>
      <div className={styles.createCategoryHeader}>
        <h1 className={styles.createCategoryHeader__title}>{title}</h1>
      </div>
      {isSaveLoading ? (
        <Spin className={styles.spinner} size="large" />
      ) : (
        <Form
          layout="vertical"
          onFinish={handleFormSubmit(router, dispatch)}
          form={form}
          requiredMark={true}
          className={styles.createCategoryForm}
        >
          <span>Введите стартовый номер</span>
          <FormItem
            option={ManageCodeFields.StartsWith}
            children={
              <Input
                required={true}
                placeholder="Введите стартовый номер"
                maxLength={2}
              />
            }
          />
          <span>Введите объем кода для генерации</span>
          <FormItem
            option={ManageCodeFields.BarcodeLenght}
            children={
              <Input
                required={true}
                placeholder="Введите объем кода для генерации"
                type={'number'}
              />
            }
          />
          <Form.Item className={styles.createCategoryForm__buttonsStack}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.createCategoryForm__buttonsStack__submitButton}
              loading={isSaveLoading}
              // disabled={isDisabled}
            >
              Сохранить
            </Button>
            <Button
              type="primary"
              onClick={navigateTo(router, Page.ADMIN_CODE)}
            >
              Вернуться назад
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default ManageCodeForm;
