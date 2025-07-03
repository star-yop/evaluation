import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async callCertificateService(userId: string, courseId: string) {
    const response = await firstValueFrom(
      this.httpService.post('http://localhost:3004/certificates', {
        userId,
        courseId,
      }),
    );
    return response.data;
  }

  async callNotificationService(to: string, message: string) {
    const response = await firstValueFrom(
      this.httpService.post('http://localhost:3005/notify', {
        to,
        message,
      }),
    );
    return response.data;
  }

  async getCourseDetails(courseId: string) {
    const response = await firstValueFrom(
      this.httpService.get(`http://localhost:3002/courses/${courseId}`),
    );
    return response.data;
  }

  async getUserDetails(userId: string) {
    const response = await firstValueFrom(
      this.httpService.get(`http://localhost:3001/users/${userId}`),
    );
    return response.data;
  }
}