import  Mock  from "mockjs"

let list = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            list.push(Mock.mock({
                苹果: Mock.Random.float(100, 8000, 0, 0),
                小米: Mock.Random.float(100, 8000, 0, 0),
                魅族: Mock.Random.float(100, 8000, 0, 0),
                oppo: Mock.Random.float(100, 8000, 0, 0),
                vivo: Mock.Random.float(100, 8000, 0, 0),
                三星: Mock.Random.float(100, 8000, 0, 0),
            }))
        }


        return {
            code: 20000,
            data: {
                //饼图
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    }, {
                        name: '苹果',
                        value: 5999
                    }, {
                        name: '魅族',
                        value: 2200
                    },
                    {
                        name: 'opppo',
                        value: 1200
                    },
                    {
                        name: 'vivo',
                        value: 1400
                    }, {
                        name: '三星',
                        value: 3200
                    }
                ],
                //柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 50,
                        active: 220
                    },
                    {
                        date: '周三',
                        new: 10,
                        active: 240
                    },
                    {
                        date: '周四',
                        new: 25,
                        active: 280
                    },
                    {
                        date: '周五',
                        new: 35,
                        active: 290
                    },
                    {
                        date: '周六',
                        new: 20,
                        active: 300
                    },
                    {
                        date: '周日',
                        new: 15,
                        active: 250
                    }
                ],
                //折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005','20191006','20191007'],
                    data: list
                },
                tableData: [
                    {
                        name: '苹果',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 20000
                    },
                    {
                        name: '小米',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 20000
                    },
                    {
                        name: '魅族',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 20000
                    },
                    {
                        name: 'oppo',
                        todayBuy: 200,
                        monthBuy: 3500,
                        totalBuy: 20000
                    }
                ]
            }
        }

    }
}