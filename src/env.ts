import { ENV } from "./type";

/**
 * 检测是否是微信浏览器
 */
export const isWechatBrowser = () => {
    const { userAgent } = window.navigator;

    return userAgent.match(/MicroMessenger/i)?.toString().toLocaleLowerCase() === 'micromessenger'
}

const ENV_CHECKER = {
    [ENV.WE_CHAT]: isWechatBrowser
}

/**
 * 检测环境
 * @param env 
 * @returns 
 */
export const checkEnv = (env: ENV) => {
    return ENV_CHECKER[env]?.() ?? false
}