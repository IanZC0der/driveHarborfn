/**
 * Created by rubin on 2020/6/4.
 */

'use strict'

import axios from 'axios'
import {clearToken, getToken} from '@/utils/cookie'
import {ElMessage, ElMessageBox} from 'element-plus'
import panUtil from '@/utils/common'
import {useBreadcrumbStore} from '@/stores/breadcrumb'
import {useFileStore} from '@/stores/file'
import {useNavbarStore} from '@/stores/navbar'
import {useUserStore} from '@/stores/user'

const toLogin = function () {
        const breadcrumbStore = useBreadcrumbStore()
        const fileStore = useFileStore()
        const navbarStore = useNavbarStore()
        const userStore = useUserStore()
        // to re-login
        ElMessageBox.confirm('You need to relogin', 'Confirm to Logout', {
            confirmButtonText: 'Relogin',
            cancelButtonText: 'Cancel',
            type: 'warning'
        }).then(() => {
            clearToken()
            fileStore.clear()
            breadcrumbStore.clear()
            navbarStore.clear()
            userStore.clear()
            window.location.reload()
        })
    },
    http = axios.create({
        baseURL: panUtil.getUrlPrefix(),
        timeout: 1000 * 60,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })

http.interceptors.request.use(config => {
    if (config.data) {
        config.data = JSON.stringify(config.data)
    }
    let token = getToken()
    if (token) {
        config.headers['Authorization'] = token
    }
    return config
}, error => {
    ElMessage.error('Request failed')
    return
})

http.interceptors.response.use(res => {
    if (res.data.code === 10) {
        toLogin()
        res.data.message = 'You need to relogin'
        return Promise.reject(res.data)
    }
    if (res.data.code !== 0) {
        return Promise.reject(res.data)
    }
    return res.data
}, error => {
    ElMessage.error('Request failure')
    return
})

export default http
