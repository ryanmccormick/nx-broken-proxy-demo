import { AxiosResponse } from 'axios';
import { CommonHttpService, GreetingsResponse } from 'demo-common';

export const GREETING_URL = '/api/greeting';

export class GreetingService extends CommonHttpService {
  getGreetings(): Promise<GreetingsResponse> {
    return Promise.resolve().then(() => {
      return this.get<GreetingsResponse>(GREETING_URL).then((response: AxiosResponse<GreetingsResponse>) => {
        return response.data;
      });
    });
  }
}
