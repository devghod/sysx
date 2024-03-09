import Vue from 'vue';  
import VueVirtualScroller from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';
// import { DynamicScroller, ListItem } from 'vue-virtual-scroller';

Vue.use(VueVirtualScroller);
Vue.component('RecycleScroller', RecycleScroller);
// Vue.defineComponent('VueVirtualScroller', VueVirtualScroller)
// Vue.defineComponent('DynamicScroller', DynamicScroller)
// Vue.defineComponent('ListItem', ListItem)