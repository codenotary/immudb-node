/*
Copyright 2019-2020 Codenotary, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
	http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import ImmudbClient from '../src/client';

import { verifyInclusion } from '../src/htree'
import * as schemaTypes from '../src/proto/schema_pb';

(async () => {
    try {
        const proof = new schemaTypes.InclusionProof()
        const list1 = new Uint8Array([186, 3, 230, 8, 23, 19, 121, 207, 73, 197, 31, 210, 133, 82, 249, 90, 153, 194, 3, 248, 229, 30, 66, 162, 129, 53, 218, 132, 45, 71, 17, 125])
        const list2 = new Uint8Array([229, 51, 216, 45, 55, 71, 1, 143, 176, 229, 105, 244, 244, 28, 180, 221, 188, 91, 25, 193, 19, 134, 214, 4, 18, 87, 136, 114, 133, 174, 90, 85])
        const termsList = [list1, list2]

        proof.setLeaf(0)
        proof.setWidth(3)
        proof.setTermsList(termsList)

        const digest = new Uint8Array([28, 224, 231, 25, 26, 144, 177, 139, 128, 156, 193, 142, 194, 78, 98, 29, 101, 123, 202, 120, 151, 174, 42, 147, 227, 167, 234, 115, 107, 222, 136, 203])
        const root = new Uint8Array([177, 29, 142, 210, 55, 201, 143, 24, 12, 56, 17, 72, 164, 49, 125, 112, 242, 233, 197, 233, 206, 159, 245, 174, 255, 19, 182, 103, 175, 46, 209, 179])

        console.log(verifyInclusion(proof, digest, root))
    } catch (err) {
        console.log(err)
    }
})();
