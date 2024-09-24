<template>
    <!-- Modal -->

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6><b>DANH SÁCH NHÂN VIÊN</b></h6>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Thêm Mới
                    </button>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Họ Và Tên</th>
                                <th class="text-center">Email</th>
                                <th class="text-center">Số Điện Thoại</th>
                                <th class="text-center">Địa Chỉ</th>
                                <th class="text-center">Mã bưu điện</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in users " :key="index">
                                <tr>
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ho_ten }}</td>
                                    <td class="align-middle">{{ value.email }}</td>
                                    <td class="align-middle">{{ value.sdt }}</td>
                                    <td class="align-middle text-center">{{ value.diachi }}</td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#capnhatnv" v-on:click="Object.assign(update,value)" >Cập nhật</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deletenv" v-on:click="delete_nv=value" >Xóa</button>
                                    </td>
                                </tr>
                            </template>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
        <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">User Created</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputFirstName" class="form-label">Full Name</label>
                                <input type="email" class="form-control" v-model="create.ho_ten" id="inputFirstName">
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail" class="form-label">Email</label>
                                <input type="email" class="form-control"  v-model="create.email" id="inputEmail">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">sdt</label>
                                <input type="number" v-model="create.sdt" class="form-control" >
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword" class="form-label">diachi</label>
                                <input type="text" class="form-control" v-model="create.diachi" id="inputPassword">
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword" class="form-label">code</label>
                                <input type="text" class="form-control" v-model="create.code" id="inputPassword">
                            </div>
                            
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="createUser()" data-bs-dismiss="modal">Thêm mới</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="capnhatnv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">User Update</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputFirstName" class="form-label">Full Name</label>
                                <input type="email" class="form-control" v-model="update.ho_ten" id="inputFirstName">
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail" class="form-label">Email</label>
                                <input type="email" class="form-control"  v-model="update.email" id="inputEmail">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">sdt</label>
                                <input type="number" v-model="update.sdt" class="form-control" >
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword" class="form-label">diachi</label>
                                <input type="text" class="form-control" v-model="update.diachi" id="inputPassword">
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword" class="form-label">code</label>
                                <input type="text" class="form-control" v-model="update.code" id="inputPassword">
                            </div>
                            
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="updateUser()" data-bs-dismiss="modal">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="deletenv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">User Delete</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <h1>Bạn muốn xóa nhân viên này</h1>
                        {{ 
                            delete_nv.ho_ten
                         }}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="deleteUser()" data-bs-dismiss="modal">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            users: [],
            create:{},
            update:{},
            delete_nv:{},
        }
    },
    mounted() {
        this.loadusers();
    },
    methods: {
        loadusers() {
            axios
                .get("http://127.0.0.1:8000/api/test-thien/getData")
                .then((res) => {
                    this.users = res.data;
                    //console.log('123', this.users);

                });
        },
        createUser(){
            axios
                .post("http://127.0.0.1:8000/api/test-thien/createData" ,this.create )
                .then((res) => {
                    this.loadusers()
                    if(res.status){
                        //console.log('123', this.message);
                    }
                });
        },
        updateUser(){
            axios
                .put("http://127.0.0.1:8000/api/test-thien/updateData" ,this.update )
                .then((res) => {
                    this.loadusers()
                    if(res.status){
                        //console.log('123', this.message);
                    }
                });
        },
        deleteUser(){
            console.log("11",this.delete_nv);
            axios
                .post("http://127.0.0.1:8000/api/test-thien/deleteData/" +this.delete_nv )
                .then((res) => {
                    console.log("123"+this.delete_nv);
                    
                    if(res.status){
                        let obj = 123 + '[object Object]'; // Tạo ra giá trị 123[object Object]
                        console.log(obj); // In ra giá trị này trong console
                    }
                    this.loadusers()
                });
        },
    },
}

</script>
<style>
.align-middle {
    text-align: center;
}

</style>