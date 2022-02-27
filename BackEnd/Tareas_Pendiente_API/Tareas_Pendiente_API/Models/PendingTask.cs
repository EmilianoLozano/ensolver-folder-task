using System.ComponentModel.DataAnnotations;


namespace Models
{
    public class PendingTask
    {
        public int Id { get; set; }

        [Required]
        public string NameTask { get; set; }

        public bool StateTask {get;set;}
        public int FolderId { get; set; }
        public Folder Folder { get; set; }

        

    }

}
