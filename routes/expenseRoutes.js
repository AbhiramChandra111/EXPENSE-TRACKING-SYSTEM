const express = require("express");
const {
  addExpense,
  getAllExpense,
  deleteExpense,
//   downloadIncomeExcel,
} = require("../controllers/expenseController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpense);
// router.get("/downloadExcel", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteExpense);

module.exports = router;