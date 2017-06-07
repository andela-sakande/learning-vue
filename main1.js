/**
 * Created by Sirolad on 06/06/2017.
 */
Vue.component('task-list', {
    template: `
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>`,

    data() {
        return {
            tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Go to work', complete: true}
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#root'
});
