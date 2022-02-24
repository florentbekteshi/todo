export default {
  props: {
    row: {
      required: true
    },
    editMode: {
      required: true
    },

  },
  data() {
    return {
      data: {
        email: null,
        name: null,
        gender: null,

      },
      errors: {
        email: false,
        name: false,
        gender: false
      }
    }
  },
  mounted() {
    this.data = [];
    if(this.row === undefined || this.row.length == 0) {
      console.log(this.editMode)
    } else {
      this.data = this.row
    }
  },
  methods: {
    addRow() {
      if (this.data.name == null || this.data.name == '') {
        this.errors.name = true;
      } else {
        this.errors.name = false;
      }

      if (this.data.email == null || this.data.email == '') {
        this.errors.email = true;
      }else{
        this.errors.email = false;
      }

      if (this.data.gender == null || this.data.gender == '') {
        this.errors.gender = true;
      }else{
        this.errors.gender = false;
      }
      if(!this.errors.name && !this.errors.email && !this.errors.gender){
        this.$emit('addRow', this.data)
        this.$emit('toggleFunc');
      }
    },
    editRow() {
      this.$emit('editRow', this.row)
      this.$emit('toggleFunc');
    }
  },
}
