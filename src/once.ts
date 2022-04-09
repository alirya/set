import Wrapper from './wrapper';
import Value from '@alirya/value/value';

export interface OnceValue<Type = unknown> extends Value<Type> {
    once ?: boolean;
}

export default class Once<Type extends OnceValue> extends Wrapper<Type> {

    protected deleteOnce(type: Type) {

        if(type.once) {

            this.delete(type);
        }
    }


    * [Symbol.iterator](): IterableIterator<Type> {

        for(const value of super[Symbol.iterator]()) {

            this.deleteOnce(value);
            yield value;
        }
    }


    * entries(): IterableIterator<[Type, Type]> {

        for(const value of super.entries()) {

            this.deleteOnce(value[0]);
            yield value;
        }
    }

    forEach(callbackfn: (value: Type, value2: Type, set: Set<Type>) => void, thisArg?: any): void {

        return super.forEach((value: Type, value2: Type, set: Once<Type>) => {

            this.deleteOnce(value);
            callbackfn(value, value2, set);

        }, thisArg);
    }

    * keys(): IterableIterator<Type> {

        for(const key of super.keys()) {

            this.deleteOnce(key);
            yield key;
        }
    }

    * values(): IterableIterator<Type> {

        for(const value of super.values()) {

            this.deleteOnce(value);
            yield value;
        }
    }

}
