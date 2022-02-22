export default{
  data(){
    return{
      data:{
        email:null,
        name: null,
        gender: null
      }
    }
  },
  methods:{
    addRow(){
      this.$emit('addRow',this.data)
      this.$emit('toggleFunc');
    }
  },
}
