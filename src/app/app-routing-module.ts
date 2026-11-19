import { NgModule } from '@angular/core';
import { CanMatchFn, RouterModule, Routes } from '@angular/router';

import { AIS, findAiBySlug } from './data/ais';
import { AiDetail } from './pages/ai-detail/ai-detail';
import { Home } from './pages/home/home';

/** Solo deja entrar en /ia/:slug si la IA existe; si no, cae en la redirección a la portada. */
const knownAiGuard: CanMatchFn = (_route, segments) => !!findAiBySlug(segments[1]?.path);

const routes: Routes = [
  { path: '', component: Home },
  { path: 'ia/:slug', component: AiDetail, canMatch: [knownAiGuard] },

  // Rutas antiguas (/claude, /chatgpt…) → nuevas (/ia/claude…), para no romper enlaces.
  ...AIS.map((ai) => ({ path: ai.slug, redirectTo: `ia/${ai.slug}`, pathMatch: 'full' as const })),

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
