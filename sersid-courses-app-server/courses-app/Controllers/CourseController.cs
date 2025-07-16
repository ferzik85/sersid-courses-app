using courses_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace courses_app.Controllers
{
    [ApiController]
    [Route("courses")]
    public class CoursesController : ControllerBase
    {
        private static readonly List<Course> Courses = new()
        {
            new Course
            {
                Id = "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
                Title = "JavaScript",
                Description = "Lorem Ipsum1",
                CreationDate = "08/03/2021",
                Duration = 160,
                Authors = new List<string>
                {
                    "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
                    "f762978b-61eb-4096-812b-ebde22838167"
                }
            },
            new Course
            {
                Id = "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
                Title = "Angular",
                Description = "Lorem Ipsum2",
                CreationDate = "10/11/2020",
                Duration = 210,
                Authors = new List<string>
                {
                    "df32994e-b23d-497c-9e4d-84e4dc02882f",
                    "095a1817-d45b-4ed7-9cf7-b2417bcbf748"
                }
            }
        };

        [HttpPost("add")]
        public ActionResult<Data<Course>> AddCourse([FromBody] Course course)
        {
            course.Id = Guid.NewGuid().ToString();
            Courses.Add(course);
            return Ok(new Data<Course> { Successful = true, Result = course });
        }

        [HttpDelete("{id}")]
        public ActionResult<Data<string>> DeleteCourse(string id)
        {
            var course = Courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
                return NotFound(new Data<string> { Successful = false });

            Courses.Remove(course);
            return Ok(new Data<string> { Successful = true });
        }

        [HttpGet("all")]
        public ActionResult<Data<List<Course>>> GetAllCourses() => 
            Ok(new Data<List<Course>> { Successful = true, Result = Courses });

        [HttpPut("{id}")]
        public ActionResult<Data<Course>> UpdateCourse(string id, [FromBody] Course updatedCourse)
        {
            var course = Courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
                return NotFound(new Data<Course> { Successful = false });

            course.Title = updatedCourse.Title;
            course.Description = updatedCourse.Description;
            course.CreationDate = updatedCourse.CreationDate;
            course.Duration = updatedCourse.Duration;
            course.Authors = updatedCourse.Authors;
            return Ok(new Data<Course> { Successful = true, Result = course });
        }
    }
}
