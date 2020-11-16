import { createRouter, createWebHistory } from 'vue-router';
import DcHeros from './pages/DcHeros';
import Calendar from './pages/Calendar';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReuseableModal from './pages/ReuseableModal';
import Chat from './pages/Chat';
import Home from './pages/Home';
import store from './store/index';

const routes = [
  { path: '/dc-heros', component: DcHeros },
  { path: '/calendar', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
  {
    path: '/calculator',
    component: Calculator,
    meta: { middleware: 'auth' }
  },
  { path: '/reuseable-modal', component: ReuseableModal },
  {
    path: '/chat',
    component: Chat,
    meta: { middleware: 'auth' }
  },
  { path: '/', component: Home },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
