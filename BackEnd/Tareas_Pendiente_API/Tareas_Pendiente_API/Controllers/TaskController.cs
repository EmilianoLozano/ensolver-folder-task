using System.Threading;
using System;
using System.Globalization;
using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Models;
using Microsoft.EntityFrameworkCore;
using Dtos;



namespace WebApiTask.Controllers
{
    [ApiController]
    [Route("api/folders/{folderId:int}/tasks")]

    public class TaskController : ControllerBase

    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public TaskController(ApplicationDbContext context,IMapper mapper)

        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<TaskDTO>>> Get(int folderId)
        {

            var existsFolder = await context.Folders.AnyAsync(x => x.Id == folderId);

            if (!existsFolder)
            {
                return NotFound();
            }
            var task = await context.PendingTask.Where(x => x.FolderId == folderId).ToListAsync();

            return mapper.Map<List<TaskDTO>>(task); 

        }

        [HttpPost]
        public async Task<ActionResult> Post(int folderId, DtoAddTasks dtoAddTasks)
        {
            var existsFolder = await context.Folders.AnyAsync(x => x.Id == folderId);

            if (!existsFolder)
            {
                return NotFound();
            }

            var task = mapper.Map<PendingTask>(dtoAddTasks);
            task.FolderId = folderId;
            
            context.Add(task);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]   
        public async Task<ActionResult> Put(int folderId,DtoAddTasks dtoAddTask, int id)
        {
            var existsFolder = await context.Folders.AnyAsync(x => x.Id == folderId);

            if (!existsFolder)
            {
                return NotFound();
            }

             var existsTask = await context.PendingTask.AnyAsync(x => x.Id == id);

            if (!existsTask)
            {
                return NotFound();
            }

            var task = mapper.Map<PendingTask>(dtoAddTask);
            task.Id= id;
            task.FolderId=folderId;
            context.Update(task);
            await context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {

            var exists = await context.PendingTask.AnyAsync(x => x.Id == id); 

            if (!exists)
            {
                return NotFound();
            }

            context.Remove(new PendingTask() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }






    }

}















