import Callable from '@alirya/function/callable';
import BaseSortParameters from './void/sort-parameters';
import Clone from './clone';

export default function SortParameters<Value> (
    set : Set<Value>,
    compare : Callable<[Value, Value], number>
) : Set<Value>;

export default function SortParameters<Value, SetType extends Set<Value>> (
    set : Set<Value>,
    compare : Callable<[Value, Value], number>,
    target : SetType
) : SetType;

export default function SortParameters<Value> (
    set : Set<Value>,
    compare : Callable<[Value, Value], number>,
    target : Set<Value> = new Set<Value>()
) : Set<Value> {

    target = Clone(set, target);

    BaseSortParameters(target, compare);

    return target;
}
