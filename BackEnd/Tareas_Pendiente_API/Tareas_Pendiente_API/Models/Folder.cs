

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{

    public class Folder 
    {
  
        public int Id { get; set; }

        [Required]
        public string NameFolder { get; set; }
        public List<PendingTask> PendingTask { get; set; }

    }

}

