var app = new Vue({
    el : '#app',
    data :  {
        title   : 'Notemaster',
        note    :   {
            title   :   '',
            text    :   '',
        },
        notes   :   [
                    {
                        title   :   'Lasagna',
                        text    :   'Bitch Bitch',
                        date    :   Date.now().toLocaleString()
                    },
        ]   
    },
    methods: {
        addNote()   {
            let {title, text} = this.note
            this.notes.push({
                title,
                text,
                date    :   Date.now().toLocaleString()
            })
            this.note.title = ''
            this.note.text = ''
        }
    },
})