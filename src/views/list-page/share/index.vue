<template>
    <div>
        <div class="share-button-content">
            <div class="cancel-button-content">
                <el-button type="danger" size="default" round @click="cancelShares">
                    Cancel Share
                    <el-icon class="el-icon--right">
                        <SwitchButton/>
                    </el-icon>
                </el-button>
            </div>
        </div>
        <div class="share-list-content">
            <el-table
                ref="shareTable"
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
                    label="Share Name"
                    prop="shareName"
                    sortable
                    show-overflow-tooltip
                    min-width="750">
                    <template #default="scope">
                        <div class="share-name-content">
                            <i class="fa fa-share-alt"
                               style="margin-right: 15px; font-size: 20px; cursor: pointer;"/>
                            <span style="cursor:pointer;">{{ scope.row.shareName }}</span>
                        </div>
                        <div class="share-operation-content">
                            <el-tooltip class="item" effect="light" content="Copy Link" placement="top">
                                <el-button type="success" size="small" circle @click="copy(scope.row)" icon="Link">
                                </el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="light" content="Cancel" placement="top">
                                <el-button type="danger" size="small" circle @click="cancelShare(scope.row)"
                                           icon="SwitchButton">
                                </el-button>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="shareUrl"
                    sortable
                    align="center"
                    label="Link"
                    min-width="300">
                    <template #default="scope">
                        <el-link type="primary" :href="scope.row.shareUrl" target="_blank">
                            {{ scope.row.shareUrl.substring(0, 30) + '...' }}
                        </el-link>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="shareCode"
                    sortable
                    align="center"
                    label="Code"
                    min-width="140">
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    sortable
                    align="center"
                    label="Share Time"
                    min-width="240">
                </el-table-column>
                <el-table-column
                    prop="shareStatus"
                    sortable
                    label="Share Status"
                    min-width="240"
                    align="center"
                    :formatter="formatShareStatus">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>

import shareService from '@/api/share'
import panUtil from '@/utils/common'
import {onMounted, ref} from 'vue'
import {useFileStore} from '@/stores/file'
import {ElMessage, ElMessageBox} from 'element-plus'
import useClipboard from 'vue-clipboard3'

const {toClipboard} = useClipboard()

const fileStore = useFileStore()

const tableData = ref([])
const tableHeight = ref(window.innerHeight - 200)
const multipleSelection = ref([])
const tableLoading = ref(true)

const loadTableData = () => {
    tableLoading.value = true
    shareService.getShares(res => {
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

const doCancelShares = (shareIds) => {
    ElMessageBox.confirm('Are you sure you want to cancel?', 'Cancel Share', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
    }).then(() => {
        shareService.cancelShare({
            shareIds: shareIds
        }, () => {
            ElMessage.success('Share Cancelled')
            loadTableData()
        }, res => {
            ElMessage.error(res.message)
        })
    })
}

const cancelShares = () => {
    if (multipleSelection.value && multipleSelection.value.length > 0) {
        let shareIdArr = new Array()
        multipleSelection.value.forEach(item => {
            shareIdArr.push(item.shareId)
        })
        doCancelShares(shareIdArr.join('__,__'))
        return
    }
    ElMessage.error('Please select the share(s) you want to undo')
}


const cancelShare = (row) => {
    doCancelShares(row.shareId)
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

const formatShareStatus = (row, column, cellValue, index) => {
    if (row.shareStatus === 1) {
        return 'Share was cancelled'
    } else if (row.shareDayType === 0) {
        return 'Valid Permanently'
    } else {
        return row.shareEndTime + ' Expired'
    }
}

const copy = async (row) => {
    try {
        let shareMessage = 'Link: ' + row.shareUrl + '\nCode: ' + row.shareCode + '\nSend the link to friends now!'
        await toClipboard(shareMessage)
        ElMessage.success('Copied')
    } catch (e) {
        console.error(e)
        ElMessage.error('Copy failed, please try again.')
    }
}

</script>

<style scoped>

.share-button-content {
    display: inline-block;
}

.share-button-content .cancel-button-content {
    margin: 20px 0 0 30px;
}

.share-list-content {
    width: 100%;
    height: 100%;
    margin-top: 20px;
}

.share-operation-content {
    display: none;
    position: absolute;
    right: 200px;
    top: 8px;
}

</style>