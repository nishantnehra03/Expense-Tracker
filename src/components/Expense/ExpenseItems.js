import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
// import { useState } from "react";

function ExpenseItems(props) {
  //   const expenseDate=new Date(2023,3,24);
  //   const expenseTitle='Car Insurance';
  //   const expenseAmount=994.73;

  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();

  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by react");

  // const clickhandler = () => {
  //   setTitle("Updated !");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      
      <ExpenseDate date={props.date} />{" "}
      <div className="expense-item__description ">
        <h2> {props.title} </h2>{" "}
      </div>{" "}
      <div className="expense-item__price"> $ {props.amount} </div>{" "}
      {/* <button onClick={clickhandler}>change title</button> */}{" "}
    </Card>
  );
}

export default ExpenseItems;
