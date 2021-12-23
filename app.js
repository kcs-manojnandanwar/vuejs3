const app = Vue.createApp({
    data(){
        return{
           counter : 0,
           name: ''


           };
        
    },
    methods:{
        submitForm(){
            
            alert('submitted');

        },
        setname(event, lastname){
           this.name= event.target.value + ' ' + lastname;
        },
        add(num){
            this.counter= this.counter+num;
           
            },
           reduce(num){
               this.counter = this.counter-num;

           
            }
        }


    });



app.mount('#event');