import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {GetHelloResponse} from "./@api-interfaces/GetHelloResponse";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/api/v1")
  getHello(): GetHelloResponse {
    return {
      txt: this.appService.getHello()
    };
  }
}
