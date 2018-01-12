﻿// <auto-generated />
using ChatterboxAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace ChatterboxAPI.Migrations
{
    [DbContext(typeof(ChatterBoxContext))]
    [Migration("20180112063304_chat")]
    partial class chat
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("ChatterboxAPI.Models.chat", b =>
                {
                    b.Property<long>("chatId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("date_created");

                    b.Property<int>("from_id");

                    b.Property<string>("message")
                        .IsRequired();

                    b.Property<int>("to_id");

                    b.Property<bool>("viewed");

                    b.HasKey("chatId");

                    b.ToTable("chats");
                });
#pragma warning restore 612, 618
        }
    }
}
