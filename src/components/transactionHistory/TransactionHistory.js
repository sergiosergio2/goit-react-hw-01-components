import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory ({items}) {
    return(
        <table className={s.transactionHistory}>
        <thead className={s.title}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(item => (
            <tr className={s.lines} key={item.id}>
              <td className={s.cell}>{item.type}</td>
              <td className={s.cell}>{item.amount}</td>
              <td className={s.cell}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };  
    TransactionHistory.propTypes = {
        items: PropTypes.array.isRequired,
    };
