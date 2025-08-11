import { httpServer } from "./app";

const PORT = process.env.PORT || 5000;

async function bootstrap() {
    try {
        httpServer.listen(PORT, () => {
            console.info(`Server running on port ${PORT}`);
        });

        const exitHandler = () => {
            httpServer.close(() => {
                console.info("Server closed");
                process.exit(1);
            });
        };

        const unexpectedErrorHandler = (error: unknown) => {
            console.error(error);
            exitHandler();
        };

        process.on("uncaughtException", unexpectedErrorHandler);
        process.on("unhandledRejection", unexpectedErrorHandler);
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

bootstrap();
