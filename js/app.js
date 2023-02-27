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
                    this.email.push(res.data.email)
                })
        }
    }
}).mount('#app')

