import { ProviderClientContext } from "@/src/contexts/providers/ProviderClient/ProviderClient";
import { Models, m } from "@/data-schema";
import { useContext, useEffect, useState } from "react";
import EntityList from "../EntityList/EntityList";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/src/contexts/routes";
import { TransactionCreateForm } from "@/src/components";
import { v4 } from "uuid";
type Transaction = Models[m.Transaction];
type Transactions = Transaction[];
export default function DevTransactions() {
  const uuid = v4();
  const [transactions, setTransactions] = useState<Transactions>([]);
  const client = useContext(ProviderClientContext);
  const nav = useNavigate();
  function deleteTransaction(id: string) {
    client.models.Transaction.delete({ id });
  }

  useEffect(() => {
    client.models.Transaction.observeQuery().subscribe({
      next: ({ items: transactions }) => setTransactions([...transactions]),
    });
  }, [client.models.Transaction]);

  return (
    <>
      <div>Transactions</div>
      <TransactionCreateForm
        overrides={{
          uuid: {
            value: uuid,
            // display: "none",
            // disabled: true,
          },
        }}
        onSubmit={(fields) => {
          nav(ROUTES.dev._);

          return fields;
        }}
      />
      <EntityList entities={transactions} handleDelete={deleteTransaction} />
    </>
  );
}
