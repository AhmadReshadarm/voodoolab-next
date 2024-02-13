import { ColumnsType } from 'antd/lib/table';
import { Barcode } from 'swagger/services';

const columns: ColumnsType<Barcode> = [
  {
    title: 'Id',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: 'Код',
    dataIndex: 'code',
    width: '15%',
  },
  {
    title: 'Проверено',
    dataIndex: 'checked',
    width: '15%',
  },
  {
    title: 'Прилавок',
    dataIndex: 'counter',
    width: '15%',
  },
  {
    title: 'Дата создания',
    dataIndex: 'createdAt',
    width: '15%',
  },
  {
    title: 'Дата изменения',
    dataIndex: 'updatedAt',
    width: '15%',
  },
];

export { columns };
