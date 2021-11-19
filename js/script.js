/**Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Link doc Axios: https://github.com/axios/axios;
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const app = new Vue({
    el: '#app',
    data: {
        apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
        emailSingle: '',
        emailCounter: 0,
    },
    computed: {

    },
    created: {

    },
    methods: {
        getApiEmails() {
            axios.get(this.apiUrl)
            axios.get('/user?ID=12345')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    }
});