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
        emailList: '',
    },
    created() {
        this.getApiEmails();
    },
    methods: {
        getApiEmails() {
            axios.get(this.apiUrl)
            .then( response => {
                // handle success
                console.log(response);
                this.emailSingle = response.data.response;
            })
            .catch( error => {
                // handle error
                console.log(error);
            })
        },
        getCounter(){
            for(let i = 0; i <= 10; i++) {
                const mailElement ='<li class=email">{{ emailSingle }}</li>';
                emailList = document.getElementById('list').innerHtml ; 
            } 
            return emailList;
        }
    }
});