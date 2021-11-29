const app = new Vue({
    el: '#root',
    data: {
        todo: [{
                text: 'Portare fuori il cane',
                done: false,
            },
            {
                text: 'Andare in palestra',
                done: true,
            },
            {
                text: 'Vedere la Juve',
                done: false,
            },
            {
                text: 'Preparare la cena',
                done: true,
            },
            {
                text: 'Studiare',
                done: false,
            },
        ],
        inputText: '',
    },
    methods: {
        addTodo: function () {
            if (this.inputText !== "") {
                this.todo.push({
                    text: this.inputText,
                    done: false
                });
                this.inputText = "";
            }
        },
        removeTodo: function (i) {
            this.todo.splice(i, 1);
        },

        lineTodo: function (element) {
            if (element.done === true) {
                return 'sbarrato';
            } else {
                return '';
            }
        },

        invertDone: function (element) {
            if (element.done == true) {
                element.done = false;
            } else {
                element.done = true;
            }
        },
    }
});