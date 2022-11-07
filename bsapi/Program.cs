using bsapi.Database;
using bsapi.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connectionMySql = builder.Configuration.GetConnectionString("Connection");
builder.Services.AddDbContext<DestinosContext>(
    options => options.UseMySql(connectionMySql, 
    ServerVersion.Parse("8.0.30-mysql"))
);

builder.Services.AddScoped<IDestinoRepository, DestinoRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
