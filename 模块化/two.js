
// 1.第一种导出方式
export var name = "li";
export var age = 29;

export  function sum (name,age){
    return name * age;
};

// 2.第二种导出方式
export{
    name,age
}

// 3.默认导出只能导出一个
 const other = "其他"
export default other