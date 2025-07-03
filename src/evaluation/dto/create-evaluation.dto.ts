import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateEvaluationDto {
  @IsString()
  @IsNotEmpty()
  courseId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsObject()
  @IsNotEmpty()
  answers: Record<string, any>;

  @IsNumber()
  @IsNotEmpty()
  score: number;
}