import Callable from '@alirya/function/callable.js';
import BaseSortParameters from './void/sort.js';
import Clone from './clone.js';
import Value from '@alirya/value/value.js';
import SetContainer from './set/set.js';

export function SortParameters<Value> (
    set : Set<Value>,
    compare : Callable<[Value, Value], number>
) : Set<Value>;

export function SortParameters<Value, SetType extends Set<Value>> (
    set : Set<Value>,
    compare : Callable<[Value, Value], number>,
    target : SetType
) : SetType;

export function SortParameters<Value> (
    set : Set<Value>,
    compare : Callable<[Value, Value], number>,
    target : Set<Value> = new Set<Value>()
) : Set<Value> {

    target = Clone(set, target);

    BaseSortParameters.Parameters(target, compare);

    return target;
}


export function SortParameter<Val>(
    {
        set,
        compare,
    } : SetContainer<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : Set<Val>;

export function SortParameter<Val>(
    {
        value,
        compare,
    } : Value<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : Set<Val>;

export function SortParameter<Val>(
    {
        value,
        set,
        compare,
    } : Value<Set<Val>> & SetContainer<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : Set<Val> {

    return SortParameters(set || value, compare);
}


namespace Sort {
    export const Parameters = SortParameters;
    export const Parameter = SortParameter;
}
export default Sort;
