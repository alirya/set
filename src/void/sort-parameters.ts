import Callable from '@alirya/function/callable';

export default function SortParameters<Value>(
    set : Set<Value>,
    compare : Callable<[Value, Value], number>
) : void {

    const arrays : Value[] = Array.from(set);

    const sorted = arrays.sort(compare);

    set.clear();

    for (const value of sorted) {

        set.add(value);
    }
}
