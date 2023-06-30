const { rewrites } = require("../../../next.config");

module.exports = {
    async rewrites(){
        return [
            {
                source:'/home',
                destination:'/src/component/dashboard/Dashboard.jsx'
            },
            {
                source:'/member',
                destination:'/src/component/member/Member.jsx'
            },
            {
                source:'/laporan',
                destination:'/src/component/report/Report.jsx'
            },
        ]
    }
}