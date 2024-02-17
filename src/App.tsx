import { useEffect, useState } from 'react';
import './App.css';
import { BalanceComponent, DateList, FormComponent, ListItems, ReportComponent } from './components/index.component';
import { Transaction, TransactionType, TransactionTypeNameEn } from './models/Transaction.model';
import { v4 as uuidv4 } from 'uuid';
import { Month } from './utils/month.util'



function App() {

  const [transactions,  setTransactions]  = useState([
    {id: uuidv4(), statement: 'test', amount: 23, type: {}, createDate: new Date('1-15-2023'), updateDate: null},
    {id: uuidv4(), statement: 'test', amount: 23, type: {}, createDate: new Date('5-15-2020'), updateDate: null},
    {id: uuidv4(), statement: 'test', amount: 23, type: {}, createDate: new Date('2-15-1983'), updateDate: null},
  ] as Transaction[]);

  const [totalIncome,   setTotolIncome]   = useState(0);
  const [totalexpenses, setTotolexpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const [year, setYear] = useState([] as string[]);
  const [month, setMonth] = useState([] as string[]);

  const addTransaction = (statement: string, amount: number, type: TransactionType) => {
    
    const newTransaction: Transaction = {
                                          id: uuidv4(), 
                                          statement, 
                                          amount, 
                                          type, 
                                          createDate: new Date(), 
                                          updateDate: null
                                        
                                        }
    setTransactions((trans) => ([newTransaction, ...trans]));
  }

  const updateTotal = (type: TransactionTypeNameEn): number => {
    const data  = transactions.filter(({type:{nameEn}})=> nameEn === type);
    const total = data.reduce((total: number, value: Transaction) => total += value.amount, 0)
    return total;
  }

  const effect = () => {

    const totalIncome   = updateTotal('income');
    const totalExpenses = updateTotal('expenses');
    const totalBalance  = totalIncome - totalExpenses;

    setTotolIncome(totalIncome);
    setTotolexpenses(totalExpenses);
    setBalance(totalBalance);

    if(transactions.length >= 1) {

      const y = transactions.map(item => item.createDate.getFullYear().toString());
      const m = transactions.map(item => item.createDate.getMonth().toString());

      console.log(y)


      y.forEach(item => {
        console.log(item)
      });


      // Month
      m.forEach((numMonth, index) => {
        console.log(numMonth)
      });


    } else {
      const d = new Date();
      const y = (d.getFullYear()+543).toString();
      const m = d.getMonth();

      setYear([y]);
      setMonth([Month(m)]);
    }
  }

  useEffect(effect, [transactions]);


  return (
    <div style={{maxWidth: '640px', maxHeight: '100vh'}} className="  mx-auto border p-10">
      <section>
        <h1 className='text-center' style={{fontSize: '25px'}}>บัญชีรายรับ-รายจ่าย</h1>
        <DateList year={year} month={month} />
        <BalanceComponent balance={balance} />
        <ReportComponent  totalIncome={totalIncome} totalExpenses={totalexpenses} />
        <FormComponent    onAdd={addTransaction} />
        <ListItems        transactions={transactions} />

      </section>
    </div>
  );
}

export default App;
