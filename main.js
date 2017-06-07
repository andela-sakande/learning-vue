/**
 * Created by Sirolad on 06/06/2017.
 */
Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});