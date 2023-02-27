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
                    console.log(res.data.email)
                    this.email.push(res.data.email)
                })
        }
    },
    mounted() {
		for (let i = 0; i < 10; i++) {
			this.getEmail()
		}
	},
}).mount('#app')


