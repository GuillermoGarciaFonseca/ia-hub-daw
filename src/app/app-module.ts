import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
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

@NgModule({
  declarations: [
    App,
    Home,
    AiChatgpt,
    AiClaude,
    AiGemini,
    AiCopilot,
    AiMistral,
    AiLlama,
    AiPerplexity,
    AiGrok,
    AiMidjourney,
    AiStableDiffusion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
