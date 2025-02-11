using Core;
using Database;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpensesController(IExpensesServices expensesServices) : Controller
    {
        [HttpGet]
        public IActionResult GetExpenses()
        {
            return Ok(expensesServices.GetExpenses());
        }

        [HttpGet("{id}", Name = "GetExpense")]
        public IActionResult GetExpense(int id)
        {
            return Ok(expensesServices.GetExpense(id));
        }

        [HttpPost]
        public IActionResult CreateExpense(Expense expense)
        {
            return CreatedAtRoute("GetExpense", new { id = expense.Id }, expensesServices.CreateExpense(expense));
        }

        [HttpPut]
        public IActionResult UpdateExpense(Expense expense)
        {
            return Ok(expensesServices.UpdateExpense(expense));
        }

        [HttpDelete]
        public IActionResult DeleteExpense(Expense expense)
        {
            expensesServices.DeleteExpense(expense);
            return Ok();
        }

    }
}