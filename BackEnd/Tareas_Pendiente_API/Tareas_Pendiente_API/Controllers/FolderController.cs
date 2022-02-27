using System.IO.MemoryMappedFiles;
using System.Globalization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using AutoMapper;
using Dtos;
using WebApiTask;

namespace WebApiFolders.Controllers
{
    [ApiController]
     
    [Route("api/folders")]

    public class FolderController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public FolderController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
         [HttpGet]
        public async Task<ActionResult<List<FolderDTO>>> Get()
        {
            var folders =  await context.Folders.Include(x=> x.PendingTask).ToListAsync();
            return mapper.Map<List<FolderDTO>>(folders);
        }


        [HttpGet("{id:int}")]
        public async Task<ActionResult<FolderDTO>> Get(int id)
        {
            var folder = await context.Folders.Include(x=> x.PendingTask).FirstOrDefaultAsync(x => x.Id == id);
            if(folder == null)
            {
                return NotFound();
            }

            return mapper.Map<FolderDTO>(folder);

        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] DtoAddFolder dtoAddFolder)
        {
            var existsTask= await context.Folders.AnyAsync(x => x.NameFolder == dtoAddFolder.NameFolder);

            if(existsTask)
            {
                return BadRequest($"Ya existe una carpeta con el nombre {dtoAddFolder.NameFolder}");
            }
            
            var folder = mapper.Map<Folder>(dtoAddFolder);

            context.Add(folder);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]   
        public async Task<ActionResult> Put(DtoAddFolder dtoAddFolder, int id)
        {
            var exists = await context.Folders.AnyAsync(x => x.Id == id);
            if (!exists)
            {
                return NotFound();
            }

            var folder = mapper.Map<Folder>(dtoAddFolder);
            folder.Id= id;

            context.Update(folder);
            await context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {

            var exists = await context.Folders.AnyAsync(x => x.Id == id); 

            if (!exists)
            {
                return NotFound();
            }

            context.Remove(new Folder() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}










