import connection from "./connection";

// menampilkan data kategori_aset
export const getCategoryAset = ()=>{
    return new Promise ((resolve,reject)=>{
        connection.query('SELECT*FROM kategori_aset',(error,results)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(results);
            }
        });
    });
};

// post data
export const createCategoryAset = (categoryData)=>{
    return new Promise((resolve,reject)=>{
        connection.query('INSERT INTO kategori_aset SET ?', categoryData,(error,results)=>{
            if(error){
                reject(error);
            }else{
                resolve(results);
            }
        });
    });
};
