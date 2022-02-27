
using AutoMapper;
using Dtos;
using Models;

namespace WebApiAutores.Utilidades
{
    public class AutoMapperProfiles : Profile
    {

        public AutoMapperProfiles()
        {
            CreateMap<DtoAddFolder, Folder>();
            CreateMap<Folder,FolderDTO>();

            CreateMap<DtoAddTasks,PendingTask>();

             CreateMap<PendingTask,TaskDTO>();


        }
    }
}
