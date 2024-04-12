import Modal from "antd/es/modal"

import { ENV } from "./type";
import { checkEnv } from "./env";


const DEFAULT_OPTIONS = {
    checkList: [ENV.WE_CHAT]
}

/**
 * 提醒器
 * @param options 
 * @returns 
 */
export const reminder = (options = DEFAULT_OPTIONS) => {
    const { checkList } = options

    if (!checkList.length) {
        return
    }

    const shouldRemind = checkList.some(env => checkEnv(env))

    if (shouldRemind) {
        // 提醒用户
        Modal.confirm({
            title: '提醒',
            content: '当前在微信内置浏览器',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                // TODO
            },
            onCancel() {
                // 取消操作
            },
        })
    }

    return shouldRemind
}