export default{
  props:{
    row:{
      required: true
    },
    editMode:{
      required: true
    },
   
  },
  data(){
    return{
      data:{
        email:null,
        name: null,
        gender: null,
        
      }
    }
  },
  methods:{
    addRow(){
     if(this.data.name == null || this.data.name == ''){
       
       document.getElementById('nameInput').style.border = "1px solid red";
       return;
     }
     if(this.data.email == null || this.data.email == ''){
      document.getElementById('emailInput').style.border = "1px solid red";
       return;
    }
    if(this.data.gender == null || this.data.gender == ''){
      document.getElementById('gender').style.border = "1px solid red";
       return;
    }
    this.$emit('addRow', this.data)
    this.$emit('toggleFunc');
    

    },
    editRow(){
      this.$emit('editRow', this.row)
      this.$emit('toggleFunc');
    }
  },
}
