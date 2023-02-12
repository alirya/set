export default function Clone<V>(
    source : Set<V>,
    destination : Set<V> = new Set<V>()
) : Set<V> {

    for(const value of source) {

        destination.add(value);
    }

    return destination;
}
