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
                        date    :   new Date(Date.now()).toLocaleString()
                    },
                    {
                        title   :   'Lasagna',
                        text    :   'Bitch Bitch',
                        date    :   new Date(Date.now()).toLocaleString()
                    },
                    {
                        title   :   'Lasagna',
                        text    :   'Bitch Bitch',
                        date    :   new Date(Date.now()).toLocaleString()
                    },
                    {
                        title   :   'Lasagna',
                        text    :   'Bitch Bitch',
                        date    :   new Date(Date.now()).toLocaleString()
                    },
                    {
                        title   :   'Lasagna',
                        text    :   'Bitch Bitch',
                        date    :   new Date(Date.now()).toLocaleString()
                    },
        ]   
    },
    methods: {
        addNote()   {
            let {title, text} = this.note
            this.notes.push({
                title,
                text,
                date    :   new Date(Date.now()).toLocaleString()
            })
            this.note.title = ''
            this.note.text = ''
        },
        removeNote(index)   {
            this.notes.splice(index, 1);
        }
    },
})