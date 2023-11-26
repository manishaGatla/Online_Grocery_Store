
using OnlineGrocery.services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//var corsSettings = Configuration.GetSection("CorsSettings").Get<CorsSettings>();

// Configure CORS with settings from appsettings.json


builder.Services.AddControllers();

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("CorsPolicy",
//        builder =>
//        {
//            builder.WithOrigins(["*"])
//                   .WithHeaders(corsSettings.AllowedHeaders.ToArray())
//                   .WithMethods(corsSettings.AllowedMethods.ToArray());
//        });
//});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<MongoConnectionService>();
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

//app.UseCors("CorsPolicy");
