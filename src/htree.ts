import * as schemaTypes from './proto/schema_pb';
import { hashUint8Array, withLeafPrefix, bitLength } from './util'
import { NODE_PREFIX } from './consts'

class HTree {
    public levels: Array<Array<Uint8Array>>
    public maxWidth: number
    public width: number = 0
    public root: Uint8Array = new Uint8Array()

    constructor(maxWidth: number) {
        if (maxWidth < 1) {
            throw new Error("Illegal HTree arguments");
        } else {
            this.maxWidth = maxWidth
            let lw = 1

            while (lw < maxWidth) {
                lw = lw << 1
            }

            const height = bitLength(maxWidth - 1) + 1

            this.levels = new Array(height);

            for (let l = 0; l < height; l++) {
                this.levels[l] = new Array(lw >> l);
            }
        }
    }

    buildWith(digests: Array<Uint8Array>) {
        if (digests.length > this.maxWidth) {
            throw new Error('HTree max width exceeded')
        }
        if (digests.length === 0) {
            throw new Error('Illegal HTree buildWith')
        }
        for (let i = 0; i < digests.length; i++) {
            const digest = digests[i]
            const leaf = withLeafPrefix(digest)

            this.levels[0][i] = hashUint8Array(leaf)
        }

        let l = 0
        let w = digests.length

        while (w > 1) {
            let wn = 0
            let i = 0

            while (i + 1 < w) {
                const level1 = this.levels[l][i]
                const level2 = this.levels[l][i+1]
                const b = new Uint8Array(NODE_PREFIX.length + level1.length + level2.length)

                b.set(NODE_PREFIX)
                b.set(level1, NODE_PREFIX.length)
                b.set(level2, NODE_PREFIX.length + level1.length)
                
                this.levels[l + 1][wn] = hashUint8Array(b)

                wn++
                i += 2
            }

            if (w % 2 === 1) {
                this.levels[l + 1][wn] = this.levels[l][w-1]

                wn++
            }

            l++
            w = wn
        }
        this.width = digests.length
        this.root = this.levels[l][0]
    }

    inclusionProof(i: number): schemaTypes.InclusionProof | undefined {
        if (i >= this.width) {
            throw new Error("Illegal inclusionProof arguments");
        }

        let m = i
        let n = this.width
        let offset = 0
        const proof = new schemaTypes.InclusionProof()

        proof.setLeaf(i)
        proof.setWidth(this.width)

        if (this.width === 1) {
            return proof
        }

        while (true) {
            const d = bitLength(n - 1)
            const k = 1 << (d - 1)
            let l: number
            let r: number

            if (m < k) {
                l = offset + k
                r = offset + n - 1
                n = k
            } else {
                l = offset
                r = offset + k - 1

                m = m - k
                n = n - k
                offset += k
            }
            
            const layer = bitLength(r - l)
            const index = l / (1 << layer)

            const a = this.levels[layer][index]
            const b = proof.getTermsList_asU8()
            const termsList: Array<Uint8Array> = b.concat(a)

            proof.setTermsList(termsList)

            if (n < 1 || (n === 1 && m === 0)) {
                return proof
            }
        }
    }
}

export default HTree