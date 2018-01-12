using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ChatterboxAPI.Migrations
{
    public partial class chat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "chats",
                columns: table => new
                {
                    chatId = table.Column<long>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    date_created = table.Column<DateTime>(nullable: false),
                    from_id = table.Column<int>(nullable: false),
                    message = table.Column<string>(nullable: false),
                    to_id = table.Column<int>(nullable: false),
                    viewed = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_chats", x => x.chatId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "chats");
        }
    }
}
