/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */
import Docker from 'dockerode';
let instance;
export function useDocker() {
    if (typeof instance !== 'undefined') {
        return instance;
    }
    instance = new Docker();
    return instance;
}
//# sourceMappingURL=instance.js.map