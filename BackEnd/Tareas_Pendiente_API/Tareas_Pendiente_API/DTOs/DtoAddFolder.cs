using System.ComponentModel.DataAnnotations;


namespace Dtos
{
    public class DtoAddFolder
    {
        [Required(ErrorMessage = "El campo {0} es requerido ")]
      
        public string NameFolder { get; set; }
    }   
}
