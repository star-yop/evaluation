import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('evaluations')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post()
  create(@Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationService.createEvaluation(createEvaluationDto);
  }

  @Get()
  findAll() {
    return this.evaluationService.findAllEvaluations();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationService.findEvaluationById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.evaluationService.deleteEvaluation(id);
  }

  @MessagePattern({ cmd: 'generate_evaluation' })
  async handleGenerateEvaluation(data: CreateEvaluationDto) {
    return this.evaluationService.createEvaluation(data);
  }

  @MessagePattern({ cmd: 'find_all_evaluations' })
  async handleFindAllEvaluations() {
    return this.evaluationService.findAllEvaluations();
  }

  @MessagePattern({ cmd: 'find_evaluation_by_id' })
  async handleFindEvaluationById(data: { id: string }) {
    return this.evaluationService.findEvaluationById(data.id);
  }

  @MessagePattern({ cmd: 'delete_evaluation' })
  async handleDeleteEvaluation(data: { id: string }) {
    return this.evaluationService.deleteEvaluation(data.id);
  }
}