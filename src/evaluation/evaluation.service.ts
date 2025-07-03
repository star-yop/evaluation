import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';

@Injectable()
export class EvaluationService {
  constructor(private prisma: PrismaService) {}

  async createEvaluation(createEvaluationDto: CreateEvaluationDto) {
    return this.prisma.evaluation.create({
      data: {
        courseId: createEvaluationDto.courseId,
        userId: createEvaluationDto.userId,
        answers: createEvaluationDto.answers,
        score: createEvaluationDto.score,
        passed: createEvaluationDto.score >= 70, 
      },
    });
  }

  async findAllEvaluations() {
    return this.prisma.evaluation.findMany();
  }

  async findEvaluationById(id: string) {
  return this.prisma.evaluation.findUnique({
    where: { id },
  });
}

  async deleteEvaluation(id: string) {
    return this.prisma.evaluation.delete({
      where: { id },
    });
  }
}