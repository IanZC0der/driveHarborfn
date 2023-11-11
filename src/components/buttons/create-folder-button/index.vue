<template>
    <div class="create-folder-button-content">
        <el-button v-if="roundFlag" type="success" :size="size" round @click="createFolderDialogVisible = true">
            Create New Folder
            <el-icon class="el-icon--right">
                <FolderAdd/>
            </el-icon>
        </el-button>
        <el-button v-if="circleFlag" icon="FolderAdd" type="success" :size="size" circle
                   @click="createFolderDialogVisible = true"></el-button>
        <el-dialog
            title="create new folder"
            v-model="createFolderDialogVisible"
            width="30%"
            @opened="focusInput"
            @closed="resetForm"
            :append-to-body=true
            :modal-append-to-body=false
            :center=true>
            <div>
                <el-form label-width="150px" :rules="createFolderRules" ref="createFolderFormRef"
                         :model="createFolderForm"
                         status-icon
                         @submit.native.prevent>
                    <el-form-item label="Folder Name" prop="folderName">
                        <el-input type="text"
                                  ref="folderNameEl"
                                  @keyup.enter.native="doCreateFolder"
                                  v-model="createFolderForm.folderName" autocomplete="off"/>
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="createFolderDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="doCreateFolder" :loading="loading">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
const props = defineProps({
    roundFlag: Boolean,
    circleFlag: Boolean,
    size: String
})

import fileService from '@/api/file'
import panUtil from '@/utils/common'
import {reactive, ref} from 'vue'
import {useFileStore} from '@/stores/file'
import {storeToRefs} from 'pinia'
import {ElMessage} from 'element-plus'

const fileStore = useFileStore()
const {paramParentId} = storeToRefs(fileStore)

const createFolderDialogVisible = ref(false)
const loading = ref(false)

const folderNameEl = ref(null)
const createFolderFormRef = ref(null)

const createFolderForm = reactive({
    folderName: ''
})

const resetForm = () => {
    createFolderFormRef.value.resetFields()
}

const focusInput = () => {
    folderNameEl.value.focus()
}

const doCreateFolder = async () => {
    await createFolderFormRef.value.validate((valid, fields) => {
        if (valid) {
            loading.value = true
            fileService.createFolder({
                parentId: paramParentId.value,
                folderName: createFolderForm.folderName
            }, res => {
                loading.value = false
                createFolderDialogVisible.value = false
                ElMessage.success('Created successfully')
                fileStore.loadFileList()
            }, res => {
                ElMessage.error(res.message)
                loading.value = false
            })
        }
    })
}

const createFolderRules = reactive({
    folderName: [
        {required: true, message: 'Please enter the folder name', trigger: 'blur'}
    ]
})

</script>

<style>

.create-folder-button-content {
    display: inline-block;
    margin-right: 10px;
}

</style>