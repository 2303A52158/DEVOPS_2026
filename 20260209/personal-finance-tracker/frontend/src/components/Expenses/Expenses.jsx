import React, { useEffect, useState } from "react";
import "./Expenses.css";

// 🔹 Category derived from title
const getCategoryFromTitle = (title) => {
  const t = title.toLowerCase();

  if (t.includes("salary") || t.includes("raju")) return "Income";
  if (t.includes("grocery") || t.includes("food")) return "Food";
  if (t.includes("bus") || t.includes("train")) return "Transport";
  if (t.includes("rent") || t.includes("bill")) return "Bills";
  if (t.includes("shopping")) return "Shopping";

  return "Others";
};

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  // 🔹 Sample items list (as you requested)
  useEffect(() => {
    const sampleExpenses = [
      {
        id: 1,
        title: "Raju Salary",
        amount: 80000,
        category: getCategoryFromTitle("Raju Salary"),
        date: "23-10-2025",
      },
      {
        id: 2,
        title: "House Rent",
        amount: 15000,
        category: getCategoryFromTitle("House Rent"),
        date: "01-10-2025",
      },
      {
        id: 3,
        title: "Grocery Shopping",
        amount: 3500,
        category: getCategoryFromTitle("Grocery Shopping"),
        date: "05-10-2025",
      },
      {
        id: 4,
        title: "Bus Travel",
        amount: 1200,
        category: getCategoryFromTitle("Bus Travel"),
        date: "10-10-2025",
      },
    ];

    setExpenses(sampleExpenses);
  }, []);

  const totalAmount = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0,
  );

  return (
    <div className="container">
      {/* SUMMARY */}
      <section className="summary">
        <h2>Total Expenses</h2>
        <p>₹ {totalAmount}</p>
      </section>

      {/* EXPENSE LIST */}
      <section className="card">
        <h2>Expense List</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Expenses;
