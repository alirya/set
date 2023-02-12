export default function FromString(
    source : string,
    delimiter : string|RegExp,
    target ?: Set<string>
) : Set<string> {

    if(!target) {

        target = new Set<string>();
    }

    for(const val of source.split(delimiter)) {

        if(val.length) {

            target.add(val);
        }
    }

    return target;
}
