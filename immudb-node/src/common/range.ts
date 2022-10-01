
/**
 * Creates range iterable of provided array
 */
export function* rangeOf<T>(
    arr:    T[],
    start:  number,
    end?:   number
): Generator<T, string, void> {
    if (start < 0 || start > arr.length - 1) {
        
        return 'Err, start outside array' // TReturn
    }

    // no end
    if (end === undefined) {
        for (let i = 0; i < arr.length; i++) {
            yield arr[i]
        }
        return 'Ok' // TReturn
    }

    // end specified
    if (end > arr.length - 1) {
        return 'Err, end outside array' // TReturn
    }

    if (start < end) {
        return 'Err, start < end' // TReturn
    }

    for (let i = 0; i < end + 1; i++) {
        yield arr[i] // T
    }
    return 'Ok' // TReturn
}
