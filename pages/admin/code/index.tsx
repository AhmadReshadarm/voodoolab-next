import { Button, Spin, Table } from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/lib/table/interface';
import { AppContext } from 'common/context/AppContext';
import { navigateTo } from 'common/helpers';
import { handleDateFormatter } from 'common/helpers/handleDateFormatter';
import { DataType } from 'common/interfaces/data-type.interface';
import AdminLayout from 'components/admin/adminLayout/layout';
import { columns } from 'components/admin/code/constants';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { Page } from 'routes/constants';
import styles from './index.module.scss';
import { TBarcodeState } from 'redux/types';
import {
  clearBarcodes,
  fetchBarcodes,
} from 'redux/slicers/store/barcodeSlicer';

const codePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { offset, setOffset } = useContext(AppContext);

  const dispatch = useAppDispatch();
  const { loading, barcodes } = useAppSelector<TBarcodeState>(
    (state) => state.barcode,
  );

  const router = useRouter();

  const dataSource = barcodes?.map(
    ({ id, code, checked, counter, createdAt, updatedAt }) => {
      return {
        key: id,
        id,
        code,
        checked: checked ? 'Да' : 'Нет',
        counter,
        createdAt: handleDateFormatter(createdAt!),
        updatedAt: handleDateFormatter(updatedAt!),
      };
    },
  ) as unknown as DataType[];

  useEffect(() => {
    dispatch(
      fetchBarcodes({
        offset: String(offset),
        limit: '20',
      }),
    );

    return () => {
      dispatch(clearBarcodes());
      setOffset(0);
    };
  }, []);

  return (
    <>
      <div className={styles.categoriesHeader}>
        <h1 className={styles.categoriesHeader__title}>Код</h1>
        <Button
          className={styles.categoriesHeader__createCategoryButton}
          type="primary"
          onClick={navigateTo(router, Page.ADMIN_CREATE_CODE)}
        >
          Создать новую Код
        </Button>
      </div>
      {loading ? (
        <Spin className={styles.spinner} size="large" />
      ) : (
        <Table
          scroll={{
            // x: 1366,
            y: 768,
          }}
          pagination={{
            pageSize: 20,
            current: currentPage,
          }}
          columns={
            columns as (ColumnGroupType<DataType> | ColumnType<DataType>)[]
          }
          dataSource={dataSource}
          onChange={(event) => {
            const newOffset = ((event.current as number) - 1) * 20;
            setOffset(newOffset);
            dispatch(
              fetchBarcodes({
                offset: String(newOffset),
                limit: '20',
              }),
            );
            setCurrentPage(event.current as number);
          }}
        />
      )}
    </>
  );
};

codePage.PageLayout = AdminLayout;

export default codePage;
