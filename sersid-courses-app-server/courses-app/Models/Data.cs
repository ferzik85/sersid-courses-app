namespace courses_app.Models
{
    public class Data<T>
    {
        public bool Successful { get; set; }
        public User User { get; set; }
        public T Result { get; set; }
    }
}
