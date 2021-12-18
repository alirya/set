import Segments from "@dikac/t-string/array/segment-parameters";
import SegmentString from "@dikac/t-string/boolean/segment-parameters";

export default class Segment extends Set<string> {

    constructor(readonly delimiter : string, values?: string[]) {
        super();

        if(values) {
            values.map(value => this.add(value));
        }
    }

    add(value: string): this {

        Segments(value, this.delimiter).forEach((value)=>{

            super.add(value)
        });

        return this;
    }

    delete(value: string): boolean {

        let deleted = true;

        for (let data of this) {

            if(SegmentString(value, data, this.delimiter)) {

                deleted = true;
                super.delete(data);
            }
        }

        return deleted;
    }

}

