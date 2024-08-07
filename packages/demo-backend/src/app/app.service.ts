import { Injectable } from '@nestjs/common';
import { GreetingsResponse } from 'demo-common';

@Injectable()
export class AppService {
  async getData(): Promise<GreetingsResponse> {
    const greeting = { message: 'Greetings from the backend!' };
    return this.fakeDelayResponse<GreetingsResponse>(greeting, 1500);
  }

  private fakeDelayResponse<T>(data: T, delayMs = 300): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(data);
      }, delayMs);
    });
  }
}
