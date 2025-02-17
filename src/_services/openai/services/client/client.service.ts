import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OnepAiClient extends OpenAI {}
