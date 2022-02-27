using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tareas_Pendiente_API.Migrations
{
    public partial class AddState : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "StateTask",
                table: "PendingTask",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StateTask",
                table: "PendingTask");
        }
    }
}
