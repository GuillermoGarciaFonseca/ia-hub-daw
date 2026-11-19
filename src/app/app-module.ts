import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PromptBuilder } from './components/prompt-builder/prompt-builder';
import { AiDetail } from './pages/ai-detail/ai-detail';
import { Home } from './pages/home/home';

@NgModule({
  declarations: [App, Home, AiDetail, PromptBuilder],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
