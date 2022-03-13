export default interface Priority<Type> extends Set<Type> {

    priority(value: Type) : undefined|number;

    add(value: Type, priority ?: number): this;

    entries(): IterableIterator<[Type, Type]>

}
