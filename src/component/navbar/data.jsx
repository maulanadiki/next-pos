export const Menu =[
    {
        id:0,
        name:'Home',
        icon:'bx bx-home-alt',
        path:'/home',
        submenu:'',
    },
    {
        id:1,
        name:'POS',
        icon:'bx bx-basket',
        path:'/home',
        submenu:'',
    },
    {
        id:2,
        name:'Member',
        icon:'bx bxs-id-card',
        path:'/member',
        submenu:'',
    },
    {
        id:3,
        name:'Aset Barang',
        icon:'bx bx-money',
        submenu:[
            {
                id:6,
                title:'Daftar Aset',
                path:'/aset',
                icon:'uil uil-file-plus-alt'
            },
            {
                id:8,
                title:'Barang Masuk',
                path:'/masuk',
                icon:'uil uil-import',
            },
            {
                id:9,
                title:'Barang Keluar',
                path:'/keluar',
                icon:'uil uil-parcel',
            },
            {
                id:10,
                title:'Stok Barang',
                path:'/stok',
                icon:'bx bxs-paste',
            },
        ],
    },
    {
        id:4,
        name:'Gift',
        icon:'bx bx-gift',
        submenu:[
            {
                id:11,
                title:'Vocher Gift',
                path:'/home',
                icon:'bx bxs-discount',
            },
            {
                id:12,
                title:'Setting Program',
                path:'/home',
                icon:'uil uil-setting',
            }
        ],
    },
    {
        id:5,
        name:'Laporan Service',
        path:'/laporan',
        icon:'bx bxs-report',
        submenu:'',
    },
]