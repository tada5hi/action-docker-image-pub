/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { executeDockerCommand } from './execute';

export function tagImage(source: string, destination: string) {
    executeDockerCommand(
        `tag ${source} ${destination}`,
    );
}
