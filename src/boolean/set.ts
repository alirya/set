import TypeObject from '@alirya/object/boolean/object.js';
import Properties from '@alirya/object/property/boolean/exists.js';
import Iterable from '@alirya/iterable/boolean/iterable.js';
import List from '@alirya/array/boolean/list.js';
import Method from '@alirya/object/boolean/method.js';

export default function Set(value : object) : value is Set<unknown> {

    if(value instanceof Set) {

        return true;
    }

    if(!TypeObject(value)) {

        return false;
    }


    if(!Iterable(value)) {

        return false;
    }

    if(!List(['entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has', 'toString'], (property)=>Method(value, property))) {

        return false;
    }

    if(!Properties.Parameters(value, 'size')) {

        return false;
    }

    return true;
}
