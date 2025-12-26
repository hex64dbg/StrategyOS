using StrategyOS.Api.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddApiServices()
    .AddApiDocumentation()
    .AddApiSecurity()
    .AddApiPerformance();

var app = builder.Build();

app.UseApiMiddleware()
    .MapApiEndpoints();

await app.RunAsync();
