import { createRouter, createWebHistory } from 'vue-router';
import DcHeros from './pages/DcHeros';
import Calendar from './pages/Calendar';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReuseableModal from './pages/ReuseableModal';
import Chat from './pages/Chat.vue';
import Home from './pages/Home';

const routes = [
  { path: '/dc-heros', component: DcHeros },
  { path: '/calendar', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
  { path: '/calculator', component: Calculator },
  { path: '/reuseable-modal', component: ReuseableModal },
  { path: '/chat', component: Chat },
  { path: '/', component: Home },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
