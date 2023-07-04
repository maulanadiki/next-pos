export const Menu =[
    {
        id:0,
        menu:'Home',
        icon:'bx bx-home-alt',
        source:'/home',
        submenu:'',
    },
    {
        id:1,
        menu:'POS',
        icon:'bx bx-basket',
        source:'/home',
        submenu:'',
    },
    {
        id:2,
        menu:'Member',
        icon:'bx bxs-id-card',
        source:'/member',
        submenu:'',
    },
    {
        id:3,
        menu:'Aset Barang',
        icon:'bx bx-money',
        submenu:[
            {
                id:6,
                title:'Daftar Aset',
                source:'/aset',
                icon:'uil uil-file-plus-alt'
            },
            {
                id:8,
                title:'Barang Masuk',
                source:'/masuk',
                icon:'uil uil-import',
            },
            {
                id:9,
                title:'Barang Keluar',
                source:'/keluar',
                icon:'uil uil-parcel',
            },
            {
                id:10,
                title:'Stok Barang',
                source:'/stok',
                icon:'bx bxs-paste',
            },
        ],
    },
    {
        id:4,
        menu:'Gift',
        icon:'bx bx-gift',
        submenu:[
            {
                id:11,
                title:'Vocher Gift',
                source:'/home',
                icon:'bx bxs-discount',
            },
            {
                id:12,
                title:'Setting Program',
                source:'/home',
                icon:'uil uil-setting',
            }
        ],
    },
    {
        id:5,
        menu:'Laporan Service',
        source:'/laporan',
        icon:'bx bxs-report',
        submenu:'',
    },
]