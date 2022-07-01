import {SegmentParameters} from '@alirya/string/array/segment';
import SegmentString from '@alirya/string/boolean/segment';

export default class Segment extends Set<string> {

    constructor(readonly delimiter : string, values?: string[]) {
        super();

        if(values) {
            values.map(value => this.add(value));
        }
    }

    add(value: string): this {

        SegmentParameters(value, this.delimiter).forEach((value)=>{

            super.add(value);
        });

        return this;
    }

    delete(value: string): boolean {

        let deleted = true;

        for (let data of this) {

            if(SegmentString.Parameters(value, data, this.delimiter)) {

                deleted = true;
                super.delete(data);
            }
        }

        return deleted;
    }

}

