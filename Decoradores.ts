function decorador1() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Desde un decorador", target, propertyKey, descriptor);
    }
}


class Ejemplo {
    @decorador1()
    metodo() { }
}