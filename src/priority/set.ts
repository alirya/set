import SortValueParameters from "@alirya/map/sort-value-parameters";
import Priority from "./priority";

export default class Set<Type> extends globalThis.Set<Type> implements Priority<Type>  {

    private queue : Map<Type, number> = new Map<Type, number>();
    private dirty : boolean = true;

    constructor() {

        super();
    }

    private rebuild() : void {

        if(!this.dirty) {

            return ;
        }

        super.clear();

        this.queue = SortValueParameters(this.queue, (data1, data2)=>data2-data1);

        for(const value of this.queue.keys()) {

            super.add(value);
        }

        this.dirty = false;

    }

    readonly [Symbol.toStringTag]: string;


    [Symbol.iterator](): IterableIterator<Type> {

        this.rebuild();

        return super[Symbol.iterator]()
    }

    priority(value: Type) : undefined|number {

        return this.queue.get(value);
    }

    add(value: Type, priority : number = 1): this {

        this.dirty = true;
        this.queue.set(value, priority);
        super.add(value);
        return this;
    }

    clear(): void {

        super.clear();
        this.queue.clear();
    }

    delete(value: Type): boolean {

        this.queue.delete(value);
        return super.delete(value);
    }

    entries(): IterableIterator<[Type, Type]> {

        this.rebuild();
        return super.entries();
    }

    forEach(callbackfn: (value: Type, value2: Type, set: Set<Type>) => void, thisArg?: any): void {

        this.rebuild();
        return super.forEach(callbackfn, thisArg);
    }

    keys(): IterableIterator<Type> {

        this.rebuild();
        return super.keys();
    }

    values(): IterableIterator<Type> {

        this.rebuild();
        return super.keys();
    }

}
