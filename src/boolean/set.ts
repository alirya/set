import TypeObject from '@alirya/object/boolean/object';
import Properties from '@alirya/object/property/boolean/exists';
import Iterable from '@alirya/iterable/boolean/iterable';
import List from '@alirya/array/boolean/list';
import Method from '@alirya/object/boolean/method';

export default function Set(value : object) : value is Set<unknown> {

    if(!TypeObject(value)) {

        return false;
    }


    if(!Iterable(value)) {

        return false;
    }

    if(!List(['entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has', 'toString'], (property)=>Method(value, property))) {

        return false;
    }

    if(!Properties(value, 'size')) {

        return false;
    }

    return true;
}
