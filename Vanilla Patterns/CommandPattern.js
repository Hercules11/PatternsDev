class OrderManager {
    constructor() {
        this.orders = [];
    }

    execute(command, ...args) {
        return command.execute(this.orders, ...args)
    }
}


class Command {
    constructor(execute) {
        this.execute = execute;
    }
}


function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(order);
        return `You have successfully order ${order} (${id})`;
    })
}

const OrderManager = new OrderManager(); // 实例化管理器

// 利用闭包的概念，抽象出一个命令类当作中间人，最后由订单管理器进行执行。
OrderManager.execute(PlaceOrderCommand("test place order", "23r43"));

function trackOrderCommand(id) {
    return new Command(() => {
        return `Your order ${id} wil arrive in 20 minutes`;
    })
}

OrderManager.execute(trackOrderCommand("23r43"));



function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((item) => item.id !== id);
        return `You have cancelled your order ${id}`;
    })
}

OrderManager.execute(CancelOrderCommand("23r43"));