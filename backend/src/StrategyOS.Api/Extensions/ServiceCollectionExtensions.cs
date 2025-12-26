namespace StrategyOS.Api.Extensions;

internal static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApiServices(this IServiceCollection services)
    {
        services.AddProblemDetails();
        services.AddHealthChecks();

        return services;
    }

    public static IServiceCollection AddApiDocumentation(this IServiceCollection services)
    {
        services.AddOpenApi();

        return services;
    }

    public static IServiceCollection AddApiSecurity(this IServiceCollection services)
    {
        services.AddCors();
        services.AddAuthentication();
        services.AddAuthorization();

        return services;
    }

    public static IServiceCollection AddApiPerformance(this IServiceCollection services)
    {
        services.AddResponseCompression(options =>
        {
            options.EnableForHttps = true;
        });
        services.AddHttpLogging(options =>
        {
            options.CombineLogs = true;
        });

        return services;
    }
}

