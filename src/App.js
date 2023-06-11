import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import ExpenseItems from "./components/ExpenseItems";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 222.73,
    date: new Date(2023, 3, 29),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 10.73,
    date: new Date(2023, 4, 21),
  },
  {
    id: "e3",
    title: "Eatables",
    amount: 321.73,
    date: new Date(2023, 6, 24),
  },
  { id: "e4", title: "New Tv", amount: 994.73, date: new Date(2022, 8, 25) },
];

function App() {
  const [expenses, SetExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expense) => {
    // console.log('in app.js');
    // console.log(expense);

    SetExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}></ExpenseItems>
      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}></ExpenseItems> */}
    </div>
  );
}

export default App;
