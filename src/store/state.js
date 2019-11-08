import axios from 'axios'

export default {
    data () {
        
    },
    mounted() {
        {
            axios({ method: 'GET', 'url': 'http://localhost:8080/usuarios' }).then(result => {
                this.usuarios = result.data
                console.log('foi')
            }, error => {
                console.error(error)
            })
        }
    }
}