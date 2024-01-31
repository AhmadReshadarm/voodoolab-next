import { ColumnsType } from 'antd/lib/table';
import { OrderProduct } from 'swagger/services';
import ActionButtons from '../generalComponents/ActionButtons';
import { handleDeleteCheckout, handleRedirectCheckout } from './helpers';

interface CheckoutsTableData {
  id: string;
  user: { email: string };
  basket: { orderProducts: OrderProduct[] };
  address: { address: string; receiverPhone: string };
}
//  initialState.checkout.basket?.orderProducts[0].productSize
const columns: ColumnsType<CheckoutsTableData> = [
  {
    title: 'Заказ №',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: 'Пользователь',
    dataIndex: 'user',
    render: (_, record) => {
      return <p>{record.user.email}</p>;
    },
    width: '10%',
  },
  {
    title: 'Цвет(ы)',
    dataIndex: 'color',
    render: (_, record) => {
      return (
        <ul>
          {record.basket.orderProducts.map((variant, index) => {
            return (
              <li key={`color-${index}`}>
                {variant.productVariant?.color!.name != ''
                  ? `${index + 1}: ${variant.productVariant?.color!.name}`
                  : ''}
              </li>
            );
          })}
        </ul>
      );
    },
    width: '10%',
  },
  {
    title: 'Артикул',
    dataIndex: 'size',
    render: (_, record) => {
      return (
        <ul>
          {record.basket.orderProducts.map((variant, index) => {
            return (
              <li key={`size-${index}`}>
                {variant.productSize != ''
                  ? `${index + 1}: ${variant.productVariant?.artical}`
                  : ''}
              </li>
            );
          })}
        </ul>
      );
    },
    width: '10%',
  },
  {
    title: 'Адрес, Тел',
    dataIndex: 'address',
    render: (_, record) => {
      return (
        <>
          <p>Адрес: {record.address.address}</p>
          <p>Тел: {record.address.receiverPhone}</p>
        </>
      );
    },
    width: '20%',
  },
  {
    title: 'Комментарий',
    dataIndex: 'comment',
    width: '25%',
  },
  {
    title: 'Действия',
    render: (_, record) => {
      return (
        <ActionButtons
          id={record.id as string}
          handleDelete={handleDeleteCheckout}
          handleRedirect={handleRedirectCheckout}
          option={'checkouts'}
          title="заказ"
        />
      );
    },
    width: '10%',
  },
];

export { columns };
