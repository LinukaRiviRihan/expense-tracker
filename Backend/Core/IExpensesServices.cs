using Database;

namespace Core
{
    public interface IExpensesServices
    {
        List<Expense> GetExpenses();

        Expense GetExpense(int id);

        Expense CreateExpense(Expense expense);

        Expense UpdateExpense(Expense expense);

        void DeleteExpense(Expense expense);
    }
}