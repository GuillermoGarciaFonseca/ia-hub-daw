import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';

import { AiChatgpt } from './pages/ai-chatgpt/ai-chatgpt';
import { AiClaude } from './pages/ai-claude/ai-claude';
import { AiGemini } from './pages/ai-gemini/ai-gemini';
import { AiCopilot } from './pages/ai-copilot/ai-copilot';
import { AiMistral } from './pages/ai-mistral/ai-mistral';
import { AiLlama } from './pages/ai-llama/ai-llama';
import { AiPerplexity } from './pages/ai-perplexity/ai-perplexity';
import { AiGrok } from './pages/ai-grok/ai-grok';
import { AiMidjourney } from './pages/ai-midjourney/ai-midjourney';
import { AiStableDiffusion } from './pages/ai-stable-diffusion/ai-stable-diffusion';

const routes: Routes = [
  { path: '', component: Home },

  { path: 'chatgpt', component: AiChatgpt },
  { path: 'claude', component: AiClaude },
  { path: 'gemini', component: AiGemini },
  { path: 'copilot', component: AiCopilot },
  { path: 'mistral', component: AiMistral },
  { path: 'llama', component: AiLlama },
  { path: 'perplexity', component: AiPerplexity },
  { path: 'grok', component: AiGrok },
  { path: 'midjourney', component: AiMidjourney },
  { path: 'stable-diffusion', component: AiStableDiffusion },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
