Vue.createApp({
    data() {
        return {
            word: null,
            savedWord: ""
        }
    },
    methods: {
        Add () {
            this.savedWord = this.word
        }
    },
    computed: {
        Upper() {
            return this.savedWord.toUpperCase()
        },
        Lower() {
            return this.savedWord.toLowerCase()
        }
    }
}).mount("#app")