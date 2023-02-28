const { createApp } = Vue

createApp({
    data() {
        return {
            email: [],
        }
    },
    methods: {
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    console.log('email generata: ' + res.data.response)
                    this.email.push(res.data.response)
                })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getEmail()
        }
    },
}).mount('#app')


