module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 别名配置
                // "@":"src" 系统已经配置过了
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}
