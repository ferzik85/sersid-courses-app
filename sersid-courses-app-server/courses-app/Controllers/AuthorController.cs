using courses_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace courses_app.Controllers
{
    [ApiController]
    [Route("Authors")]
    public class AuthorController : ControllerBase
    {
        private static readonly List<Author> Authors =
        [
            new()
            {
                Id = "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
                Name = "Vasiliy Dobkin",
            },
            new()
            {
                Id = "f762978b-61eb-4096-812b-ebde22838167",
                Name = "Nicolas Kim",
            },
            new()
            {
                Id = "df32994e-b23d-497c-9e4d-84e4dc02882f",
                Name = "Anna Sidorenko",
            },
            new()
            {
                Id = "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
                Name = "Valentina Larina",
            }
        ];

        [HttpPost("add")]
        public ActionResult<Data<Author>> AddAuthor([FromBody] Author author)
        {
            author.Id = Guid.NewGuid().ToString();
            Authors.Add(author);
            return Ok(new Data<Author> { Successful = true, Result = author });
        }

        [HttpDelete("{id}")]
        public ActionResult<Data<string>> DeleteAuthor(string id)
        {
            var author = Authors.FirstOrDefault(a => a.Id == id);
            if (author == null)
                return NotFound(new Data<string> { Successful = false });

            Authors.Remove(author);
            return Ok(new Data<string> { Successful = true });
        }

        [HttpGet("all")]
        public ActionResult<Data<List<Author>>> GetAllAuthors() =>
            Ok(new Data<List<Author>> { Successful = true, Result = Authors });
    }
}
