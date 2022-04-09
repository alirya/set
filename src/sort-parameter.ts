import Callable from '@alirya/function/callable';
import Value from '@alirya/value/value';
import SetContainer from './set/set';
import SortParameters from './sort-parameters';

export default function SortParameter<Val>(
    {
        set,
        compare,
    } : SetContainer<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : Set<Val>;

export default function SortParameter<Val>(
    {
        value,
        compare,
    } : Value<Set<Val>> & {
        compare : Callable<[Val, Val], number>,
    }
) : Set<Val>;

export default function SortParameter<Val>(
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
