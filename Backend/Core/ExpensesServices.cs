using Database;

namespace Core
{
    public class ExpensesServices(AppDbContext context) : IExpensesServices
    {
        public List<Expense> GetExpenses()
        {
            return context.Expenses.ToList();
        }

        public Expense GetExpense(int id)
        {
            return context.Expenses.First(e => e.Id == id);
        }

        public Expense CreateExpense(Expense expense)
        {
            context.Add(expense);
            context.SaveChanges();

            return expense;
        }

        public Expense UpdateExpense(Expense expense)
        {
            var dbExpense = context.Expenses.First(e => e.Id == expense.Id);
            dbExpense.Description = expense.Description;
            dbExpense.Amount = expense.Amount;
            context.SaveChanges();

            return expense;
        }

        public void DeleteExpense(Expense expense)
        {
            context.Remove(expense);
            context.SaveChanges();
        }
    }
}