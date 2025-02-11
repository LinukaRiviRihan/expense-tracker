using System.ComponentModel.DataAnnotations;

namespace Database
{
    public class Expense
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
    }
}
