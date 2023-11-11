<template>
    <div>
        <div class="recycle-button-content">
            <div class="restore-button-content">
                <el-button type="success" size="default" round @click="restoreRecycle">
                    Restore
                    <el-icon class="el-icon--right">
                        <RefreshLeft/>
                    </el-icon>
                </el-button>
            </div>
            <div class="clean-button-content">
                <el-button type="danger" size="default" round @click="cleanRecycle">
                    Empty Recycles
                    <el-icon class="el-icon--right">
                        <Delete/>
                    </el-icon>
                </el-button>
            </div>
        </div>
        <div class="recycle-file-list-content">
            <el-table
                ref="recycleTable"
                v-loading="tableLoading"
                :data="tableData"
                :height="tableHeight"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                @cell-mouse-enter="showOperation"
                @cell-mouse-leave="hiddenOperation"
            >
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    label="File Name"
                    prop="fileName"
                    sortable
                    show-overflow-tooltip
                    min-width="750">
                    <template #default="scope">
                        <div class="file-name-content">
                            <i :class="getFileFontElement(scope.row.fileType)"
                               style="margin-right: 15px; font-size: 20px; cursor: pointer;"/>
                            <span style="cursor:pointer;">{{ scope.row.filename }}</span>
                        </div>
                        <div class="file-operation-content">
                            <el-tooltip class="item" effect="light" content="Restore" placement="top">
                                <el-button type="success" icon="RefreshLeft" size="small" circle
                                           @click="restoreOneRecycleFile(scope.row)">
                                </el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="light" content="Delete" placement="top">
                                <el-button type="danger" icon="Delete" size="small" circle
                                           @click="deleteOneRecycleFile(scope.row)">
                                </el-button>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="fileSizeDesc"
                    sortable
                    label="Size"
                    min-width="120"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="updateTime"
                    sortable
                    align="center"
                    label="Deletion Time"
                    min-width="240">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>

import recycleService from '@/api/recycle'
import panUtil from '@/utils/common'
import {onMounted, ref} from 'vue'
import {useFileStore} from '@/stores/file'
import {ElMessage, ElMessageBox} from 'element-plus'

const fileStore = useFileStore()

const tableData = ref([])
const tableHeight = ref(window.innerHeight - 200)
const multipleSelection = ref([])
const tableLoading = ref(true)

const loadTableData = () => {
    tableLoading.value = true
    recycleService.recycles(res => {
        tableLoading.value = false
        tableData.value = res.data
    }, res => {
        tableLoading.value = false
        ElMessage.error(res.message)
    })
}

onMounted(() => {
    fileStore.setSearchFlag(false)
    loadTableData()
})

const doDeleteRecycle = (fileIds) => {
    ElMessageBox.confirm('Are you sure you want to permanently erase the items?', 'You can’t undo this action.', {
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type: 'warning'
    }).then(() => {
        recycleService.deleteRecycle({
            fileIds: fileIds
        }, res => {
            ElMessage.success('Deletion Success')
            loadTableData()
        }, res => {
            ElMessage.error(res.message)
        })
    })
}

const cleanRecycle = () => {
    if (tableData.value && tableData.value.length > 0) {
        let fileIdArr = new Array()
        tableData.value.forEach(item => {
            fileIdArr.push(item.fileId)
        })
        doDeleteRecycle(fileIdArr.join('__,__'))
    }
}

const handleSelectionChange = (newMultipleSelection) => {
    multipleSelection.value = newMultipleSelection
}

const showOperation = (row, column, cell, event) => {
    panUtil.showOperation(cell)
}

const hiddenOperation = (row, column, cell, event) => {
    panUtil.hiddenOperation(cell)
}

const getFileFontElement = (type) => {
    panUtil.getFileFontElement(type)
}

const doRestoreRecycle = (fileIds) => {
    recycleService.restoreRecycle({
        fileIds: fileIds
    }, res => {
        ElMessage.success('File restored successfully')
        tableData.value = res.data
    }, res => {
        ElMessage.error(res.message)
    })
}

const restoreRecycle = () => {
    if (multipleSelection.value && multipleSelection.value.length > 0) {
        let fileIdArr = new Array()
        multipleSelection.value.forEach(item => {
            fileIdArr.push(item.fileId)
        })
        doRestoreRecycle(fileIdArr.join('__,__'))
        return
    }
    ElMessage.error('Please select the files to be restored')
}

const restoreOneRecycleFile = (row) => {
    doRestoreRecycle(row.fileId)
}

const deleteOneRecycleFile = (row) => {
    doDeleteRecycle(row.fileId)
}

</script>

<style scoped>

.recycle-button-content {
    display: inline-block;
}

.recycle-button-content .restore-button-content {
    margin: 20px 0 0 30px;
}

.recycle-button-content .clean-button-content {
    position: absolute;
    top: 20px;
    right: 30px;
}

.recycle-file-list-content {
    width: 100%;
    height: 100%;
    margin-top: 20px;
}

.file-operation-content {
    display: none;
    position: absolute;
    right: 100px;
    top: 8px;
}

</style>