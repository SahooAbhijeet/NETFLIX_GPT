import OpenAI from 'openai';
import { OPEN_AI_API_KEY } from './constants';


const openai = new OpenAI({
  apiKey: OPEN_AI_API_KEY, 
  dangerouslyAllowBrowser: true,
});

export default openai;