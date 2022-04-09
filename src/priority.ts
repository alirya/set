import Wrapper from './wrapper';
import Value from '@alirya/value/value';
import SortParameters from './void/sort-parameters';

export interface PriorityValue<Type = unknown> extends Value<Type> {
    priority ?: number;
}

export default class Priority<Type extends PriorityValue> extends Wrapper<Type> {

    private dirty : boolean = true;

    private rebuild() : void {

        if(!this.dirty) {

            return ;
        }

        this.dirty = false;

        SortParameters(this, (data1, data2)=>(data2.priority ?? 0)-(data1.priority ?? 0));
    }

    [Symbol.iterator](): IterableIterator<Type> {

        this.rebuild();

        return super[Symbol.iterator]();
    }

    add(value: Type): this {

        this.dirty = true;
        super.add(value);
        return this;
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
