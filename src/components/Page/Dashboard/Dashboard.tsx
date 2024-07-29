import { useEffect, useState } from "react";

const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch account balance and transaction history
    const fetchData = async () => {
      try {
        const balanceResponse = await fetch("/api/account/balance");
        const balanceData = await balanceResponse.json();
        setBalance(balanceData.balance);

        const transactionsResponse = await fetch("/api/account/transactions");
        const transactionsData = await transactionsResponse.json();
        setTransactions(transactionsData.transactions);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Account Dashboard</h1>
      <p>Balance: {balance ? `$${balance}` : "Loading..."}</p>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
