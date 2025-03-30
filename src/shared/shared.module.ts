import { Logger, Module } from "@nestjs/common";

@Module({
    imports: [], // <-- here
    controllers: [],
    providers: [Logger],
    exports: [Logger],
  })
  export class SharedModule {}
  