const app = new Vue({
    el:'#app',
    data:{
        titles:[
            {"name":"三生三世",
            "price":12,
            "id":"1",
            "date":"2020.10.12",
            "count":1
            },
            {"name":"三生三世",
            "price":12,
            "id":"2",
            "date":"2020.10.12",
            "count":1
            },
            {"name":"三生三世",
            "price":12,
            "id":"3",
            "date":"2020.10.12",
            "count":4
            },
            {"name":"三生三世",
            "price":12,
            "id":"5",
            "date":"2020.10.12",
            "count":1
            },],
        countPrice:2,
    },
    methods:{
        // 过滤器
        getFixedPrice(price){

            return "$" + price.toFixed(2);
        },
        // 减去数量
        dercrement(index){

            console.log(index);

            this.titles[index].count --;
        },
        // 增加数量
        increment(index){

            console.log(index);
            this.titles[index].count ++;
        },
        // 移除td
        remove(index){
            console.log(index);
            this.titles.splice(index,1);
        }       

    },
    // 计算属性
    computed:{
        totalPrice(){

            let totalPrice = 0;
             for (let index = 0; index < this.titles.length; index++) {
                totalPrice += this.titles[index].price * this.titles[index].count;
            }
            return totalPrice;
        }
        
    }
    
})