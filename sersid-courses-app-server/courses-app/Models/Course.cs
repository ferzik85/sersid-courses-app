namespace courses_app.Models
{
    public class Course
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CreationDate { get; set; }
        public int Duration { get; set; }
        public List<string> Authors { get; set; } = [];
    }
}