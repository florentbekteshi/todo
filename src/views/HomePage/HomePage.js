import modalAdd from '@/views/HomePage/Modals/Add';
import modalEdit from '@/views/HomePage/Modals/Edit';

export default{
    components: {modalAdd, modalEdit},
    data(){
        return{
          showModalNew:false,
          showModalEdit: false,
          rowEdit:[],
          add:[
            {name:'Florent', email:'florentbekteshii@gmail.com', gender:'M'},
          ]
        }
      },
    methods:{
        toggleModalNew(){
            this.showModalNew = !this.showModalNew
        },
        toggleModalEdit(){
            this.showModalEdit = !this.showModalEdit
        },
        addRow(row){
            this.add.push(row)
        },
        deleteRow(index){

            if(confirm('Are you sure u want to delete this user!')){
                this.add.splice(index,1);
            }
        },



    }
}