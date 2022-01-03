import { Logger } from '@nestjs/common';
import { BootstrapConsole } from 'nestjs-console';
import { AppModule } from 'src/app.module';

const bootstrap = new BootstrapConsole({
    module: AppModule,
    useDecorators: true,
});
bootstrap.init().then(async (app) => {
    try {
        await app.init();
        await bootstrap.boot();
        app.close();

        process.exit(0);
    } catch (e) {
        app.close();
        (new Logger()).error(e);
        process.exit(1);
    }
});