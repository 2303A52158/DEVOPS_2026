import axios from "axios";

const BASE_URL = "http://localhost:3001/api/expenses";

export const getExpenses = () => axios.get(BASE_URL);

export const addExpense = (expense) => axios.post(BASE_URL, expense);
