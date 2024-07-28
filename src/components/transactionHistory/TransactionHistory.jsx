import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr className={css.transactionHeader}>
          <th className={css.transactionCell}>Type</th>
          <th className={css.transactionCell}>Amount</th>
          <th className={css.transactionCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id} className={css.transactionRow}>
              <td className={css.transactionCell}>{transaction.type}</td>
              <td className={css.transactionCell}>{transaction.amount}</td>
              <td className={css.transactionCell}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
