import modalAdd from '@/views/HomePage/Modals/Add';

export default {
    components: { modalAdd },
    data() {
        return {
            showModalNew: false,
            editMode: false,
            rowEdit: [],
            lastIndex: false,
            error: [],
            add: [
                { name: 'Florent', email: 'florentbekteshii@gmail.com', gender: 'M' },
            ]
        }
    },
    methods: {
        toggleModalNew() {
            this.editMode = false;
            this.rowEdit = []
            this.showModalNew = !this.showModalNew
        },
        toggleEditModal(idx) {
            this.editMode = true;
            this.lastIndex = idx;
            this.showModalNew = !this.showModalNew;

        },
        addRow(row) {
            this.add.push(row);
        },

        deleteRow(index) {
            if (confirm('Are you sure u want to delete this user!')) {
                this.add.splice(index, 1);
            }
        },
    }
}