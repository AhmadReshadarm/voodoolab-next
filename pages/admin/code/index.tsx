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
  fetchCodeInExcelFile,
  fetchCodeInJsonFile,
} from 'redux/slicers/store/barcodeSlicer';
import styled from 'styled-components';
import color from 'components/store/lib/ui.colors';

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

  const [isOpen, setOpen] = useState(false);
  const [limit, setLimit] = useState('1000');
  const [downloadOffset, setDownloandOffset] = useState('0');
  return (
    <>
      <div className={styles.categoriesHeader}>
        <h1 className={styles.categoriesHeader__title}>Код</h1>
        <DownloadBtnsWrapper>
          <div className="action-button-intiator-wrapper">
            <button
              onClick={() => setOpen(!isOpen)}
              className="action-button-intiator-button"
            >
              <span>Скачать</span>
            </button>

            <ul
              style={{ display: isOpen ? 'flex' : 'none' }}
              className="options-wrapper"
            >
              <li>
                <label htmlFor="downloadOffset">От: </label>
                <input
                  type="number"
                  placeholder="От"
                  id="downloadOffset"
                  value={downloadOffset}
                  onChange={(evt) =>
                    setDownloandOffset(evt.target.value.toString())
                  }
                />
              </li>
              <li>
                <label htmlFor="limit">До: </label>
                <input
                  type="number"
                  placeholder="До"
                  id="limit"
                  value={limit}
                  onChange={(evt) => setLimit(evt.target.value.toString())}
                />
              </li>
              <li
                onClick={() => {
                  dispatch(
                    fetchCodeInExcelFile({
                      limit: limit,
                      offset: downloadOffset,
                    }),
                  );
                  setOpen(false);
                }}
              >
                Как файл Ms.Excel
              </li>
              <li
                onClick={() => {
                  dispatch(
                    fetchCodeInJsonFile({
                      limit: limit,
                      offset: downloadOffset,
                    }),
                  );
                  setOpen(false);
                }}
              >
                Как файл .json
              </li>
            </ul>
          </div>
        </DownloadBtnsWrapper>
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

const DownloadBtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 50px 0;

  .action-button-intiator-wrapper {
    width: 200px;
    height: 40px;
    position: relative;
    .action-button-intiator-button {
      width: 100%;
      height: 100%;
      background-color: ${color.btnSecondery};
      cursor: pointer;
      transition: 300ms;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 3px;

      &:hover {
        background-color: ${color.searchBtnBg};

        transform: scale(1.02);
      }
      &:active {
        transform: scale(1);
        background-color: ${color.btnPrimary};
        color: ${color.textPrimary};
      }
      span {
        font-family: 'Jost';
        font-size: 1rem;
      }
    }
    .options-wrapper {
      width: 200px;
      background-color: ${color.bgProduct};
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;
      padding: 15px;
      position: absolute;
      top: 50px;
      left: 0;
      z-index: 5;
      transition: 200ms;
      box-shadow: 0px 5px 10px 0px ${color.boxShadowBtn};
      li {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: 200ms;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: ${color.searchBtnBg};
          transform: scale(1.02);
        }
        &:active {
          transform: scale(1);
          background-color: ${color.btnPrimary};
          color: ${color.textPrimary};
        }
      }
    }
  }
`;

codePage.PageLayout = AdminLayout;

export default codePage;
