<template>
    <div>
        <el-dropdown @command="handleCommand">
                          <span class="pan-user-info">
                            Welcome,{{ username }}
                              <el-icon class="el-icon--right"><arrow-down/></el-icon>
                          </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="changePassword">Change Password</el-dropdown-item>
                    <el-dropdown-item command="exit">Logout</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-dialog
            title="Change Password"
            v-model="changePasswordDialogVisible"
            @opened="focusPasswordInput"
            @closed="resetChangePasswordForm"
            width="30%"
            :append-to-body=true
            :modal-append-to-body=false
            :center=true>
            <div>
                <el-form label-width="150px" :rules="changePasswordRules" ref="changePasswordFormRef"
                         :model="changePasswordForm"
                         status-icon
                         @submit.native.prevent>
                    <el-form-item label="Old Password" prop="password">
                        <el-input type="password"
                                  show-password
                                  ref="passwordEl"
                                  @keyup.enter.native="doChangePassword"
                                  v-model="changePasswordForm.password" autocomplete="off"/>
                    </el-form-item>
                    <el-form-item label="New Password" prop="newPassword">
                        <el-input type="password"
                                  show-password
                                  @keyup.enter.native="doChangePassword"
                                  v-model="changePasswordForm.newPassword" autocomplete="off"/>
                    </el-form-item>
                    <el-form-item label="Confirm Password" prop="reNewPassword">
                        <el-input type="password"
                                  show-password
                                  @keyup.enter.native="doChangePassword"
                                  v-model="changePasswordForm.reNewPassword" autocomplete="off"/>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="changePasswordDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="doChangePassword" :loading="loading">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import {storeToRefs} from 'pinia'
import {ElMessage, ElMessageBox, ElNotification} from 'element-plus'
import userService from '@/api/user'
import {clearToken} from '@/utils/cookie'
import {useUserStore} from '@/stores/user'
import {useBreadcrumbStore} from '@/stores/breadcrumb'
import {useFileStore} from '@/stores/file'
import {useNavbarStore} from '@/stores/navbar'
import {useTaskStore} from '@/stores/task'

const userStore = useUserStore()
const {username} = storeToRefs(userStore)

const breadcrumbStore = useBreadcrumbStore()
const fileStore = useFileStore()
const navbarStore = useNavbarStore()
const taskStore = useTaskStore()

const changePasswordDialogVisible = ref(false)
const loading = ref(false)

const changePasswordForm = reactive({
    password: '',
    newPassword: '',
    reNewPassword: ''
})

const goLogin = () => {
    clearToken()
    breadcrumbStore.clear()
    userStore.clear()
    fileStore.clear()
    navbarStore.clear()
    taskStore.clear()
    window.location.reload()
}

const doExit = () => {
    ElMessageBox.confirm('Please Confirm Logout?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
    }).then(() => {
        userService.exit(() => {
            goLogin()
        }, res => {
            ElMessage.error(res.message)
        })

    })
}

const passwordEl = ref(null)

const handleCommand = (command) => {
    if (command === 'changePassword') {
        changePasswordDialogVisible.value = true
    } else if (command === 'exit') {
        doExit()
    }
}

const changePasswordFormRef = ref(null)

const resetChangePasswordForm = () => {
    changePasswordFormRef.value.resetFields()
}

const focusPasswordInput = () => {
    passwordEl.value.focus()
}

const checkReNewPassword = (rule, value, callback) => {
    if (value !== changePasswordForm.newPassword) {
        return callback(new Error('Inconsistent new password'));
    } else {
        callback()
    }
}

const changePasswordRules = reactive({
    password: [
        {required: true, message: 'Please enter old password', trigger: 'blur'},
        {min: 8, max: 16, message: 'Please enter 8-16 digit password', trigger: 'blur'}
    ],
    newPassword: [
        {required: true, message: 'Please enter new password', trigger: 'blur'},
        {min: 8, max: 16, message: 'Please enter 8-16 digit password', trigger: 'blur'}
    ],
    reNewPassword: [
        {required: true, message: 'Please comfirm new password', trigger: 'blur'},
        {validator: checkReNewPassword, trigger: 'blur'}
    ]
})

const doChangePassword = async () => {
    await changePasswordFormRef.value.validate((valid, fields) => {
        if (valid) {
            loading.value = true
            userService.changePassword({
                oldPassword: changePasswordForm.password,
                newPassword: changePasswordForm.newPassword
            }, () => {
                loading.value = false
                changePasswordDialogVisible.value = false
                ElNotification({
                    title: 'Success',
                    message: 'Password uploaded, jumping to the login page...',
                    type: 'success'
                })
                setTimeout(goLogin, 1000)
            }, res => {
                ElMessage.error(res.message)
                loading.value = false
            })
        }
    })
}

const initUserInfoIfNecessary = () => {
    if (!username.value) {
        userService.info(res => {
            fileStore.setParentId(res.data.rootFileId)
            fileStore.setDefaultParentId(res.data.rootFileId)
            fileStore.setDefaultParentFilename(res.data.rootFilename)
            userStore.setUsername(res.data.username)
        }, res => {
            ElMessage.error(res.message)
        })
    }
}

onMounted(() => {
    initUserInfoIfNecessary()
})

</script>

<style scoped>
.pan-user-info {
    color: #409EFF;
}
</style>