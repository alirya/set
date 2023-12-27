import TypeObject from '@axiona/object/boolean/object.js';
import Properties from '@axiona/object/property/boolean/exists.js';
import Iterable from '@axiona/iterable/boolean/iterable.js';
import List from '@axiona/array/boolean/list.js';
import Method from '@axiona/object/boolean/method.js';

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
